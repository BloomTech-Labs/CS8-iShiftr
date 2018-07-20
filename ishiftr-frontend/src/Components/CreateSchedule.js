import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Col} from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/ShiftSchedule.css';
import '../css/CreateSchedule.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CreateSchedule extends Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    render() {
        return (
            <Container className="topContainer">
                <div className="rowHeader">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Create Schedule</BreadcrumbItem>                    
                    </Breadcrumb>
                    <div className="row-signout">
                        <SignOut />                    
                    </div>
                </div>                
                <div>
                    <Menu />               
                    <Col>
                        <div>
                        <DatePicker
                            className="calendarPicker"
                            inline
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                        </div>
                    </Col>
                </div>                                
            </Container>
        );
    }
}

export default CreateSchedule;
