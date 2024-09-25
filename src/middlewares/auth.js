const adminAuth = (req, res, next) => {
    // authorize the admin
    const authToken = "xyz"
    const isAdminAuthorised = authToken==="xyz"
    if(!isAdminAuthorised){
        res.status(401).send("Unauthorised Admin")
    }else{
        next()
    }
}

const userAuth = (req, res, next) => {
    // authorize the user
    const authToken = "xyz"
    const isUserAuthorised = authToken==="xyz"
    if(!isUserAuthorised){
        res.status(401).send("Unauthorised User")
    }else{
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}