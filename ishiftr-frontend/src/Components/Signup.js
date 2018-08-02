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
        axios.post('http://localhost:5000/api/register',this.state)
        .then((res) =>{
            console.log(res);
            this.props.history.push('/Signin')
        })
        .catch(function (error) {
            console.log('there is an error signing up', error);
        });
    }


    render() {
        return (
            <div className="row">
               {/* <div className = 'col col-12'>
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
        </div>*/}

            <form onChange={this.inputHandler} onSubmit={this.signUpHandler} className = 'row center col-12 '>
                <div className="col col-6 center py-4">
                    <div className = 'col col-8 center'>
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <p>Already have an account? <Link to="/Signin" style={{color:"dodgerblue"}}>Sign In</Link></p>
                    </div>
                        <hr/>
                    <div>
                        <label for="username"><b>Username:</b></label>
                        <input value={this.state.username} type="text" name="username" id="username" placeholder="Choose a username" required />
                        <label for="firstName"><b>First Name:</b></label>
                        <input value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="First Name" required />
                        <label for="lastName"><b>Last Name:</b></label>
                        <input value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                        <label for="email"><b>Email:</b></label>
                        <input value={this.state.email} type="text" name="email" id="email" placeholder="Your email" required />
                        <label for="password"><b>Password:</b></label>
                        <input value={this.state.password} type="text" name="password" id="password" placeholder="Password" required />
                        <label for="phoneNumber"><b>Phone Number:</b></label>
                        <input value={this.state.phoneNumber} type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter a phone number" required />                                    

                        <div className="clearfix">
                            <button type="submit" class="signupbtn">Sign Up</button>
                            <Link to='/'><button type="button" class="cancelbtn">Go Back</button></Link>
                            
                        </div>
                    </div>
                </div>
                    
            </form>
        </div>
        );
    }
}

export default withRouter(SignUp);
