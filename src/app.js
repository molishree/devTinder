const express = require("express")
const { adminAuth, userAuth } = require("./middlewares/auth")
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup", async (req, res) => {
    // creating a new instance of the User model
    const user = new User({
        firstName: "Aish",
        lastName: "Nuwal",
        emailId: "aish@nuwal.com",
        password: "aish@123"
    })
    try{
        await user.save()
        res.send("User added successfully!")
    }catch(err){
        res.status(400).send("Error saving the user: " + err.message)
    }
})



connectDB()
    .then(() => {
        console.log("database connection established...");
        app.listen(3000 , () => {
            console.log("server is listening on port 3000 ");
        })
    })
    .catch((error) => {
        console.error("Database connot be connected")
    }) 

