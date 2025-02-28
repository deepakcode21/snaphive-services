import express from 'express'
import { proList } from '../controllers/proController.js'

const proRouter = express.Router()

proRouter.get('/list', proList)

export default proRouter