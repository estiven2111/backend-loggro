const FormUserInfo = require("../../models/FormUserInfo");
const HourFormController = async (hora) => {
  const [horaStr, minutoStr] = hora.split(":");
  let horaActual = parseInt(horaStr, 10);

  if (horaActual === 0) {
    // Si la hora es 00:xx, cambia la hora a 23:xx
    horaActual = 23;
  } else {
    // Si la hora no es 00:xx, simplemente resta una hora
    horaActual--;
  }

  const horaRestada = `${horaActual.toString().padStart(2, "0")}:${minutoStr}`;
  console.log(hora)
  const formsDate = await FormUserInfo.find({
    hour: { $gte: `${horaRestada}:00`, $lte: `${hora}:00` },
  });



  return formsDate;
};



module.exports = HourFormController;
