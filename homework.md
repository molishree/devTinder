- Create a repo
- Initialize the repo
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- WHat is the use of -g while npm install 
- Difference between caret and tilde

- why package-lock.json is pushed to git?? 

- init git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions /hello /hello/2 /xyz
- Order of the routes matter a lot! 
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on Postman
- Explore routing and use of ? + () * in the routes
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple route handlers
- next()
- next function and errors along with res.send()
- app.use("/users", rH, [rH2, rH3], rH4);
- What is a Middleware? Why do we need it?
- How Express JS basically handles requests behind the scenes
- app.use()  vs app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes except /user/login 
- Error Handling using app.use("/", (err, req, res, next) => {})

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database <connection-url>/devTinder
- Call the connectDB function and connect to DB before starting the application
- Create a user schema and user model
- Create POST /signup API to add data to database
- Push some documents using API calls from Postman
- Error handling using try catch

- JS object and JSON (difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user
- User.findOne() with duplicate email ids, which object is returned
- API - Get user by email
- API - Feed API - Get /feed - get all the users from the database 
- API - Get user by id findById

- Create a delete user api
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose documentation for Model methods
- What are the options in a Model.findOneAndUpdate method, explore more about it
- API - update the user with emailID

- Explore schematype  options from the documentation
- add required, unique, lowercase, min, max, minLength, trim
- add default
- create a custom validation function for gender
- improve the db schema - PUT all appropriate validations on each field in schema
- add timestamps to the userSchema
- Add API level validations on Patch request and signup post api
- Data Sanitizing - Add api validation for each field
- Install validator
- Explore validator library function and use validator funcs for pswd, email, photoUrl
- NEVER TRUST req.body

- Validate data in signup api
- Install bcrypt package
- Create PasswordHash using bcrypt.hash and save the user with ecrypted password
- Create login api
- Compare passwords and throw errors if email or password is invalid

- install cookie-parser
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- in login API, after email and password validation, create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- userAuth middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days

- Create userSchema method to getJWT()
- Create userSchema method to comparePassword(password)

- Explore Tinder APIs
- Create a list of all APIs you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make sure you validate all data in every POST, PATCH APIs


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

// app.use("/user", (req, res, next) => {c1
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

