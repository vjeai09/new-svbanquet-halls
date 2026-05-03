import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import "./HeroVideo.css";

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, mirror: true, disable: 'mobile' });
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="hero-video-container">
      {/* Blurred background fill for desktop side bars */}
      <video
        className="hero-video-blur"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-fixed.mp4" type="video/mp4" />
      </video>

      {/* Main video — full vertical reel visible */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/venues.jpg"
      >
        <source src="/hero-fixed.mp4" type="video/mp4" />
      </video>

      {/* Corner gold brackets */}
      <div className="cultural-motif motif-top-left"></div>
      <div className="cultural-motif motif-top-right"></div>
      <div className="cultural-motif motif-bottom-left"></div>
      <div className="cultural-motif motif-bottom-right"></div>

      {/* Cinematic bottom gradient — text lives here */}
      <div className="video-overlay">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="300">

          {!isMobile && (
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
              <span className="title-main">మీ వేడుక. మీ ఎంపిక. మీ స్వేచ్ఛ.</span>
              <span className="title-highlight">Your Event. Your Vendors. Your Freedom.</span>
            </h1>
          )}

          {!isMobile && (
            <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              <Typewriter
                options={{
                  strings: [
                    'వివాహ వేడుకలు | Wedding Ceremonies',
                    'బారసాల వేడుక | Cradle Ceremony',
                    'లంగా ఓణీ వేడుక | Half-Saree Ceremony',
                    'నిశ్చితార్థం వేడుకలు | Engagement Ceremonies',
                    'పుట్టినరోజు వేడుకలు | Birthday Celebrations',
                    "A Mansoorabad Favourite Since 2016"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 25,
                }}
              />
            </div>
          )}

          <div className="hero-bottom-row" data-aos="fade-up" data-aos-delay="600">
            <a href="tel:+916305333751" className="cta-button primary-cta">
              Check Availability — No Mandatory Packages
            </a>
            {!isMobile && (
              <a
                href="https://maps.app.goo.gl/ThwXdnYJ7bueRzst9"
                target="_blank"
                rel="noopener noreferrer"
                className="google-rating-badge"
                aria-label="View our Google reviews"
              >
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png"
                  alt="Google"
                  className="google-rating-logo"
                />
                <div className="google-rating-stars">
                  <span className="google-rating-score">4.0</span>
                  <span className="google-rating-stars-icons">★★★★★</span>
                </div>
                <span className="google-rating-count">See Reviews</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
