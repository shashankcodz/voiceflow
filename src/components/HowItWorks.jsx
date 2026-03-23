import React from 'react';

export default function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="section-tag">How it works</div>
      <h2 className="section-title reveal">Up and running in <span className="text-gradient">60 seconds</span></h2>

      <div className="steps-grid reveal">
        <div className="step-card">
          <span className="step-number">01</span>
          <div className="step-icon">⬇️</div>
          <h3 className="step-title">Download Voca</h3>
          <p className="step-desc">Install the free app on your Mac, Windows, iOS, or Android device. No account required to start.</p>
        </div>

        <div className="step-card">
          <span className="step-number">02</span>
          <div className="step-icon">🎯</div>
          <h3 className="step-title">Click any input</h3>
          <p className="step-desc">Click into any text field — an email, a search bar, a code comment, a chat message, anywhere.</p>
        </div>

        <div className="step-card">
          <span className="step-number">03</span>
          <div className="step-icon">✨</div>
          <h3 className="step-title">Speak. Done.</h3>
          <p className="step-desc">Press the hotkey or tap the mic. Speak naturally. Watch polished text appear in real time. That's it.</p>
        </div>
      </div>
    </section>
  );
}
