import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TimesheetForm from './TimesheetForm';
import TimesheetList from './TimesheetList';

function App() {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    // Fetch timesheets from the server when the component mounts
    axios.get('http://localhost:5000/timesheet')
      .then((response) => setTimesheets(response.data))
      .catch((error) => console.error(`Error fetching timesheets: ${error}`));
  }, []);

  const handleDelete = (id) => {
    // Delete timesheet entry
    axios.delete(`http://localhost:5000/timesheet/${id}`)
      .then(() => {
        // Update timesheets state after successful deletion
        setTimesheets(timesheets.filter((timesheet) => timesheet._id !== id));
      })
      .catch((error) => console.error(`Error deleting timesheet: ${error}`));
  };

  const handleEdit = (id) => {
    // Navigate to the edit page or implement an edit form
    // This could involve updating the route or displaying a modal for editing
    console.log(`Edit timesheet with ID: ${id}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/list"
          element={<TimesheetList timesheets={timesheets} onDelete={handleDelete} onEdit={handleEdit} />}
        />
        <Route path="/form" element={<TimesheetForm />} />
      </Routes>
    </Router>
  );
}

export default App;
