import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Button} from 'reactstrap';
import '../css/CreateSchedule.css';
import axios from 'axios';

const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

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
    

    handleFormChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    
    }

    onSubmit = (e) => {
        e.preventDefault();
        let formData = this.state;
        console.log(formData.day);
        axios.post(`http://localhost:5000/api/createSchedule/${id}`, {
                day: formData.day,
                date: formData.date,
                startTime: formData.startTime,
                endTime: formData.endTime,
                //duplicate: formData.duplicate,
                //autoAsign: formData.autoAsign,
            }, config)
            .then(response => {
            })
            .catch(error => { console.log('Error: could not save data to db') });         
    }
    

    render() {
        return (               
            <div className = 'row justify-content-center'>              
                <div className = 'col col-8 justify-content-center'>
                    <form className = 'mb-2' onChange = {this.handleFormChange}>
                        <span className = 'mr-3'>Date: </span>
                        <input className = 'px-3' type="date" name="date"/>
                    </form>
                    <form className = 'mb-3' onChange = {this.handleFormChange}>
                            <span className = 'mr-2'>Time: </span>  
                        <input type="time" name="startTime" value = {this.state.startTime}/>
                            <span>To </span> 
                        <input type="time" name="endTime" value = {this.state.endTime}/>
                    </form>
                        <form className = 'mb-3' onChange = {this.handleFormChange} onSubmit = {this.onSubmit}>
                            <div className = 'mb-4'>
                                <span className ='mr-2'>Day: </span>
                                <input type="radio" name="day" value="Monday"/>M
                                <input type="radio" name="day" value="Tuesday"/>T
                                <input type="radio" name="day" value="Wednesday"/>W 
                                <input type="radio" name="day" value="Thursday"/>Th<br/>
                                <input type="radio" name="day" value="Friday"/>F
                                <input type="radio" name="day" value="Saturday"/>SAT
                                <input type="radio" name="day" value="Sunday"/>S<br/>
                            </div>

                            <div className = 'mb-3'>
                                <input type="checkbox" name="duplicate" value="duplicate"/> Duplicate Previous week Schedule<br/>
                                <input type="checkbox" name="autoAsign" value="autoAsign"/> Auto Asign Shifts
                            </div>
                            <Button color='primary' className='btnGen mb-3 px-5' type="submit">Generate Schedule</Button>
                    </form>  
                </div>   
            </div>                                
        );
    }
}

export default CreateSchedule;
