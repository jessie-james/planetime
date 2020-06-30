const { User } = require('../models/user');
const { SECRET } = process.env;
const jwt = require('jsonwebtoken');

// Signup
exports.signup = function(req, res, next) {
    // check to see if username is already taken
    User.findOne({ username: req.body.username.toLowerCase() }, 
    (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (user) {
            res.status(400);
            return next(new Error('That username is already taken.'));
        }
        // save a new user
        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            // create the token
            const token = jwt.sign(savedUser.withoutPassword(), SECRET);
            // send the response
            return res.status(201).send({ 
                success: true, 
                user: savedUser.withoutPassword(), 
                token 
            });
        });
    });
};

// Login
exports.login = function(req, res, next) {
    // does the user exist?
    User.findOne({ username: req.body.username.toLowerCase() }, 
    (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (!user) {
            res.status(403);
            return next(new Error('Username OR password are incorrect'));
        }
        // does their password match?
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403);
                return next(err);
            }
            if (!isMatch) {
                res.status(403);
                return next(new Error('Username OR password are incorrect'));
            }
            // create a token
            const token = jwt.sign(user.withoutPassword(), SECRET);
            // send the response
            return res.status(200).send({ 
                success: true,
                user: user.withoutPassword(), 
                token 
            });
        });
    });
};

// GET User
exports.users = function(req, res, next) {
    User.find({}).exec((err, users) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(users);
    });
};
