import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import HowToChooseBanquetHallGuide from '../components/HowToChooseBanquetHallGuide';
import './Planning.css';

const posts = [
  {
    slug: 'how-to-choose-a-banquet-hall-hyderabad',
    title: 'How to Choose a Banquet Hall in Hyderabad (Without Losing Flexibility)',
    excerpt: 'Practical advice to plan your event while keeping control over your vendors and budget.',
    path: '/content/how-to-choose-banquet-hall-hyderabad.md',
  },
];

const Planning = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Scroll to top when location changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (slug) {
    if (slug === 'how-to-choose-a-banquet-hall-hyderabad') {
      return (
        <main className="planning-page book">
          <HowToChooseBanquetHallGuide />
        </main>
      );
    }
    
    // Fallback for future articles
    const post = posts.find(p => p.slug === slug);
    if (!post) {
      return (
        <main className="planning-page book">
          <div className="planning-content">
            <p>Post not found.</p>
          </div>
        </main>
      );
    }
  }

  return (
    <main className="planning-page">
      {/* Hero Section */}
      <div className="planning-hero">
        <div className="hero-content">
          <h1 className="hero-title">Planning & Guides</h1>
          <p className="hero-subtitle">Discover practical wisdom for hosting unforgettable events. Each guide is crafted to help you keep control, reduce stress, and celebrate with confidence.</p>
        </div>
        <div className="hero-divider"></div>
      </div>

      {/* Posts Grid */}
      <div className="planning-container">
        <div className="posts-grid">
          {posts.map((p, idx) => (
            <Link key={p.slug} to={`/planning/${p.slug}`} className="post-card-link">
              <article className="post-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="post-card-badge">Guide {idx + 1}</div>
                <h2 className="post-title">{p.title}</h2>
                <p className="post-excerpt">{p.excerpt}</p>
                <div className="post-card-footer">
                  <span className="post-cta">Read full guide →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Planning;
