import React, { Component } from "react";

const ClientContext = React.createContext();

class ClientProvider extends Component {
  constructor() {
    super();
    this.state = {
      client: [],
      name: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleGet = e => {
    e.preventDefault();
    axios
      .get(`/client/`, inputs)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err.data));
  };

  handlePost = e => {
    e.preventDefault();
    axios
      .post(`/client/`, inputs)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err.data));
  };

  render() {
    return (
      <ClientContext.Provider
        value={{
          name: this.state.name
        }}
      >
        {this.props.children}
      </ClientContext.Provider>
    );
  }
}

export const withContext = C => props => (
  <ClientContext.Consumer>
    {value => <C {...value} {...props} />}
  </ClientContext.Consumer>
);

export default ClientProvider;
