const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

var destinationSchema = new Schema({
    arrivalAirport: String,
    enum: ['American', 'Southwest', 'United'],
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        required: true,
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear()+1))
        },
    },
    destinations: [destinationSchema]
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);