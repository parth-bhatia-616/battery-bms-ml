import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';

const Visualizations = ({ voltages, soh }) => {
  const chartData = voltages.map((v, i) => ({
    name: `Cell ${i + 1}`,
    voltage: v
  }));

  const minV = Math.min(...voltages);
  const maxV = Math.max(...voltages);

  return (
    <div className="grid-2" style={{ marginTop: '24px' }}>
      
      {/* Cell Voltages Bar Chart */}
      <div className="glass-panel" style={{ padding: '24px', height: '400px' }}>
        <h4 style={{ marginBottom: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>Cell Voltages (V)</h4>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-secondary)' }} />
            <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} stroke="var(--text-muted)" tick={{ fill: 'var(--text-secondary)' }} />
            <RechartsTooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
              contentStyle={{ background: 'var(--glass-bg)', backgroundColor: '#0d1320', borderColor: 'var(--primary-neon)', borderRadius: '8px', color: '#fff' }} 
            />
            <Bar dataKey="voltage" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.voltage === minV ? 'var(--grade-c)' : entry.voltage === maxV ? 'var(--primary-neon)' : 'var(--text-muted)'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SoH Radial Gauge - Custom CSS implementation since Recharts RadialBar is sometimes tricky to style quickly */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h4 style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>Health Status</h4>
        
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
            {/* Background Circle */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={soh >= 80 ? "var(--grade-a)" : soh >= 60 ? "var(--grade-b)" : "var(--grade-c)"}
              strokeWidth="3"
              strokeDasharray={`${soh}, 100`}
              strokeLinecap="round"
              style={{ animation: 'pulse-glow 3s infinite alternate' }}
            />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{soh}%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SoH</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Visualizations;
