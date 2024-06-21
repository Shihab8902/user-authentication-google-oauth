require("./config/passport");

const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");


//Authentication
const createSession = require("./config/session");
createSession(app);
app.use(passport.initialize());
app.use(passport.session());




//Routes
const viewRoutes = require("./routes/view");
app.use(viewRoutes);


module.exports = app;