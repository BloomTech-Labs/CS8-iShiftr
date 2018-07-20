import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',            
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }
        }
        this.signUpHandler = this.signUpHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    // TODO: create Admin Sign up --first-- BackLog Employee SignUp

    // config: { headers: {'Content-Type': 'multipart/form-data' }}
    handleInputChange(e) {
        let formData = {...this.state.formData};
        formData[e.target.name] = e.target.value;
        this.setState({ 
            formData 
        });
        console.log(this.state);
    }


    signUpHandler(e, formData) {
        e.preventDefault();        
        axios.post('https://ishiftr-db.herokuapp.com/', formData, {
            // headers: {'Access-Control-Allow-Origin': '*'}            
            // username: this.state.username,
            // password: this.state.password,
            // email: this.state.email,
            // firstName: this.state.firstName,
            // lastName: this.state.lastName,
            // phoneNumber: this.state.phoneNumber
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log('there is an error signing up', error);
        });
    }


    render() {
        return (
            <div className="row form-container">
                <div>
                    <h3>Please Register Your Account Below</h3>
                </div>
                <Form className = "form" onSubmit={this.signUpHandler}>
                    <FormGroup row>
                        <Label sm ={4} for="username">Username:</Label>
                        <Col sm ={8}>
                            <Input onChange={this.handleInputChange} value={this.state.username} type="text" name="username" id="#username" placeholder="Choose a username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="firstname">First Name:</Label>
                        <Col sm ={8}>
                            <Input  onChange={this.handleInputChange}  value={this.state.firstName} type="text" name="firstName" id="#firstname" placeholder="First Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="lastname">Last Name:</Label>
                        <Col sm ={8}>
                            <Input onChange={this.handleInputChange} value={this.state.lastName} type="text" name="lastName" id="#lastname" placeholder="Last Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="email">Email:</Label>
                        <Col sm ={8}>
                            <Input onChange={this.handleInputChange}  value={this.state.email}type="email" name="email" id="#email" placeholder="Enter Your Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input onChange={this.handleInputChange} value={this.state.password} type="password" name="password" id="#password" placeholder="Enter a password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="re-password">Phone Number:</Label>
                        <Col sm ={8}>
                            <Input onChange={this.handleInputChange} type="tel" data-country="US" name="phoneNumber" id="#phonenumber" placeholder="Area Code First" />
                        </Col>
                    </FormGroup>
                    <Button color = "primary" type="submit">Register</Button> <br />
                    <Link to="/"><Button color = "primary">Go Back</Button></Link>
                </Form>
            </div>
        );
    }
}

export default SignUp;
