import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../css/signup.css';

class SignUp extends Component {
    // TODO: create Admin Sign up --first-- BackLog Employee SignUp

    render() {
        return (
            <div className="row form-container">
                <div>
                    <h3>Please register for an account with your email</h3>
                </div>
                <Form className = "form">
                    <FormGroup row>
                        <Label sm ={4} for="email">Email:</Label>
                        <Col sm ={8}>
                            <Input type="email" name="email" id="#email" placeholder="enter email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="password" id="#password" placeholder="enter password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="re-password">Re-pass:</Label>
                        <Col sm ={8}>
                            <Input type="re-password" name="re-password" id="#re-password" placeholder="Retype password" />
                        </Col>
                    </FormGroup>
                    <Button color = "primary">Register</Button>
                </Form>
            </div>
        );
    }
}

export default SignUp;
