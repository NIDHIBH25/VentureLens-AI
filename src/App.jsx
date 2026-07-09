import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import IdeaForm from './components/IdeaForm';
import Dashboard from './components/Dashboard';

import { generateMockReport } from './utils/reportGenerator';
import { generateGeminiReport } from './utils/geminiService';
import { Key, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState('landing'); // 'landing' or 'dashboard'
  const [inputKeyText, setInputKeyText] = useState('');

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('venturelens_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setInputKeyText(savedKey);
    }
  }, []);

  const handleSaveApiKey = (e) => {
    e.preventDefault();
    const cleanKey = inputKeyText.trim();
    if (cleanKey) {
      localStorage.setItem('venturelens_api_key', cleanKey);
      setApiKey(cleanKey);
    } else {
      localStorage.removeItem('venturelens_api_key');
      setApiKey('');
    }
    setShowApiKeyModal(false);
  };

  const handleClearApiKey = () => {
    localStorage.removeItem('venturelens_api_key');
    setApiKey('');
    setInputKeyText('');
  };

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    // Scroll to form loader/top of analysis section
    const validateSection = document.getElementById('validate-now');
    if (validateSection) {
      validateSection.scrollIntoView({ behavior: 'smooth' });
    }

    try {
      let finalReport;
      if (apiKey) {
        // Run real AI analysis using Gemini API key
        finalReport = await generateGeminiReport(formData, apiKey);
      } else {
        // Fallback to local heuristic consulting engine
        finalReport = generateMockReport(formData);
      }
      setReport(finalReport);
      setActiveView('dashboard');
      
      // Smooth scroll to the top of dashboard
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } catch (err) {
      console.error(err);
      alert(`Error generating report: ${err.message || 'Unknown error occurred.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReport(null);
    setActiveView('landing');
    setTimeout(() => {
      const formSection = document.getElementById('validate-now');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar 
        onOpenApiKey={() => setShowApiKeyModal(true)} 
        hasApiKey={!!apiKey} 
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeView === 'landing' ? (
          <>
            <Hero onStart={() => {
              const formSection = document.getElementById('validate-now');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} />
            
            <Features />
            
            <HowItWorks />
            
            <IdeaForm onSubmit={handleFormSubmit} loading={loading} />
            
            <Testimonials />
            
            <Pricing />
            
            <FAQ />
          </>
        ) : (
          <div style={{ paddingTop: '40px' }}>
            <Dashboard report={report} onReset={handleReset} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* API Configuration Modal */}
      {showApiKeyModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(7, 10, 19, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="glass-card" style={{
            maxWidth: '500px',
            width: '100%',
            position: 'relative',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setShowApiKeyModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: 'rgba(99, 102, 241, 0.1)',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Key size={20} color="#6366f1" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                Configure Gemini AI
              </h3>
            </div>

            {/* Status indicator */}
            {apiKey ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '8px',
                padding: '10px 14px',
                marginBottom: '20px',
                color: '#10b981',
                fontSize: '0.88rem'
              }}>
                <CheckCircle2 size={16} />
                <span>Live Gemini API integration is active.</span>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.1)',
                borderRadius: '8px',
                padding: '10px 14px',
                marginBottom: '20px',
                color: '#6366f1',
                fontSize: '0.88rem'
              }}>
                <Sparkles size={16} />
                <span>Running client-side consulting engine fallback.</span>
              </div>
            )}

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '20px' }}>
              To receive deep, custom AI evaluations powered directly by Google's Gemini 1.5 Flash model, enter your API key below. The key is stored locally in your browser.
            </p>

            <form onSubmit={handleSaveApiKey} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                  Gemini API Key
                </label>
                <input 
                  type="password"
                  value={inputKeyText}
                  onChange={(e) => setInputKeyText(e.target.value)}
                  placeholder="AIzaSy..."
                  className="form-input"
                  style={{ width: '100%' }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button 
                  type="submit" 
                  className="glow-button"
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    fontSize: '0.88rem'
                  }}
                >
                  Save Configuration
                </button>
                {apiKey && (
                  <button 
                    type="button"
                    onClick={handleClearApiKey}
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.2)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
                  >
                    Clear Key
                  </button>
                )}
              </div>
            </form>

            <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', textAlign: 'center' }}>
              <a 
                href="https://aistudio.google.com/" 
                target="_blank" 
                rel="noreferrer"
                style={{ color: '#a855f7', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600 }}
              >
                Get a free Gemini API Key from Google AI Studio →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
