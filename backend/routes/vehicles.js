const express = require('express')
const Vehicle = require('../models/vehicleModel')

const router = express.Router()

// GET all vehicles
router.get('/', (req, res) => {
    res.json({mssg: 'GET all vehicles'})
})

// GET a single vehicle
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single vehicle'})
})

// POST a new vehicle
router.post('/', async (req, res) => {
    const {vehicle_type, license_plate, maker, model, registration_year, displacement_cm3, horse_power, fuel, transmission, condition, emissions_class} = req.body
    
    try {
        const vehicle = await Vehicle.create({vehicle_type, license_plate, maker, model, registration_year, displacement_cm3, horse_power, fuel, transmission, condition, emissions_class})
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a vehicle
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a vehicle'})
})

// UPDATE a vehicle
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a vehicle'})
})

module.exports = router
