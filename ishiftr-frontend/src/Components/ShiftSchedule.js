import React from 'react';
import Menu from '../Components/Menu';
//import Calendar from './Calendar';
import '../css/ShiftSchedule.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Breadcrumb, BreadcrumbItem, Col } from 'reactstrap';
import SignOut from './Signout';
import DragDropContext from './TestCal';


class ShiftSchedule extends React.Component {
    render() {
        return (
            <div className = 'container'>

                <div className = 'row-header'>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Schedule</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row-signout">
                        <SignOut />
                    </div>
                </div>

                <div className = 'editShift'>
                    <button>
                        <span>Edit Shift</span>
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                </div>

                <div className = 'mcContainer'>
                    <Menu />               
                    <Col className = 'calendar'>
                        <DragDropContext />
                    </Col>
                </div>                                
            </div>
        );
    }
}

export default ShiftSchedule;
