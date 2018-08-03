import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import { Route, withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import EmployeeMenu from "../Components/employeeMenu";
import { Container, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Dashboard.css";
import SignOut from './Signout';
import Settings from './Settings';

const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: '',
      timeOffDate: null,
      timeOffReason: ''
    }
  }

  componentDidMount(){
    axios.get(`https://ishiftr-db.herokuapp.com/api/employee/${id}`, config)
        .then((res) => {
            console.log(res.data);
            this.setState({
                employee : res.data
            })
        })
        .catch(function (error) {
            console.log('there is an error', error);
        });
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    axios.put(`https://ishiftr-db.herokuapp.com/api/employee/${id}/editEmployee`, {
      timeOffDate: this.state.timeOffDate,
      timeOffReason: this.state.timeOffReason
    }, config)
        .then((res) => {
            console.log(res.data);
            this.setState({
                employee : res.data
            })
        })
        .catch(function (error) {
            console.log('there is an error', error);
    });
    console.log(this.state.timeOffDate);

  }
  render() {
    let path = this.props.location.pathname.split('/');
    let firstName = this.state.employee.firstName;
    let lastName = this.state.employee.lastName;
    return (
      // A wrapper for all the contains of the dashboard 
      <div className = 'mx-5'>

      {/* A row for the breadcrumb and signout button*/}
      <div className='row mt-4'>
          <div className='col col-11'>
              <div className = 'breadcrumb bg-white px-0'>
                  <Link to ='/Dashboard' className = 'breadcrumb-item'>Dashboard</Link>
                  <li className = 'breadcrumb-item active'>{path[2]}</li>
              </div>
          </div>
          <div className="col col-1">
              <SignOut />
          </div>
      </div>
     
      <div className="row mt-4">
        <div className="col col-2 border-right">          
            <EmployeeMenu />          
        </div>
        <div className='col col-10'>
                    <Route exact path = '/dashboard' 
                        render={() => 
                        <div className = 'py-5 col col-11 empWelcome '>
                        <h1>Welcome to your dashboard, <span className = 'capitalText'>{firstName} {lastName}</span>!</h1><br />                                        
                        
                        
                            {/* <div className = 'traspBackground'>
                                <h1>Welcome to your dashboard, <span className = 'capitalText'>{firstName} {lastName}</span>!</h1>
                                <p className="selection">Make a selection from the menu items on the left.</p>                                
                            </div> */}
                        </div>

                     }
                     />
                     <div className="assignedShift">
                     <div className="shiftBox">
                          <fieldset className="fieldset">
                            <legend className="legend ">Assigned Shifts</legend>
                            <p>Assigned dates will go here</p>
                          </fieldset>
                          </div>
                          <div className="timeOff">
                        <fieldset className="fieldset">                        
                          <legend className="legend">Time Off Approved</legend>
                          <p>approved dates</p>
                        </fieldset>
                        </div>
                        <div className="submitTime">
                        <fieldset className="fieldset">
                        <legend className="legend">Submit Time Off Request</legend>

                        <Form onChange = {this.handleChange} onSubmit={this.handleClick}>
                          <FormGroup>
                            <label htmlFor="timeOffDate">Date</label>
                            <input type="date" name="timeOffDate" id="date" placeholder="date" value = {this.state.timeOffDate} />
                          </FormGroup>
                          <FormGroup>
                            <label htmlFor="timeOffReason">Reason</label>
                            <input
                              type="text"
                              name="timeOffReason"
                              id="reason"
                              placeholder="reason"
                              value ={this.state.timeOffReason}
                            />
                          </FormGroup>
                          <Button type="submit">Submit</Button>
                        </Form>

                      </fieldset>
                      </div>
                        </div>                  
                </div>       
          </div>
          </div>
    );
  }
}

export default withRouter(Dashboard);
