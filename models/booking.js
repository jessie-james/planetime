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
        default: "NA"
    },
    endMonh: {
        type: String,
        default: "NA"
    },
    endDay: {
        type: String,
        default: "NA"
    },
    endYear: {
        type: String,
        default: "NA"
    }
    // startTime:{

    // },
    // endTime:{

    // }
})

module.exports = mongoose.model("Booking", bookingSchems)