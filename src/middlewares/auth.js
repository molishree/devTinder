const jwt = require("jsonwebtoken")
const User = require("../models/user")

const userAuth = async (req, res, next) => {
    // Read the token from the cookies
    // Validate the token
    // Find the user

    try{
        const { token } = req.cookies;
        if(!token){
            throw new Error("Token is not valid!")
        }
        const decodedObj = await jwt.verify(token, "Dev@Moli")
        const { _id } = decodedObj
        const user = await User.findById(_id)
        console.log(user)
        if(!user){
            throw new Error("User not found")
        }
        req.user = user
        next()
    }catch(err){
        res.status(400).send("ERROR: " + err.message)
    }

    // // authorize the user
    // const authToken = "xyz"
    // const isUserAuthorised = authToken==="xyz"
    // if(!isUserAuthorised){
    //     res.status(401).send("Unauthorised User")
    // }else{
    //     next()
    // }
}

module.exports = {
    userAuth
}