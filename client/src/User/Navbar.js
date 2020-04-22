import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar-style">
      <Link to="/" className="logo-style">
        <p className="style-O">O</p>
        <p className="style-Bar">-Bar-</p>
        <p className="style-D">D</p>
      </Link>
      <p className="signup-login">
        <Link to="/auth">Jessie's Login</Link>
      </p>
    </div>
  );
}

export default Navbar;
