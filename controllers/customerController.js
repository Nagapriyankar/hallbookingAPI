const User = require("../models/customer")


//get user data
const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.send(users)
}

//list how many times customer booked rooms
const customerBooking = async (req, res) => {
    const customerName = req.params.customerName
    const rest = await User.find({ customerName })
    res.status(200).json({
        message: `${customerName} has booken ${rest.length} times`,
        info: rest
    })
}




module.exports = {
    getAllUsers, customerBooking
}