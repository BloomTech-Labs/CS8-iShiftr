import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import SignUp from './Components/Signup';
import Signin from './Components/SignIn';
import ShiftSchedule from './Components/ShiftSchedule';
//import SignIn from './Components/SignIn';


class App extends Component {
  render() {
    return (
      <div className="App">        
        <p className="App-intro">
        <Route exact path="/" component={ Landing } />        
        <Route path="/SignUp" component={ SignUp } />
        <Route path="/Signin" component={ Signin } />
        <Route path="/ShiftSchedule" component={ ShiftSchedule } />
        </p>
      </div>
    );
  }
}

export default App;
