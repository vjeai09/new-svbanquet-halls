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

      {/* Budget Planning Guide - Educational Only */}
      <div className="pricing-cost-guide" data-aos="fade-up" data-aos-delay="150">
        <h3 className="cost-guide-title">
          <span className="telugu-subtitle">బడ్జెట్ ప్లానింగ్</span>
          <span className="english-subtitle">Plan Your Event Budget</span>
        </h3>

        <p className="cost-guide-intro">
          At SV Banquet Halls, you control your budget by choosing your own vendors.
          Here's how our transparent model works.
        </p>

        <div className="cost-savings-explanation">
          <h4 className="savings-title">🏛️ Our Transparent Model</h4>
          <div className="savings-reasons">
            <div className="savings-reason">
              <span className="reason-icon">✓</span>
              <div className="reason-content">
                <strong>You choose your caterer</strong>
                <p>Bring your trusted caterer or family recipes. Market rates in Mansoorabad: ₹400-800/plate depending on menu. You negotiate directly, you control quality and cost.</p>
              </div>
            </div>
            <div className="savings-reason">
              <span className="reason-icon">✓</span>
              <div className="reason-content">
                <strong>You choose your decorator & photographer</strong>
                <p>Use vendors you trust or ones we recommend. No commissions, no markups. What they quote is what you pay.</p>
              </div>
            </div>
            <div className="savings-reason">
              <span className="reason-icon">✓</span>
              <div className="reason-content">
                <strong>Hall rental - transparent pricing</strong>
                <p>Based on guest count and space usage. No hidden charges. Call us for a specific quote: +91 6305 333 751</p>
              </div>
            </div>
            <div className="savings-reason">
              <span className="reason-icon">✓</span>
              <div className="reason-content">
                <strong>We own the property</strong>
                <p>No rent overhead means stable, transparent pricing. We operate for long-term relationships, not short-term profits.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop: '24px', padding: '20px', background: 'rgba(218, 165, 32, 0.08)', borderRadius: '12px', textAlign: 'center'}}>
          <p style={{margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#555', lineHeight: 1.6}}>
            <strong style={{color: '#8B0000'}}>Complete Budget Control:</strong> You decide your menu,
            you choose your vendors, you negotiate your rates. We provide the venue, kitchens, and facilities.
            Simple, transparent, flexible.
          </p>
        </div>

        <p className="cost-disclaimer">
          <small>
            Market rates mentioned are approximate ranges observed in Mansoorabad/LB Nagar area as of 2026,
            for general planning purposes only. Actual vendor rates vary. Call +91 6305 333 751 for venue quote.
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
