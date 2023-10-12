const FormUserInfo = require("../../models/FormUserInfo");
const DateFormController = async (startDate1, endDate1) => {
  const startDate = new Date(`${startDate1}T00:00:00.000Z`); // Fecha de inicio
const endDate = new Date(`${endDate1}T00:00:00.000Z`); 
  const formsDate = await FormUserInfo.find({
    createdAt: { $gte: startDate, $lte: endDate },
  });

  const form = formsDate.map((form,index) => {
    total = index+1;
  return {
    ...form.toObject(),
    index,
  };

});
  return form;
};



module.exports = DateFormController;
