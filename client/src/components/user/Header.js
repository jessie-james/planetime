import React from "react";
import {Link} from "react-router-dom";

// import "../styles/navbar.css";

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__logo">
                    O-D
                </div>
                <nav className="header__nav">
                    <Link className="header__nav-link">Home</Link>
                    <Link className="header__nav-link">Signup</Link>
                    <Link className="header__nav-link">Login</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
