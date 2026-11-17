import mongoose from "mongoose";

const connectDB = async()=>{
    if(!process.env.MONGODB_URL){
        console.log("MONGODB_URL is missing")
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB Conected successfuly")
    } catch (error) {
        console.log("MongoDB Connection Failed:", error.message);
    }
}
export default connectDB;