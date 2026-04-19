import React from "react";
import "./VenueHighlightsBar.css";

const highlights = [
  { icon: "🏛️", text: "A/C & Non-A/C Halls" },
  { icon: "👥", text: "250–450+ Guests" },
  { icon: "🍳", text: "Kitchen & Utensils Included" },
  { icon: "🧑‍🍳", text: "Bring Your Own Caterer" },
  { icon: "🚗", text: "Valet & Street Parking" },
  { icon: "♿", text: "Wheelchair Accessible" },
  { icon: "🔋", text: "Full Power Backup" },
  { icon: "🛗", text: "Elevator Access" },
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
