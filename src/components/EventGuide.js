import React from "react";
import "./EventGuide.css";

const Feature = ({title, children, accent}) => (
  <div className={"eg-feature " + (accent ? "accent" : "") }>
    <h3>{title}</h3>
    <div className="eg-feature-body">{children}</div>
  </div>
);

const VendorBadge = () => (
  <div className="eg-vendor-badge">
    <strong>Quick Clarification</strong>
    <p>
      If you heard "We only work with our preferred vendors," please note:
      <span className="eg-yes"> we welcome your trusted caterers, decorators, and
      photographers.</span>
    </p>
  </div>
);

const EventGuide = () => {
  return (
    <article className="eg-root" aria-label="Event planning guide">
      <header className="eg-hero">
        <h1>How to Choose a Banquet Hall — Keep Control of Your Celebration</h1>
        <p className="eg-sub">Design the celebration you actually want — not someone else's package.</p>
      </header>

      <VendorBadge />

      <section className="eg-section">
        <Feature title="1. Know Your Numbers">
          Start with an honest guest count and a generous max. That tells you the
          exact hall size that will feel right. Too big is lonely; too small is cramped.
        </Feature>

        <Feature title="2. Ask the Right Question" accent>
          During your site visit, ask: <em>Can I bring my own caterer, decorator, or photographer?</em>
          If the answer isn't a clear "yes," get specifics in writing.
        </Feature>

        <Feature title="3. Visit at the Actual Time">
          See the hall at the time of day your event will run. Walk the vendors' path
          and check loading, power, and kitchen access.
        </Feature>

        <Feature title="4. Pricing That Respects You">
          Avoid "starting from" numbers. Ask for a full breakdown so your budget
          stays predictable and calm.
        </Feature>

        <Feature title="5. Make It Yours">
          The little creative choices—dessert bars, heirloom dishes, music—are what
          make an event unforgettable. Freedom to choose vendors makes those choices real.
        </Feature>
      </section>

      <section className="eg-checklist">
        <h2>Before You Sign</h2>
        <ul>
          <li>Guest count confirmed</li>
          <li>Outside vendor policy in writing</li>
          <li>Logistics (loading, parking, power, wifi)</li>
          <li>Exact pricing & add-ons listed</li>
          <li>Setup, event, and cleanup times defined</li>
        </ul>
      </section>

      <footer className="eg-cta">
        <p>When a venue supports your choices, planning becomes joyful.</p>
        <button className="eg-primary">Schedule a Visit</button>
      </footer>
    </article>
  );
};

export default EventGuide;
