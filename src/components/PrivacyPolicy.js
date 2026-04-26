// src/components/PrivacyPolicy.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./TermsOfService.css";

const PrivacyPolicy = () => {
  const lastUpdated = "April 2026";

  return (
    <main className="tos-page" id="main-content">
      <header className="tos-hero">
        <div className="tos-hero-inner">
          <p className="tos-telugu-label">గోప్యతా విధానం</p>
          <h1 className="tos-heading">Privacy Policy</h1>
          <p className="tos-sub">
            How SV Banquet Halls collects, uses, and protects your personal information.
          </p>
          <p className="tos-meta">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <article className="tos-content">

        {/* Introduction */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">పరిచయం</span>
            Introduction
          </h2>
          <p>
            SV Banquet Halls ("we", "us", "our") respects your privacy and is committed
            to protecting your personal information. This Privacy Policy explains what
            information we collect when you visit our website (svbanquethalls.com), contact
            us, or book our venue.
          </p>
          <p>
            This policy complies with the <em>Information Technology Act, 2000</em> and
            the <em>Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011</em> (SPDI Rules).
          </p>
        </section>

        {/* Information We Collect */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సేకరించే సమాచారం</span>
            1. Information We Collect
          </h2>

          <h3>Personal Information You Provide:</h3>
          <ul className="tos-list">
            <li>
              <strong>Name</strong> — When you call or WhatsApp us for inquiries
            </li>
            <li>
              <strong>Phone Number</strong> — For booking confirmations and communication
            </li>
            <li>
              <strong>Email Address</strong> — If you choose to provide it (optional)
            </li>
            <li>
              <strong>Event Details</strong> — Date, guest count, type of function (wedding, birthday, బారసాల, etc.)
            </li>
          </ul>

          <h3>Information Collected Automatically (Website Visit Only):</h3>
          <ul className="tos-list">
            <li>
              <strong>Basic Analytics</strong> — Google Analytics tracks page views for website improvement only. We do not track individual user behavior or use cookies for marketing.
            </li>
          </ul>
          <p>
            <em><strong>Note:</strong> We do NOT have online booking. All bookings are made via WhatsApp or phone call only.</em>
          </p>

          <h3>We DO NOT Collect:</h3>
          <ul className="tos-list">
            <li>Financial information (credit card, bank account numbers)</li>
            <li>Sensitive personal data (religion, caste, medical history, biometric data)</li>
            <li>Government-issued ID numbers (Aadhaar, PAN, passport)</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సమాచారం ఉపయోగం</span>
            2. How We Use Your Information
          </h2>
          <p>We use your personal information for:</p>
          <ul className="tos-list">
            <li>
              <strong>Booking Processing</strong> — Confirming date availability, sending booking details
            </li>
            <li>
              <strong>Communication</strong> — Responding to inquiries, providing event support
            </li>
            <li>
              <strong>Event Coordination</strong> — Coordinating with you on setup, vendors, timing
            </li>
            <li>
              <strong>Service Improvement</strong> — Understanding customer needs, improving our facilities
            </li>
            <li>
              <strong>Legal Compliance</strong> — Meeting tax, regulatory, or legal obligations
            </li>
          </ul>
          <p>
            We will <strong>NOT</strong> use your information for marketing, advertising,
            or selling to third parties without your explicit consent.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సమాచార భాగస్వామ్యం</span>
            3. Information Sharing & Disclosure
          </h2>
          <p>We may share your information with:</p>
          <ul className="tos-list">
            <li>
              <strong>Service Providers</strong> — Vendors you choose (caterers, decorators)
              only with your consent
            </li>
            <li>
              <strong>Legal Authorities</strong> — If required by law (court order, government request)
            </li>
            <li>
              <strong>Business Transfer</strong> — In case of merger, acquisition, or sale of assets
            </li>
          </ul>
          <p>
            We do <strong>NOT</strong> sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        {/* Data Security */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సమాచార భద్రత</span>
            4. Data Security
          </h2>
          <p>We protect your personal information using:</p>
          <ul className="tos-list">
            <li>Secure storage of booking records in password-protected systems</li>
            <li>Limited access to personal data (only authorized staff)</li>
            <li>Regular review of security practices</li>
            <li>Secure communication channels (WhatsApp, phone, in-person)</li>
          </ul>
          <p>
            <strong>Important:</strong> No online transmission is 100% secure. While we take
            reasonable precautions, we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సమాచార నిల్వ</span>
            5. Data Retention
          </h2>
          <p>We retain your personal information for:</p>
          <ul className="tos-list">
            <li>
              <strong>Active Bookings:</strong> Until your event is completed plus 90 days
            </li>
            <li>
              <strong>Completed Events:</strong> Up to 3 years for tax and legal compliance
            </li>
            <li>
              <strong>Inquiries (no booking):</strong> Up to 1 year
            </li>
          </ul>
          <p>
            After the retention period, we securely delete or anonymize your data.
          </p>
        </section>

        {/* Cookies & Analytics */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">కుకీలు మరియు అనలిటిక్స్</span>
            6. Cookies & Analytics
          </h2>
          <p>
            We use <strong>Google Analytics</strong> to understand basic website traffic
            (page views, visitor count). This helps us improve the website experience.
          </p>
          <p>
            <strong>We do NOT:</strong>
          </p>
          <ul className="tos-list">
            <li>Use cookies for advertising or marketing</li>
            <li>Track individual user behavior</li>
            <li>Sell analytics data to third parties</li>
            <li>Use cookies for online booking (we don't have online booking)</li>
          </ul>
          <p>
            You can disable analytics tracking using browser extensions like "uBlock Origin"
            or by disabling cookies in your browser settings.
          </p>
        </section>

        {/* Your Rights */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">మీ హక్కులు</span>
            7. Your Rights
          </h2>
          <p>Under the SPDI Rules, you have the right to:</p>
          <ul className="tos-list">
            <li>
              <strong>Access:</strong> Request a copy of the personal information we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw consent for data processing (may affect booking)
            </li>
          </ul>
          <p>
            To exercise these rights, contact our Grievance Officer (see Section 9).
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites (Google Maps, WhatsApp).
            We are not responsible for the privacy practices of these external sites.
            Please review their privacy policies separately.
          </p>
        </section>

        {/* Grievance Officer */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">ఫిర్యాదుల అధికారి</span>
            9. Grievance Officer
          </h2>
          <p>
            For any privacy concerns, data access requests, or complaints under the
            SPDI Rules, please contact:
          </p>
          <div className="tos-contact-box">
            <p><strong>Grievance Officer</strong></p>
            <p>SV Banquet Halls</p>
            <p>Ragala Enclave, Sri Ram Hills Colony</p>
            <p>Mansoorabad, LB Nagar, Hyderabad - 500068</p>
            <p>
              <FaPhone style={{ marginRight: 8 }} />
              <strong>Phone/WhatsApp:</strong> <a href="tel:+916305333751">+91 6305 333 751</a>
            </p>
            <p><em>Response time: Within 7 days of receiving your request</em></p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">విధాన మార్పులు</span>
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by updating the "Last updated" date at the top of this page.
          </p>
          <p>
            Your continued use of our website or services after changes indicates your
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">మమ్మల్ని సంప్రదించండి</span>
            11. Contact Us
          </h2>
          <p>Questions about this Privacy Policy? We're here to help.</p>
          <p>
            <strong>Call:</strong> <a href="tel:+916305333751">+91 6305 333 751</a><br />
            <strong>Visit:</strong> Ragala Enclave, Sri Ram Hills Colony, Mansoorabad, LB Nagar, Hyderabad - 500068<br />
            <strong>Hours:</strong> 9:30 AM - 9:30 PM, 7 days a week
          </p>
        </section>

        {/* Navigation */}
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(218, 165, 32, 0.2)', fontSize: '0.95rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#8B0000', textDecoration: 'none', fontWeight: '600' }}>← Back to Home</Link>
          <span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
          <Link to="/terms" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: '600' }}>Terms of Service</Link>
          <span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
          <Link to="/cancellation-policy" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: '600' }}>Cancellation Policy</Link>
        </div>

      </article>
    </main>
  );
};

export default PrivacyPolicy;
