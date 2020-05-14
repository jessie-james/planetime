// CheckoutForm.js 
// ==============================

// imports
import React, { useState, } from 'react';
import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import options from "./ConfirmOptions"

// component

const CheckoutForm = props => {

  let history = useHistory()

  // send paymenet fucntionos
  const sendPayment = async (ev) => {

    let { token } = await props.stripe.createToken({ name: "Name" });

    axios.post('/charge', {
      headers: { "Content-Type": "text/plain" },
      source: token.id,
      amount: "1000",
      receipt_email: "fakeemail@lies.com"

    }

    ).then(res => {
      if (res.status === 200) {
        console.log(res)
        setComplete(!complete)

      }
      history.push("charged")
    })
      .catch(err => {
        console.log(err)
        alert("Payment Unsuccessfu")
      })
  }

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    confirmAlert(options(sendPayment)); // uses an "options" function to return an object that calls the send Payment Function if the user clicks "yes" on confirmation
  }

  const [complete, setComplete] = useState(false)

  // render/return
  return (
    <div>
      <p>Enter you credit card info here</p>
      <p style={{ color: "red" }}>don't really enter your credit info you dingdongs this is still in the beta!</p>
      <form action="">
        <CardElement />
        <button onClick={handleSubmit}>Purchase</button>
      </form>
    </div>

  )
}

// exports
export default injectStripe(CheckoutForm)
