var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/ticket');

router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;