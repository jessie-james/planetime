// server.js
// ==============================

// imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')

const PORT = process.env.PORT || 3623;
require("dotenv").config()
const path = require("path")

//midleware for every request
app.use('/', express.json())
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(morgan("dev")) //logger

//routes
app.use("/booking", require("./routes/bookingRouter.js"))
app.use("/auth", require('./routes/authRouter.js'))
app.use("/charge", require('./routes/paymentRouter.js'))
app.use("/api", expressJwt({secret: process.env.SECRET}))


//DB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/o-d', 
{ 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('mongoose is connected to o-d')
    })
    .catch(err => {
        console.log(err)
    })

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//err handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedErr"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Port connection
app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
})

