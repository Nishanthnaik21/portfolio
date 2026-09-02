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
    <div className="relative w-full min-h-screen bg-dark-900 text-white">
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      
      {!showIntro && <AnimatedBackground />}
      <Navbar onReplayIntro={() => setShowIntro(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark-900 border-t border-gray-800/80 py-6 sm:py-8 px-4 text-center text-xs sm:text-sm text-gray-500">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nishanth Uday Naik. All rights reserved.</p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setShowIntro(true);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-neon-blue transition-colors px-3 py-1.5 rounded-full border border-gray-800 hover:border-neon-blue/40 bg-dark-800/60 cursor-pointer"
          >
            <span>Replay Intro</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
