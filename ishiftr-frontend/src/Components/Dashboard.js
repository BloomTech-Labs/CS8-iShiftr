import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import axios from 'axios';
import SignOut from "./Signout";
import EmployeeMenu from "../Components/employeeMenu";
import { Breadcrumb, BreadcrumbItem, Container, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Dashboard.css";

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
      timeOffDate: Date,
      timeOffReason: ''
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/employee/${id}`, config)
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
    axios.put(`http://localhost:5000/api/employee/${id}/editEmployee`, {
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
    console.log(this.state.employee);
    return (
      <Container className="topContainer">
        <div className="row-header">
          <div>
            <EmployeeMenu />
          </div>
        </div>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4" />
          <Col sm="4" />

          <form>
            <p>Welcome, {this.state.employee.firstName} {this.state.employee.lastName}!</p>
              <fieldset className="fieldset">
                <legend className="legend legend-1">Assigned Shifts</legend>
                <p>assigned dates will go here</p>
              </fieldset>
          </form>

          <Col sm="6">
            <form>
              <fieldset className="fieldset">
                <legend className="legend">Time Off Approved</legend>
                <p>approved dates</p>
              </fieldset>
            </form>
          </Col>
          <Col sm="6" />

          <fieldset className="fieldset">
            <legend className="legend">Submit Time Off Request</legend>

            <Form onChange = {this.handleChange} onSubmit={this.handleClick}>
              <FormGroup>
                <Label htmlFor="timeOffDate">Date</Label>
                <Input type="date" name="timeOffDate" id="date" placeholder="date" value = {this.state.timeOffDate} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="timeOffReason">Reason</Label>
                <Input
                  type="reason"
                  name="timeOffReason"
                  id="reason"
                  placeholder="reason"
                  value ={this.state.timeOffReason}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>

          </fieldset>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
