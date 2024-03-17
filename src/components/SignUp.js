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
        {/* Form inputs */}
      </form>
      {showOTPInput && (
        <form onSubmit={handleOTPSubmit}>
          {/* OTP input */}
        </form>
      )}
    </div>
  );
}

export default SignUp;
