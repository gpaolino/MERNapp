const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    vehicle_type: {
        type: String,
        required: true
    },
    license_plate: {
        type: String,
        required: false
    },
    maker: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    registration_year: {
        type: Number,
        required: true
    },
    displacement_cm3: {
        type: Number,
        required: false
    },
    horse_power: {
        type: Number,
        required: false
    },
    fuel: {
        type: String,
        required: false
    },
    transmission: {
        type: String,
        required: false
    },
    condition: {
        type: String,
        required: false
    },
    emissions_class: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Vehicle', vehicleSchema)