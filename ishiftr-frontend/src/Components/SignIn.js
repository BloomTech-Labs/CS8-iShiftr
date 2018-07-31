import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom'
import classnames from 'classnames';
import axios from 'axios';
import EmployeeSignin from './employeeSignin';
import '../css/signin.css'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            activeTab: '1'
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
        axios.post('http://localhost:5000/api/employerLogin', this.state)
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

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    
    render() {
        return (
            <div className='centerContent py-5'>
                <Nav tabs className = 'justify-content-center col-6' >
                    <NavItem className ='halfWidth'>
                        <NavLink
                        className ='fullWidth border-white' 
                        onClick={() => { this.toggle('1'); }}
                        >
                        Employer Sign In
                        </NavLink>
                    </NavItem>
                    <NavItem className='halfWidth'>
                        <NavLink

                        className ='fullWidth border-white'
                        onClick={() => { this.toggle('2'); }}
                        >
                        Employee Sign In
                        </NavLink>
                    </NavItem>
                </Nav>
            <TabContent activeTab={this.state.activeTab} className = 'col col-6 border border-danger'>
              <TabPane tabId="1" className = 'col-12'>
                <Row className = 'col-12 border border-dark'>                    
                  <Form className="row col-8" onChange={this.inputHandler} onSubmit={this.loginHandler}>
                    <FormGroup row>
                        <Label for="username">Username:</Label>
                        <Col>
                            <Input type="text" name="username" id="#employerUsername" placeholder="enter username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password">Password:</Label>
                        <Col>
                            <Input type="password" name="password" id="#employerPassword" placeholder="enter password" />
                        </Col>
                    </FormGroup>
                    <Button color = "primary" type="submit">Sign In</Button> <br />
                    <Link to="/"><Button color = "primary">Go Back</Button></Link>
                  </Form>
                </Row>
              </TabPane>

              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                  <EmployeeSignin />
                  </Col>
                </Row>
              </TabPane>


            </TabContent>
          </div>    
        );
    }
}

export default Signin;


  