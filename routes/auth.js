const router = require('express').Router();
const userController = require('../controllers/user');
const { auth } = require('../middlewares/auth');

router.get('/users', auth, userController.users);
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
