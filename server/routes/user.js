const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users");

router.get("/", async(req, res) => {
    try{
        const user = await UserModel.find();

        res.status(200).json(user);
    }catch(error){
        res.status(500).json({msg : error})
    }
});

module.exports = router;