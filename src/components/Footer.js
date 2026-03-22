// src/components/Footer.js
import React from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">

      {/* Column 1 — Brand */}
      <div className="footer-col footer-brand">
        <h3 className="footer-logo">SV Banquet Halls</h3>
        <p className="footer-tagline" style={{fontFamily:"'Noto Sans Telugu',sans-serif"}}>
          మీ ప్రత్యేక క్షణాలకు అత్యుత్తమ వేదిక
        </p>
        <p className="footer-tagline-en">Hyderabad's trusted venue for weddings,<br/>ceremonies &amp; celebrations since years.</p>
      </div>

      {/* Column 2 — Contact */}
      <div className="footer-col footer-contact">
        <h4 className="footer-col-title">Contact Us</h4>
        <ul className="footer-contact-list">
          <li>
            <FaPhone className="footer-icon" />
            <a href="tel:+916305333751">+91 6305 333 751</a>
          </li>
          <li>
            <FaWhatsapp className="footer-icon footer-icon--wa" />
            <a
              href="https://wa.me/916305333751?text=నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </li>
          <li>
            <FaClock className="footer-icon" />
            <span>Open daily, 9 AM – 9 PM</span>
          </li>
          <li>
            <FaMapMarkerAlt className="footer-icon" />
            <a
              href="https://maps.app.goo.gl/u6fK3G8XXTpNi4zA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mansoorabad, LB Nagar,<br/>Hyderabad – 500072
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 — Social & Quick Links */}
      <div className="footer-col footer-social">
        <h4 className="footer-col-title">Follow Us</h4>
        <ul className="footer-social-list">
          <li>
            <a href="https://www.facebook.com/svbanquethalls" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/svbanquethalls/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/svbanquethalls/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} SV Banquet Halls. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
