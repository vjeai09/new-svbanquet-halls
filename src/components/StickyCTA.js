import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const StickyCTA = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Hook to track screen size and determine if it's desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Set desktop size
    };
    handleResize(); // Run it once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render nothing if not desktop
  if (!isDesktop) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "75%", // Vertical positioning near center-right
        right: "20px", // Align to the right
        transform: "translateY(-50%)", // Center vertically
        display: "flex",
        flexDirection: "column", // Stack buttons vertically
        gap: "15px", // Add space between buttons
        zIndex: 9999, // Ensure above other content
      }}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with WhatsApp number
        style={{
          ...ctaButtonStyle,
          backgroundColor: "#25D366", // WhatsApp color
        }}
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={30} color="white" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        style={{
          ...ctaButtonStyle,
          backgroundColor: "#34b7f1", // Phone color
        }}
        aria-label="Call us"
      >
        <FaPhoneAlt size={30} color="white" />
      </a>
    </div>
  );
};

// Shared styles for buttons
const ctaButtonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  textDecoration: "none",
  color: "white",
  transition: "all 0.3s ease",
};

export default StickyCTA;
