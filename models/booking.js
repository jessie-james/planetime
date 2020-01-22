const mongoose = require("mongoose") 
const Schema = mongoose.Schema

const bookingSchems = new Schema({
    weekDay: {
        type: String
    },
    month:{
        type: String
    },
    day: {
        type: String
    },
    year: {
        type: String
    }
    // startTime:{

    // },
    // endTime:{

    // }
})

module.exports = mongoose.model("Booking", bookingSchems)