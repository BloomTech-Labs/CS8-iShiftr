import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Employee from './Employee';
import Loading from './Loading';
import '../css/employeesList.css';


const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};

class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        employees: ''

        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit = (id, obj) => {
        axios.put(`http://localhost:5000/api/editEmployee/${id}`, obj)
        .then((res) => {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log('there was an error editing employee', error);
        });
    }

    handleDelete(id){
        axios.delete(`http://localhost:5000/api/deleteEmployee/${id}`, config)
        .then((res) => {
            console.log(res.data);
            this.setState({
                employees: this.state.employees
            })
        })
        .catch(function (error) {
            console.log('there was an error deleting employee', error);
        });
    }

    componentDidMount() {  
    
        axios.get(`http://localhost:5000/api/${id}/employees`, config)
        .then((res) => {
            console.log(res.data);
            this.setState({
                employees : res.data
            })
        })
        .catch(function (error) {
            console.log('there is an error', error);
        });
    }

    render() {
        return (
            <div className = 'pl-5'>            
                {
                    this.state.employees ? (           
                    <div className = 'row'>
                        {this.state.employees.map(employee => {
                            return (
                                <Employee key={employee._id} employee={employee} onEdit={this.handleEdit} onDelete={this.handleDelete} />
                            )
                        })}
                        
                        <Link to="/admin-dashboard/AddEmployee">
                            <div className ='addBtn'>
                                <span className = 'center'>
                                    <i style={{fontSize: "2em"}} className="fas fa-plus-circle"> </i> 
                                    Add Employee
                                </span>
                            </div>
                        </Link>                     
                    </div>
                    ) : (
                        <Loading />
                    )
                }                                   
            </div>
        );
    }
}

export default EmployeesList;
