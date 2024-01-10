//import mongoose
const mongoose = require("mongoose")

//create room schema
const roomSchema = mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    noOfSeatsAvailable: {
        type: Number,
        required: true
    },
    amenities: {
        type: [],
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Available"
    },
     bookingCustomer: {
        type: [],
        ref: "user",
         required: true,
         default: []
    }
})


const Room = mongoose.model("room", roomSchema)

module.exports = Room 