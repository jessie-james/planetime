import React, {Component} from "react";
import AuthForm from "./AuthForm";
import {withUser} from "./context/UserProvider.js";

// import SignUpForm from "./SignUpForm";


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            password2: "",
            firstName: "",
            lastName: "",
            streetAddress: "",
            city: "",
            state: "",
            zip: "",
            login: true,
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
        const {name, value} = e.target;
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

    handleSubmit = e => {
        e.preventDefault();
        let credentials;
        switch (this.state.login) {
            case true:
                credentials = {
                    username: this.state.username,
                    password: this.state.password
                };
                console.log(credentials)
                this.props.login(credentials);
                this.clearInputs();
                console.log("handleLoginSubmit is firing");
                // this.props.history.push("./User/ClientInfo");
                break;
            case false:
                credentials = {
                    username: this.state.username,
                    password: this.state.password,
                    password2: this.state.password2,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    streetAddress: this.state.streetAddress,
                    city: this.state.city,
                    state: this.state.state,
                    zip: this.state.zip,
                }
                console.log(credentials)
                this.props.signup(credentials)
                console.log("submit is firing")
              // this.props.history.push("/Home")
                break;
        }

    };

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            // password2: ""
        });
    };

    render() {
        console.log(this.props)
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
                            {...this.state}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btnText={this.state.login ? "Login" : "Signup"}
                            login={this.state.login}
                        />
                    </>
                    {/* )} */}
                </div>
            </div>
        );
    }
}

export default withUser(Auth);
