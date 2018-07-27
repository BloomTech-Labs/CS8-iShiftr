import React, { Component } from 'react';
import '../css/employeesMenu.css';

class EmployeeMenu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="/Dashboard">Dashboard</a></li>
                    <li><a href="/Settings">Settings</a></li>
                </ul>
            </div>
        );
    }
}

export default EmployeeMenu;