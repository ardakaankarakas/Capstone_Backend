const users = require('../controllers/usersController');
const router = require('express').Router();

router.post('/createUser', users.createUser);
router.post('/loginUser', users.loginUser);

module.exports = router;