const Location = require('../models/Location'); // Assuming you have a Location model

// Controller for getting the last saved GPS location data for a specific team
exports.getLastLocationByTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    // Query the database for the latest GPS location data for the specified team
    const latestLocation = await Location.findOne({ teamId }).sort('-createdAt');

    if (!latestLocation) {
      return res.status(404).json({ error: 'No location data found for the specified team' });
    }

    return res.status(200).json(latestLocation);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Other location-related controller functions can be added here
