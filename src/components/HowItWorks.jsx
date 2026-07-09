import React from 'react';
import { Settings2, BarChart3, HelpCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <HelpCircle size={22} color="#6366f1" />,
      title: "Input Details",
      desc: "Specify your business name, industry category, budget range, and primary startup goals."
    },
    {
      step: "02",
      icon: <Settings2 size={22} color="#a855f7" />,
      title: "Run Validation Engine",
      desc: "Our AI checks metrics, calculates scores, and maps out competitors and budgets."
    },
    {
      step: "03",
      icon: <BarChart3 size={22} color="#10b981" />,
      title: "Review Dashboard & PDF",
      desc: "Interact with graphs, SWOT charts, and timelines, then download a consultancy-grade PDF."
    }
  ];

  return (
    <section id="how-it-works" style={{
      padding: '80px 24px',
      background: 'rgba(15, 23, 42, 0.2)',
      borderY: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="glow-text">
            Three Steps to Business Validation
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Transforming raw business inspiration into structured strategic foresight has never been simpler.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {steps.map((item, idx) => (
            <div key={idx} style={{
              position: 'relative',
              padding: '32px',
              background: 'rgba(15, 23, 42, 0.3)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              textAlign: 'center'
            }}>
              <span style={{
                position: 'absolute',
                top: '16px',
                right: '24px',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'rgba(99, 102, 241, 0.1)'
              }}>{item.step}</span>
              
              <div style={{
                background: 'rgba(99, 102, 241, 0.1)',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#f8fafc' }}>
                {item.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
