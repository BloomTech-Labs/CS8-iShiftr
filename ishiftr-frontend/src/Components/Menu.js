import React, { Component } from 'react';
import '../Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Employees</a></li>
                    <li><a href="#">Create Schedule</a></li>
                    <li><a href="#">Billing</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
