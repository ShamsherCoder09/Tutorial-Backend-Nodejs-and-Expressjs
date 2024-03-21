import dotenv from 'dotenv';
import {app} from './app.js';
import connectDB from './db/database.js';

dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080 , ()=>{
        console.log(`Our server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed", err);
})

















// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try{
//         const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
//         console.log('database is connected');
//     } catch(error){
//         console.log("connection database failed", error);
//     }
// }

// export default connectDB;








// PORT = 5000

// CLOUDINARY_CLIENT_NAME=dx2gx8iyl
// CLOUDINARY_CLIENT_API=514623876683756
// CLOUDINARY_CLIENT_SECRET=5tu5dSnzMboVP7lhMfZTL5NsJQg

// FRONTEND_URL=http://localhost:5173
// MONGODB_URL=mongodb+srv://mohdshamsher365:mohd123456@cluster0.zesjyah.mongodb.net/MERN_JOB_SEEKING

// JWT_SECRET_KEY=MOHDSHAMSHER12345
// JWT_EXPIRE=7d

// COOKIE_EXPIRE=5