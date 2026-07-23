import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      
      {/* Full screen photo on the right */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 opacity-20 lg:opacity-100"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%)', maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%)' }}
      >
        <img 
          src="/portfolio/image.JPG" 
          alt="Nishanth Uday Naik" 
          className="w-full h-full object-cover" 
          onError={(e) => { e.target.src = '/image.JPG'; e.target.onerror = null; }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-neon-blue font-medium text-lg tracking-wide">HELLO, WORLD! I AM</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-bold text-white leading-tight whitespace-nowrap">
              Nishanth Uday Naik
            </h1>
            <div className="h-12 text-2xl sm:text-3xl font-display font-semibold text-gray-300">
              <span className="mr-2">I am an</span>
              <span className="text-neon-purple glow-text">
                <Typewriter
                  words={['AI/ML Engineer']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed drop-shadow-md">
              Passionate about building intelligent, scalable AI solutions using Machine Learning, Deep Learning, Computer Vision, and Generative AI. Final-year Artificial Intelligence & Machine Learning Engineering student with a CGPA of 9.18/10, focused on developing innovative, production-ready systems that solve real-world problems through cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={`${import.meta.env.BASE_URL}Nishanth_Uday_Naik_Resume.pdf`} download="Nishanth_Uday_Naik_Resume.pdf" className="px-6 py-3 bg-neon-blue text-dark-900 font-semibold rounded-full flex items-center hover:bg-white hover:text-dark-900 hover:scale-105 active:scale-95 transition-all glow-box duration-300">
                <FileText size={20} className="mr-2" /> Resume
              </a>
              <Link to="contact" smooth={true} duration={500} className="px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-full flex items-center hover:bg-neon-blue/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                <Mail size={20} className="mr-2" /> Contact
              </Link>
              <a href="https://github.com/Nishanthnaik21" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 text-gray-300 rounded-full hover:border-white hover:text-white hover:scale-110 active:scale-95 transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nishanth-naik21" target="_blank" rel="noreferrer" className="p-3 border border-gray-600 text-gray-300 rounded-full hover:border-neon-blue hover:text-neon-blue hover:scale-110 active:scale-95 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Empty div for spacing on large screens since the image is absolutely positioned */}
          <div className="hidden lg:block"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
