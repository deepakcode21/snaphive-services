import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import {v2 as cloudinary} from 'cloudinary'


const registerUser = async(req, res)  => {


    try{

        const {name, email, password} = req.body

        if(!name || !password || !email){
            return res.json({success:false, message:"Please filled all Deatails"})
        }
        if (!validator.isEmail(email)){
            return res.json({success:false, message:"Enter a vailid email"})
        }
        if (password.length < 8){
            return res.json({success:false, message:"Enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name, 
            email,
            password:hashedPassword
        }
        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        res.json({success:true, token})

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})

    }
}

const loginUser = async (req,res) =>{

    try{

        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if (!user){
           return res.json({success:false, message:'User does not exits'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid credentials"})
        }

    }catch(error){
        console.error(error)
        res.json({success:false, message:error.message})
    }

}

const getProfile = async (req,res) => {

    try{

        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true, userData})

    }catch (error){
        console.error(error)
        res.json({success:false, message:error.message})
    }
}

const updateProfile = async () => {

    try{

        const {userId, name, phone, address, dob, gender} = req.body
        const imageFile = req.file 

        if (!name || !phone || !dob || !gender){
            return res.json({success:false, message:"filled all deatails"})
        }
        await userModel.findByIdAndUpdate(userId, {name, phone, address:JSON.parse(address), dob, gender})

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, {image:imageURL})
        }
        res.json({success:true, message:"Profile Updated Successfully"})

    }catch (error){
        console.error(error)
        res.json({success:false, message:error.message})
    }
}



export{registerUser, loginUser, getProfile, updateProfile}