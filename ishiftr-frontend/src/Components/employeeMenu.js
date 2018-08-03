import React, { Component } from 'react';
import '../css/employeesMenu.css';
import { Link, withRouter } from 'react-router-dom';

class EmployeeMenu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <Link to="/Dashboard"><li className="empSettings"><i className="far fa-list-alt mr-2 fa-2x"></i>Dashboard</li></Link>
                    <Link to="admin-dashboard/Settings"><li className="empSettings"><i className="fas fa-sliders-h mr-2 fa-2x"></i> Settings</li></Link>
                </ul>
            </div>
        );
    }
}

export default withRouter(EmployeeMenu);