import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
// import "./assets/css/normalize.css"
import "./assets/css/base.css";
import Home from "./components/user/Home/Home";
import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import Pilotupload from "./components/user/Home/Pilotupload";
import Auth from "./Auth.js";
// import {withUser} from "./context/UserProvider.js";

class App extends Component {
    render() {
        const {token} = this.props;
        return (
            <div>
                <Header/>
                <Switch>
                    {/* <Route exact path='/' component={user} /> */}

                    <Route exact path="/" render={rProps => <Home {...rProps} />}/>
                    <Route
                        path="/auth"
                        render={rProps =>
                            token ? <Redirect to="/"/> : <Auth {...rProps} />
                        }
                    />
                </Switch>
                {/*<Pilotupload/>*/}
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
