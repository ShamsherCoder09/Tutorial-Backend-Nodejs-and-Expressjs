import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config({
    path: './src/.env'
})
console.log("port", process.env.PORT)
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

// const api_secret="5tu5dSnzMboVP7lhMfZTL5NsJQg";
// const cloud_name=dx2gx8iyl;
// const api_key=514623876683756;
// cloudinary.config({
//     cloud_name:cloud_name,
//     api_key:api_key,
//     api_secret:api_secret
// });


const uploadCloudinary = async (localFilePath)=>{
    try {
        // console.log("localFilePath",localFilePath);
        if(!localFilePath) return null;
        // upload cloudinary the file on cloudinary
        const response = await cloudinary.uploader.upload
        (localFilePath,{
            resource_type:"auto"
        })
        // console.log("response",response);
        // file has been upload successfull
        console.log("file is uploaded on cloudinary", response.url);
        // fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        // console.log("error", error);
        fs.unlink(localFilePath); // remove the
        return null;
    }
}

export {uploadCloudinary};