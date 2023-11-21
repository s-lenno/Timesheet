const express = require('express');
const router = express.Router();
const Timesheet = require('../models/Timesheet');

// Create a timesheet entry
router.post('/add', (req, res) => {
  const newTimesheet = new Timesheet(req.body);

  newTimesheet.save()
    .then(() => res.json('Timesheet entry added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Get all timesheet entries
router.get('/', (req, res) => {
  Timesheet.find()
    .then((timesheets) => res.json(timesheets))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// More routes ...

module.exports = router;