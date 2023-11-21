const express = require('express');
const router = express.Router();
const Timesheet = require('../models/Timesheet');

router.post('/add', (req, res) => {
  const { date, hours, project } = req.body;

  const newTimesheet = new Timesheet({
    date,
    hours,
    project,
  });

  newTimesheet.save()
    .then((savedTimesheet) => {
      console.log('New timesheet entry added:', savedTimesheet);
      res.json(savedTimesheet); // Send the saved timesheet entry as a response
    })
    .catch((err) => {
      console.error('Error adding timesheet entry:', err);
      res.status(400).json(`Error: ${err}`);
    });
});

router.post('/addSample', (req, res) => {
  const receivedData = req.body;
  console.log('Received Data:', receivedData);
  const sampleTimesheet = new Timesheet({
    date: '2023-01-01',
    hours: 8,
    project: 'Sample Project',
  });

  sampleTimesheet.save()
    .then(() => res.json('Sample timesheet added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Timesheet.findByIdAndDelete(id)
    .then(() => res.json('Timesheet entry deleted!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Timesheet.findById(id)
    .then((timesheet) => res.json(timesheet))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  Timesheet.findByIdAndUpdate(id, req.body, { new: true })
    .then((timesheet) => res.json(timesheet))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
