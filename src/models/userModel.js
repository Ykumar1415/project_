const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  nameOfUser: { type: String },
  contact: { type: String },
  password: { type: String, required: true },
  approved: { type: Boolean, default: false },
  isLeadOf: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Operation' }],
  isCoLeadOf: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Operation' }],
  isAdmin: { type: Boolean, default: false },
});


module.exports = mongoose.model('User', userSchema);
