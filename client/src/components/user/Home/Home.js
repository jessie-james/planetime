// Home.js
// ==============================

// imports
import React, { Component } from 'react'

import PlaneInfo from './PlaneInfo'
import Cart from './Cart/Cart'
import Auth from '../../../Auth'
import planeImage from '../../../assets/images/plane.jpg'

// component
class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            birthday: "",
            mobileCart: false
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
    toggleMobileCart = () => {
        this.setState({
            mobileCart: !this.state.mobileCart
        })
    }

    render(props) {
        return (
            <>
                <Auth/>

                <div className={"home"}>
                <div className={"wrapper"}>
                    <div className="home__main">
                        <img src={planeImage} alt="" className={"home__plane-image"}/>
                        <PlaneInfo toggleMobileCart={this.toggleMobileCart} mobileCartEnabled={this.state.mobileCart}/>
                    </div>
                    <Cart mobileCartEnabled={this.state.mobileCart}/>
                </div>
            </div>
            </>
            )

    }
}

// exports
export default Home


