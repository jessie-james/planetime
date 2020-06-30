const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const bookingSchema = new Schema({
    weekDay: {
        type: String
    },
    month: {
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
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking };
