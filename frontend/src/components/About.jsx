import React from 'react';
import { Target, Zap, Battery, Activity } from 'lucide-react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">Project Overview</h2>
        
        <div className="grid-3" style={{ marginTop: '48px' }}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ background: 'var(--primary-neon-dim)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Activity className="neon-text" size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Sensor Data Ingestion</h3>
            <p>Our system integrates cell voltages, pack current, and temperature telemetry directly from ESP32 microcontrollers in real-time or via CSV batches.</p>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ background: 'rgba(255, 0, 255, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Target style={{ color: 'var(--accent-magenta)' }} size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>ML SoH Prediction</h3>
            <p>Leveraging machine learning models to analyze discharge curves and impedance to predict State of Health (SoH) and automatically grade the battery (A/B/C).</p>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Zap style={{ color: 'var(--grade-a)' }} size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Hybrid Balancing</h3>
            <p>A smart decision engine identifies the weakest cell, computes Delta V, and recommends no-balancing, passive balancing, active balancing, or weak cell protection.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
