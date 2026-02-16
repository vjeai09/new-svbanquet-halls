// src/pages/Home.js
import React from "react";
import EventGuide from "../components/EventGuide";

const Home = () => (
  <div>
    <section className="hero">
      <h1>Welcome to SV Banquet Halls</h1>
      <p>Your dream event, our perfect venue.</p>
    </section>

    <EventGuide />

    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {/* Add service cards here */}
      </div>
    </section>
    {/* Add more sections */}
  </div>
);

export default Home;

