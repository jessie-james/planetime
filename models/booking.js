const mongoose = require("mongoose") 
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    startDate: {
        type: Date
    },
    endDate:{
        type: Date
    }

    // weekDay: {
    //     type: String
    // },
    // month:{
    //     type: String
    // },
    // day: {
    //     type: String
    // },
    // year: {
    //     type: String
    // }

})

module.exports = mongoose.model("Booking", bookingSchema)