const {GetFormController} = require("../../controllers")
const GetFormMiddleware = async(req,res) =>{ 
try {

    const Response = await GetFormController()
    res.status(200).json(Response)
} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = GetFormMiddleware