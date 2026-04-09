import React from 'react';

const techItems = [
  'Machine Learning',
  'Python',
  'Battery Analytics',
  'ESP32 Integration',
  'CSV Data Input',
  'State-of-Health Estimation',
  'Hybrid Cell Balancing Logic',
  'Smart BMS',
  'React.js',
  'Tailwind/CSS Design'
];

const TechStack = () => {
  return (
    <section className="section" id="tech">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Technology Stack</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '40px', maxWidth: '800px', margin: '40px auto 0 auto' }}>
          {techItems.map(tech => (
            <div key={tech} className="glass-panel" style={{ padding: '12px 24px', borderRadius: '30px', border: '1px solid var(--primary-neon-dim)', animation: 'float 3s infinite ease-in-out', animationDelay: `${Math.random() * 2}s` }}>
              <span className="neon-text" style={{ fontWeight: 600 }}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
