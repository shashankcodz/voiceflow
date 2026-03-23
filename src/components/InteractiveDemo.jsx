import React, { useState, useEffect, useRef } from 'react';

export default function InteractiveDemo() {
  const [listening, setListening] = useState(false);
  const [fullText, setFullText] = useState('');
  const [interimText, setInterimText] = useState('');
  const [statusText, setStatusText] = useState('Ready — click mic to start');
  const [hasError, setHasError] = useState(false);
  
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onstart = () => {
        setListening(true);
        setStatusText('Listening — speak now…');
        setHasError(false);
      };

      recognitionRef.current.onresult = (e) => {
        let interim = '';
        let finalStr = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const t = e.results[i][0].transcript;
          if (e.results[i].isFinal) {
            finalStr += (t.trim().charAt(0).toUpperCase() + t.trim().slice(1)) + ' ';
          } else {
            interim = t;
          }
        }
        if (finalStr) setFullText((prev) => prev + finalStr);
        setInterimText(interim);
      };

      recognitionRef.current.onerror = (e) => {
        const msgs = {
          'not-allowed': 'Mic permission denied. Allow mic access in your browser.',
          'no-speech': 'No speech detected. Try again.',
          'network': 'Network error.',
        };
        setStatusText(msgs[e.error] || 'Error: ' + e.error);
        setHasError(true);
        setListening(false);
      };

      recognitionRef.current.onend = () => {
        if (listening) {
          try {
            recognitionRef.current.start();
          } catch(e) {}
        }
      };
    } else {
      setStatusText('Speech API not supported in this browser — try Chrome');
      setHasError(true);
    }
  }, [listening]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.shiftKey && e.code === 'KeyV') {
        e.preventDefault();
        toggleMic();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [listening]);

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert('Speech Recognition is not supported in this browser.\nPlease use Google Chrome.');
      return;
    }
    if (listening) {
      setListening(false);
      recognitionRef.current.stop();
      setStatusText(fullText ? 'Done! Click mic to continue.' : 'Ready — click mic to start');
    } else {
      setFullText('');
      setInterimText('');
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <section className="interactive-section" id="try">
      <div className="section-tag">Live Demo</div>
      <h2 className="section-title reveal">Try it <span className="text-gradient">right now</span></h2>
      <p className="section-sub reveal">Click the mic, speak into your browser, and watch Voca transcribe in real time.</p>

      <div className="mic-demo-wrap reveal">
        <div className="mic-shortcut">
          Press <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> or click the mic
        </div>

        <div className="mic-ring">
          <div className="mic-ring-outer" style={{ animationDelay: '0s' }}></div>
          <div className="mic-ring-outer" style={{ animationDelay: '0.5s' }}></div>
          <div className="mic-ring-outer" style={{ animationDelay: '1s' }}></div>
          <button 
            className={`mic-btn-main ${listening ? 'active' : ''}`} 
            id="demo-mic" 
            title="Click to speak"
            onClick={toggleMic}
            style={{ opacity: !recognitionRef.current ? 0.5 : 1, cursor: !recognitionRef.current ? 'not-allowed' : 'pointer' }}
          >
            {listening ? '⏹' : '🎙'}
          </button>
        </div>

        <div className={`status-pill ${listening ? 'listening' : ''}`} id="demo-status">
          <div className="status-dot-sm"></div>
          {statusText}
        </div>

        <div className="transcript-box" id="demo-transcript">
          {(!fullText && !interimText && !listening) ? (
            <span className="transcript-placeholder">Your words will appear here...</span>
          ) : (
             <>
               {fullText}
               {interimText && <span style={{ color: "var(--white-25)" }}>{interimText}</span>}
               <span className="typing-cursor"></span>
             </>
          )}
        </div>
      </div>
    </section>
  );
}
