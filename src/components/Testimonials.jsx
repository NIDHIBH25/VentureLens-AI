import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "E-Commerce Founder",
      content: "VentureLens AI saved me thousands in market research. It identified competitors and risks I had completely overlooked for my organic skincare line.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      name: "Marcus Thorne",
      role: "Solo Tech Developer",
      content: "I run every side-hustle idea through this validation dashboard. The SWOT grids and dynamic roadmap outputs give me instant execution clarity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      name: "Priya Nair",
      role: "Home Bakery Owner",
      content: "As a student starting a home bakery, I didn't know what pricing models or risks to watch out for. This app is incredibly detailed and easy to use!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }} className="glow-text">
          Loved by Over 5,000 Entrepreneurs
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Hear from founders who validated their ideas and launched successfully.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {reviews.map((item, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img 
                src={item.avatar} 
                alt={item.name} 
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(168, 85, 247, 0.4)' }} 
              />
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>{item.name}</h4>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.role}</p>
              </div>
            </div>
            
            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, fontStyle: 'italic' }}>
              "{item.content}"
            </p>

            <div style={{ color: '#f59e0b', display: 'flex', gap: '2px' }}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
