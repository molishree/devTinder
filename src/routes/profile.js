const express = require("express")
const bcrypt = require("bcrypt")
const profileRouter = express.Router()
const { userAuth } = require("../middlewares/auth")
const { validateEditProfileData, validateEditPassword } = require("../utils/validations")

// profile
profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try{
        const user = req.user
        // console.log(user)
        res.send(user)
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }
})

profileRouter.patch("/profile/edit", userAuth, async(req, res) => {
    try{
        if(!validateEditProfileData(req)){
            throw new Error("Invalid edit request")
        }
        const loggedInUser = req.user
        Object.keys(req.body).forEach((key) => (loggedInUser[key]=req.body[key]))
        await loggedInUser.save()
        // res.send("Profile updated")
        res.json({ 
            message: "Profile updated",
            data: loggedInUser    
        })
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }
})

profileRouter.patch("/profile/password", userAuth, async(req, res) => {
    try{
        // user should be logged in
        // check if existing pswd is correct, dont need this  
        // get the new password and check if it is strong enough
        // if so update the user pswd
        if(!validateEditPassword(req)){
            throw new Error("Not a strong password")
        }
        const loggedInUser = req.user
        loggedInUser.password = await bcrypt.hash(req.body.password, 10)
        await loggedInUser.save()
        res.send("Password Updated!!")
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }
})

module.exports = profileRouter