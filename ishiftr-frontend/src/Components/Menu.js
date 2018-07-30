import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <ul>
                    <Link to = '/admin-dashboard/ShiftSchedule'><span className='text-dark'><i className="far fa-calendar-alt mr-2 fa-2x"></i>Calendar</span></Link>
                    <Link to = '/admin-dashboard/Employees'><span className='text-dark'><i className="far fa-user mr-2 fa-2x"></i>Employees</span></Link>
                    <Link to = '/admin-dashboard/Create'><span className='text-dark'><i className="fab fa-creative-commons-remix mr-2 fa-2x"></i>Create Schedule</span></Link>
                    <Link to = '/admin-dashboard/Billing'><span className='text-dark'><i className="far fa-credit-card mr-2 fa-2x"></i>Billing</span></Link>
                    <Link to = '/admin-dashboard/Settings'><span className='text-dark'><i className="fas fa-sliders-h mr-2 fa-2x"></i>Settings</span></Link>
                </ul>
            </div>
        );
    }
}

export default Menu;
