import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaCalendarAlt, FaBuilding, FaParking, FaWheelchair, FaWifi, FaStar } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      disable: 'mobile',
    });
  }, []);

  const services = [
    {
      id: "food",
      title: "Food",
      teluguTitle: "ఆహారం",
      description: "Customizable Event Catering",
      teluguDesc: "మీ ఇష్టానుసారం వంటకాలు",
      image: "/foodnew.jpg",
      icon: <FaUtensils />,
      details: [
        "Bring your own caterer — full flexibility, no restrictions.",
        "Kitchen Access: Two fully equipped kitchens available for your vendors or family to use.",
        "Need a caterer? We can recommend trusted local caterers on request.",
      ],
    },
    {
      id: "events",
      title: "Events",
      teluguTitle: "కార్యక్రమాలు",
      description: "Freedom to celebrate your way.",
      teluguDesc: "మీ ఇష్టం మీ వేడుక",
      image: "/events.jpg",
      icon: <FaCalendarAlt />,
      details: [
        "Decoration: Bring your own decorator — full freedom to style the hall your way.",
        "Photography: Bring your preferred photographer to capture your special moments.",
        "Need recommendations? We can suggest trusted local decorators and photographers on request.",
      ],
    },
    {
      id: "halls",
      title: "Our Venues",
      teluguTitle: "మా వేదికలు",
      description: "Multiple halls & terrace — we scale to your celebration.",
      teluguDesc: "చిన్న కుటుంబం నుండి పెద్ద వేడుక వరకు",
      image: "/venues.jpg",
      icon: <FaBuilding />,
      details: [
        "2 A/C Halls: Elegant and comfortable, featuring cozy curtains and premium sound systems.",
        "1 Non-A/C Hall (1st Floor): Spacious and versatile — ideal for daytime and evening functions.",
        "Terrace Space: Open-air area perfect for additional seating or outdoor moments.",
        "Book one hall for a small gathering or combine all for a grand celebration — call us to plan your event.",
      ],
    },
    {
      id: "parking",
      title: "Parking",
      teluguTitle: "పార్కింగ్",
      description: "Effortless parking for all events.",
      teluguDesc: "సులభమైన వాహన స్థలం",
      image: "/parking.jpg",
      icon: <FaParking />,
      details: [
        "Valet Parking: Available upon request for patrons' event bookings.",
        "Cellar Parking: Limited parking space for a select number of vehicles.",
        "Street Parking: Ample parking space located right in front of the halls.",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      teluguTitle: "అందుబాటు",
      description: "Inclusive spaces for all attendees.",
      teluguDesc: "అందరికీ అనువైన వసతులు",
      image: "/accessibility.jpg",
      icon: <FaWheelchair />,
      details: [
        "Elevator Access: Convenient elevators to ensure ease of movement for all guests.",
        "Wheelchair-Friendly: Fully accessible spaces designed to accommodate wheelchairs seamlessly.",
        "Thoughtful Steps Design: Easy navigation for everyone.",
      ],
    },
    {
      id: "ceremonies",
      title: "Traditional Ceremonies",
      teluguTitle: "సాంప్రదాయ కార్యక్రమాలు",
      description: "బారసాల, లంగా ఓణీ & more — we honor every milestone.",
      teluguDesc: "ప్రతి శుభ కార్యక్రమానికి మా హాల్ సిద్ధం",
      image: "/events.jpg",
      icon: <FaStar />,
      details: [
        "Cradle Ceremony (బారసాల): A sacred naming ritual welcoming your newborn — we set the perfect traditional ambiance with space for puja, family seating, and catering.",
        "Half-Saree Ceremony (లంగా ఓణీ పండుగ): Celebrate your daughter's coming-of-age with the grandeur it deserves — elegant décor, stage setup, and room for the whole family.",
        "Also host: Namakaran (నామకరణం), Upanayanam, Engagement (నిశ్చితార్థం), and all traditional Hindu functions.",
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      teluguTitle: "సౌకర్యాలు",
      description: "Ensuring a comfortable experience.",
      teluguDesc: "మీ సౌకర్యం మా ప్రాధాన్యత",
      image: "/amenities.jpg",
      icon: <FaWifi />,
      details: [
        "Power Backup: Uninterrupted electricity to keep your events running smoothly.",
        "Clean Washrooms: Well-maintained facilities for the comfort of your guests.",
        "Dressing Rooms: Dedicated spaces for preparation and convenience.",
      ],
    },
  ];

  return (
    <section className="services">
      <div className="section-divider"><span className="section-divider-lotus">🪷</span></div>
      
      {/* Cultural Header */}
      <div className="services-header" data-aos="fade-up">
        <div className="decorative-element left-element">🪔</div>
        <div className="header-content">
          <h2 className="services-title">
            <span className="telugu-title">మా సేవలు</span>
            <span className="english-title">Our Services</span>
          </h2>
          <p className="services-subtitle">మీ శుభకార్యానికి కావలసిన సమస్తం ఇక్కడే | Everything your celebration needs, under one roof</p>
        </div>
        <div className="decorative-element right-element">🌺</div>
      </div>

      {/* Services Grid */}
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card ${
              activeService === service.id ? "active" : ""
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
          >
            {/* Card Background Pattern */}
            <div className="card-pattern"></div>
            
            {/* Icon Badge */}
            <div className="service-icon-badge">
              <div className="icon-circle">{service.icon}</div>
            </div>

            {/* Image Container */}
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Content */}
            <div className="service-content">
              <h3 className="service-title">
                {service.title}
                <span className="service-title-telugu">{service.teluguTitle}</span>
              </h3>
              <p className="service-description">
                {service.description}
                <span className="service-description-telugu">{service.teluguDesc}</span>
              </p>
            </div>

            {/* Learn More Button */}
            <button
              className="learn-more-button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveService(activeService === service.id ? null : service.id);
              }}
            >
              <span className="button-text">
                {activeService === service.id ? "Show Less" : "Learn More"}
              </span>
              <span className="button-arrow">
                {activeService === service.id ? "↑" : "→"}
              </span>
            </button>

            {/* Details Section */}
            {activeService === service.id && (
              <div className="service-details" data-aos="fade-down">
                <div className="details-header">
                  <span className="details-icon">✨</span>
                  <h4>What We Offer</h4>
                  <span className="details-icon">✨</span>
                </div>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                      <span className="detail-icon">🔸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
