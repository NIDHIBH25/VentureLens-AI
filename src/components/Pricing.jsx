import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for testing ideas and side-hustles.",
      features: [
        "5 Reports per month",
        "Heuristic analysis engine",
        "Interactive SWOT analysis",
        "Slogan & Name Suggestions",
        "Standard Web Dashboard"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro Founder",
      price: "$19",
      desc: "Ideal for serious startup founders and creators.",
      features: [
        "Unlimited validations",
        "Full Live Gemini API Access",
        "Uncapped PDF exports",
        "Financial & Investment graphs",
        "Social media strategy generator",
        "Priority Customer Support"
      ],
      popular: true,
      cta: "Go Pro Now"
    },
    {
      name: "Venture Studio",
      price: "$49",
      desc: "For incubators, consultants and agencies.",
      features: [
        "Everything in Pro Founder",
        "White-labeled PDF reports",
        "Custom branding headers",
        "API integration endpoints",
        "Multiple team accounts",
        "Dedicated consultant backup"
      ],
      popular: false,
      cta: "Contact Enterprise"
    }
  ];

  return (
    <section id="pricing" style={{
      padding: '80px 24px',
      background: 'rgba(15, 23, 42, 0.2)',
      borderY: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="glow-text">
            Simple, Transparent Pricing
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            Choose the level of analysis and customization your venture demands.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderWidth: plan.popular ? '2px' : '1px',
                borderColor: plan.popular ? 'var(--primary)' : 'var(--border-glow)',
                boxShadow: plan.popular ? '0 10px 30px -10px rgba(99, 102, 241, 0.25)' : 'none'
              }}
            >
              {plan.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  MOST POPULAR
                </span>
              )}

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#f8fafc' }}>
                  {plan.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  {plan.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{plan.price}</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>/month</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <Check size={16} color={plan.popular ? '#10b981' : '#6366f1'} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href="#validate-now" 
                className={plan.popular ? "glow-button" : ""}
                style={{
                  marginTop: 'auto',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  background: plan.popular ? '' : 'rgba(255, 255, 255, 0.05)',
                  border: plan.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
