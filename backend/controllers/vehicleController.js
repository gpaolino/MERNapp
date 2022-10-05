const Vehicle = require('../models/vehicleModel')
const mongoose = require('mongoose')

// get all vehicles
const getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find({}).sort({createdAt: -1})

    res.status(200).json(vehicles)
}

// get a single vehicle
const getVehicle = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such vehicle'})
    }

    const vehicle = await Vehicle.findById(id)

    if (!vehicle) {
        return res.status(404).json({error: 'No such vehicle'})
    }

    res.status(200).json(vehicle)
}


// create new vehicle
const createVehicle = async (req, res) => {
    const {vehicle_type, license_plate, maker, model, registration_year, displacement_cm3, horse_power, fuel, transmission, condition, emissions_class} = req.body
    
    // add doc to db
    try {
        const vehicle = await Vehicle.create({vehicle_type, license_plate, maker, model, registration_year, displacement_cm3, horse_power, fuel, transmission, condition, emissions_class})
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a vehicle

// update a vehicle


module.exports = {
    getVehicles,
    getVehicle,
    createVehicle
}