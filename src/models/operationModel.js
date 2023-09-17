const mongoose = require('mongoose');

const resourceRequestSchema = new mongoose.Schema({
  comment: { type: String },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

const operationSchema = new mongoose.Schema({
  title: { type: String },
  resourceRequests: [resourceRequestSchema],
});

module.exports = mongoose.model('Operation', operationSchema);
