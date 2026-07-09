import React, { useRef, useState } from 'react';
import { 
  FileDown, Share2, Award, Info, Users, Shield, 
  LineChart, Compass, DollarSign, AlertCircle, 
  Lightbulb, Calendar, MessageSquare, Sparkles, 
  Copy, Check, ArrowRight, Zap, Target
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Dashboard({ report, onReset }) {
  const reportRef = useRef();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('names'); // names, slogans, marketing, social, usp

  const handleExportPDF = () => {
    const element = reportRef.current;
    if (!element) return;
    
    // Import html2pdf dynamically
    import('html2pdf.js').then((html2pdf) => {
      const opt = {
        margin:       [10, 10],
        filename:     `${report.name.replace(/\s+/g, '_')}_Validation_Report.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#070a13' },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      // Selectively add styling adjustments before print if needed
      html2pdf.default().from(element).set(opt).save();
    });
  };

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(report.pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Color mappings for risks
  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      default: return '#10b981';
    }
  };

  // Calculate Feasibility Gauge stroke dasharray
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (report.feasibilityScore / 100) * circumference;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }} className="animate-fade-in">
      
      {/* Top Action Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <button 
            onClick={onReset}
            style={{
              background: 'none',
              border: 'none',
              color: '#6366f1',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            ← Analyze Another Idea
          </button>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '4px' }}>
            {report.name} <span style={{ fontSize: '0.9rem', color: '#a855f7', fontWeight: 500 }}>{report.category}</span>
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleExportPDF}
            style={{
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#f8fafc',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(99, 102, 241, 0.25)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(99, 102, 241, 0.15)'}
          >
            <FileDown size={18} />
            Export PDF Report
          </button>
        </div>
      </div>

      {/* Main Report Container (Targeted for PDF printing) */}
      <div ref={reportRef} id="venturelens-pdf-report" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Section 1: Feasibility Score & Summary */}
        <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '32px', alignItems: 'center' }} className="dashboard-grid glass-card">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '16px',
            borderRight: '1px solid rgba(255,255,255,0.05)'
          }} className="col-span-12 lg:col-span-3">
            
            {/* Circular Gauge */}
            <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '16px' }}>
              <svg width="130" height="130" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background Ring */}
                <circle cx="60" cy="60" r={radius} fill="transparent" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="10" />
                {/* Progress Ring */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r={radius} 
                  fill="transparent" 
                  stroke="url(#feasibilityGradient)" 
                  strokeWidth="10" 
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="feasibilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '2rem', fontWeight: 800 }}>{report.feasibilityScore}</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Index</span>
              </div>
            </div>
            <div style={{
              background: 'rgba(99, 102, 241, 0.1)',
              color: '#6366f1',
              padding: '4px 12px',
              borderRadius: '99px',
              fontSize: '0.75rem',
              fontWeight: 700
            }}>
              FEASIBILITY SCORE
            </div>
          </div>

          <div style={{ paddingLeft: '12px' }} className="col-span-12 lg:col-span-9">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Award color="#6366f1" size={20} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Executive Feasibility Summary</h3>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {report.feasibilityExplanation}
            </p>
          </div>
        </div>

        {/* Section 2 & 3: Problem Statement & Target Audience */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="dashboard-grid">
          
          {/* Problem Statement */}
          <div className="glass-card col-span-12 lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Info color="#a855f7" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Problem Statement</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {report.problemStatement}
            </p>
          </div>

          {/* Audience Summary */}
          <div className="glass-card col-span-12 lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users color="#10b981" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Target Audience Demographics</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Target Age Group</span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>{report.targetAudience.generalAgeGroup}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Income Bracket</span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>{report.targetAudience.generalIncomeLevel}</p>
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Primary Core Needs</span>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '2px' }}>{report.targetAudience.generalNeeds}</p>
            </div>
          </div>
        </div>

        {/* Customer Personas Details */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Users color="#6366f1" size={20} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Validated Customer Personas</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="dashboard-grid">
            {report.targetAudience.personas.map((persona, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#a855f7', marginBottom: '12px' }}>{persona.role}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Age & Income:</span> <span style={{ color: '#cbd5e1' }}>{persona.age} / {persona.income}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Pain Points:</span> <span style={{ color: '#cbd5e1' }}>{persona.painPoints}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Core Need:</span> <span style={{ color: '#cbd5e1' }}>{persona.needs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: SWOT Analysis */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Shield color="#3b82f6" size={20} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>SWOT Analysis</h3>
          </div>
          <div className="swot-grid">
            <div className="swot-card s">
              <h4 style={{ color: '#10b981', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ✦ Strengths
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.swot.strengths.map((str, i) => <li key={i}>{str}</li>)}
              </ul>
            </div>
            
            <div className="swot-card w">
              <h4 style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ✦ Weaknesses
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.swot.weaknesses.map((str, i) => <li key={i}>{str}</li>)}
              </ul>
            </div>

            <div className="swot-card o">
              <h4 style={{ color: '#3b82f6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ✦ Opportunities
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.swot.opportunities.map((str, i) => <li key={i}>{str}</li>)}
              </ul>
            </div>

            <div className="swot-card t">
              <h4 style={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ✦ Threats
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {report.swot.threats.map((str, i) => <li key={i}>{str}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5 & 6: Market Potential & Competitor Analysis */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="dashboard-grid">
          
          {/* Market Potential */}
          <div className="glass-card col-span-12 lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LineChart color="#10b981" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Market Potential</h3>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Demand Level</span>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981', marginTop: '2px' }}>{report.marketPotential.demandLevel}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Growth Potential</span>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '2px', lineHeight: 1.4 }}>{report.marketPotential.growthPotential}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Industry Trends</span>
              <ul style={{ paddingLeft: '16px', fontSize: '0.85rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {report.marketPotential.trends.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </div>

          {/* Competitor Analysis */}
          <div className="glass-card col-span-12 lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass color="#6366f1" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Competitor Assessment</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {report.competitorAnalysis.list.map((comp, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc', marginBottom: '4px' }}>{comp.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '4px' }}><strong style={{ color: '#64748b' }}>Strength:</strong> {comp.strength}</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}><strong style={{ color: '#10b981' }}>Differentiation:</strong> {comp.differentiation}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>USP / Differentiator Summary</span>
              <p style={{ fontSize: '0.85rem', color: '#a855f7', marginTop: '2px', lineHeight: 1.4 }}>{report.competitorAnalysis.differentiationSummary}</p>
            </div>
          </div>
        </div>

        {/* Section 7 & 8: Revenue Models & Investment Estimation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }} className="dashboard-grid">
          
          {/* Investment Estimation */}
          <div className="glass-card col-span-12 lg:col-span-7">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <DollarSign color="#10b981" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Capital & Investment Breakdown</h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Target Launch Capital</span>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>{report.investment.mediumBudget}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Range: {report.investment.lowBudget} - {report.investment.highBudget}</div>
              </div>
              <div style={{ height: '120px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={report.investment.expensesBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {report.investment.expensesBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Color key */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 16px', marginBottom: '16px' }}>
              {report.investment.expensesBreakdown.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                  <span style={{ color: '#cbd5e1' }}>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.4, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
              {report.investment.expensesExplanation}
            </p>
          </div>

          {/* Revenue Model Suggestions */}
          <div className="glass-card col-span-12 lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DollarSign color="#a855f7" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Revenue Model Options</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {report.revenueModel.models.map((model, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: '#cbd5e1' }}>{model.type}</div>
                    <div style={{ color: '#64748b', fontSize: '0.78rem' }}>{model.details}</div>
                  </div>
                  <span style={{ 
                    padding: '2px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700,
                    background: model.feasibility === 'High' ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)',
                    color: model.feasibility === 'High' ? '#10b981' : '#94a3b8'
                  }}>
                    {model.feasibility}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase' }}>Recommended monetization</div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '2px', lineHeight: 1.4 }}>{report.revenueModel.recommendation}</p>
            </div>
          </div>
        </div>

        {/* Section 9 & 10: Risk Assessment & Recommendations */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="dashboard-grid">
          
          {/* Risk Assessment */}
          <div className="glass-card col-span-12 lg:col-span-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <AlertCircle color="#ef4444" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Risk Assessment</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {Object.entries(report.riskAssessment).map(([key, item], i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    minWidth: '75px',
                    textAlign: 'center',
                    background: `${getRiskColor(item.level)}20`,
                    color: getRiskColor(item.level),
                    border: `1px solid ${getRiskColor(item.level)}40`
                  }}>
                    {item.level} Risk
                  </span>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, textTransform: 'capitalize', color: '#f8fafc' }}>{key} Exposure</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass-card col-span-12 lg:col-span-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Lightbulb color="#f59e0b" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Strategic AI Recommendations</h3>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {report.recommendations.map((rec, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <div style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.75rem', fontWeight: 700 }}>
                    {i + 1}
                  </div>
                  <span style={{ lineHeight: 1.4 }}>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 11: Launch Roadmap Timeline */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
            <Calendar color="#6366f1" size={20} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>6-Month Launch Roadmap</h3>
          </div>
          
          <div className="roadmap-timeline">
            {report.roadmap.map((item, idx) => (
              <div key={idx} className="roadmap-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '6px' }}>
                  <h4 style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>{item.title}</h4>
                  <span style={{ color: '#a855f7', fontSize: '0.8rem', fontWeight: 600 }}>{item.month}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tasks.map((task, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        fontSize: '0.78rem', 
                        color: '#94a3b8', 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.05)', 
                        padding: '4px 10px', 
                        borderRadius: '6px' 
                      }}
                    >
                      ✓ {task}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12: Investor Pitch */}
        <div className="glass-card" style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%)',
          borderColor: 'rgba(99, 102, 241, 0.3)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare color="#a855f7" size={20} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>AI Startup Investor Pitch</h3>
            </div>
            
            <button
              onClick={handleCopyPitch}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
            >
              {copied ? (
                <>
                  <Check size={14} color="#10b981" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy Pitch
                </>
              )}
            </button>
          </div>
          
          <p style={{
            fontSize: '1rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            fontStyle: 'italic',
            borderLeft: '3px solid var(--primary)',
            paddingLeft: '16px'
          }}>
            "{report.pitch}"
          </p>
        </div>

      </div> {/* End print section */}

      {/* Extra AI Features (NOT included in main report PDF, keeps it as dynamic dashboard assets) */}
      <div style={{ marginTop: '40px' }} className="glass-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <Sparkles color="#a855f7" size={20} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Extra AI Ideation Utilities</h3>
        </div>

        {/* Tabs navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          gap: '8px',
          marginBottom: '20px',
          overflowX: 'auto',
          paddingBottom: '4px'
        }}>
          {[
            { id: 'names', label: 'Name Suggestions' },
            { id: 'slogans', label: 'Slogans' },
            { id: 'marketing', label: 'Marketing Ideas' },
            { id: 'social', label: 'Social Strategy' },
            { id: 'usp', label: 'USP Creator' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 16px',
                color: activeTab === tab.id ? '#f8fafc' : '#64748b',
                borderBottom: activeTab === tab.id ? '2px solid #a855f7' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab contents */}
        <div style={{ minHeight: '150px' }}>
          {activeTab === 'names' && (
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>Potential brand names generated using linguistic alignment with the "{report.category}" sector:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {report.extraFeatures.nameSuggestions.map((name, i) => (
                  <div key={i} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'slogans' && (
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px' }}>Marketing tagline and slogans:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {report.extraFeatures.slogans.map((slogan, i) => (
                  <li key={i} style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #a855f7', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    "{slogan}"
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'marketing' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {report.extraFeatures.marketingIdeas.map((idea, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc', marginBottom: '8px' }}>{idea.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>{idea.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'social' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="dashboard-grid">
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#ec4899', fontWeight: 700, marginBottom: '8px' }}>Instagram & TikTok</h4>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.4 }}>{report.extraFeatures.socialMediaStrategy.instagramTikTok}</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#3b82f6', fontWeight: 700, marginBottom: '8px' }}>LinkedIn & Twitter/X</h4>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.4 }}>{report.extraFeatures.socialMediaStrategy.linkedInTwitter}</p>
              </div>
              <div style={{ gridColumn: 'span 2', background: 'rgba(168,85,247,0.05)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(168,85,247,0.1)' }}>
                <span style={{ fontSize: '0.75rem', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase' }}>Posting Cadence</span>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '2px' }}>{report.extraFeatures.socialMediaStrategy.postingFrequency}</p>
              </div>
            </div>
          )}

          {activeTab === 'usp' && (
            <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(99,102,241,0.1)', padding: '10px', borderRadius: '50%', color: '#6366f1' }}>
                <Target size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Unique Selling Proposition (USP)</h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.4 }}>{report.extraFeatures.usp}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
