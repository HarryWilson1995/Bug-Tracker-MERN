const mongoose = require('mongoose');

const BugSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Open',
  },
});

module.exports = mongoose.model('bug', BugSchema);
