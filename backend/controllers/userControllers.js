const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const userRegister = asyncHandler(async(req, res) => {
    const {name,email,password,picture} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new error("User already exists");
    }

    const user = await User.create({name,email,password,picture});
    if(user){
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture,
        })
    }
    else{
        res.status(400);
        throw new error("Error occured!");
    }

    res.json({
        name,
        email,
    });
});

module.exports = {userRegister};