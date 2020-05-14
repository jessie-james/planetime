// BookingProvider.js
// ==============================

// imports
import React, { Component } from "react";
import axios from 'axios'

// instantiate Context
const BookingContext = React.createContext();

// component
class BookingProvider extends Component {
  constructor() {
    super();
    this.state = {
      // Dates and times nad things
      firstName: "",
      lastName: "",
      birthDay: "",
      pilotLicenseUrl: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // do we need this
  // getClients = () => {
  //   axios
  //     .get("/client")
  //     .then(res =>{
  //       this.setState({
  //         dates and times and things
  //         firstName: res.data,
  //         lastName: res.data,
  //         birthDay: res.data,
  //         pilotLicenseUrl: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <ClientContext.Provider
          value={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDay: this.state.birthDay,
            pilotLicenseUrl: this.state.pilotLicenseUrl,
            getClients: this.getClients
          }}
        >
          {this.props.children}
        </ClientContext.Provider>
      </div>
    );
  }
}

// exports
export default BookingProvider;

  //functional programming paradigm/export
export const withClients = C => props => (
  <BookingContext.Consumer>
    {value => <C {...value} {...props} />}
  </BookingContext.Consumer>
);
