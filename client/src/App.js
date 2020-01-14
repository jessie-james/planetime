import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './User/Home'
import Navbar from './User/Navbar'
import Footer from './User/Footer'
import Pilotupload from './User/Pilotupload'



const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Pilotupload />
            <Footer />
        </div>
    )
}

export default App