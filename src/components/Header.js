import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import all icons
import "./header1.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [showTopBar, setShowTopBar] = useState(true); // Track visibility of top bar
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let timeout; // Add a timeout to delay hiding the top bar
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show or hide the top bar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        timeout = setTimeout(() => setShowTopBar(false), 200); // Add a delay before hiding
      } else {
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener and timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <>
      {/* Header Container */}
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Bar - Visible based on scroll direction */}
        {showTopBar && (
          <div className="top-bar">
            <div className="contact-info">
              <span>📞 +91 6305 333 751</span>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        )}

        {/* Main Header */}
        <div className={`main-header ${showTopBar ? "" : "main-replace"}`}>
          <a href="/svbanquethalls" className="logo">
            <img src={`${process.env.PUBLIC_URL}/newlogo07.png`} alt="S V Banquet Halls" />
          </a>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <nav>
            <ul className={isMenuOpen ? "active" : ""}>
              <li>
                <Link to="hero-video" smooth={true} duration={600}>
                  Home
                </Link>
              </li>
              
              <li>
                <Link to="services" smooth={true} duration={600}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} duration={600}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={600}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="tel:+916305333751" className="cta-button call-now-btn">
              <FaPhoneAlt /> Call Now
            </a>
            <button
              type="button"
              className="cta-button get-directions-btn"
              style={{ cursor: 'pointer', opacity: 1 }}
              onClick={() => setShowDirectionsModal(true)}
            >
              <FaMapMarkerAlt /> Get Directions
            </button>
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
      </div>
    </>
  );
};

export default Header;

