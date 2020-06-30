const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const saltRounds = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Encrypt user's password on signup
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

// Compare encrypted password on login
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

// Remove the password before sending to front end
userSchema.methods.withoutPassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
