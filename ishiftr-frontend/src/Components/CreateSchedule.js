import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Button} from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/CreateSchedule.css';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import TimeRange from 'react-time-range';
//import moment from 'moment';
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CreateSchedule extends Component {
    constructor (props) {
        super(props)
        this.state = {
          date: '',
          startTime: '',
          endTime: '',
          duplicate: '',
          autoAsign: '',
          day: '',

        };
      }
    
    // datePickerHandleChange =(date)=> {
    //     //let date = event.target.value
    //     this.setState({
    //       date: date
    //     });
    // }

    // timePickerHandleChage = (time) => {
    //     if(time.startTime && time.endTime) {
    //         this.setState({
    //             startTime: time.startTime,
    //             endTime: time.endTime
    //         })
    //     }
    // }

    // onStartTimeChange = (time) => {
    //     this.setState({
    //         startTime:  time
    //     })
    // }

    // onEndTimeChange = (time) => {
    //     this.setState({
    //         endTime: time
    //     })
    // }

    handleFormChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    
    }

    onSubmit = (e) => {
        e.preventDefault();
        let formData = this.state;
        axios.post(`https://localhost:5000/create`, {
                date: formData.date,
                startTime: formData.startTime,
                endTime: formData.endTime,
                duplicate: formData.duplicate,
                autoAsign: formData.autoAsign,
                day: formData.day,
            })
            .then(response => {
                this.props.history.push('/Employees')
            })
            .catch(error => { console.log('Error: could not save data to db') });         
    }
    

    render() {
        console.log(this.state.day, this.state.duplicate, this.state.autoAsign)
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
                <div className = 'container'>
                        <Menu />               
                        <div className = 'create-schedule'>

                        <form onChange = {this.handleFormChange}>
                            Date:
                            <input type="date" name="date"/>
                        </form>
                            {/*<DatePicker
                                className="calendarPicker"
                                inline
                                selected={this.state.date}
                                onChange={this.datePickerHandleChange}
                            />*/}
                        </div>
                        <div className = 'dataPicker'>
                            <div>
                                {/*<TimeRange
                                    startMoment={this.state.startTime}
                                    endMoment={this.state.endTime}
                                    onChange={this.timePickerHandleChage}
                                    onStartTimeChange={this.onStartTimeChange}
                                    onEndTimeChange = {this.onEndTimeChange}
                                />*/}
                                <form onChange = {this.handleFormChange}>
                                    <input type="time" name="startTime" value = {this.state.startTime}/>
                                    to 
                                    <input type="time" name="endTime" value = {this.state.endTime}/>
                                </form>
                            </div>
                                <form className ='daysForm' onChange = {this.handleFormChange} onSubmit = {this.onSubmit}>
                                    <input type="radio" name="day" value="Monday"/>M
                                    <input type="radio" name="day" value="Tuesday"/>T
                                    <input type="radio" name="day" value="Wednesday"/>W 
                                    <input type="radio" name="day" value="Thursday"/>Th<br/>
                                    <input type="radio" name="day" value="Friday"/>F
                                    <input type="radio" name="day" value="Saturday"/>SAT
                                    <input type="radio" name="day" value="Sunday"/>S<br/>

                                    <div className='checkboxes'>
                                        <input type="checkbox" name="duplicate" value="duplicate"/> Duplicate Previous week Schedule<br/>
                                        <input type="checkbox" name="autoAsign" value="autoAsign"/> Auto Asign Shifts
                                    </div>
                                    <Button color='primary' className='btnGen' type="submit">Generate Schedule</Button>
                                </form>  
                        </div>    
                </div>                                
            </Container>
        );
    }
}

export default CreateSchedule;
