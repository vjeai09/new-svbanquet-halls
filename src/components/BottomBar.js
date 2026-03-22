import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./BottomBar.css";

const BottomBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const currentYear = new Date().getFullYear();
  const lastUpdatedDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return null;
  }
  const trackEvent = (action) => {
    // Lightweight analytics hook — pushes to dataLayer if present and logs to console
    try {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'cta_click', category: 'bottom_bar', action });
      }
    } catch (e) {
      // ignore
    }
    console.log('CTA click:', action);
  };

  return (
    <>
      <div className="bottom-bar">
        <a href="tel:+916305333751" className="bb-btn bb-call" onClick={() => trackEvent('call_click')} aria-label="Call +91 6305 333 751">
          <FaPhoneAlt size={18} />
          <span>Call Now</span>
        </a>
        <a href="https://wa.me/916305333751?text=నమస్కారం, హాల్ బుకింగ్ గురించి అడగాలనుకుంటున్నాను" className="bb-btn bb-whatsapp" onClick={() => trackEvent('whatsapp_click')} aria-label="WhatsApp +91 6305 333 751">
          <FaWhatsapp size={18} />
          <span>WhatsApp Now</span>
        </a>
      </div>
      {/* Sticky Footer */}
      <div className="sticky-footer">
        <div className="sticky-footer-content">
          <p>© {currentYear} SV Banquet Halls | Mansoorabad, LB Nagar, Hyderabad - 500072</p>
          <p className="footer-updated">Last updated: {lastUpdatedDate}</p>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
