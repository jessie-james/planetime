import React from 'react'

class clientLogin extends Component {
    contructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
        }
    }

    getContent() {
        if (this.state.isSignedIn) {
            return <p>hello user, you're signed in </p>
        } else {
            return (
                <div>
                    <p>You are not signed in. Click here to sign in.</p>
                    <button id="loginButton">Login with Google</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Sample App.</h2>

                    {this.getContent()}
                </header>
            </div>
        );
    }
}