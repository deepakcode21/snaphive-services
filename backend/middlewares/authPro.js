import jwt from 'jsonwebtoken';

// Professional Authentication Middleware
const authPro = async (req, res, next) => {
    try{

        const { ptoken} = req.headers
        if(!ptoken){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        const tokenDecode = jwt.verify(ptoken, process.env.JWT_SECRET)

        req.body.proId = tokenDecode.id
        next()

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authPro