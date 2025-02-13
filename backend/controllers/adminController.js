


// API for adding Professional
const addProfessional = async (req,res) => {

    try{
        
        const { name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

    }catch(error){

    }

}

export {addProfessional}