import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import ClientProvider from './context/ClientProvider.js'
import UserProvider from './context/UserProvider.js'


ReactDOM.render(
    <BrowserRouter>
        <ClientProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </ClientProvider>
    </BrowserRouter>,
    document.getElementById('root'))