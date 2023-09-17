const Team = require('../models/Team');
const User = require('../models/User');

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    // Ensure that the provided lead and colead exist in the database
    const leadUser = await User.findById(req.body.lead);
    if (!leadUser) {
      return res.status(404).json({ error: 'Lead user not found' });
    }

    const coleadUser = await User.findById(req.body.colead);
    if (req.body.colead && !coleadUser) {
      return res.status(404).json({ error: 'Colead user not found' });
    }

    // Create the team
    const newTeam = new Team({
      lead: req.body.lead,
      colead: req.body.colead,
      members: req.body.members || [],
      lastGpsLocation: req.body.lastGpsLocation || '',
    });

    const savedTeam = await newTeam.save();
    res.status(201).json(savedTeam);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other team-related controller functions can be added here
