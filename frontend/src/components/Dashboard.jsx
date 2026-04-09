import React, { useState } from 'react';
import Papa from 'papaparse';
import { UploadCloud, FileText, Zap } from 'lucide-react';
import { analyzeBatteryData } from '../utils/bmsLogic';
import Results from './Results';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('manual'); // 'manual' or 'csv'
  
  // Manual Input State
  const [manualData, setManualData] = useState({
    cell1: '3.8',
    cell2: '3.75',
    cell3: '3.82',
    cell4: '3.7',
    packCurrent: '5.0',
    temp: '30.0',
    packVoltage: '15.07'
  });

  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleInputChange = (e) => {
    setManualData({ ...manualData, [e.target.name]: e.target.value });
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    runAnalysis(manualData);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        // Just take the first row for demonstration if multiple rows exist
        if (results.data && results.data.length > 0) {
          const row = results.data[0];
          const data = {
            cell1: row.cell1_v || row.cell1 || '3.7',
            cell2: row.cell2_v || row.cell2 || '3.7',
            cell3: row.cell3_v || row.cell3 || '3.7',
            cell4: row.cell4_v || row.cell4 || '3.7',
            packCurrent: row.pack_current || '0',
            temp: row.temp1 || row.temp || '25',
          };
          runAnalysis(data);
        }
      }
    });
  };

  const runAnalysis = (data) => {
    setIsAnalyzing(true);
    // Simulate slight delay for premium feel
    setTimeout(() => {
      const result = analyzeBatteryData(data);
      setAnalysisResult(result);
      setIsAnalyzing(false);
      // scroll to results
      document.getElementById('analysis-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <section className="section" id="dashboard" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 className="section-title">Battery Analysis Dashboard</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}>
          <div className="glass-panel">
            <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)' }}>
              <button 
                onClick={() => setActiveTab('manual')}
                style={{ 
                  flex: 1, padding: '16px', background: 'none', border: 'none', 
                  color: activeTab === 'manual' ? 'var(--primary-neon)' : 'var(--text-secondary)',
                  borderBottom: activeTab === 'manual' ? '2px solid var(--primary-neon)' : '2px solid transparent',
                  cursor: 'pointer', fontSize: '1rem', fontWeight: 600
                }}>
                Manual Input
              </button>
              <button 
                onClick={() => setActiveTab('csv')}
                style={{ 
                  flex: 1, padding: '16px', background: 'none', border: 'none', 
                  color: activeTab === 'csv' ? 'var(--primary-neon)' : 'var(--text-secondary)',
                  borderBottom: activeTab === 'csv' ? '2px solid var(--primary-neon)' : '2px solid transparent',
                  cursor: 'pointer', fontSize: '1rem', fontWeight: 600
                }}>
                CSV Upload
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              {activeTab === 'manual' ? (
                <form onSubmit={handleManualSubmit}>
                  <div className="grid-2">
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Cell 1 Voltage (V)</label>
                      <input type="number" step="0.01" name="cell1" value={manualData.cell1} onChange={handleInputChange} className="glass-input" required />
                    </div>
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Cell 2 Voltage (V)</label>
                      <input type="number" step="0.01" name="cell2" value={manualData.cell2} onChange={handleInputChange} className="glass-input" required />
                    </div>
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Cell 3 Voltage (V)</label>
                      <input type="number" step="0.01" name="cell3" value={manualData.cell3} onChange={handleInputChange} className="glass-input" required />
                    </div>
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Cell 4 Voltage (V)</label>
                      <input type="number" step="0.01" name="cell4" value={manualData.cell4} onChange={handleInputChange} className="glass-input" required />
                    </div>
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Pack Current (A)</label>
                      <input type="number" step="0.1" name="packCurrent" value={manualData.packCurrent} onChange={handleInputChange} className="glass-input" required />
                    </div>
                    <div className="dashboard-form-row">
                      <label className="dashboard-form-label">Temperature (°C)</label>
                      <input type="number" step="0.1" name="temp" value={manualData.temp} onChange={handleInputChange} className="glass-input" required />
                    </div>
                  </div>
                  <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <button type="submit" className="glass-button" disabled={isAnalyzing}>
                      {isAnalyzing ? 'Analyzing Data...' : 'Run Analysis Core'} <Zap size={16} style={{ display: 'inline', marginLeft: '8px' }} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ padding: '20px 0' }}>
                  <label className="file-upload-zone" style={{ display: 'block' }}>
                    <UploadCloud size={48} style={{ color: 'var(--primary-neon)', marginBottom: '16px' }} />
                    <h3 style={{ marginBottom: '8px' }}>Upload Battery Data CSV</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Must contain columns: cell1_v, cell2_v, cell3_v, cell4_v, temp1</p>
                    <input type="file" accept=".csv" onChange={handleFileUpload} style={{ display: 'none' }} />
                  </label>
                  {isAnalyzing && <div style={{ textAlign: 'center', marginTop: '24px', color: 'var(--primary-neon)' }}>Processing CSV Data...</div>}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section rendered here if available */}
        <Results data={analysisResult} />

      </div>
    </section>
  );
};

export default Dashboard;
