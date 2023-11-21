import React, { useState } from 'react';
import axios from 'axios';

const TimesheetForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    hours: '',
    project: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form Data:', formData);
  
    axios.post('http://localhost:5000/timesheet/addSample', formData)
      .then((res) => {
        console.log(res.data);
        // Optionally, you can redirect or perform other actions after submission
      })
      .catch((err) => {
        console.error(`Error submitting form: ${err}`);
      });
  };
  

  return (
    <div>
      <h2>Timesheet Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />

        <label>Hours:</label>
        <input type="number" name="hours" value={formData.hours} onChange={handleChange} />

        <label>Project:</label>
        <input type="text" name="project" value={formData.project} onChange={handleChange} />

        {/* Add other form input fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TimesheetForm;