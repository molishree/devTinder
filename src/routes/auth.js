const express = require("express")
const authRouter = express.Router()
const bcrypt = require("bcrypt")
const { validateSignUpData } = require("../utils/validations")
const User = require("../models/user")

// signup
authRouter.post("/signup", async (req, res) => {
    try{
        // validation of user data
        validateSignUpData(req)

        // encrypt the password
        const { firstName, lastName, emailId, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)

        // creating a new instance of the User model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        })
        await user.save()
        res.send("User added successfully!")
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }
})

// login api
authRouter.post("/login", async (req, res) => {
    try{
        const { emailId, password } = req.body;
        const user = await User.findOne({emailId: emailId})

        if(!user){
            throw new Error("Invalid Credentials")
        }

        const isPasswordValid = await user.validatePassword(password)
        // console.log(isPasswordValid)
        if(isPasswordValid){
            // create a JWT token
            const token = await user.getJWT()
            // add the token to cookie and send the response back to user
            res.cookie("token", token, {
                expires: new Date(Date.now() + 8*3600000)
            })
            res.send("Login Successful")
        }else{
            throw new Error("Invalid Credentials")
        }
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }
})

authRouter.post("/logout", async(req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now())
    })
    res.send("Logout successful")
})

module.exports = authRouter