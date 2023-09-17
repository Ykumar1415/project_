const express = require('express');
const router = express.Router();
const Location = require('../models/Location'); // Assuming you have a Location model

// Controller for getting GPS location data
exports.getGPSLocation = async (req, res) => {
  try {
    // Query the database for the latest GPS location data
    const latestLocation = await Location.findOne().sort('-createdAt');

    if (!latestLocation) {
      return res.status(404).json({ error: 'No location data found' });
    }

    return res.status(200).json(latestLocation);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Other location-related controller functions can be added here
