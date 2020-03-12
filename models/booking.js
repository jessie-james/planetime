const mongoose = require("mongoose") 
const Schema = mongoose.Schema

const bookingSchems = new Schema({
    startWeekDay: {
        type: String,
        require: true
    },
    startMonth:{
        type: String,
        require: true
    },
    startDay: {
        type: String,
        require: true
    },
    startYear: {
        type: String,
        require: true
    },
    endWeekDay: {
        type: String,
        default: ""
    },
    endMonth: {
        type: String,
        default: ""
    },
    endDay: {
        type: String,
        default: ""
    },
    endYear: {
        type: String,
        default: ""
    }
    // startTime:{

    // },
    // endTime:{

    // }
})

module.exports = mongoose.model("Booking", bookingSchems)