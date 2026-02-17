import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/guides.css';

const HowToChooseBanquetHallGuide = () => {
  const [activeStep, setActiveStep] = useState(null);
  const location = useLocation();

  // Scroll to top when component mounts or location changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const steps = [
    {
      id: 1,
      title: "Know Your Numbers",
      telugu: "అతిథుల సంఖ్యను నిర్ణయించండి",
      icon: "📊",
      content: "Here's the secret nobody tells you: most people choose a banquet hall, then realize it doesn't fit their guest list.\n\nDo it backwards.",
      keyPoints: [
        { label: "Honest guest count", desc: "People who will definitely come" },
        { label: "Generous maximum", desc: "All the people you might invite" }
      ],
      insight: "Between these two numbers lies your perfect hall size. Too big? Feels empty. Too small? Feels chaotic."
    },
    {
      id: 2,
      title: "Ask the Question That Changes Everything",
      telugu: "వేదిక మీకు విక్రేతల ఎంపికలో స్వేచ్ఛ ఇస్తుందా?",
      icon: "❓",
      content: "This is the moment of truth. During your hall visit, lean in and ask:\n\n\"Can I bring my own caterer? My own decorator? My own photographer?\"",
      keyPoints: [
        { label: "Listen carefully", desc: "Pay attention to tone, not just words" },
        { label: "Write it down", desc: "Document their response conditions" },
        { label: "Look for partnership", desc: "Not gatekeeping" }
      ],
      insight: "At the right hall, you don't negotiate WITH the venue. You collaborate. That's the difference between renting a space and renting a prison."
    },
    {
      id: 3,
      title: "Visit When You'll Celebrate",
      telugu: "లాజిస్టిక్స్‌ సహాయం ఎలా ఉంటుంది",
      icon: "🕐",
      content: "Your event will happen at a specific time of day. Visit the hall then.\n\nIf you're having an evening wedding, go at sunset. If you're hosting a morning function, see it in morning light.",
      keyPoints: [
        { label: "Loading area", desc: "Is it dignified or cramped?" },
        { label: "Kitchen access", desc: "Can caterers reach it easily?" },
        { label: "Power & wifi", desc: "Enough outlets? Strong signal?" }
      ],
      insight: "A venue that has thought about vendor coordination feels different. They've planned for this."
    },
    {
      id: 4,
      title: "The Budget Truth Nobody Wants to Admit",
      telugu: "నిజమైన ఖర్చులను పోల్చండి",
      icon: "💰",
      content: "All-inclusive packages sound like a dream. Then add-ons arrive.\n\n\"That's the base rate. The AC costs extra. The lighting costs extra.\"",
      keyPoints: [
        { label: "Transparent rental", desc: "Know exactly what you're paying for" },
        { label: "Direct vendor negotiation", desc: "Better prices, higher quality" },
        { label: "No hidden fees", desc: "Just honest math" }
      ],
      insight: "When you bring your own vendors, you negotiate directly with them. They compete for your business. Prices drop. Quality rises."
    },
    {
      id: 5,
      title: "Your Event Deserves to Be Yours",
      telugu: "మీ ఈవెంట్‌ను మీ స్టైల్లో రూపొందించండి",
      icon: "✨",
      content: "Close your eyes for a second and imagine your perfect event. Not someone else's wedding. Yours.",
      keyPoints: [
        { label: "Your caterer", desc: "Serves biryani that tastes like home" },
        { label: "Your decorator", desc: "Who gets your vision without you finishing sentences" },
        { label: "Your music", desc: "Your playlist, your vibe" }
      ],
      insight: "When you own your vendor choices, all of this becomes possible. This is your story being told in your way."
    },
    {
      id: 6,
      title: "Know Exactly What You're Paying For",
      telugu: "మీరు చేసే ఖర్చుకు ఖచ్చితమైన సమాధానం ఉండాలి",
      icon: "✅",
      content: "Hidden costs are the silent dream-killers of event planning.\n\nYou budget ₹50 lakhs. Then somehow you're at ₹75 lakhs.",
      keyPoints: [
        { label: "Exact price", desc: "No 'starting from' games" },
        { label: "What's included", desc: "Tables, chairs, lights, sound, kitchen, parking" },
        { label: "Extra charges", desc: "All listed upfront with amounts" }
      ],
      insight: "You're not just paying for space. You're paying for peace of mind. When you know where every rupee goes, planning becomes fun."
    }
  ];

  const checklist = [
    { item: "Your guest count", detail: "Honest number, not inflated" },
    { item: "Outside vendor policy", detail: "In writing that you can bring your own caterer, decorator, photographer" },
    { item: "Logistics confirmed", detail: "Loading area, parking, kitchen access, power points, wifi" },
    { item: "Full pricing breakdown", detail: "No 'starting from.' Exact rate. All included items listed." },
    { item: "Lighting and sound", detail: "Who manages it? Can your AV team hook in?" },
    { item: "Cancellation & deposit terms", detail: "Clear contract, not vague promises" },
    { item: "Exact timing", detail: "Setup time, event time, and cleanup time written down" },
    { item: "The relationship", detail: "Does talking to them feel stressful or supportive?" }
  ];

  return (
    <div className="guide-container">
      {/* HERO SECTION */}
      <section className="guide-hero">
        <div className="guide-hero-overlay"></div>
        <div className="guide-hero-content">
          <h1 className="guide-hero-title">How to Choose a Banquet Hall in Hyderabad</h1>
          <p className="guide-hero-subtitle">Without Losing Flexibility, Control, or Your Peace of Mind</p>
          <p className="guide-hero-description">
            Your celebration deserves your choices—not the venue's. This guide walks you through finding a banquet hall that honors your preferences, respects your trusted vendors, and lets you design an event that feels authentically <em>yours</em>.
          </p>
        </div>
      </section>

      {/* OPENING STORY */}
      <section className="guide-story">
        <div className="story-container">
          <h2 className="story-heading">The Moment Everything Changes</h2>
          <div className="story-box">
            <p>Close your eyes for a moment. Picture this: You're planning your wedding. Or that milestone family celebration—the one you've been dreaming about since you were a kid. In your mind's eye, you see the perfect day. Not a generic banquet hall day. <em>Your</em> day.</p>
            
            <p>You've already thought about who should be there working with you. That caterer Aunty swears by—the one who makes biryani so good it tastes like home and memories mixed together. The decorator who doesn't need you to finish sentences; they just <em>get</em> your vision. The photographer who has been there for every important moment of your life, so they know how to capture what matters.</p>
            
            <p>These are the people you trust. These are the people who love what they do. And in your head, they're part of your celebration.</p>
            
            <p>Then you walk into a beautiful hall. The space is stunning. The staff makes you feel welcome. Your excitement builds. <strong>This is the moment you've been waiting for.</strong> But then, somewhere in the conversation, they mention: "We only work with our preferred vendors."</p>
            
            <p>That one sentence. It hits differently.</p>
            
            <p>Suddenly, you can't bring your people. Your vision gets filtered through their network. Your choices get smaller. Your celebration becomes less <em>yours</em>. The feeling? It's a quiet loss. A loss of control. Of authenticity. Of freedom.</p>
            
            <p>But here's what we know: This doesn't have to be your story.</p>
            
            <p><strong>This guide exists because you deserve better.</strong> Because your celebration should be exactly what you imagined. Because the people you trust deserve to be part of your big moment. Because when you have real choice—real <em>freedom</em>—everything changes.</p>
            
            <p>Let's find you that venue. The one that celebrates your choices as much as you do.</p>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="guide-steps">
        <div className="steps-container">
          <h2 className="steps-heading">6 Steps to Freedom</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-card ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="step-header">
                  <span className="step-number">{step.id}</span>
                  <span className="step-icon">{step.icon}</span>
                </div>
                
                <h3 className="step-title">{step.title}</h3>
                <p className="step-telugu">{step.telugu}</p>
                
                {activeStep === step.id && (
                  <div className="step-expanded">
                    <p className="step-description">{step.content}</p>
                    
                    <div className="step-keypoints">
                      <p className="keypoints-label">What This Means:</p>
                      {step.keyPoints.map((kp, idx) => (
                        <div key={idx} className="keypoint">
                          <strong>{kp.label}:</strong> {kp.desc}
                        </div>
                      ))}
                    </div>
                    
                    <div className="step-insight">
                      <p>{step.insight}</p>
                    </div>
                  </div>
                )}
                
                {activeStep !== step.id && (
                  <p className="step-preview">{step.content.split('\n')[0]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INSIGHT CALLOUT */}
      <section className="guide-insight">
        <div className="insight-container">
          <div className="insight-icon">💰</div>
          <div className="insight-content">
            <h2>The Real Currency</h2>
            <p>When you bring your own vendors, you negotiate <strong>directly with them</strong>. They compete to win your business. Prices drop. Quality rises. This is how markets actually work—when you have choice.</p>
            <p className="insight-highlight">It's called freedom. And it saves money.</p>
          </div>
          <div className="insight-decorative">
            <div className="insight-badge">✓ Your Choice</div>
            <div className="insight-badge">✓ Better Prices</div>
            <div className="insight-badge">✓ Real Freedom</div>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECTION */}
      <section className="guide-checklist">
        <div className="checklist-container">
          <h2 className="checklist-heading">Your Final Checklist</h2>
          <p className="checklist-intro">Before You Sign Anything, Ensure These Are Crystal Clear:</p>
          
          <div className="checklist-items">
            {checklist.map((item, idx) => (
              <div key={idx} className="checklist-item">
                <div className="checklist-box">
                  <input type="checkbox" id={`check-${idx}`} />
                </div>
                <div className="checklist-content">
                  <label htmlFor={`check-${idx}`}>
                    <strong>{item.item}</strong>
                    <p>{item.detail}</p>
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="checklist-footer">
            <p>If even <em>one</em> of these boxes feels unclear, ask again. Your event is too important for loose ends.</p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="guide-testimonials">
        <div className="testimonials-container">
          <h2 className="testimonials-heading">The Families Who Choose Freedom</h2>
          
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <p>"They didn't regret vendor choices because they made them."</p>
              </div>
              <div className="testimonial-meta">Complete Control</div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <p>"They didn't stress about hidden costs because there weren't any."</p>
              </div>
              <div className="testimonial-meta">Budget Confidence</div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <p>"They didn't feel restricted because they had freedom."</p>
              </div>
              <div className="testimonial-meta">Peace of Mind</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="guide-why-us">
        <div className="why-us-container">
          <div className="why-us-content">
            <h2>Why Choose S V Banquet Halls</h2>
            <p>At S V Banquet Halls in Mansoorabad, we believe your event should be a reflection of <strong>you</strong>—your culture, your tastes, your people, your vision.</p>
            
            <div className="why-us-list">
              <div className="why-us-item">
                <span className="why-us-check">✔</span>
                <div>
                  <strong>Complete Vendor Freedom</strong>
                  <p>Bring your own caterer, decorator, or photographer</p>
                </div>
              </div>
              <div className="why-us-item">
                <span className="why-us-check">✔</span>
                <div>
                  <strong>Transparent, No-Hidden-Fees Pricing</strong>
                  <p>Know every rupee you're spending from day one</p>
                </div>
              </div>
              <div className="why-us-item">
                <span className="why-us-check">✔</span>
                <div>
                  <strong>Thoughtful Logistic Support</strong>
                  <p>Loading, parking, power, AC, wifi—we've thought about it</p>
                </div>
              </div>
              <div className="why-us-item">
                <span className="why-us-check">✔</span>
                <div>
                  <strong>Professional, Non-Pushy Staff</strong>
                  <p>We support your vision, we don't restrict it</p>
                </div>
              </div>
              <div className="why-us-item">
                <span className="why-us-check">✔</span>
                <div>
                  <strong>Spacious Design for Your Creativity</strong>
                  <p>Arrange as you wish: rounds, theater, cocktail—your design</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-us-highlights">
            <div className="highlight-box">
              <p className="highlight-label">Perfect For</p>
              <ul>
                <li>Weddings (2-day celebrations)</li>
                <li>Engagements (intimate or grand)</li>
                <li>Birthdays (no restrictions)</li>
                <li>Corporate events</li>
                <li>Cultural functions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="guide-final-cta">
        <div className="final-cta-content">
          <h2>Your Event Awaits</h2>
          <p>This guide wasn't written to sell you. It was written to <strong>empower</strong> you.</p>
          <p>You now know the questions to ask. You understand what freedom actually looks like. You can spot the venues that will support your vision.</p>
          
          <div className="final-cta-buttons">
            <a href="tel:+919876543210" className="cta-button cta-primary">
              𝗖𝗮𝗹𝗹 & L𝗲𝗮𝗿𝗻 𝗠𝗼𝗿𝗲
            </a>
            <a href="https://wa.me/919876543210" className="cta-button cta-secondary">
              💬 WhatsApp
            </a>
          </div>
          
          <p className="final-cta-text">
            Or visit us at <strong>S V Banquet Halls</strong> in Mansoorabad. No pressure. Just honest conversations about what your event needs.
          </p>
          
         
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="guide-quick-info">
        <div className="quick-info-container">
          <h3>S V Banquet Halls</h3>
          <p><strong>Location:</strong> Sahara Main Road, Mansoorabad, LB Nagar, Hyderabad</p>
          <p className="quick-info-note">Flexible, vendor-friendly venue for weddings, engagements, birthdays & celebrations.</p>
        </div>
      </section>
    </div>
  );
};

export default HowToChooseBanquetHallGuide;
