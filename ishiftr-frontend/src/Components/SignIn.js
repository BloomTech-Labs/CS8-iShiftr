import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import EmployeeSignin from './employeeSignin';

class Signin extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.loginHandler = this.loginHandler.bind(this);

    }
    // Todo: ternary operator for signout

    inputHandler = (event) => {
        event.preventDefault();
        let new_state = this.state;
        new_state[event.target.name] = event.target.value;
        this.setState({ new_state })
    }

    loginHandler(e) {
        e.preventDefault();
        // this.setState({
        //     username: this.state.username,
        //     password: this.state.password
        // })
        axios.post('https://ishiftr-db.herokuapp.com/api/employerLogin', this.state)
        .then(response => {
            console.log('response, response.data', response);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('id', response.data.id);
                this.props.history.push('/admin-dashboard/ShiftSchedule');
        })
        .catch(err => {
            console.log('sign in error', err);
        });
    };
    
    render() {
        return (
            <div>
            <div>
                
                <Form className = "form" onChange={this.inputHandler} onSubmit={this.loginHandler}>
                    <p>Employers sign in here</p>
                    <FormGroup row>
                        <Label sm ={4} for="username">Username:</Label>
                        <Col sm ={8}>
                            <Input type="text" name="username" id="#employerUsername" placeholder="enter username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="password" id="#employerPassword" placeholder="enter password" />
                        </Col>
                    </FormGroup>
                    {/* <FormGroup row>
                        <Label sm = {4}for="re-password">Re-pass:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="re-password" id="#re-password" placeholder="Retype password" />
                        </Col>
                    </FormGroup> */}
                    <Button color = "primary" type="submit">Sign In</Button> <br />
                    <Link to="/"><Button color = "primary">Go Back</Button></Link>
                </Form>
            </div>
            <EmployeeSignin />
            </div>
        );
    }
}

export default Signin;


  