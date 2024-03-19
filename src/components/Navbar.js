import React from 'react';
import './Navbar.css'; // Assuming you have a corresponding CSS file for styling
import download from "./download.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={download}/>
                    </a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/about">About</a>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
