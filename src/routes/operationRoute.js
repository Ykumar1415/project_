const express = require('express');
const router = express.Router();
const operationsController = require('../controllers/operationsController');

// ...

// Create a resource request within an operation
router.post('/operations/:operationId/resourceRequests', operationsController.createResourceRequest);

// ...
