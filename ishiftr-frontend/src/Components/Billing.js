import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col} from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/ShiftSchedule.css';

class Billing extends Component {
    render() {
        return (
            <Container className="topContainer">
                <div className="rowHeader">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Billing</BreadcrumbItem>                    
                    </Breadcrumb>
                    <div className="row-signout">
                        <SignOut />                    
                    </div>
                </div>                
                <div>
                    <Menu />               
                    <Col>
                        <div>
                            
                        </div>
                    </Col>
                </div>                                
            </Container>
        );
    }
}

export default Billing;
