import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ClientProvider from './context/ClientProvider.js'
import UserProvider from './context/UserProvider.js'
// import { StripeProvider, Elements } from 'react-stripe-elements'

ReactDOM.render(
<<<<<<< HEAD
    <BrowserRouter>
        <ClientProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </ClientProvider>
    </BrowserRouter>,
    document.getElementById('root'))
=======
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
>>>>>>> 46549e3f9eeeb7b19727df09d7bb8fad2e2d1e6a
