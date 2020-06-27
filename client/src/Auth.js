// Auth.js
// ==============================

// imoprts
import React, {Component} from "react";
import AuthForm from "./AuthForm";
import {withUser} from "./context/UserProvider.js";
=======
import React, {Component} from "react";
import AuthForm from "./AuthForm";
import {withUser} from "./context/UserProvider.js";
// import SignUpForm from "./SignUpForm";

// component  
class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            password2: "",
            login: true,
        };
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

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
                    password2: this.state.password2
                }
                console.log(credentials)
                this.props.signup(credentials)
                this.props.addUserData()
                console.log("submit is firing")
              // this.props.history.push("/Home")
                break;
        }

    };

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        });
    };

    render() {
        console.log(this.props)
        return (
            <div className="signup-auth-form">
                <div className="form-container">
                        <AuthForm
                            {...this.state}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btnText={this.state.login ? "Login" : "Signup"}
                            login={this.state.login}
                        />
                </div>
            </div>
        );
    }
}

// exports
export default withUser(Auth)