import React, { useState } from 'react';
import axios from 'axios';

const TimesheetForm = () => {
  const [formData, setFormData] = useState({
    // Define form fields here (e.g., date, hours, project, etc.)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/timesheet/add', formData)
      .then((res) => {
        console.log(res.data);
        // Optionally, you can redirect or perform other actions after submission
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  return (
    <div>
      <h2>Timesheet Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form input fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TimesheetForm;
