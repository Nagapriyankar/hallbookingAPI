//import depenencies
const detenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const customerRoute = require("./routes/customerRoutes")
const roomRoute = require("./routes/roomRoutes")

//initialize app,port
const app = express()
const PORT = process.env.PORT || 5000

// creating  a middleware
app.use(express.json());
app.use(cors());



//routes Middleware
app.use("/api/customers", customerRoute)
app.use("/api/rooms", roomRoute)


//connect to mongoose and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Error Message: ${error}`)
    })
