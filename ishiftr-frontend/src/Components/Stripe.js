import React, { Component } from "react";

import {

 injectStripe,

 CardNumberElement,

 CardExpiryElement,

 CardCVCElement

} from "react-stripe-elements";

import "../css/stripe.css";

import axios from "axios";



const authToken = localStorage.getItem("authToken");

const id = localStorage.getItem("id");



const config = {

 headers: {

   Authorization: "Bearer " + authToken

 }

};



class CheckoutForm extends React.Component {

 handleToken = ev => {
  ev.preventDefault();
   this.props.stripe.createToken({ name: "Jenny Rosen" }).then(({ token }) => {
     console.log("Token: ", token);

     axios.post(`https://ishiftr-db.herokuapp.com/api/${id}/charge`, token, config).then(res => {

       console.log(res.data);

     });

   });

 };



 render() {

   return (

     <div>

       <h3>Enter Your Payment Info Below:</h3>

       <div className="cardNumber">

        

         <CardNumberElement className="cardInput" placeholder="CC#" />

         <CardExpiryElement className="cardInput" placeholder="EXP" />

         <CardCVCElement className="cardInput" placeholder="CVV" />

         <button className="buybutton" onClick={this.handleToken}>

           Buy Now

         </button>

        

       </div>

     </div>

   );

 }

}



export default injectStripe(CheckoutForm);