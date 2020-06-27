// UserProvider.js
// ==============================

// imports
import React, { Component } from "react";
import axios from "axios";

// instaniate Context
const UserContext = React.createContext();

// component
class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      token: ""
    };
    
  }

  signup = credentials => {
    axios
      .post("./auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        this.setState({ user, token });
      })
      .catch(err => console.log(err));
  };

  addUserData = data => {

  }


  login = credentials => {
    axios
      .post("./auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        this.setState({ user, token });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <UserContext.Provider
          value={{
            ...this.state,
            login: this.login,
            signup: this.signup,
            addUserData: this.addUserData

          }}
        >
          {this.props.children}
        </UserContext.Provider>
      </div>
    );
  }
}
// exports
export default UserProvider;

  //functional programming paradigm
export const withUser = C => props => (
  <UserContext.Consumer>
    {value => <C {...value} {...props} />}
  </UserContext.Consumer>
);
