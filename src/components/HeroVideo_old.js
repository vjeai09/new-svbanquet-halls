import React from "react";
import "./HeroVideo.css"; // Ensure this matches the name of your CSS file

const HeroVideo = () => {
  return (
    <div className="hero-video-container">
      <video
        className="hero-video"
        src="/svbanquethalls/video03.mp4" // Use the full URL
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
        <h1>Celebrate Life’s Special Moments</h1>
        <p>Perfect venue for birthdays, receptions, and more.</p>
      </div>
    </div>
  );
};

export default HeroVideo;
