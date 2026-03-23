import React from 'react';

export default function SpeedSection() {
  return (
    <section className="speed-section">
      <div className="section-tag">Performance</div>
      <h2 className="section-title reveal">4× faster than typing. <span className="text-gradient">Same quality.</span></h2>
      <p className="section-sub reveal">The average person types 45 words per minute. We speak at 220. Voca bridges that gap — instantly.</p>

      <div className="speed-grid reveal">
        <div className="speed-card">
          <div className="speed-card-header">
            <span className="speed-method">Keyboard</span>
          </div>
          <div className="speed-wpm">45<span className="speed-unit">wpm</span></div>
          <div className="speed-bar-wrap"><div className="speed-bar" style={{ width: '20%' }} id="bar-keyboard"></div></div>
          <p className="speed-text">Hours spent drafting emails, filling forms, writing messages — one keystroke at a time.</p>
        </div>

        <div className="speed-vs">VS</div>

        <div className="speed-card voca">
          <div className="speed-card-header">
            <span className="speed-method active">Voca Voice</span>
          </div>
          <div className="speed-wpm active">220<span className="speed-unit">wpm</span></div>
          <div className="speed-bar-wrap"><div className="speed-bar active" style={{ width: '100%' }} id="bar-voca"></div></div>
          <p className="speed-text" style={{ color: "var(--white-60)" }}>Speak your thoughts at the speed of thought. AI cleans it up instantly. No extra steps.</p>
        </div>
      </div>
    </section>
  );
}
