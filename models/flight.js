const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: {
        type: Number,
        required: true
    },
    departs: Number
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);