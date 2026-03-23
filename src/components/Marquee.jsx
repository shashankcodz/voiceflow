import React from 'react';

export default function Marquee() {
  const apps = [
    { icon: '📧', name: 'Gmail' },
    { icon: '💬', name: 'Slack' },
    { icon: '📝', name: 'Notion' },
    { icon: '💻', name: 'VS Code' },
    { icon: '🤖', name: 'ChatGPT' },
    { icon: '🎯', name: 'Linear' },
    { icon: '📊', name: 'Google Docs' },
    { icon: '🐦', name: 'X / Twitter' },
    { icon: '💼', name: 'LinkedIn' },
    { icon: '🌀', name: 'Cursor' },
    { icon: '📱', name: 'WhatsApp' },
    { icon: '🎬', name: 'YouTube' },
    { icon: '🟣', name: 'Figma' },
    { icon: '📌', name: 'Asana' },
    { icon: '🔵', name: 'Jira' },
  ];

  return (
    <div className="marquee-section">
      <p className="marquee-label">Works in every app you already use</p>
      <div className="marquee-track" id="marquee">
        {/* First set */}
        {apps.map((app, index) => (
          <div key={`app1-${index}`} className="marquee-app">
            <div className="app-icon">{app.icon}</div>
            {app.name}
          </div>
        ))}
        {/* Duplicate for infinite loop */}
        {apps.map((app, index) => (
          <div key={`app2-${index}`} className="marquee-app">
            <div className="app-icon">{app.icon}</div>
            {app.name}
          </div>
        ))}
      </div>
    </div>
  );
}
