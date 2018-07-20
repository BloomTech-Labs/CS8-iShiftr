import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col} from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/ShiftSchedule.css';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class CreateSchedule extends Component {
    render() {
        return (
            <Container className="topContainer">
                <div className="rowHeader">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Employees</BreadcrumbItem>                    
                    </Breadcrumb>
                    <div className="row-signout">
                        <SignOut />                    
                    </div>
                </div>                
                <div>
                    <Menu />               
                    <Col>
                        <div>
                        <SingleDatePicker
                            // date={this.state.date} // momentPropTypes.momentObj or null
                            // onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                            // focused={this.state.focused} // PropTypes.bool
                            // onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                            // id="your_unique_id" // PropTypes.string.isRequired,
                            />
                        </div>
                    </Col>
                </div>                                
            </Container>
        );
    }
}

export default CreateSchedule;
