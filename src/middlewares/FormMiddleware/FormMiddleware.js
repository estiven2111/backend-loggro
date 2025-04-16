const {FormController} = require("../../controllers")
const FormMiddleware = async(req,res) =>{ 
try {
   
    const {name,lastname,email} = req.body
    const file = req.files;
   if (!file) {
    return res.status(400).send('Archivo no encontrado');
  }
    console.log(name,lastname,email)
    const Response = await FormController(name,lastname,email,file)
    res.status(200).json(Response)
} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = FormMiddleware