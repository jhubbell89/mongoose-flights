
const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    
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
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    // req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /flights in the address bar
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }



function newFlight(req, res) {
    res.render('flights/new');
}