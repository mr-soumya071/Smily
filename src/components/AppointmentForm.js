import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { API } from "aws-amplify";

function AppointmentForm({ user }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [existingAppointments, setExistingAppointments] = useState([]);

  useEffect(() => {
    // Fetch existing appointments when component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      // Make an API call to fetch existing appointments
      const response = await API.get("appointment","/appointment");
      setExistingAppointments(response);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your appointment booking logic here
      const appointmentData = { name, email, date: selectedDate };
      await API.post("appointment","/appointment", { body: appointmentData });
      console.log("Appointment booked:", appointmentData);
      // Reset form fields after booking
      setName("");
      setEmail("");
      setSelectedDate(null);
      // Refetch appointments to update the list
      fetchAppointments();
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const handleUpdateDate = async (appointmentId, newDate) => {
    try {
      // Make an API call to update the appointment date
      const updatedAppointmentData = { appointmentId: appointmentId, date: newDate };
      await API.put("appointment", `/appointment/${appointmentId}`, { body: updatedAppointmentData });
      console.log("Appointment date updated:", updatedAppointmentData);
      // Refetch appointments to update the list
      fetchAppointments();
    } catch (error) {
      console.error("Error updating appointment date:", error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      // Make an API call to delete the appointment
      await API.del("appointment", `/appointment/${appointmentId}`);
      console.log("Appointment deleted:", appointmentId);
      // Refetch appointments to update the list
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div>

    <section>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            readOnly={user ? true : false} // Disable editing if user is logged in
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            readOnly={user ? true : false} // Disable editing if user is logged in
          />
        </div>
        <div>
          <label>Date:</label>
          <br />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            required
          />
        </div>
        <div>
          <button type="submit">Book Appointment</button>
        </div>
      </form>

      {/* Display existing appointments */}
      <div>
        <h2>Existing Appointments</h2>
        <ul>
          {existingAppointments.map((appointment) => (
            <li key={appointment.appointmentId}>
              {appointment.name} - {appointment.date}
              {/* Update and delete buttons */}
              {/* <button onClick={() => handleUpdateDate(appointment.appointmentId, appointment.selectedDate)}>Update</button> */}
              <button onClick={() => handleDeleteAppointment(appointment.appointmentId)}>Delete</button>
              {/* DatePicker component */}
              <DatePicker
                selected={new Date(appointment.date)}
                onChange={(date) => handleUpdateDate(appointment.appointmentId, date)}
                minDate={new Date()}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                required
              />
            </li>
          ))}
        </ul>
      </div>
    </section></div>
  );
}

export default AppointmentForm;
