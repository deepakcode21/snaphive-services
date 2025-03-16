import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import bookingModel from "../models/bookingModel.js";
import professionalModel from "../models/professionalModel.js";
import razorpay from "razorpay";

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

    if (!proData.available)
      return res.json({
        success: false,
        message: "Professional not available",
      });

    let slots_booked = proData.slots_booked;

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot Not Available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }
    slots_booked[slotDate].push(slotTime);

    const userData = await userModel.findById(userId).select("-password");
    delete proData.slots_booked;

    const bookingData = {
      userId,
      proId,
      userData,
      proData,
      amount: proData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newBooking = new bookingModel(bookingData);
    await newBooking.save();

    await professionalModel.findByIdAndUpdate(proId, { slots_booked });

    res.json({
      success: true,
      message: "Booking Successful",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const listBooking = async (req, res) => {
  try {
    const { userId } = req.body;
    const bookings = await bookingModel.find({ userId });

    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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

    let slots_booked = proData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );

    await professionalModel.findByIdAndUpdate(proId, { slots_booked });

    res.json({
      success: true,
      message: "Booking Cancelled",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Payment
const paymentRazorpay = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const bookingData = await bookingModel.findById(bookingId);

    if (!bookingData || bookingData.cancelled) {
      return res.json({
        success: false,
        message: "Booking Cancelled or Not Found",
      });
    }

    const options = {
      amount: bookingData.amount * 100, // Ensure amount is in paise
      currency: process.env.CURRENCY || "INR",
      receipt: bookingId,
    };

    // Create order using Razorpay instance
    const order = await razorpayInstance.orders.create(options);

    if (!order || !order.id) {
      return res.json({ success: false, message: "Failed to create order" });
    }

    res.json({ success: true, order }); // Send order with valid ID
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    res.json({ success: false, message: error.message });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      await bookingModel.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
      });
      res.json({ success: true, message: "Payment Successful" });
    } else {
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  userBooking,
  listBooking,
  cancelBooking,
  paymentRazorpay,
  verifyRazorpay,
};
