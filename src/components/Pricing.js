import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Pricing.css";

const plans = [
  {
    name: "Single Hall",
    teluguName: "ఒక హాల్",
    guests: "Up to 150 guests",
    badge: null,
    features: [
      "1 A/C Hall (Ground or 1st Floor)",
      "Kitchen access included",
      "Street & cellar parking",
      "Power backup",
      "Clean washrooms & dressing room",
    ],
    cta: "Check Availability",
  },
  {
    name: "Double Hall",
    teluguName: "రెండు హాళ్ళు",
    guests: "150–300 guests",
    badge: "Most Popular",
    features: [
      "2 A/C Halls across floors",
      "Elevator access for all guests",
      "Two kitchens available",
      "Valet parking on request",
      "Premium sound system",
      "Dedicated event coordinator",
    ],
    cta: "Book This Package",
  },
  {
    name: "Full Venue",
    teluguName: "పూర్తి వేదిక",
    guests: "300–450+ guests",
    badge: "Grand Celebrations",
    features: [
      "All 3 floors — A/C + Non-A/C + Terrace",
      "Capacity for 450+ with floating seating",
      "All kitchens & utensils",
      "Full valet parking",
      "In-house catering option",
      "Decor & photography coordination",
    ],
    cta: "Plan Your Grand Event",
  },
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, disable: 'mobile' });
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-divider"></div>

      <div className="pricing-header" data-aos="fade-up">
        <h2 className="pricing-title">
          <span className="telugu-title">మా ప్యాకేజీలు</span>
          <span className="english-title">Venue Packages</span>
        </h2>
        <p className="pricing-subtitle">
          ధరలు మీ తేదీ మరియు సీజన్ ను బట్టి మారవచ్చు | Prices vary by date &amp; season — call for a custom quote.
        </p>
      </div>

      <div className="pricing-cards" data-aos="fade-up" data-aos-delay="100">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pricing-card ${plan.badge === "Most Popular" ? "featured" : ""}`}
            data-aos="zoom-in"
            data-aos-delay={i * 80}
          >
            {plan.badge && (
              <div className="pricing-badge">{plan.badge}</div>
            )}
            <div className="pricing-card-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-telugu">{plan.teluguName}</p>
              <p className="plan-guests">{plan.guests}</p>
            </div>
            <ul className="plan-features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="plan-cta-group">
              <a href="tel:+916305333751" className="plan-cta-btn">
                <FaPhone style={{ marginRight: 6 }} />
                {plan.cta}
              </a>
              <a
                href="https://wa.me/916305333751?text=నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను"
                target="_blank"
                rel="noopener noreferrer"
                className="plan-wa-btn"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="pricing-note" data-aos="fade-up" data-aos-delay="300">
        All packages include power backup, washrooms, and dressing rooms.
        Decoration, catering, and photography can be added from our vendor network.
      </p>
    </section>
  );
};

export default Pricing;
