import React from 'react';

export default function Platforms() {
  return (
    <section className="platforms-section" id="platforms">
      <div className="platforms-bg"></div>
      <div className="platforms-inner">
        <div className="platforms-header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Platforms</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
            On your desk. In your pocket.<br />
            <span className="text-gradient">Always with you.</span>
          </h2>
        </div>

        <div className="platforms-grid reveal">
          <div className="platform-card">
            <div className="platform-logo" style={{ background: 'rgba(255,255,255,0.05)' }}>🍎</div>
            <div className="platform-info">
              <h3>macOS</h3>
              <p>Native menu bar app. Works in every macOS application — Finder, Terminal, browser, anything.</p>
              <div className="platform-badge">✓ Available now</div>
            </div>
          </div>

          <div className="platform-card">
            <div className="platform-logo" style={{ background: 'rgba(0,120,215,0.1)' }}>🪟</div>
            <div className="platform-info">
              <h3>Windows</h3>
              <p>System tray integration. Voice works across all Win32, UWP, and browser apps seamlessly.</p>
              <div className="platform-badge">✓ Available now</div>
            </div>
          </div>

          <div className="platform-card">
            <div className="platform-logo" style={{ background: 'rgba(255,255,255,0.05)' }}>📱</div>
            <div className="platform-info">
              <h3>iPhone / iOS</h3>
              <p>Custom keyboard & share extension. Speak into any app — Messages, Notes, Safari, and more.</p>
              <div className="platform-badge">✓ Available now</div>
            </div>
          </div>

          <div className="platform-card">
            <div className="platform-logo" style={{ background: 'rgba(0,229,160,0.08)' }}>🤖</div>
            <div className="platform-info">
              <h3>Android</h3>
              <p>System-level voice integration. Dictate anywhere — Google, WhatsApp, Chrome, every app.</p>
              <div
                className="platform-badge"
                style={{
                  color: 'var(--green)',
                  borderColor: 'rgba(0,229,160,0.2)',
                  background: 'rgba(0,229,160,0.06)',
                }}
              >
                🚀 Beta — free & unlimited
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
