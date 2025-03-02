import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {type: String, required:true},
    proId: {type: String, required:true},
    slotDate: {type: String, required:true},
    slotTime: {type: String, required:true},
    userData: {type: Object, required:true},
    proData: {type: Object, required:true},
    amount: {type: Number, required:true},
    date: {type: Date, required:true},
    cancelled: {type: Boolean, default:false},
    payment: {type: Boolean, default:false},
    isCompleted: {type: Boolean, default:false}
})

const bookingModel = mongoose.models.booking || mongoose.model('booking', bookingSchema)

export default bookingModel