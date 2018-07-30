import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';

class EmployeeSignin extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.loginHandler = this.loginHandler.bind(this);

    }
    
    inputHandler = (event) => {
        event.preventDefault();
        let new_state = this.state;
        new_state[event.target.name] = event.target.value;
        this.setState({ new_state })
    }

    loginHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/api/employeeLogin', this.state)
        .then(response => {
            console.log('response, response.data', response);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('id', response.data.id);
                this.props.history.push('/Dashboard');
        })
        .catch(err => {
            console.log('sign in error', err);
        });
    };
    
    render() {
        return (
            <div>
                <Form className = "form" onChange={this.inputHandler} onSubmit={this.loginHandler}>
                    <p>Employees sign in here</p>
                    <FormGroup row>
                        <Label sm ={4} for="username">Username:</Label>
                        <Col sm ={8}>
                            <Input type="text" name="username" id="#username" placeholder="enter username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm = {4}for="password">Password:</Label>
                        <Col sm ={8}>
                            <Input type="password" name="password" id="#password" placeholder="enter password" />
                        </Col>
                    </FormGroup>
                    <Button color = "primary" type="submit">Sign In</Button> <br />
                    <Link to="/"><Button color = "primary">Go Back</Button></Link>
                </Form>
            </div>
        );
    }
}

export default withRouter(EmployeeSignin);
