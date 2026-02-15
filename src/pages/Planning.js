import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Planning.css';

function simpleMarkdownToHtml(md) {
  // very small, safe markdown -> HTML converter for headings, lists, hr and paragraphs
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) {
      if (inList) { html += '</ul>'; inList = false; }
      return;
    }
    if (line.startsWith('### ')) html += `<h3>${line.slice(4)}</h3>`;
    else if (line.startsWith('## ')) html += `<h2>${line.slice(3)}</h2>`;
    else if (line.startsWith('# ')) html += `<h1>${line.slice(2)}</h1>`;
    else if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${line.slice(2)}</li>`;
    } else if (line === '---') {
      if (inList) { html += '</ul>'; inList = false; }
      html += '<hr/>';
    } else {
      html += `<p>${line}</p>`;
    }
  });
  if (inList) html += '</ul>';
  return html;
}

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
  const navigate = useNavigate();
  const [html, setHtml] = useState('<p>Loading...</p>');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      const post = posts.find(p => p.slug === slug);
      if (!post) { setHtml('<p>Post not found.</p>'); return; }
      setLoading(true);
      fetch(post.path)
        .then((r) => r.text())
        .then((md) => setHtml(simpleMarkdownToHtml(md)))
        .catch(() => setHtml('<p>Could not load article.</p>'))
        .finally(() => setLoading(false));
    } else {
      // show list view
      setHtml('');
    }
  }, [slug]);

  if (slug) {
    return (
      <main className="planning-page book">
        <div className="planning-content">
          <div className="article-header">
            <nav className="breadcrumb">
              <button onClick={(e)=>{navigate('/planning');}} className="back-button">← All Guides</button>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{posts.find(p=>p.slug===slug)?.title || 'Article'}</span>
            </nav>
          </div>
          <article className="article-body">
            {loading ? <p>Loading article…</p> : <div dangerouslySetInnerHTML={{ __html: html }} />}
          </article>
        </div>
        <a className="floating-all-guides" href="#" onClick={(e)=>{e.preventDefault(); navigate('/planning');}}>All Guides</a>
      </main>
    );
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
