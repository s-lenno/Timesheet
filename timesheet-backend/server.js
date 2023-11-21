const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const timesheetRoutes = require('./routes/timesheetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/timesheet', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.use('/timesheet', timesheetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});