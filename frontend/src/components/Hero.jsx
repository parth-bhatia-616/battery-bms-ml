import React from 'react';
import { Activity, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span className="badge badge-grade-a glow" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '30px' }}>
              <Activity size={16} /> Intelligent Battery Analytics
            </span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>
            Machine Learning-Assisted <br />
            <span className="text-gradient">Hybrid Cell Balancing & SoH BMS</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
            AI-powered Battery Health Estimation, Grading, and Hybrid Balancing Recommendation System for Lithium-Ion Battery Packs.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#dashboard" style={{ textDecoration: 'none' }}>
              <button className="glass-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={20} />
                Analyze Battery Data
              </button>
            </a>
            <a href="#architecture" style={{ textDecoration: 'none' }}>
              <button className="glass-button secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={20} />
                View System Architecture
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
