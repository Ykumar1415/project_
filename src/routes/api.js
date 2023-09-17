// const express = require('express');
// const router = express.Router();
// const teamsController = require('../controllers/teamsController');
// const userController = require('../controllers/userController');
// const operationsController = require('../controllers/operationsController');

// // Teams API Endpoints
// router.get('/teams', teamsController.getAllTeams);
// router.post('/teams', teamsController.createTeam);
// router.get('/teams/:teamId', teamsController.getTeamById);
// // Add other team-related routes as needed

// // Users API Endpoints
// router.get('/users', userController.getAllUsers);
// router.post('/users', userController.createUser);
// router.get('/users/:userId', userController.getUserById);
// // Add other user-related routes as needed

// // Operations API Endpoints
// router.get('/operations', operationsController.getAllOperations);
// router.post('/operations', operationsController.createOperation);
// router.get('/operations/:operationId', operationsController.getOperationById);
// // Add other operation-related routes as needed

// module.exports = router;
const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');
const userController = require('../controllers/userController');

// ...

// Create a new team (accessible only by admin)
router.post('/teams', userController.isAdmin, teamsController.createTeam);

// ...
