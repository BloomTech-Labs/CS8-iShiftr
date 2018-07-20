import React, { Component } from 'react';
import '../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="/ShiftSchedule">Calendar</a></li>
                    <li><a href="/Employees">Employees</a></li>
                    <li><a href="/Create">Create Schedule</a></li>
                    <li><a href="/Billing">Billing</a></li>
                    <li><a href="/Settings">Settings</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
