import React, { Component } from "react";
import axios from 'axios'

const ClientContext = React.createContext();

class ClientProvider extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
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
      .then(res => {
        this.setState({
          clients: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ClientContext.Provider
          value={{
            clients: this.state.clients,
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
