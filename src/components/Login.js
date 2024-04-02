// Login.js

import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      navigate("/appointment-form");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to sign up page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"} // Show text if showPassword is true
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="gg" 
            type="button" // Button to toggle password visibility
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? " Hide " : "Show My Password"} {/* Text indicates show/hide password */}
          </button>
        </div>
        <div>
          <button className="ss" type="submit">Login</button>
          <button className="bb" type="button" onClick={handleSignUp}>Sign Up</button> {/* Sign up button */}
        </div>
      </form>
    </div>
  );
}

export default Login;
