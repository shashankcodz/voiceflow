import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
          People who <span className="text-gradient">never want to type</span> again
        </h2>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card featured">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"I dictated 70% of our Q2 board doc with it. Absolute time saver — it sounds more natural than my typing ever did."</p>
          <div className="t-author">
            <div className="t-avatar">JS</div>
            <div>
              <div className="t-name">Jordan S.</div>
              <div className="t-role">CEO, Series B startup</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"As a developer I use Voca for commit messages, PR descriptions, and Slack. It's shockingly good at technical language."</p>
          <div className="t-author">
            <div className="t-avatar">AK</div>
            <div>
              <div className="t-name">Arjun K.</div>
              <div className="t-role">Senior Engineer, Bangalore</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"I have RSI and this has genuinely changed my life. I can write all day without wrist pain. This should be built into every OS."</p>
          <div className="t-author">
            <div className="t-avatar">MS</div>
            <div>
              <div className="t-name">Maya S.</div>
              <div className="t-role">UX Designer</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"I was skeptical. Then I answered 40 emails in 20 minutes while walking around my apartment. I'm never going back."</p>
          <div className="t-author">
            <div className="t-avatar">TR</div>
            <div>
              <div className="t-name">Thomas R.</div>
              <div className="t-role">Founder, Fintech</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"The AI cleanup is unreal. I say 'um' and 'like' constantly — none of it shows up. It's like having a personal editor live."</p>
          <div className="t-author">
            <div className="t-avatar">LC</div>
            <div>
              <div className="t-name">Layla C.</div>
              <div className="t-role">Content Strategist</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="t-stars">★★★★★</div>
          <p className="t-quote">"Using it to write legal notes on-the-go is incredible. Accurate, fast, HIPAA-compliant. Our whole firm is on it now."</p>
          <div className="t-author">
            <div className="t-avatar">PV</div>
            <div>
              <div className="t-name">Priya V.</div>
              <div className="t-role">Attorney, Mumbai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
