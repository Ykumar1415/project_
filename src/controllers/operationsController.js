const Operation = require('../models/Operation');

// Create a resource request within an operation
exports.createResourceRequest = async (req, res) => {
  try {
    const operationId = req.params.operationId;
    const { comment, teamId } = req.body;

    // Check if the operation exists
    const operation = await Operation.findById(operationId);

    if (!operation) {
      return res.status(404).json({ error: 'Operation not found' });
    }

    // Create a new resource request
    const newResourceRequest = {
      comment,
      teamId,
    };

    operation.resourceRequests.push(newResourceRequest);
    const savedOperation = await operation.save();

    return res.status(201).json(savedOperation);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Other operation-related controller functions can be added here
