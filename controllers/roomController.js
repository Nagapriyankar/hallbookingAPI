const Room = require("../models/room")
const User = require("../models/customer")


//get all room
const getAllRooms = async (req, res) => {
    const rooms = await Room.find()
    res.send(rooms)
        
}

//create a room
const createRoom = async (req, res) => {
    const { roomNumber, noOfSeatsAvailable, amenities, pricePerHour, status } = req.body

    const room = await Room.create({
        roomNumber, noOfSeatsAvailable, amenities, pricePerHour, status
    })

    res.send(room)
}

//BOOK A ROOM
const bookARoom = async (req, res) => { 
    //getdata fromr req
    const { customerName, Date, startTime, EndTime } = req.body
    const roomNumber = req.params.roomid

    //check if the room is available
    const room = await Room.findOne({ roomNumber })
    
    if (!room) { 
        res.status(400).json({message:"Room not available"})
    }

    //if room available, check if room is booked 
    if (room.status == 'booked') {
        res.status(400).json({ message: "Room is already booked" })
    }

    //if not booked, change status to booked and update customer details
    room.bookingCustomer = [{ customerName: customerName, Date: Date, startTime: startTime, EndTime:EndTime}]
    room.status = "booked"
 
    //update the user in customer table
    await User.create({
        customerName, Date, startTime, startTime, roomNumber
    })
    
    //update room to  booked in db
    await room.save()

    res.status(200).json({message:"Room booked Successfully, Customer details updated in db"})
}

//View all Booked Rooms
const bookedRooms = async (req, res) => { 
    const rooms = await Room.find({ status: 'booked' })
    if (rooms)
        res.status(200).json({message: rooms})
    else
        res.status(400).json({ message: "Rooms not booked" })
}



module.exports = {
    getAllRooms, createRoom, bookARoom, bookedRooms
}