// seed.js (a utility to seed/initialize the database)

// Uncomment the next line if using a .env to hold the db connection string
// require('dotenv').config();
module.exports = {
  
}
// Connect to the db
require('./config/database');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');

// For better organization, the see data is being stored in a separate data.js module
// const data = require('./data');



// Save the promises (or call right in the array if feeling frisky)
const p1 = Flight.deleteMany({});
const p2 = Ticket.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1, p2])
.then(function(results) {
  console.log(results);
})
// Yes we can!
.then(process.exit);