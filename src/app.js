const express = require("express")
const { adminAuth, userAuth } = require("./middlewares/auth")
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.use(express.json())

app.post("/signup", async (req, res) => {
    // creating a new instance of the User model
    const user = new User(req.body)
    try{
        await user.save()
        res.send("User added successfully!")
    }catch(err){
        res.status(400).send("Error saving the user: " + err.message)
    }
})

// find by email
app.get("/user", async (req, res) => {
    // const userEmail = req.body.emailId
    // try{
    //     const users = await User.find({emailId: userEmail})
    //     if(users.length===0){
    //         res.send("Users not found!")
    //     }else{
    //         res.send(users)
    //     }

    // }catch{
    //     res.status(400).send("Something went wrong!")
    // }
    
    //findOne 
    // const userEmail = req.body.emailId
    // try{
    //     const user = await User.findOne({emailId: userEmail})
    //     if(!user){
    //         res.send("User not found!")
    //     }else{
    //         res.send(user)
    //     }

    // }catch{
    //     res.status(400).send("Something went wrong!")
    // }

    // find by id
    const userId = req.body.id
    try{
        const user = await User.findById({_id: userId})
        if(!user){
            res.send("User not found!")
        }else{
            res.send(user)
        }

    }catch{
        res.status(400).send("Something went wrong!")
    }
})

// feed api
app.get("/feed", async (req, res) => {
    try{
        const users = await User.find({})
        if(users.length===0){
            res.send("Users not found!")
        }else{
            res.send(users)
        }

    }catch{
        res.status(400).send("Something went wrong!")
    }
})

// delete api
app.delete("/user", async(req, res) => {
    try{
        const userId = req.body.userId

        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully")
    }catch(error){
        res.status(400).send("Something went wrong!")
    }
})

// update api
app.patch("/user/:userId", async(req, res) => {
    const userId = req.params?.userId
    const data = req.body

    try{
        const ALLOWED_UPDATES = [
            "photoUrl",
            "about",
            "gender",
            "age",
            "skills"
        ]
        const isUpdateAllowed = Object.keys(data).every((k) => 
            ALLOWED_UPDATES.includes(k)
        )
        console.log(isUpdateAllowed)
        if(!isUpdateAllowed){
            throw new Error("Update not allowed")
        }
        if(data?.skills?.length>3){
            throw new Error("Skills cannot be more than 3!")
        }
        
        const user = await User.findByIdAndUpdate({ _id: userId }, data, {
            returnDocument: "after",
            runValidators: true 
        })
        console.log(user)
        res.send("User updated successfully!")
    }catch(error){
        res.status(400).send("UPDATE FAILED: " + error.message)
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
        console.log(error)
    }) 

