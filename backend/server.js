require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const vehicleRoutes = require('./routes/vehicles')

// Importing the fs and https modules -------------- STEP 1
const https = require('https');
const fs = require('fs');

// Read the certificate and the private key for the https server options 
// ------------------- STEP 2
const httpsOptions = {
    key: fs.readFileSync("./security/cert.key"),
    cert: fs.readFileSync("./security/cert.pem"),
  };

// express app
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/vehicles', vehicleRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })

        // Create the https server by initializing it with 'options'
        // -------------------- STEP 3
        https.createServer(httpsOptions, app).listen(8080, () => {
            console.log(`HTTPS server started on port 8080`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
