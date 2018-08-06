import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import '../css/editShift.css'

const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

class EditShift extends Component {
    constructor(props){
        super(props)
        this.state = {
            schedules: [],
            deleteMsg:""
        }
    }

    handleDelete = (id) => {
        console.log("ID:", id);
        axios.delete(`http://localhost:5001/api/schedule/${id}`, config)
        .then((res) => {          
            this.setState({
                deletMsg: res.data.Message
            })
            this.componentDidMount();    
        })
        .catch(function (error) {
            console.log('there was an error deleting employee', error);
        });

    }

    componentDidMount(){
        axios.get(`http://localhost:5001/api/schedule/${id}`, config)
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        schedules : res.data
                    })
                })
                .catch(function (error) {
                    console.log('there is an error', error);
        });
    }

    render() {

        console.log(this.state.schedules);
        return (
            <div>
                {this.state.schedules.map(schedule =>{
                    return (
                        <div key = {schedule.key} className = 'editSchedule'>
                            <div>
                                <span className = 'mr-3'>{schedule.day}</span>
                                <span className = 'mr-3'>{schedule.date}</span>
                            </div>
                            <button onClick = {() => this.handleDelete(schedule._id)}>
                                <span>X</span>
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(EditShift);
