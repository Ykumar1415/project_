const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Route for getting the last saved GPS location data for a specific team
router.get('/location/:teamId', locationController.getLastLocationByTeam);

// Route for getting GPS location data (as previously defined)
router.get('/location', locationController.getGPSLocation);

module.exports = router;
