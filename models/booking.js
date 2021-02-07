// booking.js
// ==============================

// import/instaniate Schema
const mongoose = require("mongoose") 
const Schema = mongoose.Schema

// Schema
const bookingSchema = new Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
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
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bookingAddressLine1: {
        type: String,
        required: true
    },
    bookingAddressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    // pilotLiscenceURL: {
    //     type: String,
    //     required: true
    // },
    // insuranceURL: {
    //     type: String,
    //     required: true
    // },
    pilotLiscenceNumber: {
        type: String,
        required: true
    },
    refunded: {
        type: Boolean,
        default: false
    }
})

// exports
module.exports = mongoose.model("Booking", bookingSchema)