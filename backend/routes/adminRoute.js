import express from 'express'
import { addProfessional, allProfessionals, loginAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'


const adminRouter = express.Router()

adminRouter.post('/add-professional',authAdmin,upload.single('image'),addProfessional)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-professional',authAdmin,allProfessionals)


export default adminRouter