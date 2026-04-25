import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQ.css";

const faqs = [
  {
    q: "How many guests can you accommodate?",
    a: "We have 3 halls: 2 fully A/C and 1 spacious Non-A/C hall. Each hall seats 220 guests. Plus an independent terrace space. Total capacity: 660 seated or 900+ floating (cocktail-style, buffet). We can configure the space for your exact guest count.",
  },
  {
    q: "Can I bring my own caterer?",
    a: "Absolutely, yes. Bring your trusted caterer and we provide two fully equipped kitchens with utensils. OR use our in-house catering team if you prefer. Completely your choice — zero restrictions, zero mandatory packages.",
  },
  {
    q: "Is the venue available for Telugu traditional ceremonies?",
    a: "Absolutely — we specialise in బారసాల (cradle ceremony), లంగా ఓణీ వేడుక (half-saree ceremony), నిశ్చితార్థం (engagement), Upanayanam, Namakaran, and all Hindu functions.",
  },
  {
    q: "What is the booking process?",
    a: "Call or WhatsApp us on +91 6305 333 751. We will confirm date availability and guide you through a simple advance payment to block the date.",
  },
  {
    q: "Is parking available?",
    a: "Yes — cellar parking for a limited number of vehicles, ample street parking in front, and valet parking available on request.",
  },
  {
    q: "Are the halls air-conditioned?",
    a: "Two of our halls are fully A/C. We also have a spacious Non-A/C hall — ideal for daytime and evening functions with natural ventilation. Plus, we have an independent terrace space (not tied to any specific hall) for outdoor moments or overflow seating.",
  },
  {
    q: "Do you provide decoration and photography?",
    a: "Completely your choice. Bring your own trusted decorators and photographer, OR use our in-house team — we have experienced decorators and a photographer available if you prefer. No restrictions, no mandatory packages. Your event, your vendors.",
  },
  {
    q: "Is the venue wheelchair accessible?",
    a: "Yes. We have an elevator, wheelchair-friendly spaces, and thoughtfully designed steps throughout the venue.",
  },
  {
    q: "What is the hall rental cost for 200 guests?",
    a: "Pricing varies based on date, hall selection (A/C vs Non-A/C), and optional services like catering and decoration. A/C and power backup are included in the base hall rental. Call us on +91 6305 333 751 for a personalised quote tailored to your function size and date.",
  },
  {
    q: "Is SV Banquet Halls good for Telugu weddings?",
    a: "Yes — we are a family-run venue specialising in traditional Telugu weddings (పెళ్ళి), engagements (నిశ్చితార్థం), and all Hindu rituals. Our halls accommodate mandapam setup, homam, and traditional ceremonies with cultural authenticity.",
  },
  {
    q: "Can I bring my own caterer to SV Banquet Halls?",
    a: "Absolutely — most families prefer it! Bring your trusted caterer and use our two fully equipped kitchens with all facilities for South Indian, North Indian, or fusion menus. OR use our in-house catering if you prefer. Completely your choice, zero restrictions.",
  },
  {
    q: "What is included in hall rental at SV Banquet Halls?",
    a: "Hall rental includes: spacious seating, stage area, A/C (for A/C halls), full power backup, two fully equipped kitchens with utensils, elevator access, cellar + street parking, restrooms on every floor, basic lighting, and terrace access. Decoration, catering, and photography are optional — bring your own vendors or use our in-house team. Call +91 6305 333 751 for detailed pricing.",
  },
  {
    q: "Do you have cradle ceremony facilities?",
    a: "Yes — we specialise in బారసాల (cradle ceremony / Naming Day). Our halls are perfect for the traditional setup, and we can guide you on cradle decoration vendors, priest arrangements, and family seating for this auspicious occasion.",
  },
  {
    q: "What is the capacity of SV Banquet Halls?",
    a: "Each hall seats 220 guests. We have 3 halls (2 A/C, 1 Non-A/C) plus independent terrace. Total: 660 seated or 900+ floating. Book one hall for small events (220 guests) or all three for large weddings (660+ guests). We configure to your exact count.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, disable: 'mobile' });
  }, []);

  // Generate FAQ Schema for SEO/AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // EventVenue / LocalBusiness Schema for Google Maps, Local SEO & AEO
  const venueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": "https://svbanquethalls.com/#venue",
    "name": "SV Banquet Halls",
    "description": "Premium banquet halls in Mansoorabad, LB Nagar, Hyderabad — specialising in Telugu traditional ceremonies including cradle ceremony (బారసాల), half-saree ceremony (లంగా ఓణీ వేడుక), engagement (నిశ్చితార్థం), Upanayanam, Namakaran and weddings. Three separate halls (2 fully A/C, 1 Non-A/C) each seating 220 guests, plus independent terrace space. Total capacity: 660 seated or 900+ floating guests.",
    "url": "https://svbanquethalls.com",
    "telephone": "+91-6305-333751",
    "image": "https://svbanquethalls.com/og-image.jpg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ragala Enclave, Sri Ram Hills Colony, Mansoorabad, LB Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3494,
      "longitude": 78.5577
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:30",
      "closes": "21:30"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.0",
      "reviewCount": "457",
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Cellar Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Valet Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "In-house Catering Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "External Caterers Allowed", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Terrace Access", "value": true }
    ],
    "maximumAttendeeCapacity": 900,
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "Place", "name": "LB Nagar" },
      { "@type": "Place", "name": "Mansoorabad" },
      { "@type": "Place", "name": "Vanasthalipuram" },
      { "@type": "Place", "name": "Hayathnagar" }
    ],
    "knowsLanguage": ["te", "en", "hi"]
  };

  return (
    <section className="faq-section" id="faq">
      {/* FAQ + EventVenue Schema for Google Rich Results, Maps & AI Discoverability */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(venueSchema)}
        </script>
      </Helmet>

      <div className="section-divider"></div>

      <div className="faq-header" data-aos="fade-up">
        <h2 className="faq-title">
          <span className="telugu-title">తరచుగా అడిగే ప్రశ్నలు</span>
          <span className="english-title">Frequently Asked Questions</span>
        </h2>
        <p className="faq-subtitle">
          సందేహాలు ఉంటే మాకు కాల్ చేయండి | Have more questions? Call us.
        </p>
      </div>

      <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <span className="faq-chevron">{open === i ? "▲" : "▼"}</span>
            </div>
            {open === i && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-cta" data-aos="fade-up" data-aos-delay="200">
        <a href="tel:+916305333751" className="faq-call-btn">
          Still have questions? Call Us →
        </a>
      </div>
    </section>
  );
};

export default FAQ;
