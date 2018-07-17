import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Signup.css';

class SignUp extends Component {
    // TODO: create Admin Sign up --first-- BackLog Employee SignUp

    render() {
        return (
            <div className="form">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default SignUp;
