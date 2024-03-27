import React from 'react';
import './Navbar.css'; // Assuming you have a corresponding CSS file for styling
import tooth from "./tooth.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={tooth}/>
                    </a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/Home">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/PreviousAppointment">PreviousAppointment</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/appointment-form">appointment-form</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/Login">Login</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/SignUp">SignUp</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
