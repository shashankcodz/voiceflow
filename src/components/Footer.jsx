import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="nav-logo" href="#" style={{ fontSize: '18px' }}>
            <div className="nav-logo-mark" style={{ width: '28px', height: '28px', borderRadius: '8px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '15px', height: '15px' }} fill="currentColor">
                <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-1 17.93V22h2v-2.07A8 8 0 0 0 20 12h-2a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93z" />
              </svg>
            </div>
            Voca
          </a>
          <p>Voice-to-text AI that works everywhere. Built for the way humans actually think and communicate.</p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Download</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Voca. All rights reserved.</span>
        <span>Made with ❤️ for people who hate typing</span>
      </div>
    </footer>
  );
}
