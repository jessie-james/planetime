import React, {Component} from 'react'

import PlaneInfo from './PlaneInfo'
import Schedule from './Schedule'
class Home extends Component {
    constructor(props){
        super()
     this.state = {
            firstName: "",
            lastName: "",
            birthday: ""
        }  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("we clicked it")
        console.log(this.state.firstName)
    }
    
    render(props){
        return (
            <div className="home">
                <div className="home__main">
                    <PlaneInfo/>
                    <Schedule/>
                </div>
                {/*<div className="home__cart">*/}
                {/*    <Cart />*/}
                {/*</div>*/}
            </div>
            // <div>
            //     {/*<div className='Home'>*/}
            //     {/*    <div className='Home-signup-side'>*/}
            //     {/*        <form action="" className='Home-signup'>*/}
            //     {/*            <label htmlFor="">Name</label><input placeholder='First Name' type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>*/}
            //     {/*            <input type="text" placeholder='Last Name' name="lastName" value={this.state.lastName} onChange={this.handleChange}/>*/}
            //     {/*            <label htmlFor="">Birthday</label><input type="date" name="bithday" value={this.state.bithday} onChange={this.handleChange}/>*/}
            //     {/*            /!* <label htmlFor="">Start date</label><input type="date"/> *!/*/}
            //     {/*            <div><Boing/></div>*/}
            //     {/*            /!* <label htmlFor="">End Cart</label><input type="date"/> *!/*/}
            //     {/*            <div></div>*/}
            //     {/*            /!* <input type="time"/> *!/*/}
            //     {/*            /!* <input type="time"/> *!/*/}
            //     {/*        </form>*/}
            //     {/*        <div>*/}
            //     {/*            <h3>Rulez</h3>*/}
            //     {/*            <ul>*/}
            //     {/*                <li>no Moronis allowed</li>*/}
            //     {/*                <li>no Kevins allowed</li>*/}
            //     {/*                <li>no Jessies allowed</li>*/}
            //     {/*                <li>only Jeremy is allowed</li>*/}
            //     {/*            </ul>*/}
            //     {/*        </div>*/}
            //     {/*        <div>*/}
            //     {/*            <h3>Specs:</h3>*/}
            //     {/*            <ul>*/}
            //     {/*                <li>this is a spec (missing icon)</li>*/}
            //     {/*                <li>this is a spec (missing icon)</li>*/}
            //     {/*                <li>this is a spec (missing icon)</li>*/}
            //     {/*                <li>this is a spec (missing icon)</li>*/}
            //     {/*            </ul>*/}
            //     {/*        </div>*/}
            //     {/*        <div>*/}
            //     {/*            <h3>Things to keep in mind:</h3>*/}
            //     {/*            <ul>*/}
            //     {/*                <li>We arent responsible for your death</li>*/}
            //     {/*                <li>dont drink and fly</li>*/}
            //     {/*                <li>please keep your hands and feet inside the plane at all times</li>*/}
            //     {/*                <h4>full disclaimer can be read <a target='blank' href='https://google.com'>here</a></h4>*/}
            //     {/*            </ul>*/}
            //     {/*        </div>*/}
            //     {/*    /!* <button onClick={() => props.history.push('/upload')}>Book Now!!>>> </button> } *!/*/}
            //     {/*    <button onClick={this.handleSubmit}>sub</button>*/}
            //     {/*    </div>*/}
            //     {/*    <div>*/}
            //     {/*        /!* res overview here *!/*/}
            //     {/*    </div>*/}
            //     {/*    */}
            //     {/*</div>*/}
            // </div>
        )
        
    }
}

export default Home