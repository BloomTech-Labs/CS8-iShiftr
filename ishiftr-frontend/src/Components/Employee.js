import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../css/employee.css';

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


  componentDidMount(){
    this.setState({
      employee: this.props.employee
    })
  }

  render() {

        let newDate = new Date(this.state.employee.timeOffDate);
        let day = newDate.getDate() + 1;
        let month= newDate.getMonth() + 1;
        let year = newDate.getFullYear()
        let timeOffDate = `${month}-${day}-${year}`;
        console.log(timeOffDate)
    
    const id =  this.props.employee._id;
    return (
      <div className = 'px-2'>       
            <div color="primary" className ='card p-4 border border-dark rounded'>
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
                <div>
                  <form>
                  <p className ='font-weight-bold my-0'>{this.props.employee.firstName} {this.props.employee.lastName}</p>
                  <p className ='my-0'>{this.props.employee.email}</p>
                  <p className ='my-0'>{this.props.employee.phoneNumber}</p>
                  </form>                  
                </div>
                <form>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>{this.props.employee.availability}</p>
                        <p>{this.props.employee.availableHours}</p>
                    </fieldset>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <div>


                          {timeOffDate}  <input className = 'ml-2' type="checkbox" name="vehicle" value={this.state.employee.timeOffDate} /><span className = 'ml-2'>Approved</span><br/>
                        
                        </div>                                               
                    </fieldset>
                </form>
            </div>
      </div>  
    )    
  }
}

export default Employee;
