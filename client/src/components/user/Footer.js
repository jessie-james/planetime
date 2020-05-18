// Footer.js
// ==============================

// imports
import React, { Component } from "react";
import Emailbutton from "./Home/Emailbutton.js";
  // import "../styles/footer.css";
  // import Pilotupload from "./Pilotupload"

// component
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      toggleEmail: false
    };
  }

  handleToggle = () => {
    this.setState(prev => {
      return { toggleEmail: !prev.toggleEmail };
    });
  };

  render() {
    return (
      <footer className="footer-style">
        <p className="style-O">O</p>
        <p className="style-Bar">-Bar-</p>
        <p className="style-D">D</p>
        
        <button className="email-us-button" onClick={this.handleToggle}>
          Email me
        </button>
        <br />
        {!this.state.toggleEmail ? (
          <div style={{ display: "none" }}></div>
        ) : (
          <Emailbutton />
        )}
        
        {/* <p className="send-attach">Please attach a copy of your pilots licence and a copy of renters insurance and email them to <span>grnpiperarrowii75@gmail.com</span></p> */}
        
      </footer>
    );
  }
}

// exports
export default Footer;
