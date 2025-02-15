import express from 'express'
import { addProfessional, loginAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'


const adminRouter = express.Router()

adminRouter.post('/add-professional',authAdmin,upload.single('image'),addProfessional)
adminRouter.post('/login',loginAdmin)

export default adminRouter