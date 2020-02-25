import React, {Component} from 'react'
import { Link } from "react-router-dom"
import Calander from './Calander.js'
import ResOverview from './../ResOverview.js'
// import axios from 'axios'

class Home extends Component {
    constructor(props){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            birthday: "",
            date: new Date()
        }  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCalendarChange = date => {
       this.setState({ date })
       console.log(date)
    }
    
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post("/booking",{})
    //     .then({

    //     })
    //     .catch({

    //     })
    //     console.log("we clicked it")
    //     console.log(this.state.firstName)
    // }
    
    render(props){
        return (
            <div className='home-grid'>
                <div className='home'>
                    <div className='home-signup-side'>
                        <form action="" className='home-signup'>
                            <label htmlFor="">Name</label><input placeholder='First Name' type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                            <input type="text" placeholder='Last Name' name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                            <label htmlFor="">Birthday</label><input type="date" name="bithday" value={this.state.bithday} onChange={this.handleChange}/>
                            {/* <label htmlFor="">Start date</label><input type="date"/> */}
                            <div>
                                <Calander 
                                    handleCalendarChange={this.handleCalendarChange}
                                    date={this.state.date}/>
                            </div>
                            {/* <label htmlFor="">End Date</label><input type="date"/> */}
                            <div></div>
                            {/* <input type="time"/> */}
                            {/* <input type="time"/> */}
                        </form>
                        <div>
                        <Link to="/pilotupload">Please click here to upload a copy of your pilots license and insurance</Link>
                            <h3>Rulez</h3>
                            <ul>
                                <li>no Moronis allowed</li>
                                <li>no Kevins allowed</li>
                                <li>no Jessies allowed</li>
                                <li>only Jeremy is allowed</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Specs:</h3>
                            <ul>
                                <li>this is a spec (missing icon)</li>
                                <li>this is a spec (missing icon)</li>
                                <li>this is a spec (missing icon)</li>
                                <li>this is a spec (missing icon)</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Things to keep in mind:</h3>
                            <ul>
                                <li>Jeremy takes full responsibility if you die</li>
                                <li>dont drink and fly</li>
                                <li>please keep your hands and feet inside the plane at all times</li>
                                <h4>full disclaimer can be read <a target='blank' href='https://google.com'>here</a></h4>
                            </ul>
                        </div>
                        <button onClick={() => props.history.push('/upload')}>Book Now!!>>> </button>
                        {/* <button onClick={this.handleSubmit}>sub</button> */}
                    </div>
                </div>
                <div className = "resOverBox">
                    <ResOverview date = {this.state.date}/>
                </div>
            </div>
        )
        
    }
}

export default Home