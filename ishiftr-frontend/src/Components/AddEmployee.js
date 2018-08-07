import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/AddEmployee.css';
import { Link } from 'react-router-dom';
//import employees from '../testEmployees';
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
            workHours: '',
            username: '',
            password: ''
        };
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createEmployee = this.createEmployee.bind(this);
        
    }


    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
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
                'Authorization': "Bearer " + authToken            
            },
        };
        axios.post(`https://ishiftr-db.herokuapp.com/api/${id}/createEmployee`, {
           email: this.state.email,
           firstName: this.state.firstName,
           lastName: this.state.lastName,
           phoneNumber: this.state.phoneNumber,
           availability: this.state.availability,
           availableHours: this.state.availableHours,
           workHours: this.state.workHours,
           username: this.state.username,
           password: this.state.password
        }, config)
        .then((res) => {
            console.log(res.data);
            this.props.history.push('/admin-dashboard/Employees');
        })
        .catch(function (error) {
            console.log('there is an error', error);
        });
    }

    render() {
        return (            
            <div className = 'row justify-content-center'>
                <Form className ='col col-6 py-4 border rounded' onChange={this.handleChange} onSubmit={this.createEmployee}>
                <FormGroup>
                <Label for="firstName">Employee First Name</Label>
                <Input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="enter employee's first name" required />
                </FormGroup>
                <FormGroup>
                <Label for="lastName">Employee Last Name</Label>
                <Input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="enter employee's last name" required />
                </FormGroup>
                <FormGroup>
                <Label for="email">Employee Email</Label>
                <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="enter employee's email" required />
                </FormGroup>
                <FormGroup>
                <Label for="phoneNumber">Employee Phone Number</Label>
                <Input onChange={this.handleChange} value={this.state.phoneNumber} type="text" name="phoneNumber" id="phoneNumber" placeholder="enter employee's phone number" required />
                </FormGroup>
                <FormGroup>
                <Label for="availability">Employee Availability</Label>
                <Input onChange={this.handleChange} value={this.state.availability} type="text" name="availability" id="availability" placeholder="enter day of availablity for employee (e.g, Monday)" required />
                </FormGroup>
                <FormGroup>
                <Label for="availableHours">Employee Available Hours</Label>
                <Input onChange={this.handleChange} value={this.state.availableHours} type="text" name="availableHours" id="availableHours" placeholder="enter hours (e.g 9-5)" required />
                </FormGroup>
                <FormGroup>
                <Label for="username">Employee Username</Label>
                <Input onChange={this.handleChange} value={this.state.username} type="text" name="username" id="username" placeholder="choose a username for your employee" required />
                </FormGroup>
                <FormGroup>
                <Label for="password">Employee Password</Label>
                <Input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" placeholder="choose a password for your employee" required />
                </FormGroup>
                <FormGroup>
                    <div className = 'col col-12'>            
                        
                        <Button type="submit" className="backButton mr-5 ml-1 col col-5">Add Employee</Button>
                                        
                        <Link to="/admin-dashboard/Employees">
                            <Button className="backButton col col-5 ml-4">Cancel</Button>
                        </Link>
                        
                    </div>
                </FormGroup>                            
                </Form>
            
               
            </div>      
        );
    }
}

export default AddEmployee;




