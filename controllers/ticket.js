const Ticket = require('../models/ticket');

module.exports = {
    create,
};

function create(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      ticket.ticketSchema.push(req.body);
      ticket.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }
    