import React, { Component } from 'react';
import '../Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Calendar</li>
                    <li>Employees</li>
                    <li>Create Schedule</li>
                    <li>Billing</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
