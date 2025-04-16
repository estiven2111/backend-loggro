const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const router = require("./routes/index")

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(fileupload())
app.use("/",router);
module.exports = app;