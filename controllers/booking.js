const { Booking } = require('../models/booking');

// CREATE New Booking
exports.newBooking = function(req, res, next) {
    const booking = new Booking(req.body);
    booking.save((err, savedBooking) => {
        if (err) {
            console.log('Error, unable to save booking.');
            res.status(500);
            next(err);
        } else {
            return res.status(201).send(savedBooking);
        };
    });
};

// GET All Bookings
exports.allBookings = function(req, res, next) {
    Booking.find({}).exec((err, bookings) => {
        // console.log('BOOKINGS', bookings);
        if (err) {
            res.status(500);
            next(err);
        } else {
            return res.status(200).send(bookings);
        };
    });
};

// GET Booking Details
exports.bookingDetails = function(req, res, next) {
    Booking.findOne({ '_id': req.params.bookingId }, 
    (err, booking) => {
        // console.log('BOOKING', booking);
        if (err) {
            res.status(500);
            next(err);
        } else {
            return res.status(200).send(booking);
        };
    });
};

// UPDATE Existing Booking
exports.updateBooking = function(req, res, next) {
    Booking.findOneAndUpdate({ '_id': req.params.bookingId }, 
    req.body,
    { upsert: true, new: true },
    (err, updatedBooking)=> {
        if (err) {
            res.status(500);
            next(err);
        } else {
            return res.status(201).send({
                success: true,
                message: `updated bookingId:${updatedBooking._id}`,
                updatedBooking
            });
        };
    });
};

// DELETE Booking
exports.deleteBooking = function(req, res, next) {
    Booking.findOneAndDelete({ '_id': req.params.bookingId })
    .exec((err, deletedRecord) => {
        if (err) {
            res.status(500);
            next(err);
        } else {
            return res.status(200).send({
                success: true,
                message: `deleted bookingId:${deletedRecord._id}`,
                _id: deletedRecord._id
            });
        };
    });
};
