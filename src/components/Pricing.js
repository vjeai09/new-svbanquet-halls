import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Pricing.css";

const included = [
  "A/C & Non-A/C halls + open terrace",
  "Kitchen access for your caterer or family",
  "Power backup throughout the event",
  "Clean washrooms & dressing rooms",
  "Elevator access & wheelchair-friendly spaces",
  "Street & cellar parking",
];

const flexible = [
  "Book one hall, two halls, or the full venue",
  "Morning slot, evening slot, or full day",
  "Bring your own caterer, decorator & photographer",
  "Need recommendations? Just ask — we'll suggest trusted local vendors",
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, disable: "mobile" });
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-divider"><span className="section-divider-lotus">🪷</span></div>

      <div className="pricing-header" data-aos="fade-up">
        <h2 className="pricing-title">
          <span className="telugu-title">హాల్ బుకింగ్</span>
          <span className="english-title">Hall Booking</span>
        </h2>
        <p className="pricing-subtitle">
          మీ వేడుక మీ చేతుల్లో ఉంది — We give you the space and the comforts.
          Your caterer, your decorator, your photographer. Your celebration, your way.
        </p>
      </div>

      <div className="pricing-flex" data-aos="fade-up" data-aos-delay="100">

        <div className="pricing-box">
          <h3 className="pricing-box-title">What's Included with Every Booking</h3>
          <ul className="pricing-list">
            {included.map((item, i) => (
              <li key={i}><span className="feature-check">✓</span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pricing-box pricing-box--flexible">
          <h3 className="pricing-box-title">Flexible — Your Way</h3>
          <ul className="pricing-list">
            {flexible.map((item, i) => (
              <li key={i}><span className="feature-check">✓</span>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="pricing-cta-group" data-aos="fade-up" data-aos-delay="200">
        <p className="pricing-cta-label">ధర మరియు తేదీ కోసం మాకు కాల్ చేయండి | Call or WhatsApp us for pricing & availability</p>
        <div className="pricing-cta-buttons">
          <a href="tel:+916305333751" className="plan-cta-btn">
            <FaPhone style={{ marginRight: 8 }} /> Call Us
          </a>
          <a
            href="https://wa.me/916305333751?text=నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను"
            target="_blank"
            rel="noopener noreferrer"
            className="plan-wa-btn"
          >
            <FaWhatsapp style={{ marginRight: 8 }} /> WhatsApp Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default Pricing;
