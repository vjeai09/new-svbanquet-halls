import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { FaQuoteLeft, FaStar, FaGoogle } from 'react-icons/fa';
import './Testimonial.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
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
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
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

      {/* CTA Section */}
      <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="200">
        <p className="cta-text">మీ అభిప్రాయం కూడా పంచుకోండి | Share Your Experience</p>
        <a
          href="https://g.page/r/CZY9SMhOUkf0EBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button review-button"
        >
          <FaGoogle />
          <span>Write a Review</span>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
