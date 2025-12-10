import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "food",
      title: "Food",
      description: "Customizable Event Catering",
      image: "/svbanquethalls/foodnew.jpg",
      details: [
        "Vendor Flexibility: Bring your own vendors for catering.",
        "Kitchen Access: Two fully equipped kitchens are available for patrons who wish to prepare their own meals within the halls.",
        "In-House Catering: Our professional chefs are also available to craft a delightful menu tailored to your preferences.",
      ],
    },
    {
      id: "events",
      title: "Events",
      description: "Freedom to celebrate your way.",
      image: "/svbanquethalls/events.jpg",
      details: [
        "Decoration : Bring your own or choose in-house decorators to create the perfect ambiance.",
        "Photography : Bring your preferred photographer, or let our in-house photographer capture your special moments.",
        "We accommodate all types of events, giving you the freedom to plan and celebrate your way.",
      ],
    },
    {
      id: "halls",
      title: "Our Venues",
      description: "Spaces to celebrate all events.",
      image: "/svbanquethalls/venues.jpg",
      details: [
        "2 A/C Halls: Elegant and comfortable, featuring cozy curtains and premium sound systems.",
        "1 Non-A/C Hall: Spacious and versatile with charming decor.",
        "Terrace Space: Perfect for evening gatherings with ambient lighting.",
      ],
    },
    {
      id: "parking",
      title: "Parking",
      description: "Effortless parking for all events.",
      image: "/svbanquethalls/parking.jpg",
      details: [
        "Valet Parking: Available upon request for patrons' event bookings.",
        "Cellar Parking: Limited parking space for a select number of vehicles.",
        "Street Parking: Ample parking space located right in front of the halls.",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description: "Inclusive spaces for all attendees.",
      image: "/svbanquethalls/accessibility.jpg",
      details: [
        "Elevator Access: Convenient elevators to ensure ease of movement for all guests.",
        "Wheelchair-Friendly: Fully accessible spaces designed to accommodate wheelchairs seamlessly.",
        "Thoughtful Steps Design: Easy navigation for everyone.",
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      description: "Ensuring a comfortable experience.",
      image: "/svbanquethalls/amenities.jpg",
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
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              activeService === service.id ? "active" : ""
            }`}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <button
              className="learn-more-button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveService(activeService === service.id ? null : service.id);
              }}
            >
              Learn More
            </button>
            {activeService === service.id && (
              <div className="service-details">
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
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
