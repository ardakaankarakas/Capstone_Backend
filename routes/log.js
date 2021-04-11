const logs = require('../controllers/logsController');
const router = require('express').Router();

router.post('/createLogs', logs.createLogs);
router.get('/getLogs', logs.getLogs);

module.exports = router;