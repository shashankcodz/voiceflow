import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SpeedSection from './components/SpeedSection';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import Platforms from './components/Platforms';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(el => observer.observe(el));
    
    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: 'none',
          zIndex: 1000,
          opacity: 0.4
        }}
      />
      <Nav />
      <Hero />
      <Marquee />
      <SpeedSection />
      <InteractiveDemo />
      <Features />
      <Platforms />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
