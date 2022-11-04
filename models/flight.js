const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

let newFreakingDate = something()
function something() {
    const addDateYear = new Date()
    addDateYear.setFullYear(addDateYear.getFullYear() + 1)
    return addDateYear
}


var destinationSchema = new Schema({
    arrivalAirport: String,
    enum: ['American', 'Southwest', 'United'],
    arrival: Date
},{
    timestamps: true
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
        default: newFreakingDate
    },
    destinations: [destinationSchema]
})



// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);