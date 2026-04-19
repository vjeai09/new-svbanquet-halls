import React from "react";
import "./VenueHighlightsBar.css";

const highlights = [
  "🏛 A/C & Non A/C Halls",
  "🍳 Kitchen & Utensils Included",
  "🧑‍🍳 Bring Your Own Caterer",
];

const VenueHighlightsBar = () => {
  return (
    <div className="venue-highlights-bar" aria-label="Venue highlights">
      <div className="venue-highlights-inner">
        {highlights.map((item) => (
          <span key={item} className="venue-highlights-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VenueHighlightsBar;
