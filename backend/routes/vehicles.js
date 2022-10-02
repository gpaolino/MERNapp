const express = require('express')

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
router.post('/', (req, res) => {
     res.json({mssg: 'POST a new vehicle'})
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
