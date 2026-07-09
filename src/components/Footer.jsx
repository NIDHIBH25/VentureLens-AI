import React from 'react';
import { Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '48px 24px 32px',
      background: 'rgba(7, 10, 19, 0.95)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '32px',
        marginBottom: '40px'
      }}>
        {/* Brand */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Eye size={18} color="#fff" />
            </div>
            <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>VentureLens AI</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px' }}>
            Turn ideas into businesses with AI-powered validation. The complete startup consultant in your browser.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px', color: '#f8fafc' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li><a href="#features" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>Features</a></li>
              <li><a href="#how-it-works" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>How It Works</a></li>
              <li><a href="#pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px', color: '#f8fafc' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.82rem' }}>Security Practices</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} VentureLens AI. All rights reserved. Prepared for AI Capstone.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ color: '#475569', fontSize: '0.8rem', cursor: 'pointer' }}>Twitter</span>
          <span style={{ color: '#475569', fontSize: '0.8rem', cursor: 'pointer' }}>LinkedIn</span>
          <span style={{ color: '#475569', fontSize: '0.8rem', cursor: 'pointer' }}>GitHub</span>
        </div>
      </div>
    </footer>
  );
}
