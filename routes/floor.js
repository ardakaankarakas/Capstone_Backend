const floors = require('../controllers/floorsController');
const router = require('express').Router();

router.post('/createFloor', floors.createFloor);
router.post('/getFloor', floors.getFloor);

module.exports = router;