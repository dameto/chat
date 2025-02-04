import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export const uploadImage = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({ resource_type: 'auto' }, (error, result) => {
                if (error) reject(error);
                resolve(result);
            })
            .end(buffer);
    });
};

export const deleteImage = async (publicId: string) => {
    return cloudinary.uploader.destroy(publicId);
};