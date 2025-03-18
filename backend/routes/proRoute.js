import express from 'express'
import { proList, loginpro, bookingsProfessional, bookingCancel, bookingComplete, proDashboard, proProfile, updateProProfile } from '../controllers/proController.js'
import authPro from '../middlewares/authPro.js'


const proRouter = express.Router()

proRouter.get('/list', proList)
proRouter.post('/login', loginpro)
proRouter.get('/bookings', authPro, bookingsProfessional)
proRouter.post('/complete-booking', authPro, bookingComplete)
proRouter.post('/cancel-booking', authPro, bookingCancel)
proRouter.get('/dashboard', authPro, proDashboard)
proRouter.get('/profile', authPro, proProfile)
proRouter.post('/update-profile', authPro, updateProProfile)


export default proRouter