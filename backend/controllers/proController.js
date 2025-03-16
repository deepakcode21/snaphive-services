import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import professionalModel from "../models/professionalModel.js";
import bookingModel from "../models/bookingModel.js";

// API for professional Login
const loginpro = async (req, res) => {
    try {
        const { email, password } = req.body;
        const professional = await professionalModel.findOne({ email });

        if (!professional) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, professional.password);

        if (isMatch) {
            const token = jwt.sign({ id: professional._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to change pro availabilty for pro panel
const changeAvailabilty = async (req, res) => {
    try {
        const { proId } = req.body;
        const proData = await professionalModel.findById(proId);
        await professionalModel.findByIdAndUpdate(proId, {
            available: !proData.available,
        });
        res.json({ success: true, message: "Availablity Changed" });
    } catch (error) {
        console.log(error);
        res.jsonS({ success: false, message: error.message });
    }
};

// API to get pro list for pro panel
const proList = async (req, res) => {
    try {
        const professionals = await professionalModel
            .find({})
            .select(["-password", "-email"]);
        res.json({ success: true, professionals });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to get pro bookings for pro panel
const bookingsProfessional = async (req, res) => {
    try {
        const { proId } = req.body;
        const bookings = await bookingModel.find({ proId });

        res.json({ success: true, bookings });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to mark booking completed for pro panel
const bookingComplete = async (req, res) => {
    try {
        const { proId, bookingId } = req.body;

        const bookingData = await bookingModel.findById(bookingId);
        if (bookingData && bookingData.proId === proId) {
            await bookingModel.findByIdAndUpdate(bookingId, { isCompleted: true });
            return res.json({ success: true, message: "Booking Completed" });
        }

        res.json({ success: false, message: "Failed Try Again" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to cancel Booking for pro panel
const bookingCancel = async (req, res) => {
    try {
        const { proId, bookingId } = req.body;

        const bookingData = await bookingModel.findById(bookingId);
        if (bookingData && bookingData.proId === proId) {
            await bookingModel.findByIdAndUpdate(bookingId, { cancelled: true });
            return res.json({ success: true, message: "Booking Cancelled" });
        } else {
            return res.json({ success: false, message: "Cancellation Failed" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to get pro profile for pro Panel
const proProfile = async (req, res) => {
    try {
        const { proId } = req.body;
        const profileData = await professionalModel
            .findById(proId)
            .select("-password");

        res.json({ success: true, profileData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to update pro profile data from pro Panel
const updateProProfile = async (req, res) => {
    try {
        const { proId, fees, address, available } = req.body;

        await professionalModel.findByIdAndUpdate(proId, {
            fees,
            address,
            available,
        });

        res.json({ success: true, message: "Profile Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to get dashboard data for pro panel
const proDashboard = async (req, res) => {
    try {
        const { proId } = req.body;

        const bookings = await bookingModel.find({ proId });

        let earnings = 0;

        bookings.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount;
            }
        });

        let clients = [];

        bookings.map((item) => {
            if (!clients.includes(item.userId)) {
                clients.push(item.userId);
            }
        });

        const dashData = {
            earnings,
            bookings: bookings.length,
            clients: clients.length,
            latestBookings: bookings.reverse(),
        };

        res.json({ success: true, dashData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    changeAvailabilty,
    proList,
    loginpro,
    bookingsProfessional,
    bookingCancel,
    bookingComplete,
    proDashboard,
    proProfile,
    updateProProfile,
};
