const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  // Define the schema for your timesheet entry (e.g., date, hours, project, etc.)
});

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;
