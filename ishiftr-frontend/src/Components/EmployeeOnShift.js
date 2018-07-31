import React, { Component } from 'react'
//import axios from 'axios';

class EmployeeOnShift extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//           employees: [],
//           day: ''
//       }
//   }
//     componentDidMount(){
//             this.setState({
//                 employees: this.props.employees,
//                 day: this.props.day
//             })
//     }
  
  render(){
    console.log("from onshift", this.props.employees, this.props.day);
    let filteredEmployees = this.props.employees.filter(employee =>{
        return employee.availability === this.props.day;
    })
    console.log(filteredEmployees);
    
      return (
        <div>
            {filteredEmployees.map((employee, index) =>{
                return(
                    <div key = {index} className = 'employee border rounded'>
                        <div className = 'employee-name'>{employee.firstName}</div>
                        <div>{employee.availability}</div>
                        <div>{employee.availableHours}</div>
                    </div>
                ) 
            })} 
        </div>
      );

    }

}


export default EmployeeOnShift;