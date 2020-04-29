import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { withUser } from "./context/UserProvider.js";
import "./styles/auth.css";
import SignUpForm from "./SignUpForm";


class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      signAuth: "Click here to create an account",
      formToggle: false,
      signAuthToggle: false
    };
  }

  toggler = () => {
    this.setState(prevState => ({ formToggle: !prevState.formToggle }));
    this.signAuth();
  };

  signAuth = () => {
    if (!this.state.formToggle) {
      this.setState({ signAuth: "Already a member? Click here" });
    } else {
      this.setState({ signAuth: "Click here to create an account" });
    }
  };

  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

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
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(credentials);
    this.clearInputs();
    console.log("handleLoginSubmit is firing"); 
    this.props.history.push("./User/ClientInfo");
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

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