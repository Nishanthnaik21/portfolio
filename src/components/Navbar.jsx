import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onReplayIntro }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-dark-900/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-800/80' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="flex-shrink-0 font-display font-bold text-2xl sm:text-3xl tracking-tighter text-white cursor-pointer select-none"
          >
            Nishanth <span className="text-neon-blue">Naik</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            <div className="flex items-center space-x-5 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative group text-gray-300 hover:text-neon-blue transition-colors cursor-pointer text-sm lg:text-base font-medium inline-block py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Intro Replay Button */}
            {onReplayIntro && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onReplayIntro();
                }}
                className="flex items-center gap-1.5 text-xs text-neon-blue hover:text-white px-3 py-1.5 rounded-full border border-neon-blue/30 hover:border-neon-blue bg-neon-blue/10 hover:bg-neon-blue/20 transition-all cursor-pointer font-medium"
                title="Watch Intro Sequence"
                aria-label="Watch Intro Sequence"
              >
                <Film size={13} />
                <span>Intro</span>
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {onReplayIntro && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onReplayIntro();
                }}
                className="flex items-center gap-1 text-xs text-neon-blue px-2.5 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 cursor-pointer font-medium"
                title="Watch Intro"
                aria-label="Watch Intro"
              >
                <Film size={12} />
                <span>Intro</span>
              </button>
            )}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-dark-800/80 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} className="text-neon-blue" /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-dark-900/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-neon-blue hover:bg-dark-800/60 block px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer active:scale-98"
                >
                  {link.name}
                </Link>
              ))}
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onReplayIntro();
                  }}
                  className="w-full mt-2 flex items-center justify-center gap-2 text-neon-blue bg-dark-800/90 border border-neon-blue/30 hover:bg-neon-blue/10 px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer"
                >
                  <Film size={16} />
                  <span>Watch Intro Video</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
