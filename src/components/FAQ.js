import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQ.css";

const faqs = [
  {
    q: "How many guests can you accommodate?",
    a: "Our halls comfortably seat 250 guests across three floors. With flexible floating arrangements we have hosted 450+ guests. Call us to plan your exact count.",
  },
  {
    q: "Can I bring my own caterer?",
    a: "Yes. We allow external caterers and provide two fully equipped kitchens. Our in-house chefs are also available if you prefer.",
  },
  {
    q: "Is the venue available for Telugu traditional ceremonies?",
    a: "Absolutely — we specialise in బారసాల (cradle), లంగా ఓణీ (half-saree), నిశ్చితార్థం (engagement), Upanayanam, Namakaran, and all Hindu functions.",
  },
  {
    q: "What is the booking process?",
    a: "Call or WhatsApp us on +91 6305 333 751. We will confirm date availability and guide you through a simple advance payment to block the date.",
  },
  {
    q: "Is parking available?",
    a: "Yes — cellar parking for a limited number of vehicles, ample street parking in front, and valet parking available on request.",
  },
  {
    q: "Are the halls air-conditioned?",
    a: "Two of our halls are fully A/C. We also have a spacious Non-A/C hall with terrace access — ideal for evening functions or overflow seating.",
  },
  {
    q: "Do you provide decoration and photography?",
    a: "We work with in-house decorators and a photographer, or you are welcome to bring your own preferred vendors.",
  },
  {
    q: "Is the venue wheelchair accessible?",
    a: "Yes. We have an elevator, wheelchair-friendly spaces, and thoughtfully designed steps throughout the venue.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: 'mobile' });
  }, []);

  return (
    <section className="faq-section" id="faq">
      <div className="section-divider"></div>

      <div className="faq-header" data-aos="fade-up">
        <h2 className="faq-title">
          <span className="telugu-title">తరచుగా అడిగే ప్రశ్నలు</span>
          <span className="english-title">Frequently Asked Questions</span>
        </h2>
        <p className="faq-subtitle">
          సందేహాలు ఉంటే మాకు కాల్ చేయండి | Have more questions? Call us.
        </p>
      </div>

      <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <span className="faq-chevron">{open === i ? "▲" : "▼"}</span>
            </div>
            {open === i && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-cta" data-aos="fade-up" data-aos-delay="200">
        <a href="tel:+916305333751" className="faq-call-btn">
          Still have questions? Call Us →
        </a>
      </div>
    </section>
  );
};

export default FAQ;
