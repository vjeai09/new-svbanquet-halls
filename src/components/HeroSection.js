import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop className="background-video">
        <source src="video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to SV Banquet Halls</h1>
      </div>
    </div>
  );
};

export default HeroSection;
