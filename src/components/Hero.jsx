import React, { useEffect, useState } from 'react';

const rawMessages = [
  '"umm so the the quarterly report is due friday and i think we should like include the data from Q3 but also maybe add a section for predictions going forward"',
  '"hey can you um schedule a meeting for like thursday afternoon maybe 2 or 3 pm with the the whole team and also send a reminder the day before thanks"',
  '"so i was thinking we could redesign the landing page make it more modern with a dark theme and bigger headlines and like the hero section should have some kind of animation"',
];

const cleanMessages = [
  'The quarterly report is due <strong style="color:var(--cyan)">Friday</strong>. I suggest we include the Q3 data and add a forward-looking <strong style="color:var(--cyan)">predictions section</strong>.',
  'Please schedule a team meeting for <strong style="color:var(--cyan)">Thursday afternoon</strong> — around 2–3 PM — and send a <strong style="color:var(--cyan)">reminder the day before</strong>.',
  'I think we should <strong style="color:var(--cyan)">redesign the landing page</strong> with a modern dark theme, larger headlines, and an <strong style="color:var(--cyan)">animated hero section</strong>.',
];

export default function Hero() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % rawMessages.length);
        setIsTransitioning(false);
      }, 400); // Wait for fade out
    }, 5000);

    return () => clearInterval(currentInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-badge">
        <span className="badge-dot"></span>
        Now in open beta — free forever
      </div>

      <h1>
        Don't type.<br />
        <span className="line-2">Just Speak.</span>
      </h1>

      <p className="hero-sub">
        Voca turns your voice into polished, perfect text — everywhere on your computer. Any app, any website, any input field.
      </p>

      <div className="hero-ctas">
        <a className="btn-hero" href="#try">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-1 17.93V22h2v-2.07A8 8 0 0 0 20 12h-2a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93z" />
          </svg>
          Download Free
        </a>
        <a className="btn-hero-ghost" href="#try">
          🎙 Try in browser
        </a>
      </div>

      <div className="hero-platforms">
        <div className="platform-item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          macOS
        </div>
        <div className="platform-item" style={{ color: "rgba(255,255,255,0.12)" }}>·</div>
        <div className="platform-item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-7 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-7-1.24v-7.54l7 .03z" />
          </svg>
          Windows
        </div>
        <div className="platform-item" style={{ color: "rgba(255,255,255,0.12)" }}>·</div>
        <div className="platform-item">📱 iOS</div>
        <div className="platform-item" style={{ color: "rgba(255,255,255,0.12)" }}>·</div>
        <div className="platform-item">🤖 Android</div>
      </div>

      {/* Demo Card */}
      <div className="hero-demo">
        <div className="demo-card">
          <div className="demo-bar">
            <div className="demo-dot"></div>
            <div className="demo-dot"></div>
            <div className="demo-dot"></div>
            <div className="demo-url">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 1a11 11 0 1 0 0 22A11 11 0 0 0 12 1zm0 2a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" />
              </svg>
              gmail.com/mail
            </div>
          </div>
          <div className="demo-content">
            <div>
              <div className="demo-col-label raw">🎙 You said</div>
              <div
                className="demo-text-box raw-text"
                id="raw-text"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 0.5s ease',
                }}
              >
                {rawMessages[msgIndex]}
              </div>
            </div>
            <div>
              <div className="demo-col-label clean">✨ Voca output</div>
              <div
                className="demo-text-box clean-text"
                id="clean-text"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: cleanMessages[msgIndex] }} />
                <span className="typing-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
