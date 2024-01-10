const express = require("express")
const { getAllRooms, createRoom, bookARoom, bookedRooms, customerBooking } = require("../controllers/roomController")
const router = express.Router()


router.get("/view", getAllRooms)
router.post("/createroom", createRoom)
router.post("/bookaroom/:roomid", bookARoom)
router.get("/bookedroom", bookedRooms)

module.exports = router