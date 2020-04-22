import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ClientProvider from './context/ClientProvider.js'
import UserProvider from './context/UserProvider.js'
// import { StripeProvider, Elements } from 'react-stripe-elements'

ReactDOM.render(
//    <StripeProvider 
    /* stripe={null}  */
        // apiKey={
        // process.env.REACT_APP_PUBLISHABLE_TEST_APIKEY
        // || process.env.REACT_APP_PUBLISHABLE_LIVE_APIKEY
        // } 
        // >
        // <Elements>
            <BrowserRouter>
                <ClientProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </ClientProvider>
            </BrowserRouter>
//         </Elements>
//    </StripeProvider> 
   , document.getElementById('root'))