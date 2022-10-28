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
    
    let emptyFields = []

    if(!vehicle_type) {
        emptyFields.push('vehicle_type')
    }
    if(!maker) {
        emptyFields.push('maker')
    }
    if(!model) {
        emptyFields.push('model')
    }
    if(!registration_year) {
        emptyFields.push('registration_year')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const vehicle = await Vehicle.create({vehicle_type, license_plate, maker, model, registration_year, displacement_cm3, horse_power, fuel, transmission, condition, emissions_class})
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a vehicle
const deleteVehicle = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such vehicle'})
    }

    const vehicle = await Vehicle.findOneAndDelete({_id: id})

    if (!vehicle) {
        return res.status(400).json({error: 'No such vehicle'})
    }

    res.status(200).json(vehicle)
}

// update a vehicle
const updateVehicle = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such vehicle'})
    }

    const vehicle = await Vehicle.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!vehicle) {
        return res.status(400).json({error: 'No such vehicle'})
    }

    res.status(200).json(vehicle)
}


module.exports = {
    getVehicles,
    getVehicle,
    createVehicle,
    deleteVehicle,
    updateVehicle
}