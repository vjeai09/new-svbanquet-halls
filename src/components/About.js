import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = ({ id }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: 'mobile' });
  }, []);

  return (
    <section id={id || "about"} className="about-section">
      <div className="about-inner">
        <div className="about-text" data-aos="fade-right">
          <p className="about-telugu-label">మా గురించి</p>
          <h2 className="about-heading">Mansoorabad's Trusted<br />Celebration Venue</h2>
          <p className="about-body">
            SV Banquet Halls has been the heart of family celebrations in Mansoorabad,
            Hyderabad for over 8 years. From intimate బారసాల ceremonies to grand
            wedding receptions hosting 450+ guests, we bring every occasion to life
            with warmth, tradition, and modern comforts.
          </p>
          <p className="about-body">
            Three flexible floors, fully equipped kitchens, A/C halls, elevator access,
            and a team that treats your event as their own — that is the SV promise.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Guests Hosted</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="stat-number">4.0 ★</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
          <a href="tel:+916305333751" className="about-cta">
            Book a Visit →
          </a>
        </div>

        <div className="about-image-side" data-aos="fade-left">
          <div className="about-image-frame">
            <img src="/venues.jpg" alt="SV Banquet Halls interior" loading="lazy" />
          </div>
          <div className="about-badge">
            <span className="badge-icon">🏛️</span>
            <span className="badge-text">Established in Mansoorabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
