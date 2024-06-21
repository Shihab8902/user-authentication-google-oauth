const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    googleId: {
        type: String,
        require: true
    }
});


const userCollection = mongoose.model("users", userSchema);


module.exports = userCollection;