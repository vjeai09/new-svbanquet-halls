import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <section className="contact-form" id="contact">
    <div className="section-divider"></div>
    <h2>Contact Us</h2>

    {/* Hide this text on mobile */}
    <p className="desktop-text">
      We’d love to hear from you! For immediate assistance, please reach out to us directly via WhatsApp or phone.
    </p>

    <div className="contact-actions">
      <a href="tel:+916305333751" className="cta-button call-now">
        📞 Call Us
      </a>
      <a
        href="https://wa.me/916305333751"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button whatsapp"
      >
        💬 WhatsApp Us
      </a>

      {/* "Get Directions" button visible only on mobile */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=S%20V%20Banquet%20Halls,%20Mansoorabad,%20Telangana%20500074,%20India"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button get-directions mobile-view"
      >
        🚗 Get Directions
      </a>
    </div>

    {/* Interactive Google Map */}
    <div className="map-container" style={{ marginTop: "40px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.343774058592!2d78.56439697527573!3d17.347183283533173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f533bc585b9%3A0xf467520e448c3d96!2sS%20V%20Banquet%20Halls!5e0!3m2!1sen!2suk!4v1735682032546!5m2!1sen!2suk"
        width="100%"
        height="300"
        style={{ border: "none", borderRadius: "8px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SV Banquet Halls Location"
      ></iframe>
    </div>
  </section>
);

export default ContactForm;
