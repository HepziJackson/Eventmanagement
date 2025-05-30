import React from 'react';
import './Home.css'
import { Link } from 'react-router';

function Home() {
  return (
    <div className="homepages">
      <header className="header">
        <h1>🎉 Event Planner </h1>
        <nav>
          <Link to={'/Homepage'}>Events</Link>
          <Link to={'/signup'}>Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>Plan Your Perfect Event</h2>
        <p>From weddings to corporate meetups, we've got you covered.</p>


        <button>Get Started</button>
      </section>

      <section className="events">
        <h3>Upcoming Events</h3>
        <ul>
          <li>Wedding - June 10, 2025</li>
          <li>Birthday Bash - August 15, 2025</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Event Planner Pro | Contact: info@eventplanner.com</p>
      </footer>
    </div>
  );
};

export default Home;
