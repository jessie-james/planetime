// booking.js
// ==============================

const mongoose = require("mongoose") 
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    startDate: {
        type: Date, 
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bookingAddress: {
        type: String,
        required: true,
    },
    refunded: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Booking", bookingSchema)