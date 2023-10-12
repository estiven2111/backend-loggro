const {HourFormController} = require("../../controllers")
const HourFormMiddleware = async(req,res) =>{ 
try {
    const { hour } = req.query;
    const Response = await HourFormController(hour)
    res.status(200).json(Response)
} catch (error) {
    res.status(500).json(error.message)
}
}

module.exports = HourFormMiddleware