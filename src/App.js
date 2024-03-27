import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PreviousAppointments from "./components/PreviousAppointments"; // Import the PreviousAppointments component
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Mock login logic, set user data in state
    setUser(userData);
  };

  const handleSignUp = (newUserData) => {
    // Mock signup logic, set user data in state
    setUser(newUserData);
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/signup"
              element={<SignUp onSignUp={handleSignUp} />}
            />
            <Route
              path="/appointments"
              element={<AppointmentList user={user} />} // Pass user prop to AppointmentList component
            />
            <Route
              path="/previous-appointments"
              element={<PreviousAppointments user={user} />} // Render PreviousAppointments component
            />
            <Route path="/appointment-form" element={<AppointmentForm />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
             <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
