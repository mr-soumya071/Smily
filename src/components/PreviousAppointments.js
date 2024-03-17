import React, { useState, useEffect } from "react";

function PreviousAppointments({ user }) {
  const [previousAppointments, setPreviousAppointments] = useState([]);

  useEffect(() => {
    // Fetch previous appointments for the user from the backend
    // You need to implement this function to fetch data from your backend API
    fetchPreviousAppointments(user.id).then((data) => {
      setPreviousAppointments(data);
    });
  }, [user]);

  // Function to fetch previous appointments from the backend
  const fetchPreviousAppointments = async (userId) => {
    try {
      const response = await fetch(`/api/appointments/${userId}`); // Example API endpoint, replace with your actual endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <section>
      <h2>Previous Appointments</h2>
      <ul>
        {previousAppointments.map((appointment) => (
          <li key={appointment.id}>
            <strong>Date:</strong> {appointment.date}, <strong>Time:</strong>{" "}
            {appointment.time}, <strong>Doctor:</strong> {appointment.doctor}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PreviousAppointments;
