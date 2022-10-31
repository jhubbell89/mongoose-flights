var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flight')
/* GET users listing. */

router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create);
router.get('/index', flightsCtrl.index)


module.exports = router;
