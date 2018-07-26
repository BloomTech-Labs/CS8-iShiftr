import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col} from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/ShiftSchedule.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const id = localStorage.getItem('id');

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employer: [],
            currentPassword:'',
            newPassword:''
        };
        this.passChanger = this.passChanger.bind(this);
    }

    validateForm() {
        return this.state.currentPassword.length > 0 && this.state.newPassword.length > 0;
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        };
        console.log(config, "  props: ", this.props);
        axios
            .get(`https://ishiftr-db.herokuapp.com/api/employer/${id}`, config)
            .then(response => {
                this.setState({ employer: response.data });
            })
            .catch(error => {
                console.log("There was an error fetching the employer's data", error);
            });
    }

    passChanger = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('authToken');
        
        const config = {
            headers: {
                Authorization: 'Bearer ${token}'
            },
        };
        axios
            .post(`https://ishiftr-db.herokuapp.com/api/${id}/editPassword`, config, this.state)
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                alert("There was an error changing the password");
            })
    }

    render() {
        return (
            <Container className="topContainer">
                <div className="rowHeader">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Settings</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="row-signout">
                        <SignOut />
                    </div>
                </div>
                <div>
                    <Menu />
                    <Col>
                        {this.state.employer.map(employer => {
                            return(
                                <div>
                                    <div>
                                        Email: {employer.email}
                                    </div>
                                    <div>
                                        Phone: {employer.phoneNumber}
                                    </div>
                                </div>
                            );
                        })}
                        
                        <div>
                            <Form onSubmit={this.passChanger} onChange={this.inputHandler}>
                                <FormGroup>
                                    <Label for="currentPassword">Current Password</Label>
                                    <Input required type="text" name="currentPassword" value={this.state.currentPassword} placeholder="Enter your current password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="newPassword">New Password</Label>
                                    <Input required type="newPassword" name="newPassword" value={this.state.newPassword} placeholder="Enter your new password" />
                                </FormGroup>
                                <Button disabled={!this.validateForm()}>Save</Button>
                            </Form>
                        </div>
                    </Col>
                </div>
            </Container>
        );
    }
}
export default Settings;