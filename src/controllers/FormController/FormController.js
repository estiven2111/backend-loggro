

const { Storage } = require("@google-cloud/storage");
const FormUserInfo = require("../../models/FormUserInfo");
const sharp = require('sharp');
require("dotenv").config();

const { PRIVATE_KEY,CLIENT_EMAIL,PROJECT_ID,BUCKETNAME } = process.env;
const bucketName = BUCKETNAME
const storage = new Storage({
    projectId: PROJECT_ID,
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),

    },
  });

const FormController = async (name,lastname,email,files) =>{
console.log(name,lastname,email)

try {
    
    const fechaActual = new Date();
  const opciones = {
    timeZone: "America/Bogota",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const hour = fechaActual.toLocaleTimeString("es-CO", opciones);
 

 const nameFile =  files.image.name.replace(/\.(jpg|jpeg)$/i, ".png");
 
const uploadedFile = files.image;

const pngBuffer = await sharp(uploadedFile.data)
.toFormat('png')
.toBuffer();

const filePath = `${name}/${nameFile}`;

const uploadStream = storage
.bucket(bucketName)
.file(filePath)
.createWriteStream();

const publicUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

uploadStream.on("error", (err) => {
    console.log(err);
    return "error en la imagen";
  });

  uploadStream.on("finish", async () => {
     console.log("finalizo la subida en segundo plano");
  });
uploadStream.end(pngBuffer);
const url_img = publicUrl
const objInfo = {
    name,
    lastname,
    email,
    hour,
    url_img
}
const form = await new FormUserInfo(objInfo)
form.save()
return "Guardado exitoso"
} catch (error) {
    return error.message
}
}

module.exports = FormController