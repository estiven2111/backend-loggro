const {FormController} = require("../../controllers")
const FormMiddleware = async(req,res) =>{ 
try {
   
    const {name,lastname,email} = req.body
   let files = ""
    if (req.files) {
         files = req.files
    }

    const Response = await FormController(name,lastname,email,files)
    res.status(200).json(Response)
} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = FormMiddleware