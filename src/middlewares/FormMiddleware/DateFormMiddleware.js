const { DateFormController } = require("../../controllers");
const DateFormMiddleware = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const Response = await DateFormController(startDate, endDate);
    res.status(200).json(Response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = DateFormMiddleware;
