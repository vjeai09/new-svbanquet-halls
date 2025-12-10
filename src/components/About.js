import React from "react";
import "./About.css";

const About = ({ id }) => (
  <section id={id} className="about-section">
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to SV Banquet Halls! We specialize in hosting intimate
        celebrations for birthdays, receptions, cradle ceremonies, and saree
        ceremonies. Our modern facilities, elegant decor, and dedicated service
        team ensure that your special moments are unforgettable.
      </p>
      <p>
        Whether you're planning a small family gathering or a grand event, our
        venue is designed to provide comfort, style, and convenience.
      </p>
    </div>
    <div className="about-image">
      <img src="logo192.png" alt="About SV Banquet Halls" />
    </div>
  </section>
);

export default About;
