import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import SignUp from './Components/Signup';
import Signin from './Components/SignIn';
import ShiftSchedule from './Components/ShiftSchedule';
import EmployeesList from './Components/EmployeesList';
//import SignIn from './Components/SignIn';
// import Employees from './Components/Employees';
import CreateSchedule from './Components/CreateSchedule';
import Settings from './Components/Settings';
import Billing from './Components/Billing';
import AddEmployee from './Components/AddEmployee';
import Dashboard from './Components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/SignUp" render={props => <SignUp {...props}/>} />
          <Route path="/Signin" component={Signin} />
          <Route path="/ShiftSchedule" component={ShiftSchedule} />
          <Route path="/Employees" component={EmployeesList} />
          <Route path="/Create" component={CreateSchedule} />
          <Route path="/Billing" component={Billing} />
          <Route path="/Settings" component={Settings} />
          <Route path="/AddEmployee" component={AddEmployee} />
          <Route path="/Dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
