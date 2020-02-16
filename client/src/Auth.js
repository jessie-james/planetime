import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { withUser } from "./context/UserProvider.js";
import "./styles/auth.css";
// import SignUpForm from "./SignUpForm";


class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
      // password2: "",
      // signAuth: "Click here to create an account",
      // formToggle: false,
      // signAuthToggle: false
    };
  }

  // toggler = () => {
  //   this.setState(prevState => ({ formToggle: !prevState.formToggle }));
  //   this.signAuth();
  // };

  // signAuth = () => {
  //   if (!this.state.formToggle) {
  //     this.setState({ signAuth: "Already a member? Click here" });
  //   } else {
  //     this.setState({ signAuth: "Click here to create an account" });
  //   }
  // };

  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // handleSignupSubmit = e => {
  //   e.preventDefault();
  //   const credentials = {
  //     username: this.state.username,
  //     password: this.state.password,
  //     password2: this.state.password2
  //   };
  //   if (this.state.password === this.state.password2) {
  //     this.props.signup(credentials);
  //     console.log(credentials);
  //     // this.clearInputs();
  //     this.props.history.push("/ClientInfo")
  //   } else {
  //     window.alert("Passwords do not match");
  //     return;
  //   } 
  // };

  handleLoginSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(credentials);
    this.clearInputs();
    console.log("handleLoginSubmit is firing"); 
    this.props.history.push("/ClientInfo");
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      // password2: ""
    });
  };

  render() {
    return (
      <div className="signup-auth-form">
        {/* <span className="toggle-signup-login" onClick={this.toggler}>
          {this.state.signAuth}
        </span> */}

        <div className="form-container">
          {/* {this.state.formToggle ? (
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
          ) : ( */}
            <>
              <AuthForm
                username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange}
                handleSubmit={this.handleLoginSubmit}
                btnText="Login"
              />
            </>
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default withUser(Auth);
