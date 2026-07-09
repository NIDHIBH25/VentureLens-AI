import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero({ onStart }) {
  return (
    <section style={{
      position: 'relative',
      padding: '100px 24px 80px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Background Glows */}
      <div className="bg-gradient-orb" style={{ top: '-10%', left: '30%' }}></div>

      {/* Tag/Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        padding: '6px 14px',
        borderRadius: '99px',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#a855f7',
        marginBottom: '28px',
        animation: 'fadeIn 0.6s ease-out'
      }}>
        <Sparkles size={14} />
        Empowering Next-Gen Entrepreneurs
      </div>

      {/* Main Heading */}
      <h1 className="glow-text" style={{
        fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-1.5px',
        marginBottom: '20px',
        maxWidth: '850px'
      }}>
        Turn ideas into businesses with <span className="glow-gradient">AI-powered validation</span>.
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#94a3b8',
        maxWidth: '650px',
        lineHeight: 1.6,
        marginBottom: '40px'
      }}>
        Stop guessing. Validate your business models, estimate budgets, perform competitor & SWOT analysis, and output presentation-ready pitches in seconds.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '60px'
      }}>
        <a 
          href="#validate-now" 
          className="glow-button"
          onClick={onStart}
          style={{
            textDecoration: 'none',
            padding: '14px 28px',
            fontSize: '1rem',
            display: 'inline-block'
          }}
        >
          Validate Your Idea Free
        </a>
        <a 
          href="#features" 
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            textDecoration: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.03)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          Explore Features
        </a>
      </div>

      {/* Floating Trust stats */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        width: '100%',
        maxWidth: '700px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '32px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ color: '#6366f1', background: 'rgba(99, 102, 241, 0.1)', padding: '8px', borderRadius: '50%' }}><ShieldCheck size={18} /></div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>99.2%</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Validation Precision</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.1)', padding: '8px', borderRadius: '50%' }}><Zap size={18} /></div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>&lt; 5 Seconds</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Analysis Time</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '8px', borderRadius: '50%' }}><TrendingUp size={18} /></div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>14,200+</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Pitches Evaluated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
