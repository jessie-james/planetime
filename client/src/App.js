import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./User/Home";
import Navbar from "./User/Navbar";
import Footer from "./User/Footer";
import Auth from "./Auth.js";
// import ProtectedRoute from "./shared/ProtectedRoute.js";
// import ClientInfo from './User/ClientInfo';
import './styles/navbar.css'
// import { withUser } from "./context/UserProvider.js";

class App extends Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={rProps => <Home {...rProps} />} />
          <Route
            path="/auth"
            render={rProps =>
              token ? <Redirect to="/ClientInfo/" /> : <Auth {...rProps} />
            }
          />
          {/* <ProtectedRoute
          path="/ClientInfo"
          component={ClientInfo}
          redirectTo="/"
        /> */}
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
