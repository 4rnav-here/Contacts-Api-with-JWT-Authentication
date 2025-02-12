const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(404)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("Account already registered")
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User created ${user}`)
    if(user){
        res.status(201).json({_id:user.id, email:user.email});
    }
    else{
        res.status(400)
        throw new Error("Data not valid")
    }

})

const loginUser = asyncHandler(async  (req, res) =>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Fill both fields")
    }

    const user = await User.findOne({email})
    if()

    res.json({ message: "Logged in successfully"})
})

const currentUser = asyncHandler(async(req, res) =>{
    res.json({ message: "Current user details"})
})

module.exports ={
    registerUser,
    loginUser,
    currentUser
}