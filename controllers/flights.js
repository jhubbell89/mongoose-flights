
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
    
};
  
function index(req, res) {
    //flights refers to found Flight in MongoDB
    Flight.find({}, function(err, flights) {
        if (err) {
            console.log(err);
            res.redirect('/')
        }
        res.render('flights/index', {flights})
    })
}
  
function create(req, res) {
    
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /flights in the address bar
      if (err) return res.redirect('/flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('index');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', { title: 'Flight Detail', flight});
    });
  });
};