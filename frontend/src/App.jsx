import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Architecture from './components/Architecture';
import TechStack from './components/TechStack';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Dashboard />
        <Architecture />
        <TechStack />
        <Team />
      </main>
    </div>
  );
}

export default App;
