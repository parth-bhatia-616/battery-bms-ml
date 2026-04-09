import React from 'react';
import { Code } from 'lucide-react';

const Team = () => {
  return (
    <>
      <section className="section" id="team" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <h2 className="section-title">The Project Team</h2>
          <div className="grid-2" style={{ maxWidth: '800px', margin: '40px auto 0 auto' }}>
            
            <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-neon), var(--accent-magenta))', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>C</span>
              </div>
              <h3>COE Team</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>(ML & Software)</p>
              <p style={{ fontSize: '0.9rem' }}>Responsible for AI/ML modeling, State-of-Health prediction logic, and full-stack software development.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--grade-a), var(--grade-b))', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>E</span>
              </div>
              <h3>Electronics Team</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>(Hardware & IoT)</p>
              <p style={{ fontSize: '0.9rem' }}>Responsible for ESP32 integration, BMS sensor circuitry, and physical hybrid cell balancing execution.</p>
            </div>

          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="container">
          <h3 className="neon-text" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            SmartBMS Project
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>
            Built for academic demonstration and research prototype purposes.
          </p>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary-neon)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
            <Code size={24} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Team;
