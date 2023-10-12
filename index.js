const app = require("./src/app");
require("./src/db")
const PORT = process.env.PORT || 3200

app.listen(PORT, () =>{
    console.log(`escuchando por el puerto ${PORT}`)
})