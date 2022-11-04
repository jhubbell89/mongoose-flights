


const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,  
  create,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', {flight});
  })
}

function create(req, res) {
  Ticket.findById(req.params.id, function(err, flight) {
    console.log('test in create')
    flight.tickets.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`, {flight});
    });
  });
}

