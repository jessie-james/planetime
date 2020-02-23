import React, { Component } from "react";
import axios from 'axios'

const ClientContext = React.createContext();

class ClientProvider extends Component {
  constructor() {
    super();
    this.state = {
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

  getClients = () => {
    axios
      .get("/client")
      .then(res =>{
        this.setState({
          firstName: res.data,
          lastName: res.data,
          birthDay: res.data,
          pilotLicenseUrl: res.data
        });
      })
      .catch(err => console.log(err));
  };

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

export default ClientProvider;

//functional programming paradigm
export const withClients = C => props => (
  <ClientContext.Consumer>
    {value => <C {...value} {...props} />}
  </ClientContext.Consumer>
);
