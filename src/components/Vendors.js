import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCamera } from "react-icons/fa";
import "./Vendors.css";
import VendorApplicationModal from './VendorApplicationModal';

const Vendors = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // No live or dummy vendor data shown on the public site.
  // Vendors will be added after verification via the Apply flow.
  const vendors = [];

  const categories = [
    { id: "all", name: "All Vendors", telugu: "అన్ని విక్రేతలు" },
    { id: "photography", name: "Photography", telugu: "ఫోటోగ్రఫీ" },
    { id: "catering", name: "Catering", telugu: "ఆహారం" },
    { id: "decoration", name: "Decoration", telugu: "అలంకరణ" },
  ];

  const filteredVendors =
    activeCategory === "all"
      ? vendors
      : vendors.filter((vendor) => vendor.category === activeCategory);

  return (
    <section className="vendors">
      <div className="section-divider"></div>

      {/* Decorative Elements */}
      <div className="vendor-deco deco-1">🪔</div>
      <div className="vendor-deco deco-2">✨</div>
      <div className="vendor-deco deco-3">🌺</div>

      {/* Header */}
      <div className="vendors-header" data-aos="fade-up">
        <div className="decorative-element left-element">🪔</div>
        <div className="header-content">
          <h2 className="vendors-title">
            <span className="telugu-title">మా సహకారులు</span>
            <span className="english-title">Our Partner Vendors</span>
          </h2>
          <p className="vendors-subtitle">
            Trusted Vendor Onboarding for SV Banquet Halls Events | విశ్వసనీయ భాగస్వామి నమోదు
          </p>
          <p className="vendors-trust-note">
            This section is for vendor applications only. Family event bookings are handled directly by SV Banquet Halls via Call/WhatsApp.
          </p>
        </div>
        <div className="decorative-element right-element">🌺</div>
      </div>

      {/* Category Filter */}
      <div className="category-filter" data-aos="fade-up" data-aos-delay="100">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="english-text">{category.name}</span>
            <span className="telugu-text">{category.telugu}</span>
          </button>
        ))}
      </div>

      {/* Vendors Grid - currently no live vendors. Show a single preview card and clear messaging. */}
      <div className="vendors-grid">
        {filteredVendors.length === 0 && (
          <div className={`service-card preview-sample`} data-aos="fade-up">
            <div className="card-pattern"></div>
            <div className="service-icon-badge">
              <div className="icon-circle"><FaCamera /></div>
            </div>

            <div className="service-image-container">
              <img src="/venues.jpg" alt="Lens Craft Studio sample" className="service-image" />
              <div className="image-overlay"></div>
            </div>

            <div className="service-content">
              <h3 className="service-title">
                Vendor Listing Format (For Partner Onboarding)
                <span className="service-title-telugu">భాగస్వామి నమోదు కోసం విక్రేత ప్రొఫైల్ నమూనా</span>
              </h3>
              <p className="service-description">
                This is a format demo for businesses that want to partner with us. Only verified partners will be published after review and approval.
              </p>
            </div>

            <button
              type="button"
              className="learn-more-button"
              onClick={() => setShowModal(true)}
            >
              <span className="button-text">Apply for Vendor</span>
              <span className="button-arrow">→</span>
            </button>

            <div className="service-details" data-aos="fade-down">
              <div className="details-header">
                <span className="details-icon">✨</span>
                <h4>Preview</h4>
                <span className="details-icon">✨</span>
              </div>
              <ul>
                <li><span className="detail-icon">🔸</span> Category: Photography / ఫోటోగ్రఫీ</li>
                <li><span className="detail-icon">🔸</span> Verification: Documents and profile review required</li>
                <li><span className="detail-icon">🔸</span> Public listing appears only after approval</li>
              </ul>
            </div>
            <div className="sample-ribbon">VENDOR DEMO</div>
          </div>
        )}
      </div>

      {/* CTA Section (opens modal) */}
      <div id="vendor-cta" className="vendor-cta" data-aos="fade-up">
        <div className="cta-content">
          <h3>Are you a vendor? Partner with us</h3>
          <p>విక్రేతగా చేరండి</p>
          <p style={{marginTop: '8px', marginBottom: '18px', color: '#fff'}}>
            If you provide photography, catering, decoration or related services, apply to be listed as an approved partner.
          </p>
          <button type="button" className="vendor-cta-button" onClick={() => setShowModal(true)}>
            Apply for Vendor
          </button>
          <div style={{marginTop: '8px', color: '#fff', fontSize: '0.95rem'}}>మీరు ఫోటోగ్రఫీ, క్యాటరింగ్, అలంకరణ లేదా సంబంధిత సేవల్ని అందిస్తారా? మంజూరు పొందిన భాగస్వామిగా నమోదు అవ్వడానికి దరఖాస్తు చేయండి.</div>
        </div>
      </div>

      <VendorApplicationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Vendors;
