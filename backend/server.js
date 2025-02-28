import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import proRouter from './routes/proRoute.js';
import userRouter from './routes/userRoute.js';


// app config 
const app = express()
const prot = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/professional', proRouter)
app.use('/api/user', userRouter)


app.get('/', (req, res)=>{
    res.send('API WORKING hello word')
})

app.listen(prot, ()=> console.log("Server started", prot))