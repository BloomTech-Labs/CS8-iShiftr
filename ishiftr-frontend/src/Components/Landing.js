import React from 'react';
import '../css/Landing.css';
// import {Redirect} from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Landing extends React.Component {
// TODO: Create img carousel and more styling

    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     // modal: false
    //     // };

        
    // }

    // toggle = () => {
    //     console.log('toggled');
    //     this.setState({
    //     modal: !this.state.modal
    //     });
    //     console.log('toggled again', this.state.modal);
    // }

    
    // signIn = () => {
    //     this.toggle();
    //     // eslint-disable-next-line
    //     <Redirect to="/ShiftSchedule"/>
        
    // }

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="nav">
                    <ul className="buttons-header">
                        <Link to="/SignUp"><Button className="button-registration" color="primary">Sign Up</Button></Link>
                        {/* <Link to="/SignIn"><Button onClick={this.toggle} className="button-registration" color="primary">Sign in</Button></Link> */}
                        {/* <Button className="button-registration" onClick={this.toggle}>Sign In</Button> */}
                        <Link to="/SignIn"><Button className="button-registration">Sign In</Button></Link>
                    </ul>                  
                </div>

                <div className="landing-img">                  
                    <img src = {require('../assets/imgLanding.jpg')}  alt="placeholder" />                 
                </div>
                <div className="landing-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.                       
                    </p>
                    <div>
                        <Link to='/Schedule'><Button className="scheduleButton" color="primary"> Schedule Now </Button></Link>
                    </div>
                </div>
            </div>
            <div>
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Please sign in</ModalHeader> */}
                <Modal>
                <ModalHeader >Please sign in</ModalHeader>
                <ModalBody>
                    <Form className = "form-signin">
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
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick ={this.signIn} color="primary">Sign In</Button>{' '}
                </ModalFooter>
                </Modal>
            </div>
            </React.Fragment>
        );
    }
}

export default Landing;
