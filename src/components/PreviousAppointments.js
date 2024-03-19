import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

function PreviousAppointments({ user }) {
  const [previousAppointments, setPreviousAppointments] = useState([]);

  useEffect(() => {
    // Fetch existing appointments and filter previous ones
    const fetchPreviousAppointments = async () => {
      try {
        const response = await API.get("appointment", "/appointment");
        const appointments = response.filter(appointment => {
          // Get the current date
          const currentDate = new Date();
          // Get the appointment date
          const appointmentDate = new Date(appointment.date);
          // Filter appointments where the appointment date is before the current date
          return appointmentDate < currentDate;
        });
        setPreviousAppointments(appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchPreviousAppointments();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <section>
      <h2>Previous Appointments</h2>
      <ul>
        {previousAppointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.name} - {appointment.date}
            {/* Add any other details you want to display */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PreviousAppointments;
