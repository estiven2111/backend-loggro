const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
require("dotenv").config();


const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const cloudiconfig = () => {
    cloudinary.config({
        cloud_name: CLOUD_NAME,
        api_key: API_KEY,
        api_secret: API_SECRET,
        secure: true
    });
}
const loadPhoto = async (archivo) => {
    cloudiconfig()
    const result = await subirACloudinary(archivo);
    const url = result.url
    return url
}

// hay que guardar el public_id dde la foto para poder eliminarla despues dde cloudinary
const DeletePhoto = async (idImg) => {
    return await cloudinary.uploader.destroy(idImg)
}



const subirACloudinary = (archivo) =>
    new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "pruebass",
                resource_type: 'image',
            },
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );
        
        // Aquí usamos el buffer directo sin guardar archivo local
        streamifier.createReadStream(archivo.data).pipe(stream);
    });
    module.exports = { cloudiconfig, loadPhoto,DeletePhoto }