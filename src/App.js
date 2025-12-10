import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroVideo from "./components/HeroVideo";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import BottomBar from "./components/BottomBar";
import StickyCTA from "./components/StickyCTA";
import "./App.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      {showLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}>
              SV Banquet Halls
            </h2>
            <p style={{ fontFamily: "'Noto Sans Telugu', sans-serif", marginTop: "10px" }}>
              మీ ప్రత్యేక క్షణాలకు | Your Special Moments
            </p>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* Header component */}
      <Header />

      {/* Content sections with corresponding component IDs for scrolling */}
      <main id="main-content">
        <section id="hero-video">
          <HeroVideo />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Footer, BottomBar, and StickyCTA */}
      <Footer />
      <BottomBar />
      <StickyCTA />
    </div>
  );
}

export default App;
