// App.js

// imports
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./User/Home";
import Navbar from "./User/Navbar";
import Footer from "./User/Footer";
import Pilotupload from "./User/Pilotupload";
import CheckoutForm from "./User/CheckoutForm"
import Auth from "./Auth.js";
import { withUser } from "./context/UserProvider.js";
import { StripeProvider, Elements } from 'react-stripe-elements'

// component
class App extends Component {
  constructor() {
    super();
    this.state = { stripe: null }
  }

  componentDidMount() {
    //asyncronous check for Stripe from the window mount
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe(
        process.env.REACT_APP_PUBLISHABLE_TEST_APIKEY
         || process.env.REACT_APP_PUBLISHABLE_LIVE_APIKEY) });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe(
          process.env.REACT_APP_PUBLISHABLE_TEST_APIKEY
           || process.env.REACT_APP_PUBLISHABLE_LIVE_APIKEY) });
      });
    }
  }

  render() {
    const { token } = this.props;
    return (
      <StripeProvider stripe={this.state.stripe} >
        <Elements>
          <div>
            <Navbar />
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}

              <Route exact path="/" render={rProps => <Home {...rProps} />} />
              <Route
                path="/auth"
                render={rProps =>
                  token ? <Redirect to="/" /> : <Auth {...rProps} />
                }
              />
              <Route
                path="/checkout"
                render={rProps =>
                  token ? <Redirect to="/" /> : <CheckoutForm />
                }
              />
            </Switch>
            <Pilotupload />
            <Footer />
          </div>
        </Elements>
      </StripeProvider>
    );
  }
}

export default App;
