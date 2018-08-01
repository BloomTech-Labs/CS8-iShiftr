import React, { Component } from 'react'
import { Route, withRouter, Link} from 'react-router-dom';
import ShiftSchedule from './ShiftSchedule';
import EmployeesList from './EmployeesList';
import CreateSchedule from './CreateSchedule';
import Billing from './Billing';
import Settings from './Settings';
import AddEmployee from './AddEmployee';
import Dashboard from './Dashboard';
import SignOut from './Signout';
import '../css/employerDashboard.css';
import Menu from './Menu';
import EditShift from './EditShift';

class EmployerDashboard extends Component {
  render() {
    let path = this.props.location.pathname.split('/');
    return (

        // A wrapper for all the contains of the dashboard 
        <div className = 'mx-5'>

            {/* A row for the breadcrumb and signout button*/}
            <div className='row mt-1'>
                <div className='col col-11'>
                    <div className = 'breadcrumb bg-white px-0'>
                        <Link to ='/admin-dashboard' className = 'breadcrumb-item'>Dashboard</Link>
                        <li className = 'breadcrumb-item active'>{path[2]}</li>
                    </div>
                </div>
                <div className="col col-1">
                    <SignOut />
                </div>
            </div>

            {/* A row for the breadcrumb and signout button*/}
            <div className='row mt-4'>
                <div className='col col-2 border-right'>
                    <Menu />  
                </div>
                <div className='col col-10'>
                    <Route path="/admin-dashboard/ShiftSchedule" component={ShiftSchedule} />
                    <Route path="/admin-dashboard/Employees" component={EmployeesList} />
                    <Route path="/admin-dashboard/Create" component={CreateSchedule} />
                    <Route path="/admin-dashboard/Billing" component={Billing} />
                    <Route path="/admin-dashboard/Settings" component={Settings} />
                    <Route path="/admin-dashboard/AddEmployee" component={AddEmployee} />
                    <Route path = "/admin-dashboard/editShift" component = {EditShift} />
                    <Route path="/Dashboard" component={Dashboard} />
                </div>

            </div>
        </div>
    );
  }
}

export default withRouter(EmployerDashboard);
