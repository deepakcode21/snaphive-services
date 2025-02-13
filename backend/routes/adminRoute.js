import express from 'express'
import { addProfessional } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'


const adminRouter = express.Router()

adminRouter.post('/add-professional',upload.single('image'),addProfessional)

export default adminRouter