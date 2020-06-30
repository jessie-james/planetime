const router = require('express').Router();
const clientController = require('../controllers/client');
const { auth } = require('../middlewares/auth');

router.get('/clients', auth, clientController.clients);
router.post('/new_client', auth, clientController.newClient);

module.exports = router;
