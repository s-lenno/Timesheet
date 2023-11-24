import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import TimesheetForm from './TimesheetForm'; 
import TimesheetList from './TimesheetList'; 

const MainMenu = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <nav>
        <ul>
          <li>
            <Link to="/main/form">Timesheet Form</Link>
          </li>
          <li>
            <Link to="/main/list">Timesheet List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/main/form" component={TimesheetForm} />
        <Route path="/main/list" component={TimesheetList} />
        <Redirect from="/main" to="/main/form" />
      </Switch>
    </div>
  );
};

export default MainMenu;
