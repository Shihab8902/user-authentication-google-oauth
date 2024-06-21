const express = require("express");
const app = express();
const cors = require("cors");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");


//Routes
const viewRoutes = require("./routes/view");
app.use(viewRoutes);


module.exports = app;