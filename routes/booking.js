const router = require('express').Router();
const bookingController = require('../controllers/booking');
// const { auth } = require('../middlewares/auth');

router.post('/new_booking', bookingController.newBooking);
router.get('/all_bookings', bookingController.allBookings);
router.get('/:bookingId/booking_details', bookingController.bookingDetails);
router.put('/:bookingId/update_booking', bookingController.updateBooking);
router.delete('/:bookingId/delete_booking', bookingController.deleteBooking);

module.exports = router;
