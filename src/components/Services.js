import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaCalendarAlt, FaBuilding, FaParking, FaWheelchair, FaWifi } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      id: "food",
      title: "Food",
      teluguTitle: "ఆహారం",
      description: "Customizable Event Catering",
      teluguDesc: "మీ ఇష్టానుసారం వంటకాలు",
      image: "/svbanquethalls/foodnew.jpg",
      icon: <FaUtensils />,
      details: [
        "Vendor Flexibility: Bring your own vendors for catering.",
        "Kitchen Access: Two fully equipped kitchens are available for patrons who wish to prepare their own meals within the halls.",
        "In-House Catering: Our professional chefs are also available to craft a delightful menu tailored to your preferences.",
      ],
    },
    {
      id: "events",
      title: "Events",
      teluguTitle: "కార్యక్రమాలు",
      description: "Freedom to celebrate your way.",
      teluguDesc: "మీ ఇష్టం మీ వేడుక",
      image: "/svbanquethalls/events.jpg",
      icon: <FaCalendarAlt />,
      details: [
        "Decoration: Bring your own or choose in-house decorators to create the perfect ambiance.",
        "Photography: Bring your preferred photographer, or let our in-house photographer capture your special moments.",
        "We accommodate all types of events, giving you the freedom to plan and celebrate your way.",
      ],
    },
    {
      id: "halls",
      title: "Our Venues",
      teluguTitle: "మా వేదికలు",
      description: "Spaces to celebrate all events.",
      teluguDesc: "అన్ని వేడుకలకు అనువైన",
      image: "/svbanquethalls/venues.jpg",
      icon: <FaBuilding />,
      details: [
        "2 A/C Halls: Elegant and comfortable, featuring cozy curtains and premium sound systems.",
        "1 Non-A/C Hall: Spacious and versatile with charming decor.",
        "Terrace Space: Perfect for evening gatherings with ambient lighting.",
      ],
    },
    {
      id: "parking",
      title: "Parking",
      teluguTitle: "పార్కింగ్",
      description: "Effortless parking for all events.",
      teluguDesc: "సులభమైన వాహన స్థలం",
      image: "/svbanquethalls/parking.jpg",
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
      image: "/svbanquethalls/accessibility.jpg",
      icon: <FaWheelchair />,
      details: [
        "Elevator Access: Convenient elevators to ensure ease of movement for all guests.",
        "Wheelchair-Friendly: Fully accessible spaces designed to accommodate wheelchairs seamlessly.",
        "Thoughtful Steps Design: Easy navigation for everyone.",
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      teluguTitle: "సౌకర్యాలు",
      description: "Ensuring a comfortable experience.",
      teluguDesc: "మీ సౌకర్యం మా ప్రాధాన్యత",
      image: "/svbanquethalls/amenities.jpg",
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
      <div className="section-divider"></div>
      
      {/* Cultural Header */}
      <div className="services-header" data-aos="fade-up">
        <div className="decorative-element left-element">🪔</div>
        <div className="header-content">
          <h2 className="services-title">
            <span className="telugu-title">మా సేవలు</span>
            <span className="english-title">Our Services</span>
          </h2>
          <p className="services-subtitle">Excellence in Every Detail | ప్రతి వివరంలో శ్రేష్ఠత</p>
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
