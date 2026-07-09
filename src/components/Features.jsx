import React from 'react';
import { Target, Award, PieChart, Route, Star, FileText } from 'lucide-react';

export default function Features() {
  const list = [
    {
      icon: <Award size={24} color="#6366f1" />,
      title: "Business Feasibility Score",
      desc: "Instant valuation scores between 0-100 built on industry standards, experience metrics, and type considerations."
    },
    {
      icon: <Target size={24} color="#a855f7" />,
      title: "SWOT & Competitor Mapping",
      desc: "Full SWOT grids with automated risk levels, strengths, weaknesses, and concrete competitor differentiation plans."
    },
    {
      icon: <PieChart size={24} color="#10b981" />,
      title: "Interactive Financials",
      desc: "Visual charts for cost allocations, budgeting low/medium/high brackets, and custom revenue model optimizations."
    },
    {
      icon: <Route size={24} color="#3b82f6" />,
      title: "6-Month Launch Roadmap",
      desc: "Actionable, month-by-month startup checklists covering branding, feedback loops, soft launching, and scale plans."
    },
    {
      icon: <FileText size={24} color="#f59e0b" />,
      title: "One-Click PDF Export",
      desc: "Download beautifully styled, professional startup consultation reports ready to share with investors and partners."
    },
    {
      icon: <Star size={24} color="#ec4899" />,
      title: "AI Extra Utilities",
      desc: "Generate slogans, naming suggestions, social media plans, acquisition ideas, and target customer personas on the fly."
    }
  ];

  return (
    <section id="features" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="glow-text">
          Sophisticated Features for Modern Founders
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          Evaluate every corner of your proposed startup business model with professional, clean heuristics.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {list.map((item, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              {item.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#f8fafc' }}>
                {item.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
