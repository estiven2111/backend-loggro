const moment = require('moment-timezone');
const { Schema, model } = require("mongoose");

const FormUserInfo = new Schema(
  {
    email: {
      type: String,
      allowNull: true,
    },
    name: {
      type: String,
      allowNull: false,
    },
    lastname: {
      type: String,
      allowNull: false,
    },
    hour: {
        type: String,
        allowNull: false,
      },
    url_img: {
      type: String,
      allowNull: false,
    },
    
  },
  {
    default_language: "spanish",
    collation: { locale: "es", strength: 2 },
    timestamps: true 
    
  }
);
// FormUserInfo.pre('validate', function (next) {
//     const currentDate = moment().tz('America/Bogota').toISOString();
//     this.createdAt = currentDate.slice(0, 10); 
//     this.updatedAt = currentDate.slice(0, 10); 
//     next();
//   });
FormUserInfo.pre('validate', function (next) {
    const currentDate = moment().tz('America/Bogota').format('YYYY-MM-DD');
    this.createdAt = currentDate;
    this.updatedAt = currentDate;
    next();
  });
  

const modelFormUserInfo = model("FormUserInfo", FormUserInfo);
module.exports = modelFormUserInfo;