const express = require("express")

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from the test server!")
})

app.use("/hello", (req, res) => {
    res.send("Hello hello from hello")
})

app.use("/", (req, res) => {
    res.send("Hello from the dashboard!")
})


app.listen(3000 , () => {
    console.log("server is listening on port 3000 ");
})