const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    isAdmin : {
        type : Boolean,
        default : false
    },

    date : {
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

module.exports = new mongoose.model("user", UserSchema);