import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("database is connected");
    } catch (error) {
        console.log("Database Connection in failed" , error);
        process.exit(1);
    }
}

export default connectDB;