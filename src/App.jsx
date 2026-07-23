import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import IntroSequence from './components/IntroSequence';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Prevent scrolling while intro is playing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  return (
    <div className="relative w-full">
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark-900 border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Nishanth Uday Naik.</p>
      </footer>
    </div>
  );
}

export default App;
