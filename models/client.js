const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    birthDay: {
        type: Date,
        required: true,
        default: Date.now
    },
    pilotLicenseUrl: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);

module.exports = { Client };
