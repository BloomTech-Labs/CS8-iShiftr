import React from 'react';
import Menu from '../Components/Menu';
// import Calendar from './Calendar';
import '../css/ShiftSchedule.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import SignOut from './Signout';
import DragDropContext from './TestCal';

class ShiftSchedule extends React.Component {
    render() {
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Schedule</BreadcrumbItem>
                </Breadcrumb>
                <Row className="row-signout">
                    <SignOut />
                </Row>
                <Row>
                    <Menu />               
                    <Col>
                        {/* <Calendar /> */}
                        <DragDropContext />
                    </Col>
                </Row>                                
            </Container>
        );
    }
}

export default ShiftSchedule;
