import React, { useState } from "react";
import "./WeddingHalls.css";

const WeddingHalls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="wedding-halls">
      <h2>Wedding Halls</h2>
      <p>
        Spacious and elegant wedding venues tailored for your big day. Celebrate your special moments with grandeur and style.
      </p>
      <button className="cta-button" onClick={handleOpenModal}>
        Learn More
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h3>Wedding Halls</h3>
            <img
              src={`${process.env.PUBLIC_URL}/stage01.png`} // Ensure the image is in the correct folder
              alt="Wedding Hall"
              className="modal-image"
            />
            <p>
              Our wedding halls are designed to host grand events with customizable decor, exquisite catering options, and professional staff to make your special day memorable.
            </p>
            <ul>
              <li>Spacious venues for grand gatherings</li>
              <li>Customizable themes and decor</li>
              <li>Professional catering services</li>
              <li>Event coordination and planning assistance</li>
            </ul>
            <button className="cta-button close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingHalls;
