import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../css/stripe.css';
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        complete: false
    }
    // this.submit = this.submit.bind(this);
  }

//   async submit(e) {
    // User clicked submit
    // e.preventDefault();
    // const {token} = await this.props.stripe.createToken({name: "Name"});
    // const response = await fetch("/charge", {
    //     method: "POST",
    //     headers: {"Content-Type": "text/plain"},
    //     body: token.id
    // });

    // if (response.ok) 
    // this.setState({
    //     complete: true        
    // });
    // console.log("Purchase Complete!")
    // }

  render() {
    return (
      <div>
        <h3>Enter Your Payment Info Below:</h3>
        <div className="cardNumber">        
         <CardElement  />       
        </div>         
        <button className="buybutton" onClick={this.submit}>Buy Now</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);