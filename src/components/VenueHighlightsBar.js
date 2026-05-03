import React from "react";
import "./VenueHighlightsBar.css";

const highlights = [
  { icon: "✅", text: "Bring Your Own Vendors | విక్రేతల స్వేచ్ఛ" },
  { icon: "✅", text: "Zero Mandatory Packages | ఎలాంటి బలవంతం లేదు" },
  { icon: "✅", text: "Direct Vendor Negotiation | నేరుగా చర్చలు" },
  { icon: "✅", text: "8+ Years Trusted by Mansoorabad | 8+ సంవత్సరాల నమ్మకం" },
  { icon: "🏛️", text: "3 Halls: 2 A/C + 1 Non-A/C" },
  { icon: "👥", text: "220–660 Guests Capacity" },
  { icon: "🍳", text: "2 Fully Equipped Kitchens" },
  { icon: "♿", text: "Wheelchair Accessible + Elevator" },
];

const VenueHighlightsBar = () => {
  return (
    <div className="venue-highlights-bar" aria-label="Venue highlights">
      <div className="venue-highlights-track">
        {[...highlights, ...highlights].map((item, i) => (
          <span key={i} className="venue-highlights-item" aria-hidden={i >= highlights.length}>
            <span className="vh-icon">{item.icon}</span>
            <span className="vh-text">{item.text}</span>
            <span className="vh-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default VenueHighlightsBar;
