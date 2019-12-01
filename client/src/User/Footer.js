import React, { Component } from "react";
import Emailbutton from "./Emailbutton.js";
import "../styles/footer.css";

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
          Email Us
        </button>
        <br />
        {!this.state.toggleEmail ? (
          <div style={{ display: "none" }}></div>
        ) : (
          <Emailbutton />
        )}
      </footer>
    );
  }
}

export default Footer;
