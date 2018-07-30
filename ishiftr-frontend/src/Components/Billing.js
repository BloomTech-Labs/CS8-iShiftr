import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import '../css/stripe.css';
import '../css/ShiftSchedule.css';
import CheckoutForm from './Stripe';

class Billing extends Component {
    render() {
        return (
            <div>
                <div className = 'mcContainer'>
                        <StripeProvider apiKey="pk_test_6CbxWkRuf3AOplwNMZEd6OPk">
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