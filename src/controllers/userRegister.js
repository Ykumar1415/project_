const User = require('../models/User');

// Check if a user exists or create a new user
exports.checkOrCreateUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists by username
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // User already exists, return the existing user's data
      return res.status(200).json(existingUser);
    } else {
      // User doesn't exist, create a new user
      const newUser = new User({
        username,
        password,
        approved: false, // You can set this as needed
        isAdmin: false,  // You can set this as needed
      });

      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Other user-related controller functions can be added here
const User = require('../models/User');

// Get a list of user accounts that need approval
exports.getPendingApprovalUsers = async (req, res) => {
  try {
    // pandingUsers array without password
    const pendingUsers = await User.find({ approved: false }).select('-password');


    return res.status(200).json(pendingUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Approve a user account by ID
exports.approveUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's approval status
    user.approved = true;
    await user.save();

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Other user-related controller functions can be added here
