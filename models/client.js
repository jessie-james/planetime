// client.hs
// ==============================

// imports/instantiate Schema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Schema
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
    
})

module.exports = mongoose.model("Client", clientSchema)