import React from 'react';
import './VendorApplicationModal.css';

export default function VendorApplicationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const email = 'svfunctionhalls@gmail.com';
  const phone = '+916305333751';
  const messageBody = 'Please include Business name, Phone number and any other details:';
  const mailto = `mailto:${email}?subject=${encodeURIComponent('Vendor Application')}&body=${encodeURIComponent(
    messageBody
  )}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    'Vendor Application'
  )}&body=${encodeURIComponent(messageBody)}`;
  const waLink = `https://wa.me/916305333751?text=${encodeURIComponent(
    'Hello, I would like to apply to list my business. Please find my details: Business name:, Phone:, Details:'
  )}`;

  return (
    <div className="vam-overlay" role="dialog" aria-modal="true">
      <div className="vam-modal">
        <header className="vam-header">
          <h2>Apply for Vendor</h2>
          <button className="vam-close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <div className="vam-form" style={{padding: '20px'}}>
          <p style={{marginBottom: '12px'}}>
            Please send your Business name, Phone number and any other details to the following:
          </p>

          <p className="vam-contact-line">
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>

          <p className="vam-contact-line">
            Text / WhatsApp: <a href={waLink} target="_blank" rel="noreferrer">+91 6305 333 751</a>
          </p>

          <p style={{marginTop: '12px', color: '#666'}}>
            We'll manually review submissions and contact approved partners to onboard them on the site.
          </p>

          <div className="vam-actions" style={{marginTop: '18px'}}>
            <button type="button" className="vam-secondary" onClick={onClose}>Close</button>
            <a
              className="vam-primary"
              href={gmailLink}
              target="_blank"
              rel="noreferrer"
              style={{textDecoration: 'none', display: 'inline-block'}}
              title="Opens Gmail compose in a new tab"
            >
              Email Now (Gmail)
            </a>
            <a className="vam-primary" href={waLink} target="_blank" rel="noreferrer" style={{marginLeft: '8px', textDecoration: 'none', display: 'inline-block'}}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
