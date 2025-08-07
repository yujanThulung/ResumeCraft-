import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = async ( filePath, folder = "uploads") =>{
    try {
        const result = await cloudinary.uploader.upload(filePath,{
            folder,
        })
        return result
    } catch (error) {
        throw new Error("Cloudinary upload failed"+ error.message);
    }
};