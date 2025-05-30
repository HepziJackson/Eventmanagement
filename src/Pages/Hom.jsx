import React from 'react';
import './Hom.css'
import { Link } from 'react-router';

function Hom() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">EventMaster</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#enquiry">Enquiry</a>
            <a href="#contact">Contact</a>
            <Link to="/">Login</Link>
            
          </nav>
        </div>
      </header>

      {/* Home */}
      <section id="home" className="section home-section">
        <div className="overlay"></div>
        <div className="home-content">
          <h2>Welcome to EventMaster</h2>
          <p>Making Your Events Unforgettable</p>
          <a href="#enquiry" className="btn">Make an Enquiry</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to planning and managing beautiful, stress-free events for every occasion.</p>
      </section>

      {/* Services */}
      <section id="services" className="section services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Weddings</h3>
            <p> personalized wedding planning from start to finish.</p>
            <Link to={'/wedding'}>Details</Link>
          </div>
          <div className="service-card">
            <h3>Private Parties</h3>
            <p>Birthdays, anniversaries, and more — we bring your party to life.</p>
            <Link to={'/birthday'}>Details</Link>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="section enquiry-section">
        <h2>Enquiry Form</h2>
        <form className="enquiry-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Event Type" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>📍 123 Event Street, Celebration City</p>
        <p>📞 +123 456 7890</p>
        <p>✉️ contact@eventmaster.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 EventMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hom;
