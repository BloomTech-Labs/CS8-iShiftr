import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {CardText} from 'reactstrap';
import moment from 'moment';
import '../css/employee.css';
import axios from '../../node_modules/axios';
//const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

class Employee extends Component {
  constructor(props){
    super(props)
    this.state= {
      employee: '',
      isDisabled: false
    }
  }

  onDelete = () => {
    this.props.onDelete(this.props.employee._id)
  }

  // onEdit = (id, obj) => {
  //   axios.put(`http://localhost:5001/api/employee/${id}/editEmployee`, obj, config)
  //   .then(res => {
  //     this.setState({
  //       msg: res.data.Message
  //     })
  //   })
  // }

  componentDidMount(){
    this.setState({
      employee: this.props.employee
    })
  }

  render() {
    
    const id =  this.props.employee._id;
    return (
      <div className = 'px-2'>       
            <div body outline color="primary" className ='card p-4 border border-dark rounded'>
                  <div className = 'icons'>
                    <Link to = {`/admin-dashboard/editEmployee/${id}`}>
                      <div onClick={this.onEdit}>
                        <i className="fas fa-pencil-alt"></i>
                      </div> 
                    </Link>
                    <div onClick={this.onDelete}>
                      <i className="far fa-trash-alt "></i>
                    </div>                
                  </div>
                <CardText>
                  <form>
                  <div className ='font-weight-bold my-0'>{this.props.employee.firstName} {this.props.employee.lastName}</div>
                  <div className ='my-0'>{this.props.employee.email}</div>
                  <div className ='my-0'>{this.props.employee.phoneNumber}</div>
                  </form>                  
                </CardText>
                <form>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>{this.props.employee.availability}</p>
                        <p>{this.props.employee.availableHours}</p>
                    </fieldset>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <div>


                          {this.state.employee.timeOffDate}  <input className = 'ml-2' type="checkbox" name="vehicle" value={this.state.employee.timeOffDate} /><span className = 'ml-2'>Approved</span><br/>
                          July 20th:  <input className = 'ml-2' type="checkbox" name="vehicle" value="coming from state" /><span className = 'ml-2'>Approved</span>                            
                        
                        </div>                                               
                    </fieldset>
                </form>
            </div>
      </div>  
    )    
  }
}

export default Employee;
