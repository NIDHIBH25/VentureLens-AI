import React, { useState } from 'react';
import { Sparkles, HelpCircle, Loader2 } from 'lucide-react';

const DEMOS = {
  skincare: {
    name: "AuraFlora Botanicals",
    description: "A direct-to-consumer organic skincare brand producing fresh, toxin-free face creams and serums from locally sourced herbal extracts in small batches.",
    category: "Health & Beauty",
    location: "United States & Canada",
    budget: "Medium ($10k - $50k)",
    customers: "Conscious shoppers, skincare enthusiasts, eco-friendly consumers aged 22-45",
    type: "Online",
    experience: "Intermediate",
    goals: "Build a premium eco-friendly DTC skincare brand generating sustainable recurring subscriptions."
  },
  travel: {
    name: "RoamWise AI",
    description: "An AI-powered mobile app that drafts highly personalized micro-itineraries, flights, and hidden local restaurant routes based on user moods, budgets, and real-time crowd data.",
    category: "Software & Technology",
    location: "Global",
    budget: "Low (Under $10k)",
    customers: "Solo travelers, digital nomads, budget adventurers, gen-z trip planners",
    type: "Online",
    experience: "Experienced",
    goals: "Acquire 10k active monthly users within 6 months through viral organic content and freemium upgrades."
  },
  clothing: {
    name: "UrbanThreads",
    description: "An online curated clothing brand specializing in durable, minimalist capsule wardrobes using recycled cotton, shipping in biodegradable envelopes.",
    category: "E-Commerce & Retail",
    location: "United Kingdom & Europe",
    budget: "Medium ($10k - $50k)",
    customers: "Minimalist fashion lovers, young professionals, ethical shoppers",
    type: "Online",
    experience: "Beginner",
    goals: "Establish a profitable DTC clothing label with high customer lifetime value and low returns."
  },
  bakery: {
    name: "The Sugar Plum Bakery",
    description: "A local home bakery specializing in custom sugar flowers, allergen-friendly cupcakes, and premium custom sourdough wedding cakes.",
    category: "Food & Beverage",
    location: "Local City/Suburb Metro Area",
    budget: "Low (Under $10k)",
    customers: "Brides, local party hosts, families with allergy needs, local foodies",
    type: "Hybrid",
    experience: "Beginner",
    goals: "Become the highest-rated custom bakery in the region, operating out of a certified home kitchen before renting commercial space."
  },
  petcare: {
    name: "Paws & Paths",
    description: "A premium pet care service offering certified dog walking, overnight house sitting, pet nutrition consultation, and real-time GPS tracking logs for owners.",
    category: "Local Services",
    location: "San Francisco Metro Area",
    budget: "Low (Under $10k)",
    customers: "Busy tech professionals with high incomes who treat their pets as family members",
    type: "Offline",
    experience: "Intermediate",
    goals: "Build a local premium pet services agency with a roster of 5 full-time certified walkers."
  }
};

export default function IdeaForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Software & Technology",
    location: "",
    budget: "Medium ($10k - $50k)",
    customers: "",
    type: "Online",
    experience: "Intermediate",
    goals: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDemo = (key) => {
    const demoData = DEMOS[key];
    setForm(demoData);
    onSubmit(demoData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description) {
      alert("Please fill in at least the Business Name and Description!");
      return;
    }
    onSubmit(form);
  };

  return (
    <div id="validate-now" style={{ padding: '80px 24px 40px', maxWidth: '850px', margin: '0 auto' }}>
      <div className="glass-card" style={{ padding: '40px 32px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(168, 85, 247, 0.1)',
            padding: '10px',
            borderRadius: '12px',
            marginBottom: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <Sparkles size={24} color="#a855f7" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>
            Describe Your Business Idea
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Fill out the details below to generate a professional valuation dashboard.
          </p>
        </div>

        {/* Demo Buttons */}
        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', textAlign: 'center' }}>
            Or Load a Predefined Demo Concept:
          </label>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center'
          }}>
            <button type="button" onClick={() => handleDemo('skincare')} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '8px 16px', fontSize: '0.8rem', color: '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.borderColor = 'rgba(99,102,241,0.3)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              🌸 Skincare Brand
            </button>
            <button type="button" onClick={() => handleDemo('travel')} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '8px 16px', fontSize: '0.8rem', color: '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.borderColor = 'rgba(99,102,241,0.3)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              ✈️ AI Travel Planner
            </button>
            <button type="button" onClick={() => handleDemo('clothing')} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '8px 16px', fontSize: '0.8rem', color: '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.borderColor = 'rgba(99,102,241,0.3)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              👕 Online Clothing Store
            </button>
            <button type="button" onClick={() => handleDemo('bakery')} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '8px 16px', fontSize: '0.8rem', color: '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.borderColor = 'rgba(99,102,241,0.3)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              🧁 Home Bakery
            </button>
            <button type="button" onClick={() => handleDemo('petcare')} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px', padding: '8px 16px', fontSize: '0.8rem', color: '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = 'rgba(99,102,241,0.1)'; e.target.style.borderColor = 'rgba(99,102,241,0.3)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              🐾 Pet Care Service
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="dashboard-grid">
            {/* Idea Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Business Idea Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. AuraFlora Skincare"
                className="form-input"
                required
              />
            </div>
            
            {/* Industry */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Industry Category
              </label>
              <select 
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Software & Technology">Software & Technology</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                <option value="Education & E-Learning">Education & E-Learning</option>
                <option value="Real Estate & Housing">Real Estate & Housing</option>
                <option value="Local Services">Local Services</option>
                <option value="Finance & Fintech">Finance & Fintech</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
              Business Description *
            </label>
            <textarea 
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Explain what your business will do, what product or service it sells, and how it delivers value to consumers..."
              className="form-textarea"
              rows={4}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="dashboard-grid">
            {/* Target Location */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Target Location / Market
              </label>
              <input 
                type="text" 
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. California, Nationwide USA, Global"
                className="form-input"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Budget Range
              </label>
              <select 
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Low (Under $10k)">Low (Under $10k)</option>
                <option value="Medium ($10k - $50k)">Medium ($10k - $50k)</option>
                <option value="High (Above $100k)">High (Above $100k)</option>
              </select>
            </div>
          </div>

          {/* Expected Customers */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
              Expected Customers / Demographics
            </label>
            <input 
              type="text" 
              name="customers"
              value={form.customers}
              onChange={handleChange}
              placeholder="e.g. Busy professionals aged 25-45, students, tech startups"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }} className="dashboard-grid">
            {/* Business Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Business Type
              </label>
              <select 
                name="type"
                value={form.type}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Experience Level
              </label>
              <select 
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Beginner">Beginner / Student</option>
                <option value="Intermediate">Intermediate / Side-Hustler</option>
                <option value="Experienced">Experienced Entrepreneur</option>
              </select>
            </div>

            {/* Business Goals */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Business Goals
              </label>
              <input 
                type="text" 
                name="goals"
                value={form.goals}
                onChange={handleChange}
                placeholder="e.g. Passive income, scaling fast"
                className="form-input"
              />
            </div>
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            className="glow-button"
            style={{
              padding: '16px',
              fontSize: '1rem',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Analyzing and mapping variables...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Analyze Idea & Build Valuation Dashboard
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
