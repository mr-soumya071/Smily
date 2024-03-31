import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

function SignUp({ onSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  console.log(error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          email: formData.email,
          given_name: formData.firstName,
          family_name: formData.lastName,
          phone_number: formData.phoneNumber,
        },
      });
      onSignUp(newUser);
      setShowOTPInput(true);
    } catch (error) {
      console.log("Error signing up:", error);
      setError(error.message);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(formData.email, otp);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {showOTPInput && (
        <form onSubmit={handleOTPSubmit}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  );
}

export default SignUp;
