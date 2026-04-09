import React from 'react';
import { BatteryCharging, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="nav-header">
      <div className="container nav-container">
        <div className="nav-logo">
          <BatteryCharging className="neon-text" size={28} />
          <span>Smart<span className="text-gradient">BMS</span></span>
        </div>
        <nav className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
          <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
          <a href="#dashboard" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Dashboard</a>
          <a href="#architecture" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Architecture</a>
          <a href="#tech" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Technology</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
