import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import SignOut from './Signout';
import Menu from '../Components/Menu';
import '../css/ShiftSchedule.css';
import CheckoutForm from './Stripe';
import {Elements, StripeProvider} from 'react-stripe-elements';
import '../css/stripe.css';

class Billing extends Component {
    render() {
        return (
            <div className = 'container'>

                <div className = 'row-header'>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Schedule</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row-signout">
                        <SignOut />
                    </div>
                </div>

                <div className = 'editShift'>
                    <button>
                        <span>Edit Shift</span>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                </div>

                <div className = 'mcContainer'>
                    <Menu />
                        <StripeProvider apiKey="pk_test_LoKgukSNVPqOsgjhnhEwT100">
                            <div className="billing">
                                <h1>Billing</h1>
                                    <Elements>
                                        <CheckoutForm {...this.props} />
                                    </Elements>
                            </div>
                        </StripeProvider>              
                </div>                                
            </div>
        );
    }
}

export default Billing;
