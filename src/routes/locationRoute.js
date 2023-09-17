const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Route for getting GPS location data
router.get('/location', locationController.getGPSLocation);

module.exports = router;
