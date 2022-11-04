


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
  console.log('randomtext')
  var ticket = new Ticket(req.body)
  ticket.save(function(err){})
  Flight.findById(req.params.id,function(err, flight){
    console.log('test')
      flight.save(function(err){
          res.redirect(`/flights/${flight.id}`, flight, ticket )
      })
  })
}

