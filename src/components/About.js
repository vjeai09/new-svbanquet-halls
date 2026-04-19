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
          <h2 className="about-heading">Where Mansoorabad<br />Families Celebrate Life</h2>
          <p className="about-body">
            For over 8 years, SV Banquet Halls has stood at the heart of Mansoorabad —
            where brides have arrived, babies have been named, daughters have worn their
            first half-sarees, and families have gathered with joy in their eyes.
            Every event that happens here is a chapter in someone's story.
          </p>
          <p className="about-body">
            మేము స్థలం ఇస్తాం, వంటశాల ఇస్తాం, సౌకర్యం ఇస్తాం —
            మీరు మీ ప్రియమైన వారిని తీసుకురండి. మిగతాది మేము చూసుకుంటాం.
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
