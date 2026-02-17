import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
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

  const location = useLocation();
  const navigate = useNavigate();

  // Navigate to home and scroll to section id. Works from any route.
  const goToSection = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // wait for route change and render
      setTimeout(doScroll, 350);
    } else {
      doScroll();
    }
    // close mobile menu if open
    setIsMenuOpen(false);
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
              <a href="tel:+916305333751" className="top-bar-phone">
                📞 <strong>+91 6305 333 751</strong>
              </a>
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
                <button className="nav-button" onClick={()=>goToSection('hero-video')}>Home</button>
              </li>

              <li>
                <button className="nav-button" onClick={()=>goToSection('services')}>Services</button>
              </li>
              <li>
                <button className="nav-button" onClick={()=>goToSection('testimonials')}>Testimonials</button>
              </li>
              <li>
                <button className="nav-button" onClick={()=>goToSection('vendors')}>Vendors</button>
              </li>
              <li>
                <RouterLink to="/planning">Planning</RouterLink>
              </li>
              <li>
                <button className="nav-button" onClick={()=>goToSection('contact')}>Contact</button>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="tel:+916305333751" className="cta-button call-now-btn">
              <FaPhoneAlt /> Call Now
            </a>
            <a
              href="https://www.google.com/maps/place/S+V+Banquet+Halls/@17.3471833,78.564397,897m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb9f533bc585b9:0xf467520e448c3d96!8m2!3d17.3471833!4d78.5669719!16s%2Fg%2F11hckfqtr5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button get-directions-btn"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

