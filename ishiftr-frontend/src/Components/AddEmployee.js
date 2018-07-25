import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Fade } from 'reactstrap';
import '../css/AddEmployee.css';
import { Link } from 'react-router-dom';
import employees from '../testEmployees';
import axios from 'axios';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false,
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            availability: '',
            availableHours: '',
            workHours: ''
        };
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createEmployee = this.createEmployee.bind(this);
        
    }


    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
    }

    handleAddEmployee(e) {
        e.preventDefault();
        this.setState({
          fadeIn: !this.state.fadeIn
            }        
        )
        
        console.log(this.state)
    }    

    createEmployee(e) {
        e.preventDefault();
        console.log(this.state)
        const id = localStorage.getItem('id');
        const authToken = localStorage.getItem('authToken');
        const config = {
        headers: {
            'Authorization': 'Bearer '+ authToken            
        },
    };
        axios.post(`https://ishiftr-db.herokuapp.com/api/${id}/createEmployee`, config, {
           email: this.state.email,
           firstName: this.state.firstName,
           lastName: this.state.lastName,
           phoneNumber: this.state.phoneNumber,
           availability: this.state.availability,
           availableHours: this.state.availableHours,
           workHours: this.state.workHours
        })
        .then((res) => {
            console.log(res.data);
            this.props.history.push('/Employees');
        })
        .catch(function (error) {
            console.log('there is an error', error);
        });
    }

    render() {
        return (            
            <Container>
            <Form onChange={this.handleChange} onSubmit={this.createEmployee}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="enter first name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="enter last name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange={this.handleChange} value={this.state.email} type="text" name="email" id="email" placeholder="enter email" />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone Number</Label>
          <Input onChange={this.handleChange} value={this.state.phoneNumber} type="number" name="phoneNumber" id="phoneNumber" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="availability">Availability</Label>
          <Input onChange={this.handleChange} value={this.state.availability} type="text" name="availability" id="availability" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="availableHours">Available Hours</Label>
          <Input onChange={this.handleChange} value={this.state.availableHours} type="text" name="availableHours" id="availableHours" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="workHours">Work Hours</Label>
          <Input onChange={this.handleChange} value={this.state.workHours} type="text" name="workHours" id="workHours" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
                    <div className="addButtons">            
                
                    <Button type="submit" outline color="success" className="backButton">Add Employee</Button>
                                
                <Link to="/Employees">
                    <Button outline color="success" className="backButton">Go Back</Button>
                </Link>
                
                </div>
                </FormGroup>                            
            </Form>
            
               
            </Container>      
        );
    }
}

export default AddEmployee;
