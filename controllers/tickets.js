const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,  
  create,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', {flight});
    console.log(Flight)
  })
}

function create(req, res) {
  console.log(test)
  Flight.findById(req.params.id, function(err, flight) {
    console.log(test1)
    flight.tickets.push(req.body);
    console.log(test2)
    ticket.save(function(err) {
      console.log()
      res.redirect(`/flights/${flight._id}`);
      console.log()
    });
  });
}

