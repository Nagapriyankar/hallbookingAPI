const express = require("express")
const { getAllUsers,customerBooking } = require("../controllers/customerController")
const router = express.Router()


router.get("/view", getAllUsers) 
router.get("/customerbooking/:customerName", customerBooking)


module.exports = router