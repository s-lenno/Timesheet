// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimesheetForm from './TimesheetForm';
import TimesheetList from './TimesheetList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<TimesheetForm />} />
        <Route path="/list" element={<TimesheetList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
