const mongoose = require("mongoose")
const validate = require("validator")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error("Email not valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validate.isStrongPassword(value)){
                throw new Error("Enter a strong password")
            }
        }
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
    },
    photoUrl: {
        type: String,
        validate(value){
            if(!validate.isURL(value)){
                throw new Error("URL not valid")
            }
        }
    },
    about: {
        type: String,
        default: "This is a default about"
    },
    skills: {
        type: [String]
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", userSchema)

module.exports = User;