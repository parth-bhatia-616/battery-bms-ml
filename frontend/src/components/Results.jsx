import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import Visualizations from './Visualizations';

const Results = ({ data }) => {
  if (!data) return null;

  const { deltaV, weakestCellIndex, estimatedSoH, grade, recommendation, rationale, voltages } = data;

  let gradeColor = 'var(--text-primary)';
  if (grade === 'A') gradeColor = 'var(--grade-a)';
  if (grade === 'B') gradeColor = 'var(--grade-b)';
  if (grade === 'C') gradeColor = 'var(--grade-c)';

  let recColor = 'var(--primary-neon)';
  let RecIcon = CheckCircle;
  if (recommendation === 'Protect Weak Cell') {
    recColor = 'var(--grade-c)';
    RecIcon = ShieldAlert;
  } else if (recommendation === 'Active Balancing') {
    recColor = 'var(--accent-magenta)';
    RecIcon = Cpu;
  } else if (recommendation === 'Passive Balancing') {
    recColor = 'var(--grade-b)';
    RecIcon = AlertTriangle;
  }

  return (
    <div id="analysis-results" style={{ marginTop: '40px', animation: 'float 0.5s ease-out forwards', transform: 'translateY(20px)' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '32px', fontSize: '2rem' }}>Analysis <span className="text-gradient">Output</span></h3>
      
      <div className="grid-3" style={{ marginBottom: '24px' }}>
        
        {/* SoH Card */}
        <div className="glass-panel stat-card" style={{ borderTop: `4px solid ${gradeColor}` }}>
          <div className="stat-label">Predicted SoH</div>
          <div className="stat-value" style={{ color: gradeColor }}>{estimatedSoH}%</div>
          <div className={`badge badge-grade-${grade.toLowerCase()}`}>Grade {grade}</div>
        </div>

        {/* Imbalance Card */}
        <div className="glass-panel stat-card" style={{ borderTop: `4px solid var(--primary-neon)` }}>
          <div className="stat-label">Voltage Imbalance (ΔV)</div>
          <div className="stat-value neon-text">{deltaV.toFixed(3)}V</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Weakest: Cell {weakestCellIndex}</div>
        </div>

        {/* Recommendation Card */}
        <div className="glass-panel stat-card" style={{ borderTop: `4px solid ${recColor}` }}>
          <div className="stat-label">Balancing Decision</div>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: recColor, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <RecIcon size={24} />
            {recommendation}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '12px' }}>
            {rationale}
          </p>
        </div>
      </div>

      {/* Visualizations row */}
      <Visualizations voltages={voltages} soh={estimatedSoH} />
      
    </div>
  );
};

export default Results;
