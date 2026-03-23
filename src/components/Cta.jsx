import React from 'react';

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <div className="cta-inner">
        <div className="cta-card">
          <div className="hero-badge" style={{ margin: '0 auto 24px' }}>
            <span className="badge-dot"></span>
            Join 50,000+ people speaking their way through work
          </div>
          <h2 className="cta-title">Your keyboard<br />is <span className="text-gradient">optional now.</span></h2>
          <p className="cta-sub">Download Voca free and speak your first 50 minutes today. No account needed.</p>
          <div className="cta-btns">
            <a className="btn-hero" href="#">
              ⬇️ Download Free
            </a>
            <a className="btn-hero-ghost" href="#">
              🎙 Try in browser
            </a>
          </div>
          <p className="cta-note">macOS · Windows · iPhone · Android &nbsp;·&nbsp; No credit card required</p>
        </div>
      </div>
    </section>
  );
}
