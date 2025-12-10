import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import all icons
import "./header1.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [showTopBar, setShowTopBar] = useState(true); // Track visibility of top bar

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
            <a href="https://www.google.com/maps/dir/?api=1&destination=S%20V%20Banquet%20Halls,%20Mansoorabad,%20Telangana%20500074,%20India"
 className="cta-button get-directions-btn" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

