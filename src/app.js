const express = require("express")

const app = express();

app.use("/user", (req, res, next) => {
    console.log("Handling the route user");
    next();
    // res.send("Res 1")
},
(req, res, next) => {
    next()
    // res.send("Res 2")
},

(req, res, next) => {
    res.send("Res 3")
},

)

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