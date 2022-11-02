var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destination');

router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;