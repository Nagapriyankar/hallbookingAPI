//import mongoose
const mongoose = require("mongoose")

//create customer schema
const userSchema = mongoose.Schema({

    customerName: String,
    roomNumber: Number,
    Date: String,
    startTime: String,
    endTime: String,
    
})


const User = mongoose.model("user", userSchema)

module.exports = User 