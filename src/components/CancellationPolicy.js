// src/components/CancellationPolicy.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./TermsOfService.css";

const CancellationPolicy = () => {
  const lastUpdated = "April 2026";

  return (
    <main className="tos-page" id="main-content">
      <header className="tos-hero">
        <div className="tos-hero-inner">
          <p className="tos-telugu-label">రద్దు విధానం</p>
          <h1 className="tos-heading">Cancellation & Refund Policy</h1>
          <p className="tos-sub">
            Understand our fair and transparent cancellation terms before you book.
          </p>
          <p className="tos-meta">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <article className="tos-content">

        {/* Navigation */}
        <div style={{ marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(218, 165, 32, 0.2)', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: '#8B0000', textDecoration: 'none', fontWeight: '500' }}>← Back to Home</Link>
          <span style={{ margin: '0 12px', color: '#ccc' }}>|</span>
          <Link to="/terms" style={{ color: '#0066cc', textDecoration: 'underline' }}>Terms of Service</Link>
          <span style={{ margin: '0 12px', color: '#ccc' }}>|</span>
          <Link to="/privacy" style={{ color: '#0066cc', textDecoration: 'underline' }}>Privacy Policy</Link>
        </div>

        {/* Introduction */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">పరిచయం</span>
            Introduction
          </h2>
          <p>
            At SV Banquet Halls, we understand that plans can change. This Cancellation
            & Refund Policy explains what happens if you need to cancel or reschedule
            your event booking.
          </p>
          <p>
            <strong>Our philosophy:</strong> We want to be fair to you and to our business.
            When you book a date, we block that date for other customers. Our refund policy
            reflects the administrative cost and lost opportunity when bookings are canceled.
          </p>
          <p>
            This policy complies with the <em>Consumer Protection Act, 2019</em> and
            the <em>Indian Contract Act, 1872</em>.
          </p>
        </section>

        {/* Cancellation Timeline */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">రద్దు సమయపట్టిక</span>
            1. Cancellation Timeline & Refunds
          </h2>
          <p>
            Refund amount depends on how much advance notice you give us. The earlier you
            notify us, the more we can refund.
          </p>

          <div className="tos-refund-table">
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#8B0000', color: '#FFF' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ccc' }}>Cancellation Notice</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ccc' }}>Refund Amount</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ccc' }}>Amount Retained</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    <strong>30+ days before event</strong>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc', color: '#28a745', fontWeight: 600 }}>
                    50% of total advance paid
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    50% (administrative costs, lost bookings)
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    <strong>15-29 days before event</strong>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc', color: '#ffc107', fontWeight: 600 }}>
                    25% of total advance paid
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    75% (preparation costs incurred, difficult to re-book)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    <strong>7-14 days before event</strong>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc', color: '#dc3545', fontWeight: 600 }}>
                    No refund
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    100% (cannot re-book on short notice, date is blocked)
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    <strong>Less than 7 days or No-Show</strong>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc', color: '#dc3545', fontWeight: 600 }}>
                    No refund + Balance due
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ccc' }}>
                    100% advance + remaining balance must be paid
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '1.5rem' }}>
            <strong>Example:</strong> If you paid ₹20,000 advance and cancel 35 days before
            your event, you will receive ₹10,000 refund. We retain ₹10,000 to cover our costs.
          </p>
        </section>

        {/* How to Cancel */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">రద్దు చేయడం ఎలా</span>
            2. How to Cancel Your Booking
          </h2>
          <p>To cancel your booking:</p>
          <ol className="tos-list">
            <li>
              <strong>Call us immediately:</strong> +91 6305 333 751 (speak to us directly)
            </li>
            <li>
              <strong>Provide booking details:</strong> Your name, event date, booking reference
            </li>
            <li>
              <strong>Written confirmation:</strong> Follow up via WhatsApp or email for written record
            </li>
            <li>
              <strong>Cancellation date:</strong> Your cancellation is official on the date we
              receive your phone call or written notice (whichever comes first)
            </li>
          </ol>
          <p>
            <strong>Important:</strong> Cancellation notice period is counted from the date
            we receive your cancellation request, NOT from the date you decide to cancel.
            Call us as soon as you know you need to cancel.
          </p>
        </section>

        {/* Rescheduling */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">తేదీ మార్పు</span>
            3. Rescheduling Your Event
          </h2>
          <p>
            Prefer to reschedule instead of cancel? We can help!
          </p>
          <ul className="tos-list">
            <li>
              <strong>One free reschedule:</strong> You may reschedule your event ONCE at
              no additional charge if you notify us at least 15 days before the original date.
            </li>
            <li>
              <strong>Subject to availability:</strong> New date must be available and within
              6 months of the original booking date.
            </li>
            <li>
              <strong>Advance carries forward:</strong> Your advance payment transfers to the
              new date. No refund, no additional advance needed.
            </li>
            <li>
              <strong>Second reschedule:</strong> Second and subsequent reschedules may incur
              a ₹5,000 administrative fee.
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Rescheduling is subject to hall availability. Peak dates
            (weekends, festive seasons) may not have alternative dates available.
          </p>
        </section>

        {/* Force Majeure */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">అనివార్య పరిస్థితులు</span>
            4. Force Majeure (Unforeseen Circumstances)
          </h2>
          <p>
            If your event cannot proceed due to unforeseen circumstances beyond anyone's
            control, we will work with you to find a fair solution.
          </p>

          <h3>Force Majeure Events Include:</h3>
          <ul className="tos-list">
            <li>Natural disasters (floods, earthquakes, cyclones)</li>
            <li>Pandemic lockdowns or government-mandated restrictions</li>
            <li>War, civil unrest, riots</li>
            <li>Sudden death or critical illness in the immediate family</li>
            <li>Government orders preventing the event</li>
          </ul>

          <h3>In Force Majeure Situations:</h3>
          <ul className="tos-list">
            <li>
              <strong>Rescheduling strongly preferred:</strong> We will offer to reschedule
              your event at no additional cost (subject to availability within 1 year).
            </li>
            <li>
              <strong>Partial refund:</strong> If rescheduling is not possible, we will
              refund 75% of the advance paid, retaining 25% for administrative costs.
            </li>
            <li>
              <strong>Documentation required:</strong> You must provide proof of the force
              majeure event (government order, death certificate, medical certificate, etc.).
            </li>
          </ul>
        </section>

        {/* Refund Process */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">వాపసు ప్రక్రియ</span>
            5. Refund Process & Timeline
          </h2>
          <p>
            If you are eligible for a refund under this policy:
          </p>
          <ul className="tos-list">
            <li>
              <strong>Refund method:</strong> Same method as original payment (bank transfer,
              UPI, cheque, or cash)
            </li>
            <li>
              <strong>Processing time:</strong> 7-14 business days from the date of cancellation approval
            </li>
            <li>
              <strong>Confirmation:</strong> We will send you written confirmation of the
              refund amount and expected timeline
            </li>
            <li>
              <strong>Bank processing delays:</strong> If paid by cheque or NEFT, bank
              clearing may add 2-5 additional business days
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Refunds are processed after deducting any outstanding
            amounts (if you used our facilities, services, or caused damage).
          </p>
        </section>

        {/* No-Show Policy */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">హాజరుకాని విధానం</span>
            6. No-Show Policy
          </h2>
          <p>
            If you do not show up for your booked event and did not notify us in advance:
          </p>
          <ul className="tos-list">
            <li>
              <strong>No refund:</strong> Advance payment is forfeited in full (100% retained)
            </li>
            <li>
              <strong>Balance due:</strong> The remaining balance of the venue charge is still
              payable as per the booking contract
            </li>
            <li>
              <strong>Legal action:</strong> We reserve the right to pursue legal collection
              of unpaid balances
            </li>
          </ul>
          <p>
            <strong>Why?</strong> When you no-show, we have held the date exclusively for you,
            turned away other customers, and prepared our facilities. We incur full costs with
            zero revenue.
          </p>
        </section>

        {/* Venue-Initiated Cancellation */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">వేదిక రద్దు</span>
            7. Venue-Initiated Cancellation
          </h2>
          <p>
            In rare cases, we may need to cancel your booking due to:
          </p>
          <ul className="tos-list">
            <li>Structural damage to the venue (fire, flood, building collapse)</li>
            <li>Government orders closing the venue</li>
            <li>Force majeure events making the venue unusable</li>
          </ul>

          <h3>If We Cancel Your Booking:</h3>
          <ul className="tos-list">
            <li>
              <strong>Full refund:</strong> 100% of advance paid, no deductions
            </li>
            <li>
              <strong>Alternative dates:</strong> We will offer alternative dates if available
            </li>
            <li>
              <strong>Assistance:</strong> We will try to help you find an alternative venue
              in Mansoorabad if possible
            </li>
            <li>
              <strong>No compensation beyond refund:</strong> Our liability is limited to
              returning your advance payment
            </li>
          </ul>
        </section>

        {/* Disputes */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">వివాదాలు</span>
            8. Disputes & Resolution
          </h2>
          <p>
            If you disagree with our cancellation decision or refund amount:
          </p>
          <ul className="tos-list">
            <li>
              <strong>Talk to us first:</strong> Call +91 6305 333 751 and speak to the owner.
              Most disputes are resolved through conversation.
            </li>
            <li>
              <strong>Written appeal:</strong> Submit a written explanation of your situation
              and why you believe an exception should be made.
            </li>
            <li>
              <strong>Consideration:</strong> We will review exceptional circumstances on a
              case-by-case basis.
            </li>
            <li>
              <strong>Consumer forum:</strong> If still unresolved, you may file a complaint
              with the District Consumer Disputes Redressal Commission, Hyderabad.
            </li>
          </ul>
        </section>

        {/* Contact for Cancellation */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            <span className="tos-section-telugu">రద్దు కోసం సంప్రదించండి</span>
            9. Contact Us to Cancel
          </h2>
          <p>
            Need to cancel or reschedule? We understand. Life happens.
          </p>
          <div className="tos-contact-box">
            <p><strong>Call Immediately:</strong></p>
            <p>
              <FaPhone style={{ marginRight: 8 }} />
              <a href="tel:+916305333751">+91 6305 333 751</a>
            </p>
            <p>
              <FaWhatsapp style={{ marginRight: 8, color: '#25D366' }} />
              <a href="https://wa.me/916305333751?text=నమస్కారం,%20నా%20బుకింగ్%20రద్దు%20చేయాలనుకుంటున్నాను"
                 target="_blank"
                 rel="noopener noreferrer">
                WhatsApp: +91 6305 333 751
              </a>
            </p>
            <p><strong>Available:</strong> 9:30 AM - 9:30 PM, 7 days a week</p>
            <p>
              <strong>Location:</strong> Ragala Enclave, Sri Ram Hills Colony, Mansoorabad,
              LB Nagar, Hyderabad - 500068
            </p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="tos-section">
          <h2 className="tos-section-title">
            10. Policy Acknowledgment
          </h2>
          <p>
            By booking SV Banquet Halls, you acknowledge that you have read, understood,
            and agree to this Cancellation & Refund Policy.
          </p>
          <p>
            A copy of this policy is provided at the time of booking. Please keep it for
            your records.
          </p>
        </section>

        {/* Footer Navigation */}
        <section className="tos-section" style={{ borderTop: '2px solid #DAA520', paddingTop: '2rem', marginTop: '3rem' }}>
          <p style={{ textAlign: 'center' }}>
            <Link to="/" className="tos-back-link">← Back to Home</Link>
            {' | '}
            <Link to="/terms">Terms of Service</Link>
            {' | '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </section>

      </article>
    </main>
  );
};

export default CancellationPolicy;
