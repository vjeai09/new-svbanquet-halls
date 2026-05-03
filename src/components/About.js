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
          <h2 className="about-heading">Where Mansoorabad Families<br />Choose Their Own Vendors</h2>
          <p className="about-body">
            Most banquet halls lock you into their vendors. Their caterer. Their decorator. Their prices.
            At SV Banquet Halls, we believe your celebration deserves your choices.
          </p>
          <p className="about-body" style={{fontWeight: 600, color: '#8B0000', marginTop: '1rem', marginBottom: '1rem'}}>
            ✅ Bring your family's trusted caterer — the one who makes biryani that tastes like home<br/>
            ✅ Choose your own decorator — someone who actually understands your vision<br/>
            ✅ Hire your photographer — the person who's captured every family milestone<br/>
            ✅ Negotiate directly with vendors — better prices, better quality, your budget
          </p>
          <p className="about-body">
            We provide the perfect venue. You provide the perfect team. That's real freedom.
          </p>
          <p className="about-body" style={{marginTop: '1.5rem', fontStyle: 'italic'}}>
            మేము అందమైన వేదికను అందిస్తాము. మీరు మీ జట్టును తీసుకురండి. ఇదే నిజమైన స్వేచ్ఛ.
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
            <img src="/venues.jpg" alt="Elegant air-conditioned banquet hall interior at SV Banquet Halls, Mansoorabad — venue for Telugu weddings and traditional ceremonies" loading="lazy" />
          </div>
          <div className="about-badge">
            <span className="badge-icon">🏛️</span>
            <span className="badge-text">Established in Mansoorabad, Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
