import React from 'react';

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-bg"></div>
      <div className="pricing-inner">
        <div className="pricing-header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto' }}>
            Start free. <span className="text-gradient">Scale when ready.</span>
          </h2>
          <p className="section-sub reveal" style={{ textAlign: 'center', margin: '12px auto 0' }}>
            No credit card required. 14-day pro trial included.
          </p>
        </div>

        <div className="pricing-grid reveal">
          {/* Free */}
          <div className="pricing-card">
            <div className="pricing-tag">Personal</div>
            <div className="pricing-name">Free</div>
            <div className="pricing-price">$0</div>
            <div className="pricing-period">forever free</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>50 minutes / month voice input</li>
              <li>AI filler-word removal</li>
              <li>Works on all apps & websites</li>
              <li>10 voice snippets</li>
              <li>3 languages</li>
              <li>Basic support</li>
            </ul>
            <button className="pricing-cta mt-auto">Get started free</button>
          </div>

          {/* Pro */}
          <div className="pricing-card pro">
            <div className="pricing-tag hot">⚡ Most popular</div>
            <div className="pricing-name">Pro</div>
            <div className="pricing-price"><sup>$</sup>12</div>
            <div className="pricing-period">per month · billed annually</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Unlimited voice input</li>
              <li>Advanced AI auto-editing & tone</li>
              <li>Unlimited voice snippets</li>
              <li>100+ languages</li>
              <li>Personal dictionary (auto-learns)</li>
              <li>Priority support</li>
              <li>All platforms: Mac, Windows, iOS, Android</li>
            </ul>
            <button className="pricing-cta primary mt-auto">Start 14-day free trial</button>
          </div>

          {/* Business */}
          <div className="pricing-card">
            <div className="pricing-tag">Teams</div>
            <div className="pricing-name">Business</div>
            <div className="pricing-price"><sup>$</sup>29</div>
            <div className="pricing-period">per user / month</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li>Everything in Pro</li>
              <li>Centralized team admin</li>
              <li>SOC 2 Type II compliant</li>
              <li>HIPAA-eligible</li>
              <li>Shared snippet library</li>
              <li>SSO & SCIM</li>
              <li>Dedicated success manager</li>
            </ul>
            <button className="pricing-cta mt-auto">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
