import React from 'react';
import Menu from '../Components/Menu';
//import Calendar from './Calendar';
import '../css/ShiftSchedule.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Breadcrumb, BreadcrumbItem, Col, Container } from 'reactstrap';
// import { Form, FormGroup, Label, Input } from 'reactstrap';
import SignOut from './Signout';
import Employee from './Employee';
import '../css/employees.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        employees: []

        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit = (id, obj) => {
        axios.put(`https://ishiftr-db.herokuapp.com/api/editEmployee/${id}`, obj)
        .then((res) => {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log('there was an error editing employee', error);
        });
    }

    handleDelete(id){
        axios.delete(`https://ishiftr-db.herokuapp.com/api/deleteEmployee/${id}`, config)
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

    // toggle = () => {
    //     console.log('toggled');
    //     this.setState({
    //     modal: !this.state.modal
    //     });
    //     console.log('toggled again', this.state.modal);
    // }
    componentDidMount() {  
    
        axios.get(`https://ishiftr-db.herokuapp.com/api/${id}/employees`, config)
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
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employees</BreadcrumbItem>
                </Breadcrumb>
                <div className="row-signout">
                    <SignOut />
                </div>
                <div className="mcContainer">
                    <Menu />               
                    <Col className="employeesList">
                    {this.state.employees.map(employee => {
                        return (
                            <Employee key={employee._id} employee={employee} onEdit={this.handleEdit} onDelete={this.handleDelete} />
                        )
                    })}
                        
                        <Link to="/AddEmployee">
                            <button className ='addBtn'>
                                <span className = 'center'>
                                    <i style={{fontSize: "2em"}} className="fas fa-plus-circle"> </i> 
                                    Add Employee
                                </span>
                            </button>
                        </Link>                     
                    </Col>                    
                </div>                
            </Container>
        );
    }
}

export default EmployeesList;
