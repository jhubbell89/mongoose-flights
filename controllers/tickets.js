


const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,  
  create
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', {flight});
  })
}

function create(req, res){
  var ticket = new Ticket(req.body)
  ticket.save(function(err){})
  Flight.findById(req.params.id,function(err, flight){
      flight.tickets.push(ticket)
      flight.save(function(err){
          res.redirect(`/flights/${flight._id}`, flight, ticket )
      })
  })
}

