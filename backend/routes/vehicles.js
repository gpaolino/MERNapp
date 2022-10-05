const express = require('express')
const {
    getVehicles,
    getVehicle,
    createVehicle
} = require('../controllers/vehicleController')

const router = express.Router()

// GET all vehicles
router.get('/', getVehicles)

// GET a single vehicle
router.get('/:id', getVehicle)

// POST a new vehicle
router.post('/', createVehicle)

// DELETE a vehicle
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a vehicle'})
})

// UPDATE a vehicle
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a vehicle'})
})

module.exports = router
