import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="contact-form" id="contact">
      <div className="section-divider"></div>

      {/* Floating Decorative Elements */}
      <div className="contact-deco deco-1">🪔</div>
      <div className="contact-deco deco-2">✨</div>
      <div className="contact-deco deco-3">🌺</div>

      {/* Header */}
      <div className="contact-header" data-aos="fade-up">
        <h2 className="contact-title">
          <span className="telugu-title">మాతో సంప్రదించండి</span>
          <span className="english-title">Get In Touch</span>
        </h2>
        <p className="contact-subtitle desktop-text">
          మేము మీ కోసం ఎల్లప్పుడూ అందుబాటులో ఉన్నాము | We'd love to hear from you!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards-container" data-aos="zoom-in">
        {/* Phone Card */}
        <div className="contact-card" data-aos="fade-right" data-aos-delay="100">
          <div className="card-icon-wrapper phone-icon">
            <FaPhone className="card-icon" />
          </div>
          <h3 className="card-title">Call Us</h3>
          <p className="card-info">+91 6305 333 751</p>
          <p className="card-desc">Available 24/7</p>
        </div>

        {/* WhatsApp Card */}
        <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-icon-wrapper whatsapp-icon">
            <FaWhatsapp className="card-icon" />
          </div>
          <h3 className="card-title">WhatsApp</h3>
          <p className="card-info">Quick Response</p>
          <p className="card-desc">Message us anytime</p>
        </div>

        {/* Location Card */}
        <div className="contact-card" data-aos="fade-left" data-aos-delay="300">
          <div className="card-icon-wrapper location-icon">
            <FaMapMarkerAlt className="card-icon" />
          </div>
          <h3 className="card-title">Visit Us</h3>
          <p className="card-info">Mansoorabad</p>
          <p className="card-desc">Hyderabad, Telangana</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="contact-actions" data-aos="fade-up" data-aos-delay="400">
        <a href="tel:+916305333751" className="cta-button call-now">
          <span className="button-icon">
            <FaPhone />
          </span>
          <span className="button-content">
            <span className="button-title">Call Now</span>
          </span>
          <span className="button-shine"></span>
        </a>

        <a
          href="https://wa.me/916305333751"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button whatsapp"
        >
          <span className="button-icon">
            <FaWhatsapp />
          </span>
          <span className="button-content">
            <span className="button-title">WhatsApp Us</span>
          </span>
          <span className="button-shine"></span>
        </a>

        <button
          type="button"
          className="cta-button get-directions mobile-view"
          style={{ cursor: 'pointer', opacity: 1 }}
          onClick={() => setShowDirectionsModal(true)}
        >
          <span className="button-icon">
            <FaMapMarkerAlt />
          </span>
          <span className="button-content">
            <span className="button-title">Get Directions</span>
          </span>
          <span className="button-shine"></span>
        </button>
      </div>

      {/* Temporary Notice */}
      <div id="directions-notice-banner" className="notice-banner" data-aos="fade-up" data-aos-delay="450">
        <p style={{margin:0}}>
          <strong style={{color:'#b85c00'}}>Directions Unavailable:</strong><br/>
          <span style={{color:'#856404'}}>We’re working to restore our Google listing. For now, please call <a href="tel:+916305333751" style={{color:'#b85c00',textDecoration:'underline'}}>+91 6305333751</a> for friendly help with directions.<br/>
          We apologize for the inconvenience and thank you for your patience. Safe travels!</span>
        </p>
      </div>

      {/* Map Container */}
      <div className="map-wrapper" data-aos="zoom-in" data-aos-delay="500">
        <div className="map-header">
          <FaMapMarkerAlt className="map-header-icon" />
          <h3>Find Us Here | మమ్మల్ని ఇక్కడ కనుగొనండి</h3>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.343774058592!2d78.56439697527573!3d17.347183283533173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f533bc585b9%3A0xf467520e448c3d96!2sS%20V%20Banquet%20Halls!5e0!3m2!1sen!2suk!4v1735682032546!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: "none", borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SV Banquet Halls Location"
          ></iframe>
        </div>
      </div>

      {/* Directions Modal */}
      {showDirectionsModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowDirectionsModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '30px',
              maxWidth: '450px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: '20px' }}>
              <FaMapMarkerAlt style={{ fontSize: '48px', color: '#b85c00' }} />
            </div>
            <h3 style={{ color: '#333', marginBottom: '15px' }}>Get Directions</h3>
            <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
              Our Google Business listing is temporarily unavailable. 
              <br /><br />
              <strong>Tap the link below to open directions to our venue:</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/sy8FM3SuQBRGd6vr7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#b85c00',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginBottom: '15px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#a04d00')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#b85c00')}
            >
              📍 Open in Google Maps
            </a>
            <p style={{ color: '#856404', fontSize: '14px', marginBottom: '10px' }}>
              Or call us at <a href="tel:+916305333751" style={{ color: '#b85c00', textDecoration: 'underline' }}>+91 6305333751</a> for help
            </p>
            <button
              onClick={() => setShowDirectionsModal(false)}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
