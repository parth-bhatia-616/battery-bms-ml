import React from 'react';
import { ArrowRight, Database, Cpu, Activity, Lightbulb } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="section" id="architecture">
      <div className="container">
        <h2 className="section-title">System Architecture</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
          Data flow from physical cells through the ESP32 microcontrollers, processed by ML algorithms, and resulting in actionable hybrid balancing decisions.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '24px', width: '100%', maxWidth: '500px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Database className="neon-text" size={32} />
            <div>
              <h4 style={{ fontSize: '1.2rem' }}>1. Battery Data Input</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Cell Voltages, Pack Current, Temperature</p>
            </div>
          </div>

          <ArrowRight className="neon-text" size={32} style={{ transform: 'rotate(90deg)' }} />

          <div className="glass-panel" style={{ padding: '24px', width: '100%', maxWidth: '500px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255, 0, 255, 0.05)' }}>
            <Cpu style={{ color: 'var(--accent-magenta)' }} size={32} />
            <div>
              <h4 style={{ fontSize: '1.2rem' }}>2. ML-Based SoH Prediction</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Predict State of Health & Assign Grade (A/B/C)</p>
            </div>
          </div>

          <ArrowRight className="neon-text" size={32} style={{ transform: 'rotate(90deg)' }} />

          <div className="glass-panel" style={{ padding: '24px', width: '100%', maxWidth: '500px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(0, 255, 136, 0.05)' }}>
            <Activity style={{ color: 'var(--grade-a)' }} size={32} />
            <div>
              <h4 style={{ fontSize: '1.2rem' }}>3. Balancing Decision Engine</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Calculate ΔV, Check safety limits, Apply Balancing Rules</p>
            </div>
          </div>

          <ArrowRight className="neon-text" size={32} style={{ transform: 'rotate(90deg)' }} />

          <div className="glass-panel" style={{ padding: '24px', width: '100%', maxWidth: '500px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid var(--primary-neon)' }}>
            <Lightbulb className="neon-text" size={32} />
            <div>
              <h4 style={{ fontSize: '1.2rem' }}>4. Recommendation Output</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Passive, Active, None, or Protect Weak Cell</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;
