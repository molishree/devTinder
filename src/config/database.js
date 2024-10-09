const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://molishreenuwal82:Wk0HSW2B8QWU00V8@cluster0.ehkej.mongodb.net/devTinder"
    );
};

module.exports = connectDB 