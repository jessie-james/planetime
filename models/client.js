const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        default: Date.now
    },
    pilotLicenseUrl: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Client", clientSchema)