const express = require("express")
const { adminAuth, userAuth } = require("./middlewares/auth")

const app = express();

// app.use("/admin", (req, res, next) => {
//     // authorize the admin
//     const authToken = "xyz"
//     const isAdminAuthorised = authToken==="xyz"
//     if(!isAdminAuthorised){
//         res.status(401).send("Unauthorised Admin")
//     }else{
//         next()
//     }
// })

// app.use("/user", (req, res, next) => {
//     // authorize the user
//     const authToken = "xyz"
//     const isUserAuthorised = authToken==="xyz"
//     if(!isUserAuthorised){
//         res.status(401).send("Unauthorised User")
//     }else{
//         next()
//     }
// })

app.get("/getUserData", (req, res) => {
    try{
        throw new Error("abcd")
        res.send("USer data sent")
    }catch(err){
        res.status(500).send("Some error occured")
    }
})

app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Something went wrong")
    }
})

app.use("/admin", adminAuth)

app.use("/admin/getAllData", (req, res) => {
    res.send("Admin all data sent")
})

app.use("/admin/getAllInfo", (req, res) => {
    res.send("Admin all info sent")
})

app.use("/user/getUserInfo", (req, res) => {
    res.send("User all info sent")
})

app.use("/user/login", (req, res) => {
    res.send("User login sent")
})



// Method 2
// ------------
// app.use("/admin", (req, res, next) => {
//     // authorize the admin
//     const authToken = "xyz"
//     const isAdminAuthorised = authToken==="xyz"
//     if(!isAdminAuthorised){
//         res.status(401).send("Unauthorised Admin")
//     }else{
//         next()
//     }
// })

// app.use("/admin/getAllData", (req, res) => {
//     res.send("Admin all data sent")
// })

// app.use("/admin/getAllInfo", (req, res) => {
//     res.send("Admin all info sent")
// })
// ------------


// Method 1
// -------
// app.use("/admin/getAllData", (req, res) => {
//     // authorize the admin
//     const authToken = "xyz"
//     const isAdminAuthorised = authToken==="xyz"
//     if(isAdminAuthorised){
//         res.send("Admin all data sent")
//     }else{
//         res.status(401).send("Unauthorised Admin")
//     }
// })

// app.use("/admin/getAllInfo", (req, res) => {
//     // authorize the admin
//     const authToken = "xyz"
//     const isAdminAuthorised = authToken==="xyz"
//     if(isAdminAuthorised){
//         res.send("Admin all info sent")
//     }else{
//         res.status(401).send("Unauthorised Admin")
//     }
// })
// --------------

// app.use("/user", (req, res, next) => {
//     console.log("Handling the route user");
//     next();
//     // res.send("Res 1")
// })

// app.use("/user", (req, res, next) => {
//     console.log("Handling the route user 2");
//     // next();
//     // res.send("Res 1")
// })


// app.use("/user", [(req, res, next) => {
//     console.log("Handling the route user");
//     next();
//     // res.send("Res 1")
// },
// (req, res, next) => {
//     next()
//     // res.send("Res 2")
// }],

// (req, res, next) => {
//     res.send("Res 3")
// },

// )

// app.use("/user", (req, res) => {
//     res.send({firstName: "Moli", lastName: "Nuwal"})
// })

// app.get("/user/:userId/:pswd", (req, res) => {
//     console.log(req.params);
//     res.send({firstName: "Moli", lastName: "Nuwal"})
// })

// app.get("/user", (req, res) => {
//     console.log(req.query);
//     res.send({firstName: "Moli", lastName: "Nuwal"})
// })

// app.post("/user", (req, res) => {
//      res.send("Data successfully posted")
// })

// app.delete("/user", (req, res) => {
//     res.send("Data successfully deleted")
// })

// app.use("/test", (req, res) => {
//     res.send("Hello from the test server!")
// })

// app.use("/hello/2", (req, res) => {
//     res.send("Hello 2 hello from hello")
// })
// app.use("/hello", (req, res) => {
//     res.send("Hello hello from hello")
// })


// app.use("/", (req, res) => {
//     res.send("Hello from the dashboard!")
// })


app.listen(3000 , () => {
    console.log("server is listening on port 3000 ");
})