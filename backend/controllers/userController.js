import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import bookingModel from "../models/bookingModel.js";
import professionalModel from "../models/professionalModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      return res.json({
        success: false,
        message: "Please filled all Deatails",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a vailid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exits" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "fill all deatails" });
    }
    const parsedAddress =
      typeof address === "string" ? JSON.parse(address) : address;

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: parsedAddress,
      dob,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }
    res.json({ success: true, message: "Profile Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const userBooking = async (req, res) => {
  try {
    const { userId, proId, slotDate, slotTime } = req.body;
    const proData = await professionalModel.findById(proId).select("-password");

    if (!proData) {
      return res.json({ success: false, message: "Professional not found" });
    }

    if (!proData.available) {
      return res.json({
        success: false,
        message: "Professional not available",
      });
    }

    let slots_booked = proData.slots_booked;

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");
    delete proData.slots_booked;

    // ✅ Fix: Store date in DD/MM/YYYY format
    const formattedDate = new Date(slotDate).toLocaleDateString("en-GB"); // "03/06/2025"

    const bookingData = {
      userId,
      proId,
      userData,
      proData,
      amount: proData.fees,
      slotTime,
      slotDate: formattedDate, // Save formatted date
      date: Date.now(),
    };

    const newBooking = new bookingModel(bookingData);

    await newBooking.save();

    // Save new slots data in proData
    await professionalModel.findByIdAndUpdate(proId, { slots_booked });

    res.json({ success: true, message: "Booking Successful" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const listBooking = async (req, res) => {

  try{

    const {userId} = req.body
    const bookings = await bookingModel.find({userId})

    res.json({success:true, bookings})

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }

}

const cancelBooking = async (req, res) => {

  try {

    const { userId, bookingId } = req.body;
    const bookingData = await bookingModel.findById(bookingId);

    if (bookingData.userId !== userId) {
      return res.json({ success: false, message: "Unauthorized action" });
    }

    await bookingModel.findByIdAndUpdate(bookingId, { cancelled: true });
    const { proId, slotDate, slotTime } = bookingData;
    const proData = await professionalModel.findById(proId);

    if (proData.slots_booked && proData.slots_booked[slotDate]) {

      proData.slots_booked[slotDate] = proData.slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );

      if (proData.slots_booked[slotDate].length === 0) {
        delete proData.slots_booked[slotDate];
      }
      await professionalModel.findByIdAndUpdate(proId, {
        slots_booked: proData.slots_booked,
      });
    }

    res.json({ success: true, message: "Booking Cancelled" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};




export { registerUser, loginUser, getProfile, updateProfile, userBooking, listBooking, cancelBooking };
