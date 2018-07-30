import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
axios.defaults.withCredentials = true;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',            
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.signUpHandler = this.signUpHandler.bind(this);
    }
    // TODO: create Admin Sign up --first-- BackLog Employee SignUp

    // config: { headers: {'Content-Type': 'multipart/form-data' }}
    inputHandler = (event) => {
        event.preventDefault();
        let new_state = this.state;
        new_state[event.target.name] = event.target.value;
        this.setState({ new_state })
    }


    signUpHandler = (e) => {
        e.preventDefault();        
        // axios.post('https://ishiftr-db.herokuapp.com/', formData, {
        console.log(this.props);
        axios.post('https://ishiftr-db.herokuapp.com/api/register',this.state)
        .then((res) =>{
            console.log(res);
            this.props.history.push('/')
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
                <Form className = "form" onChange={this.inputHandler} onSubmit={this.signUpHandler}>
                    <FormGroup row>
                        <Label sm ={4} for="username">Username:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.username} type="text" name="username" id="#username" placeholder="Choose a username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="firstName">First Name:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.firstName} type="text" name="firstName" id="#firstname" placeholder="First Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="lastName">Last Name:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.lastName} type="text" name="lastName" id="#lastname" placeholder="Last Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm ={4} for="email">Email:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.email}type="email" name="email" id="#email" placeholder="Enter Your Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.password} type="password" name="password" id="#password" placeholder="Enter a password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="phoneNumber">Phone Number:</Label>
                        <Col sm ={8}>
                            <Input value={this.state.phoneNumber} type="tel" data-country="US" name="phoneNumber" id="#phonenumber" placeholder="Area Code First" />
                        </Col>
                    </FormGroup>
                    <Button color = "primary" type="submit">Register</Button> <br />
                    <Link to="/"><Button color = "primary">Go Back</Button></Link>
                </Form>
            </div>
        );
    }
}

export default withRouter(SignUp);
