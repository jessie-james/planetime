import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './User/Home'
import Navbar from './User/Navbar'
import Footer from './User/Footer'
import Pilotupload from './User/Pilotupload'
import Information from './User/Information'



const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/info' component={Information} />
            </Switch>
            <Pilotupload />
            <Footer />
        </div>
    )
}

export default App