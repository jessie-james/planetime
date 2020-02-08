import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { withUser } from "./context/UserProvider.js";
import Pilotupload from "./User/Pilotupload";
import "./styles/auth.css";
import SignUpForm from "./SignUpForm";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      signAuth: "",
      signup: "Already a member? Click here",
      authup: "Click here to create an account",
      formToggle: false,
      signAuthToggle: false
    };
  }

  toggler = () => {
    this.setState(prevState => ({ formToggle: !prevState.formToggle }));
  };

  signAuth = () => {
    if(!this.formToggle) {
      this.signAuthToggle = this.signup
    } else {
      this.signAuthToggle = this.authup
    }}
  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(credentials);
    this.clearInputs();
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(credentials);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      password2: ""
    });
  };

  render() {
    return (
      <div className="signup-auth-form">
        <br />
        <span className="toggle-signup-login" onClick={this.toggler}>
          Toggle here to Signup or to Create an account
          --  {this.signAuth}
        </span>
        
        <div className="form-container">
          {this.state.formToggle ? (
            <>
              <SignUpForm
                username={this.state.username}
                password={this.state.password}
                password2={this.state.password2}
                handleChange={this.handleChange}
                handleSubmit={this.handleSignupSubmit}
                btnText="Signup"  
              />
            </>
          ) : (
            <>
              <AuthForm
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange}
                handleSubmit={this.handleLoginSubmit}
                btnText="Login"
              />
              {/* <span className="toggle-signup-login" onClick={this.toggler}>
              Not a member? Click here to create an account
            </span> */}
            </>
          )}
        </div>
        <Pilotupload />
      </div>
    );
  }
}

export default withUser(Auth);
