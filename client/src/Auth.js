import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { withUser } from './context/UserProvider.js'


class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            formToggle: false
        }
    }

    toggler = () => {
        this.setState(prevState => 
            ({formToggle: !prevState.formToggle}))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSignupSubmit = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)
        this.clearInputs()
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
        this.clearInputs()

    }
    
    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        return(
            <div>
                
                { this.state.formToggle ?
                <>
                    <AuthForm
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSignupSubmit} 
                    btnText="Signup"
                    />
                    <span onClick={this.toggler}>Already a member?</span>
                </>
                    :
                <>
                    <AuthForm
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleLoginSubmit} 
                    btnText="Login"
                    />
                    <span onClick={this.toggler}>Not a member?</span>
                </>
                }
            </div>
        )
    }
}

export default withUser(Auth)