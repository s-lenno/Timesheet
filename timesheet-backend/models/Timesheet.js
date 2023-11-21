const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;
