require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection with the MongoDB database has been established!");
}


module.exports = connectDB;