const mongoose = require("mongoose") 
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
})

module.exports = mongoose.model("Booking", bookingSchema)