import React from 'react';

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <div>
          <div className="section-tag">Features</div>
          <h2 className="section-title reveal">Everything you need, <span className="text-gradient">nothing you don't</span></h2>
        </div>
        <p className="section-sub reveal" style={{ margin: 0 }}>Built for people who think faster than they type — which is everyone.</p>
      </div>

      <div className="features-grid">
        {/* 1 - Universal input */}
        <div className="feature-card span-2">
          <div className="feature-icon cyan">🎤</div>
          <h3 className="feature-title">Works in every input, everywhere</h3>
          <p className="feature-desc">Click any text field, search bar, chat box, or form — anywhere on your computer or phone — and just speak. Voca detects your cursor automatically.</p>
          <div className="waveform" id="waveform">
            <div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
            <div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
            <div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
            <div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div>
          </div>
        </div>

        {/* 2 - AI editing */}
        <div className="feature-card">
          <div className="feature-icon violet">✨</div>
          <h3 className="feature-title">AI auto-editing</h3>
          <p className="feature-desc">Voca removes filler words, fixes grammar, and formats your speech — so your "um, like, yeah" becomes crisp, professional text instantly.</p>
        </div>

        {/* 3 - Snippets */}
        <div className="feature-card">
          <div className="feature-icon green">⚡</div>
          <h3 className="feature-title">Voice snippets</h3>
          <p className="feature-desc">Say a trigger word, get a full template. Perfect for signatures, FAQs, and canned replies.</p>
          <div className="snippets-demo">
            <div className="snippet-chip">
              <span className="snippet-trigger">calendar</span>
              <span className="snippet-text">Book a call → calendly.com/you</span>
            </div>
            <div className="snippet-chip">
              <span className="snippet-trigger">intro</span>
              <span className="snippet-text">Hi! I'm [Name], founder of...</span>
            </div>
            <div className="snippet-chip">
              <span className="snippet-trigger">closing</span>
              <span className="snippet-text">Best regards, [Name]</span>
            </div>
          </div>
        </div>

        {/* 4 - Languages */}
        <div className="feature-card">
          <div className="feature-icon cyan">🌐</div>
          <h3 className="feature-title">100+ languages</h3>
          <p className="feature-desc">Voca auto-detects your language and transcribes. Switch languages mid-sentence naturally.</p>
          <div className="lang-chips">
            <div className="lang-chip">🇺🇸 English</div>
            <div className="lang-chip">🇮🇳 Hindi</div>
            <div className="lang-chip">🇩🇪 German</div>
            <div className="lang-chip">🇯🇵 Japanese</div>
            <div className="lang-chip">🇫🇷 French</div>
            <div className="lang-chip">🇧🇷 Portuguese</div>
            <div className="lang-chip" style={{ color: 'var(--cyan)', borderColor: 'rgba(0,229,255,0.2)' }}>+94 more</div>
          </div>
        </div>

        {/* 5 - Privacy */}
        <div className="feature-card">
          <div className="feature-icon violet">🔒</div>
          <h3 className="feature-title">Private by design</h3>
          <p className="feature-desc">Your voice data stays encrypted. We never store recordings. HIPAA-eligible and SOC 2 ready for teams.</p>
        </div>

        {/* 6 - Keyboard shortcut */}
        <div className="feature-card">
          <div className="feature-icon green">⌨️</div>
          <h3 className="feature-title">Instant hotkey</h3>
          <p className="feature-desc">Press <strong style={{ color: 'var(--white-70)' }}>Alt+Shift+V</strong> anywhere — inside any app, any window — to toggle Voca on and off in an instant.</p>
        </div>
      </div>
    </section>
  );
}
