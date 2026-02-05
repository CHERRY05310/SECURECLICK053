
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Awareness from './pages/Awareness';
import AttackTypes from './pages/AttackTypes';
import Legal from './pages/Legal';
import Analysis from './pages/Analysis';
import Chatbot from './pages/Chatbot';
import Resources from './pages/Resources';
import Glossary from './pages/Glossary';
import { AppTheme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('safeclick-theme');
    // Default changed from 'light' to 'dark'
    return (saved as AppTheme) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('safeclick-theme', theme);
    document.documentElement.classList.remove('dark', 'theme-cyber-blue', 'theme-neon-green');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'cyber-blue') {
      document.documentElement.classList.add('theme-cyber-blue', 'dark');
    } else if (theme === 'neon-green') {
      document.documentElement.classList.add('theme-neon-green', 'dark');
    }
  }, [theme]);

  return (
    <Router>
      <Layout theme={theme} setTheme={setTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/attacks" element={<AttackTypes />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
