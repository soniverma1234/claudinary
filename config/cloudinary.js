import {v2 as cloudinary} from "cloudinary";
import 'dotenv/config'


if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.
    CLOUDINARY_API_KEY || ! process.env.CLOUDINARY_API_SECRET) {
        console.log("Cloudinary env missing")
    }


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    
});

export const  cloudinaryverification=async()=>{
    try{
        await cloudinary.api.ping()
        console.log("Cloudinary connected");
    } catch (error) {
        console.log("Cloudinary connection faild");
    }
}


export default cloudinary;