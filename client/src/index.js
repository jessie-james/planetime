// index.js
// ==============================

// imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import BookingProvider from './context/BookingProvider.js'
import UserProvider from './context/UserProvider.js'

// Mount the DOM
ReactDOM.render(
            <BrowserRouter>
                <BookingProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </BookingProvider>
            </BrowserRouter>
   , document.getElementById('root'))
