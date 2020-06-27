// BookingProvider.js
// ==============================

// manages "stage" of transactions
// adds data to objects needed to send to 

// imports
import React, { Component } from "react";
import axios from 'axios'
import { withRouter } from "react-router-dom";

// instantiate Context/export and history
export const BookingContext = React.createContext();

// component
class BookingProvider extends Component {
  

  constructor() {
    super();
    this.state = {
      stage: "cart",
      // times and date  
      startTime: "",
      startDate: new Date(),
      endTime: "",
      endDate: new Date(),
      cost: "",
      firstName: "",
      lastName: "",
      bookingAddressLine1: "",
      bookingAddressLine2: "",
      city: "",
      state: "",
      zip: "",
      // pilotLIscenceURL: "",
      // insuranceURL: "",
      pilotLiscenceNumber: ""
    }; 
  }

  advanceStage = () => {
    let { stage } = this.state,
     { history } = this.props
    if (stage === "cart") {
      this.setState(prevState => ({
        ...prevState,
        stage: "checkout"
      })
      )
      history.push("/checkout")
    } else if (stage === "checkout") {
      this.setState(prevState => ({
        ...prevState,
        stage: "checkedout"
      })
      )
      history.push("/confirmation")
    } else if (stage === "confirmation") {
      this.setState(prevState => ({
        ...prevState,
        stage: "cart"
      })
      )
      history.push("/")
    }
  }

  addDatesAndTimes = (data) => {
    let { startTime, startDate, endTime, endDate } = data
    this.setState = (prevState => ({
      ...prevState,
      startTime,
      startDate,
      endTime,
      endDate
    }))
  }

  resetStage = () => {
    
  }
 
  // postBooking = data => {
  //   let { startTime,
  //         endTime,
  //         startDate,
  //         endDate,
  //         firstName, 
  //         lastName,
  //         email,
  //         bookingAddressLine1,
  //         bookingAddressLine2,
  //         city,
  //         state,
  //         zip,
  //         pilotLiscenceNumber
  //   } = this.state
  //   let data = {
  //         startTime,
  //         endTime,
  //         startDate,
  //         endDate,
  //         firstName, 
  //         lastName,
  //         email,
  //         bookingAddressLine1,
  //         bookingAddressLine2,
  //         city,
  //         state,
  //         zip,
  //         pilotLiscenceNumber
  //   }
  //   axios.post("./booking", data)
  //     .then()
  //     .catch()
  // }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const props = {
      advanceStage: this.advanceStage,
      ...this.state
    }
    return (
      <div>
        <BookingContext.Provider
          value={props}
        >
          {this.props.children}
        </BookingContext.Provider>
      </div>
    );
  }
}

// exports
export default withRouter(BookingProvider);

//functional programming paradigm/export
export const withBooking = C => props => (
  <BookingContext.Consumer>
    {value => <C {...value} {...props} />}
  </BookingContext.Consumer>
);
