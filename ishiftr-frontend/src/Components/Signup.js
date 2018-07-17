import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }
        this.signUpHandler = this.signUpHandler.bind(this);
    }
    // TODO: create Admin Sign up --first-- BackLog Employee SignUp


    signUpHandler(e) {
        e.preventDefault();
        axios.post('https://ishiftr-db.herokuapp.com/api/employers', {
            username: this.state.username,
            password: this.state.password
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="row form-container">
                <div>
                    <h3>Please register for an account with your email</h3>
                </div>
                <Form className = "form" onSubmit={this.signUpHandler}>
                    <FormGroup row>
                        <Label sm ={4} for="email">Email:</Label>
                        <Col sm ={8}>
                            <Input type="email" name="email" id="#email" placeholder="enter your email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="password" id="#password" placeholder="enter your password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="re-password">Confirm Password:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="re-password" id="#re-password" placeholder="Retype your password" />
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
