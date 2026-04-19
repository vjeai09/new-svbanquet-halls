import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { FaQuoteLeft, FaStar, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import './Testimonial.css';

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: true, disable: 'mobile' });
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    {
      text: "Very luxurious banquet Hall. Really had a blast here. Suitable for marriages, birthdays etc. It adds a really rich look to the party with ac halls and spacious dining space.",
      author: "SAM",
      rating: 5,
      source: "Google Reviews",
      avatar: "S",
      color: "#8B0000"
    },
    {
      text: "Hall was comfortable and pretty clean with ac in full swing. Staff cooperated well in every aspect from event to lunch. It is very much comfortable for 300 members with elevator, Generator. Awesome.",
      author: "Ravinder Vunyale",
      rating: 5,
      source: "Google Reviews",
      avatar: "R",
      color: "#DAA520"
    },
    {
      text: "Good one for birthday parties and small occasions, don't have enough car parking except that everything is fine with good dining space.",
      author: "Subrahmanyam Immaneni",
      rating: 4,
      source: "Google Reviews",
      avatar: "S",
      color: "#FF6347"
    },
    {
      text: "Excellent venue with great ambiance. The staff were very helpful and the facilities were top-notch. Highly recommended for any celebration!",
      author: "Priya Sharma",
      rating: 5,
      source: "Google Reviews",
      avatar: "P",
      color: "#4169E1"
    },
    {
      text: "Beautiful halls with traditional decor. Perfect for our wedding reception. The team made everything seamless and stress-free.",
      author: "Rajesh Kumar",
      rating: 5,
      source: "Google Reviews",
      avatar: "R",
      color: "#32CD32"
    },
  ];

  return (
    <div id="testimonials" className="testimonials">
      <div className="section-divider"></div>
      
      {/* Decorative Elements */}
      <div className="testimonial-deco deco-1">✨</div>
      <div className="testimonial-deco deco-2">🪔</div>
      <div className="testimonial-deco deco-3">🌺</div>
      <div className="testimonial-deco deco-4">✨</div>

      {/* Header */}
      <div className="testimonials-header" data-aos="fade-up">
        <h2 className="testimonials-title">
          <span className="telugu-title">మా కస్టమర్ల అనుభవాలు</span>
          <span className="english-title">What Our Clients Say</span>
        </h2>
        <p className="testimonials-subtitle">
          మీ నమ్మకం మా బలం | Your Trust is Our Strength
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="testimonial-container" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect={isMobile ? "slide" : "coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={isMobile ? undefined : {
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="testimonials-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                {/* Background Pattern */}
                <div className="testimonial-pattern"></div>
                
                {/* Quote Icon */}
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>

                {/* Avatar */}
                <div className="testimonial-avatar" style={{ backgroundColor: review.color }}>
                  <span className="avatar-text">{review.avatar}</span>
                  <div className="avatar-ring"></div>
                </div>

                {/* Rating */}
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={index < review.rating ? "star filled" : "star"}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="testimonial-text">"{review.text}"</p>

                {/* Author Info */}
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <h4>{review.author}</h4>
                    <div className="testimonial-source">
                      <FaGoogle className="google-icon" />
                      <span>{review.source}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="corner-deco corner-top-left"></div>
                <div className="corner-deco corner-top-right"></div>
                <div className="corner-deco corner-bottom-left"></div>
                <div className="corner-deco corner-bottom-right"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trust & Review CTA */}
      <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="200">

        {/* Section Header */}
        <div className="cta-section-header">
          <span className="cta-section-ornament">✦</span>
          <h3 className="cta-section-title">మా విశ్వసనీయత <span>| Our Track Record</span></h3>
          <span className="cta-section-ornament">✦</span>
        </div>
        <div className="cta-section-divider"></div>

        {/* Trust Stats */}
        <div className="trust-badges">
          <div className="trust-badge">
            <span className="badge-number">10,000+</span>
            <span className="badge-label">Guests Welcomed</span>
          </div>
          <div className="trust-badge-divider"></div>
          <div className="trust-badge">
            <span className="badge-number">4.0</span>
            <span className="badge-stars">⭐⭐⭐⭐⭐</span>
            <span className="badge-label">Google Rating</span>
          </div>
          <div className="trust-badge-divider"></div>
          <div className="trust-badge">
            <span className="badge-number">8+</span>
            <span className="badge-label">Years of Joy</span>
          </div>
        </div>

        {/* Single prominent review button */}
        <a
          href="https://g.page/r/CZY9jEQOUmf0EAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="write-review-btn"
        >
          <FaGoogle />
          <span>Write a Review on Google ⭐⭐⭐⭐⭐</span>
        </a>

        {/* WhatsApp quick booking */}
        <a
          href="https://wa.me/916305333751?text=నమస్కారం%2C%20హాల్%20బుకింగ్%20గురించి%20అడగాలనుకుంటున్నాను"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta-link"
        >
          <FaWhatsapp />
          <span>Quick Booking via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
