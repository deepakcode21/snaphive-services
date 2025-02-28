import professionalModel from "../models/professionalModel.js";


const changeAvailabilty = async (req, res) => {

    try{

        const {proId} = req.body
        const proData = await professionalModel.findById(proId)
        await professionalModel.findByIdAndUpdate(proId, {available: !proData.available})
        res.json({success:true, message: 'Availablity Changed'})

    }catch(error){
        console.log(error);
        res.jsonS({success:false, message:error.message})
    }
}

const proList = async (req, res) => {
    try{

        const professionals = await professionalModel.find({}).select(['-password', '-email'])
        res.json({success:true, professionals})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})

    }
}

export {changeAvailabilty, proList}