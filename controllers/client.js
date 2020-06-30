const { Client } = require('../models/client');

// CREATE New Client
exports.newClient = function(req, res, next) {
    req.body.user = req.user._id;
    const client = new Client(req.body);
    client.save((err, savedClient) => {
        if (err) {
            res.status(500);
            next(err);
        } else {
            return res.status(201).send(savedClient);
        };
    });
};

// GET Clients
exports.clients = function(req, res, next) {
    Client.find({}).exec((err, clients) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(clients);
    });
};
