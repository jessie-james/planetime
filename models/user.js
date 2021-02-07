// user.js
// ==============================

// imports/instantiate Schemsa
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

// Schema
const bookingIDSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    bookings: {
        type: [bookingIDSchema],
        default: []
    }
})

//encrypt user's password on signup
userSchema.pre("save", function(next){
    const user = this
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

// compare encrypted password on login
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) return callback(err)
    callback(null, isMatch)
})
}

// remove the password before sending to front end
userSchema.methods.withoutPassword = function(){
const user = this.toObject()
delete user.password
return user
}

// exports
module.exports = mongoose.model("User", userSchema)