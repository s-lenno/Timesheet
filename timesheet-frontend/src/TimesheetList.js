import React from 'react';

const TimesheetList = ({ timesheets, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Timesheet List</h2>
      <ul>
        {timesheets.map((timesheet) => (
          <li key={timesheet._id}>
            {timesheet.date} - {timesheet.hours} hours - {timesheet.project}
            <button onClick={() => onEdit(timesheet._id)}>Edit</button>
            <button onClick={() => onDelete(timesheet._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimesheetList;
