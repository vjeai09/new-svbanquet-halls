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
        <source src="/wed2.mp4" type="video/mp4" />
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
        <source src="/wed2.mp4" type="video/mp4" />
      </video>

      {/* Corner gold brackets */}
      <div className="cultural-motif motif-top-left"></div>
      <div className="cultural-motif motif-top-right"></div>
      <div className="cultural-motif motif-bottom-left"></div>
      <div className="cultural-motif motif-bottom-right"></div>

      {/* Cinematic bottom gradient — text lives here */}
      <div className="video-overlay">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="300">

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            <span className="title-main">మీ శుభ వేళ</span>
            <span className="title-highlight">Your Celebration Awaits</span>
          </h1>

          <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            <Typewriter
              options={{
                strings: isMobile ? [
                  'Weddings · వివాహాలు',
                  'Cradle Ceremonies · బారసాలలు',
                  'Half-Saree · లంగా ఓణీ',
                  'Birthdays · పుట్టినరోజులు',
                  "Mansoorabad's Favourite Hall"
                ] : [
                  'వివాహ వేడుకలు | Weddings',
                  'బారసాల · లంగా ఓణీ | Family Ceremonies',
                  'పుట్టినరోజు వేడుకలు | Birthdays',
                  "Mansoorabad's Favourite Celebration Hall"
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 25,
              }}
            />
          </div>

          <div className="hero-bottom-row" data-aos="fade-up" data-aos-delay="600">
            <a href="tel:+916305333751" className="cta-button primary-cta">
              Book Your Date
            </a>
            <a
              href="https://maps.app.goo.gl/ThwXdnYJ7bueRzst9"
              target="_blank"
              rel="noopener noreferrer"
              className="google-rating-badge"
              aria-label="4.0 stars on Google – 457 reviews"
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
              <span className="google-rating-count">457 reviews</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
