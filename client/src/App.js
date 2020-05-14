// App.js
//===============================

// imports
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./assets/css/base.css";
import Home from "./components/user/Home/Home";
import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import Pilotupload from "./components/user/Home/Pilotupload";
import CheckoutContainer from "./components/user/Checkout/CheckoutContainer"
import Charged from "./components/user/Home/Charged"
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
    // asyncronous check for Stripe from the window mount

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
            <Header />
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
                  token ? <Redirect to="/" /> : <CheckoutContainer />
                }
              />
              <Route
                path="/charged"
                render={rProps =>
                  token ? <Redirect to="/" /> : <Charged />
                }
              />
            </Switch>
            {/*<Pilotupload />*/}
            {/*<Footer />*/}
          </div>
        </Elements>
      </StripeProvider>
    );
  }
}

// exports
export default App;
