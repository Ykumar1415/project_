const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Check if a user exists or create a new user
router.post('/users/checkOrCreate', userController.checkOrCreateUser);

module.exports = router;
