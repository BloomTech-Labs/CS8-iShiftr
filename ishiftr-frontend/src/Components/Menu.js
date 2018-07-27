import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <Link to = '/ShiftSchedule'>Calendar</Link>
                    <Link to = '/Employees'>Employees</Link>
                    <Link to = '/Create'>Create Schedule</Link>
                    <Link to = '/Billing'>Billing</Link>
                    <Link to = '/Settings'>Settings</Link>
                </ul>
            </div>
        );
    }
}

export default Menu;
