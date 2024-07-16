const mongoose = require('mongoose');

const appManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'approved'
  }
});

const AppManager = mongoose.model('AppManager', appManagerSchema);

module.exports = AppManager;
