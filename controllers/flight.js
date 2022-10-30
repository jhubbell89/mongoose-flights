
const Movie = require('../models/movie');

module.exports = {
    new: newFlight,
    create,
    index,
};
  
function newFlight(req, res) {
    res.render('flights/new');
}
  
function create(req, res) {
    // convert nowShowing's checkbox of undefined or "on" to a boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove leading and trailing spaces
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    Flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
  }

function index(req, res) {

    //flights refers to found Movie in MongoDB
    Flight.find({}, function(err, flights) {
        if (err) {
            console.log(err);
            res.redirect('/')
        }
        res.render('flights/index', {flights})
    })
}

