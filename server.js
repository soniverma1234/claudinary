import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { cloudinaryverification } from "./config/cloudinary.js";
import { verifySMTP } from "./config/nodemailer.js";
dotenv.config()

const app = express()

app.use(express.json());

await connectDB()
await cloudinaryverification()
await verifySMTP()
const PORT = process.env.PORT ?? 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})