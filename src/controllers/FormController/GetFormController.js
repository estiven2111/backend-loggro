const FormUserInfo = require("../../models/FormUserInfo");
const GetFormController = async () => {
    const forms = await FormUserInfo.find();
  let total = 0
    const formupdate = forms.map((form,index) => {
        total = index+1;
      return {
        ...form.toObject(),
        index,
      };
    
    });
  
    console.log(total);
  
    return formupdate;
  };
  
module.exports = GetFormController;