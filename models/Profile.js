const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        require: false
    },
    username: { 
        type: String, required: true, index: { unique: true } 
    },
    password: { 
        type: String, required: true }
});

module.exports = mongoose.model("Article", articleSchema);