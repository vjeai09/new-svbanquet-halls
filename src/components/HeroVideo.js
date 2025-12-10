import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import "./HeroVideo.css";

const HeroVideo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="hero-video-container">
      {/* Decorative Cultural Elements */}
      <div className="cultural-motif motif-top-left"></div>
      <div className="cultural-motif motif-top-right"></div>
      <div className="cultural-motif motif-bottom-left"></div>
      <div className="cultural-motif motif-bottom-right"></div>
      
      {/* Floating Decorative Elements */}
      <div className="floating-element element-1">🪔</div>
      <div className="floating-element element-2">✨</div>
      <div className="floating-element element-3">🌺</div>
      <div className="floating-element element-4">🪔</div>
      <div className="floating-element element-5">✨</div>
      
      <video
        className="hero-video"
        src="/svbanquethalls/video03.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      <div className="video-overlay">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
          {/* Decorative Border */}
          <div className="decorative-border top-border"></div>
          
          <h1 className="hero-title" data-aos="zoom-in" data-aos-delay="400">
            <span className="title-main">Celebrate Life's</span>
            <span className="title-highlight">Sacred Moments</span>
          </h1>
          
          <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="600">
            <Typewriter
              options={{
                strings: [
                  'వివాహ వేడుకలు | Wedding Celebrations',
                  'పుట్టినరోజు వేడుకలు | Birthday Parties', 
                  'కార్పొరేట్ సభలు | Corporate Events',
                  'సాంప్రదాయ కార్యక్రమాలు | Traditional Functions'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          
          <p className="hero-description" data-aos="fade-up" data-aos-delay="800">
            హైదరాబాద్ లో అత్యంత ఆధునిక మరియు సాంప్రదాయ వేదిక<br />
            <span className="english-text">Hyderabad's Most Premium & Traditional Venue</span>
          </p>
          
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="1000">
            <a href="tel:+916305333751" className="cta-button primary-cta">
              <span className="button-icon">📞</span>
              <span className="button-text">Book Now</span>
              <span className="button-shine"></span>
            </a>
            <a href="#services" className="cta-button secondary-cta">
              <span className="button-icon">✨</span>
              <span className="button-text">Explore Services</span>
              <span className="button-shine"></span>
            </a>
          </div>
          
          {/* Decorative Border */}
          <div className="decorative-border bottom-border"></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1200">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to Explore</p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
