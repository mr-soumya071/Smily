import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file for styling

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

  return (
    <div className="oval-form-container"> {/* Apply oval shape styling */}
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
            type="button" // Button to toggle password visibility
            onClick={() => setShowPassword(!showPassword)}
            style={{ fontSize: "small" }} // Applying small size
          >
            {showPassword ? "Hide It" : "Show My Password"} {/* Text indicates show/hide password */}
          </button>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <h5> Don't have an account? <a href="/signup">Fill the signup form</a> </h5>
    </div>
  );
}

export default Login;
