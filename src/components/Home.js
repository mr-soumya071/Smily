// Home.js

import React from 'react';
import './Home.css'; // Import the corresponding CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Our Dental Clinic</h1>
                <p>Your smile is our priority!</p>
            </header>
            <section className="about-section">
                <h2>About Us</h2>
                <p>We are a team of experienced dentists dedicated to providing high-quality dental care to our patients.</p>
            </section>
            <section className="services-section">
                <h2>Our Services</h2>
                <ul>
                    <li>Teeth Cleaning</li>
                    <li>Fillings and Restorations</li>
                    <li>Tooth Extractions</li>
                    <li>Root Canal Therapy</li>
                    <li>Dental Implants</li>
                    <li>Orthodontic Treatment</li>
                </ul>
            </section>
            <section className="appointment-section">
                <h2>Book an Appointment</h2>

                <a href="/appointment-form" className="book-appointment-btn">Book Now</a>
            </section>
            <section className="testimonials-section">
                <h2>What Our Patients Say</h2>
                <div className="testimonial">
                    <p>"The staff here is amazing! They made me feel comfortable and relaxed during my dental procedure."</p>
                    <p className="testimonial-author">- John Doe</p>
                </div>
                <div className="testimonial">
                    <p>"I'm so happy with the results of my teeth whitening treatment. Thank you!"</p>
                    <p className="testimonial-author">- Jane Smith</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
