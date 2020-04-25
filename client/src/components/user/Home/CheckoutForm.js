// CheckoutForm.js 
// ==============================

// imports
import React, {useState,} from 'react'
import axios from 'axios'
import {CardElement, injectStripe} from 'react-stripe-elements'


// component

const CheckoutForm = props => {
    const submit = async (ev) => {
        
        let {token} = await props.stripe.createToken({name: "Name"});
        console.log(token)
    
        axios.post('/charge', {
              headers: {"Content-Type": "text/plain"},
              source: token.id,
              amount: "500", 
              receipt_email: "fakeemail@lies.com"

        }
      ).then(res => {
        if(res.status === 200) {
          console.log(res)
          setComplete(!complete)
    
          }
        })
        .catch(err => console.log(err))
    }

    const [complete, setComplete] = useState(false)
    return (
        <div>
            <p>Enter you credit card info here</p>
            <p style={{color: "red"}}>don't really enter your credit info you dingdongs this is still in the beta!</p>
            <CardElement />
            <button onClick={submit}>Purchase</button>
        </div>

    )
}

// exports
export default injectStripe(CheckoutForm)
