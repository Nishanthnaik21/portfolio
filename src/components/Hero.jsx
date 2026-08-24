import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-0 relative overflow-hidden scroll-mt-20">
      
      {/* Full screen photo on the right for Desktop */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-0"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%)', maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%)' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}image.JPG`} 
          alt="Nishanth Uday Naik" 
          className="w-full h-full object-cover object-[center_20%]" 
          onError={(e) => { e.target.src = '/image.JPG'; e.target.onerror = null; }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6"
          >
            {/* Mobile & Tablet Prominent Profile Avatar Badge */}
            <div className="flex lg:hidden flex-col items-center mb-2">
              <div className="relative group">
                {/* Ambient Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
                
                {/* Glowing Avatar Ring */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-green shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                    <img 
                      src={`${import.meta.env.BASE_URL}image.JPG`} 
                      alt="Nishanth Uday Naik" 
                      className="w-full h-full object-cover object-[center_16%]" 
                      onError={(e) => { e.target.src = '/image.JPG'; e.target.onerror = null; }} 
                    />
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-3.5 sm:mt-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-dark-800/80 text-neon-green border border-neon-green/30 backdrop-blur-md shadow-md">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                  AI / ML Engineer
                </span>
              </div>
            </div>

            <h2 className="text-neon-blue font-semibold text-xs sm:text-sm md:text-base tracking-widest uppercase">
              HELLO, WORLD! I AM
            </h2>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-display font-bold text-white leading-[1.15] tracking-tight break-words">
              Nishanth Uday Naik
            </h1>
            
            <div className="min-h-[2.5rem] sm:min-h-[3rem] text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gray-300 flex items-center justify-center lg:justify-start">
              <span className="mr-2">I am an</span>
              <span className="text-neon-purple glow-text">
                <Typewriter
                  words={['AI/ML Engineer', 'GenAI Developer', 'Problem Solver']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Passionate about building intelligent, scalable AI solutions using Machine Learning, Deep Learning, Computer Vision, and Generative AI. Final-year Artificial Intelligence & Machine Learning Engineering student with a CGPA of 9.18/10, focused on developing innovative, production-ready systems that solve real-world problems through cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a 
                href={`${import.meta.env.BASE_URL}Nishanth_Resume.pdf`} 
                download="Nishanth_Resume.pdf" 
                className="px-5 sm:px-6 py-3 bg-neon-blue text-dark-900 font-semibold rounded-full flex items-center justify-center hover:bg-white hover:text-dark-900 hover:scale-105 active:scale-95 transition-all glow-box duration-300 text-sm sm:text-base shadow-lg shadow-neon-blue/20"
              >
                <FileText size={18} className="mr-2 shrink-0" /> Resume
              </a>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-5 sm:px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-full flex items-center justify-center hover:bg-neon-blue/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                <Mail size={18} className="mr-2 shrink-0" /> Contact
              </Link>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/Nishanthnaik21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub Profile"
                  className="p-3 border border-gray-700 text-gray-300 rounded-full hover:border-white hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center bg-dark-900/60"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishanth-naik21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="p-3 border border-gray-700 text-gray-300 rounded-full hover:border-neon-blue hover:text-neon-blue hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center bg-dark-900/60"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Empty div for spacing on large screens since desktop photo is absolutely positioned */}
          <div className="hidden lg:block"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
