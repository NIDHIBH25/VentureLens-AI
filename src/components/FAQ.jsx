import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How does the Business Feasibility Score work?",
      a: "Our evaluation engine computes the feasibility score by referencing database benchmarks, checking required capital against the proposed startup category, aligning your operational history, and analyzing target audience demographics. It grades projects from 0 to 100 with clear strategic guidelines."
    },
    {
      q: "Is my business idea kept private?",
      a: "Absolutely. All information entered in VentureLens AI is processed instantly to generate your validation reports. If you use your own Gemini API key, your data goes directly to Google's API endpoints and is not saved or used to train public models."
    },
    {
      q: "Do I need a Gemini API Key to use this platform?",
      a: "No! VentureLens AI comes equipped with a powerful client-side dynamic consulting engine that models and generates highly customized reports, roadmaps, and competitor charts. If you prefer real-time generative capabilities, you can plug in a Gemini key via the 'Configure AI' navbar button."
    },
    {
      q: "Can I download and share my reports?",
      a: "Yes! Use the 'Export PDF' button on the dashboard to save your full 12-section validation evaluation. It prints in a clean, professional PDF template suitable for pitch packages, incubator applications, or team reviews."
    }
  ];

  const [activeIdx, setActiveIdx] = useState(null);

  const toggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="glow-text">
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Got questions about our validation mechanics? We have answers.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((item, idx) => {
          const isOpen = activeIdx === idx;
          return (
            <div 
              key={idx} 
              style={{
                background: 'rgba(15, 23, 42, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                <span>{item.q}</span>
                {isOpen ? <ChevronUp size={18} color="#a855f7" /> : <ChevronDown size={18} color="#6366f1" />}
              </button>
              
              {isOpen && (
                <div style={{
                  padding: '0 24px 20px',
                  color: '#94a3b8',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                  paddingTop: '12px',
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
