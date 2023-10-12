const { Router } = require("express");
const { FormMiddleware, GetFormMiddleware,DateFormMiddleware,HourFormMiddleware } = require("../../middlewares");

const Formularios = Router();

Formularios.post("/img", FormMiddleware);
Formularios.get("/img", GetFormMiddleware);
Formularios.get("/date", DateFormMiddleware);
Formularios.get("/hour", HourFormMiddleware);

module.exports = Formularios;
