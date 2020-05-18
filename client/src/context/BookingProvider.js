// BookingProvider.js
// ==============================

// manages "stage" of transactions
// adds data to objects needed to send to 

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
      stage: "cart",
      // times and date   
      firstName: "",
      lastName: "",
      birthDay: "",
      pilotLicenseUrl: ""
      // startTime: "",
      // startDate: new Date(),
      // endTime: "",
      // endDate: new Date(),
    };
  }

  // advanceStage = 

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <BookingContext.Provider
          value={{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDay: this.state.birthDay,
            pilotLicenseUrl: this.state.pilotLicenseUrl,
            getClients: this.getClients
          }}
        >
          {this.props.children}
        </BookingContext.Provider>
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
