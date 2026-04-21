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

      {/* Cost Planning Guide - Educational */}
      <div className="pricing-cost-guide" data-aos="fade-up" data-aos-delay="150">
        <h3 className="cost-guide-title">
          <span className="telugu-subtitle">బడ్జెట్ ప్లానింగ్</span>
          <span className="english-subtitle">Understanding Your Event Budget</span>
        </h3>

        <p className="cost-guide-intro">
          Planning a 150-guest event in Mansoorabad? Here's an approximate breakdown of typical costs
          to help you budget. <em>Actual prices vary based on your choices.</em>
        </p>

        <div className="cost-comparison-boxes">

          {/* Traditional Model */}
          <div className="cost-box cost-box-traditional">
            <h4 className="cost-box-header">Package-Based Venues</h4>
            <p className="cost-box-subtitle">Many venues operate this way</p>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-label">Hall rental</span>
                <span className="cost-value">₹30,000-40,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-label">In-house catering (₹600-700/plate)</span>
                <span className="cost-value">₹90,000-1,05,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Tied-up vendors (decorator/photo)</span>
                <span className="cost-value">₹50,000-70,000</span>
              </div>
              <div className="cost-total">
                <span className="cost-label"><strong>Approximate Total</strong></span>
                <span className="cost-value"><strong>₹1,70,000-2,15,000</strong></span>
              </div>
            </div>
            <p className="cost-note">⚠️ Limited flexibility, vendor choice restricted</p>
          </div>

          {/* SV Model */}
          <div className="cost-box cost-box-sv">
            <h4 className="cost-box-header">SV Banquet Halls Model</h4>
            <p className="cost-box-subtitle">Bring your own vendors</p>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-label">Hall rental (call for quote)</span>
                <span className="cost-value">Call us</span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Your caterer (₹450-550/plate)</span>
                <span className="cost-value">₹67,500-82,500</span>
              </div>
              <div className="cost-item">
                <span className="cost-label">Your decorator/photographer</span>
                <span className="cost-value">₹40,000-60,000</span>
              </div>
              <div className="cost-total">
                <span className="cost-label"><strong>Approx. Total (excl. hall)*</strong></span>
                <span className="cost-value"><strong>₹1,07,500-1,42,500</strong></span>
              </div>
            </div>
            <p className="cost-note">✅ Full flexibility, choose trusted vendors</p>
          </div>

        </div>

        <div className="cost-savings-explanation">
          <h4 className="savings-title">💰 Why Our Model Typically Costs Less</h4>
          <div className="savings-reasons">
            <div className="savings-reason">
              <span className="reason-icon">🏢</span>
              <div className="reason-content">
                <strong>We own the property</strong>
                <p>No rent overhead to pass on to customers</p>
              </div>
            </div>
            <div className="savings-reason">
              <span className="reason-icon">🍽️</span>
              <div className="reason-content">
                <strong>No catering markup</strong>
                <p>You hire caterer directly at market rates (typically ₹100-150 less per plate)</p>
              </div>
            </div>
            <div className="savings-reason">
              <span className="reason-icon">🎨</span>
              <div className="reason-content">
                <strong>No vendor commissions</strong>
                <p>Your decorator/photographer charges market rate without adding venue commission</p>
              </div>
            </div>
          </div>
        </div>

        <p className="cost-disclaimer">
          <small>
            * Prices shown are approximate market ranges for Mansoorabad/LB Nagar area (as of 2026)
            for educational purposes only. Actual costs vary based on menu choices, vendor selection,
            decoration complexity, guest count, and event date. Call us for specific quote for your event.
          </small>
        </p>
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
