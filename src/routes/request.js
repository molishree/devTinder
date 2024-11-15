const express = require("express")
const requestRouter = express.Router()
const { userAuth } = require("../middlewares/auth")

// send connection request
requestRouter.post("/sendConnectionRequest", userAuth, async(req, res) => {
    const user = req.user
    console.log("Sending a connection request")
    res.send(user.firstName + " sent a connection request!")
})

module.exports = requestRouter