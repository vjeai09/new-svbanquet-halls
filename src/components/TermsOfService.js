// src/components/TermsOfService.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "./SEO";
import "./TermsOfService.css";

const TermsOfService = () => {
  const lastUpdated = "April 2026";

  return (
    <main className="tos-page" id="main-content">
      <SEO
        title="Terms of Service"
        description="Booking terms and conditions for SV Banquet Halls, Mansoorabad, Hyderabad. Read our venue rental agreement, cancellation policy, and client responsibilities."
        canonical="https://www.svbanquethalls.com/terms"
        noIndex={true}
      />
      <header className="tos-hero">
        <div className="tos-hero-inner">
          <p className="tos-telugu-label">నిబంధనలు మరియు షరతులు</p>
          <h1 className="tos-heading">Terms of Service</h1>
          <p className="tos-sub">
            The agreement between SV Banquet Halls and our valued clients.
            Please read carefully before booking your event with us.
          </p>
          <p className="tos-meta">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <article className="tos-content">

        {/* Intro */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">పరిచయం</span>
            Introduction
          </h2>
          <p>
            Welcome to <strong>SV Banquet Halls</strong> (“we”, “us”, “our”), an
            owner-operated banquet venue located at Mansoorabad, LB Nagar,
            Hyderabad, Telangana – 500068. By booking our venue or using this
            website (svbanquethalls.com), you (“Client”, “you”) agree to the
            terms and conditions set out below.
          </p>
          <p>
            These terms are governed by the <em>Indian Contract Act, 1872</em>{" "}
            and the <em>Consumer Protection Act, 2019</em>. We have written
            them in plain language so every family can understand the
            arrangement clearly. If anything is unclear, please call us before
            you book.
          </p>
        </section>

        {/* Booking */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">బుకింగ్ నిబంధనలు</span>
            1. Booking Terms &amp; Conditions
          </h2>
          <ul className="tos-list">
            <li>
              All bookings are confirmed only after receipt of the advance
              payment and a signed booking form.
            </li>
            <li>
              The Client must provide accurate event details: date, timing,
              expected guest count, type of function, and a valid contact
              number.
            </li>
            <li>
              Bookings are accepted on a first-come, first-served basis.
              Tentative holds without advance are released after 48 hours.
            </li>
            <li>
              The hall is available in standard time slots. Any extension
              beyond the booked slot is subject to availability and additional
              charges, payable on the event day.
            </li>
            <li>
              The Client must be 18 years or older and legally competent to
              enter into a contract under Indian law.
            </li>
          </ul>
        </section>

        {/* Payment */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">చెల్లింపు నిబంధనలు</span>
            2. Payment Terms
          </h2>
          <ul className="tos-list">
            <li>
              <strong>Advance:</strong> A minimum of 30% of the total venue
              charge is payable at the time of booking to confirm the date.
            </li>
            <li>
              <strong>Balance:</strong> The remaining amount must be settled
              at least 3 (three) days before the event date.
            </li>
            <li>
              <strong>Accepted modes:</strong> UPI, NEFT/RTGS bank transfer,
              cash (subject to applicable Income Tax limits under Section
              269ST), and cheque (subject to clearance prior to event date).
            </li>
            <li>
              All payments are inclusive of applicable GST. A proper receipt
              is issued for every payment received.
            </li>
            <li>
              In case of cheque dishonour, the booking shall stand
              automatically cancelled and the advance forfeited.
            </li>
          </ul>
        </section>

        {/* Cancellation */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">రద్దు మరియు రీఫండ్ విధానం</span>
            3. Cancellation &amp; Refund Policy
          </h2>
          <p>
            We understand that plans can change. Our refund structure is
            designed to be fair to both parties:
          </p>
          <div className="tos-table-wrap">
            <table className="tos-table">
              <thead>
                <tr>
                  <th>Cancellation Notice</th>
                  <th>Refund of Advance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>More than 60 days before event</td>
                  <td>90% refund</td>
                </tr>
                <tr>
                  <td>30 – 60 days before event</td>
                  <td>50% refund</td>
                </tr>
                <tr>
                  <td>15 – 29 days before event</td>
                  <td>25% refund</td>
                </tr>
                <tr>
                  <td>Less than 15 days before event</td>
                  <td>No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Refunds, where applicable, are processed within 14 working days to
            the original payment account. Date changes (subject to
            availability) requested more than 30 days in advance are
            accommodated free of charge once; subsequent changes carry a
            nominal rescheduling fee.
          </p>
        </section>

        {/* Venue Usage */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">వేదిక వినియోగ నియమాలు</span>
            4. Venue Usage Rules
          </h2>
          <ul className="tos-list">
            <li>
              The hall must be used only for the purpose declared at the time
              of booking. Use for any other purpose requires prior written
              consent.
            </li>
            <li>
              Smoking, consumption of alcohol, gambling, and any unlawful
              activity are strictly prohibited inside the premises.
            </li>
            <li>
              The Client shall comply with all applicable laws including noise
              limits prescribed by the <em>Noise Pollution (Regulation and
              Control) Rules, 2000</em>. Loud music must be turned off by
              10:00 PM as per Telangana State guidelines.
            </li>
            <li>
              Maximum guest capacity declared for the hall must not be
              exceeded for safety reasons.
            </li>
            <li>
              Setup and clearance must be completed within the booked time
              slot. Vendors arriving early or staying late require prior
              approval.
            </li>
            <li>
              Pets, fireworks (other than approved indoor sparklers),
              hazardous materials, and any item that may damage the venue are
              not permitted.
            </li>
          </ul>
        </section>

        {/* Client Responsibilities */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">క్లయింట్ బాధ్యతలు</span>
            5. Client Responsibilities
          </h2>
          <p>
            <strong>SV Banquet Halls offers venue rental only.</strong> We do
            not provide catering, decoration, or photography in-house. The
            Client is responsible for engaging and managing all event
            vendors.
          </p>
          <ul className="tos-list">
            <li>
              <strong>Caterer:</strong> The Client may bring their own caterer
              or choose from our recommended list. The kitchen area must be
              left clean. The caterer is responsible for food safety, hygiene
              compliance under <em>FSSAI</em>, and licensing.
            </li>
            <li>
              <strong>Decorator:</strong> Decorators may use the hall for
              setup during the booked period only. No nails, screws, or
              adhesive that damages walls, pillars, or flooring may be used.
              All decoration material must be removed after the event.
            </li>
            <li>
              <strong>Cleanup:</strong> Basic post-event cleaning is included.
              However, removal of decoration debris, leftover food, and
              vendor equipment is the Client's responsibility. Excessive
              cleanup beyond normal wear will be billed at actual cost.
            </li>
            <li>
              The Client must designate one responsible adult as the
              point-of-contact for the entire event duration.
            </li>
            <li>
              The Client is responsible for the conduct of their guests and
              vendors on the premises.
            </li>
          </ul>
        </section>

        {/* Liability */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">బాధ్యత పరిమితులు</span>
            6. Liability Limitations
          </h2>
          <ul className="tos-list">
            <li>
              SV Banquet Halls shall not be liable for any loss, theft, or
              damage to personal belongings, jewellery, gifts, or valuables
              brought into the premises by the Client or their guests.
            </li>
            <li>
              We are not responsible for the quality of food, service, or
              materials provided by vendors arranged by the Client.
            </li>
            <li>
              Our maximum aggregate liability under these terms shall not
              exceed the total venue rental amount paid for the specific
              booking.
            </li>
            <li>
              We carry no liability for indirect, consequential, or punitive
              damages arising out of the event.
            </li>
            <li>
              Nothing in these terms limits any rights the Client has under
              the Consumer Protection Act, 2019, which cannot be excluded by
              agreement.
            </li>
          </ul>
        </section>

        {/* Damage */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">నష్టం / విరిగిపోవడం విధానం</span>
            7. Damage &amp; Breakage Policy
          </h2>
          <ul className="tos-list">
            <li>
              The Client is liable for any damage to the venue, fixtures,
              furniture, or equipment caused by themselves, their guests, or
              their vendors during the event.
            </li>
            <li>
              A refundable security deposit may be collected at booking and
              returned within 7 working days of the event, after deducting
              charges for any damage or breakage assessed jointly with the
              Client.
            </li>
            <li>
              Repair/replacement charges will be levied at fair market value.
              An itemised statement is shared before any deduction.
            </li>
            <li>
              The premises will be jointly inspected before and after the
              event. The Client is encouraged to be present for both.
            </li>
          </ul>
        </section>

        {/* Force Majeure */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">అనివార్య పరిస్థితులు</span>
            8. Force Majeure
          </h2>
          <p>
            Neither party shall be liable for failure to perform obligations
            due to events beyond reasonable control, including but not
            limited to: natural disasters, floods, earthquakes, fire,
            pandemic, government-imposed lockdowns or restrictions, civil
            unrest, terrorism, or breakdown of essential public utilities.
          </p>
          <p>
            In such cases, we will work in good faith with the Client to
            reschedule the event to a mutually convenient date, subject to
            availability, without additional venue charges. If rescheduling
            is not possible, refunds will be processed on a fair pro-rata
            basis.
          </p>
        </section>

        {/* Governing Law */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">పాలక చట్టం</span>
            9. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of India. Any dispute arising out of or in connection
            with these terms shall be subject to the exclusive jurisdiction
            of the competent courts at <strong>Hyderabad, Telangana</strong>.
          </p>
          <p>
            We encourage amicable resolution first. If a dispute cannot be
            resolved through discussion within 30 days, either party may
            approach the appropriate consumer forum or civil court.
          </p>
        </section>

        {/* Contact */}
        <section className="tos-section tos-contact-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">సంప్రదించండి</span>
            10. Contact Information
          </h2>
          <p>
            For any clarification on these terms, please reach out to us. We
            are an owner-operated venue and prefer direct conversation over
            paperwork.
          </p>
          <ul className="tos-contact-list">
            <li>
              <FaPhone className="tos-contact-icon" />
              <a href="tel:+916305333751">+91 6305 333 751</a>
            </li>
            <li>
              <FaWhatsapp className="tos-contact-icon tos-contact-icon--wa" />
              <a
                href="https://wa.me/916305333751"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 6305 333 751
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="tos-contact-icon" />
              <span>SV Banquet Halls, Mansoorabad, LB Nagar, Hyderabad – 500068</span>
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(218, 165, 32, 0.2)', fontSize: '0.95rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#8B0000', textDecoration: 'none', fontWeight: '600' }}>← Back to Home</Link>
          <span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
          <Link to="/privacy" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: '600' }}>Privacy Policy</Link>
          <span style={{ margin: '0 16px', color: '#ccc' }}>|</span>
          <Link to="/cancellation-policy" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: '600' }}>Cancellation Policy</Link>
        </div>

      </article>
    </main>
  );
};

export default TermsOfService;
