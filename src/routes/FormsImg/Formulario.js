const { Router } = require("express");
const { FormMiddleware, GetFormMiddleware,DateFormMiddleware } = require("../../middlewares");

const Formularios = Router();

Formularios.post("/img", FormMiddleware);
Formularios.get("/img", GetFormMiddleware);
Formularios.get("/date", DateFormMiddleware);

module.exports = Formularios;
