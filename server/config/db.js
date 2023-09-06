const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/usersdata").then(() => console.log("Connection Successfull")).catch((error) => console.log(error));
};

module.exports = connectDB;