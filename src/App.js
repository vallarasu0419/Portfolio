import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const readSavedTheme = () => {
  try {
    return localStorage.getItem('portfolio-theme');
  } catch {
    return null;
  }
};

function App() {
  const [theme, setTheme] = useState(() => readSavedTheme() || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('portfolio-theme', next);
    } catch {
      // storage unavailable (private mode) — theme still applies for this visit
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ParticleBackground />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
