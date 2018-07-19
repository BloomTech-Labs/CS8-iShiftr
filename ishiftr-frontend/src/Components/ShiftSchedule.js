import React from 'react';
import Menu from '../Components/Menu';
// import Calendar from './Calendar';
import '../css/ShiftSchedule.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import SignOut from './Signout';
import DragDropContext from './TestCal';

class ShiftSchedule extends React.Component {
    render() {
        return (
            <Container className="topContainer">
                <div className="rowHeader">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Schedule</BreadcrumbItem>                    
                    </Breadcrumb>
                    <div className="row-signout">
                        <SignOut />
                        <a href="/Edit">Edit Shifts</a>                    
                    </div>
                </div>                
                <div className="calendar">
                    <Menu />               
                    <div className="cal">
                        {/* <Calendar /> */}
                        <DragDropContext />
                    </div>
                </div>                                
            </Container>
        );
    }
}

export default ShiftSchedule;
