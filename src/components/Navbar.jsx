import React from 'react';
import { Eye, Key, Github } from 'lucide-react';

export default function Navbar({ onOpenApiKey, hasApiKey }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(7, 10, 19, 0.75)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '16px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            padding: '8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Eye size={22} color="#fff" />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Venture<span style={{ color: '#a855f7' }}>Lens</span> <span style={{ fontSize: '0.75rem', padding: '2px 6px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '4px', verticalAlign: 'middle', marginLeft: '4px', color: '#6366f1' }}>AI</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-links">
          <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Features</a>
          <a href="#how-it-works" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>How It Works</a>
          <a href="#testimonials" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Testimonials</a>
          <a href="#pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Pricing</a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={onOpenApiKey}
            style={{
              background: hasApiKey ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${hasApiKey ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
              color: hasApiKey ? '#10b981' : '#f8fafc',
              padding: '8px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = hasApiKey ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = hasApiKey ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)'}
          >
            <Key size={16} />
            {hasApiKey ? 'Gemini Active' : 'Configure AI'}
          </button>
          
          <a 
            href="#validate-now" 
            className="glow-button"
            style={{
              textDecoration: 'none',
              padding: '8px 16px',
              fontSize: '0.85rem',
              textAlign: 'center'
            }}
          >
            Analyze Idea
          </a>
        </div>
      </div>
    </header>
  );
}
