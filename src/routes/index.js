const {Router} = require("express")
const Formularios = require("./FormsImg/Formulario")


const router = Router()
router.use("/form", Formularios)

module.exports = router