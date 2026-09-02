import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen lg:h-screen w-full flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-0 relative overflow-hidden scroll-mt-20">
      
      {/* Full screen photo on the right for Desktop */}
      <div 
        className="hidden lg:block absolute inset-y-0 right-0 w-[50%] xl:w-[54%] 2xl:w-[58%] z-0 h-full pointer-events-none select-none"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%)', 
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 15%, black 40%)' 
        }}
      >
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}image.webp`} type="image/webp" />
          <img 
            src={`${import.meta.env.BASE_URL}image.JPG`} 
            alt="Nishanth Uday Naik - AI/ML Engineer" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="1280"
            className="w-full h-full object-cover object-[center_18%] xl:object-[45%_18%]" 
          />
        </picture>
        {/* Bottom vignette blend */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
      </div>

      {/* Mobile & Tablet Full Background Photo */}
      <div className="block lg:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}image.webp`} type="image/webp" />
          <img 
            src={`${import.meta.env.BASE_URL}image.JPG`} 
            alt="Nishanth Uday Naik - AI/ML Engineer" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="1280"
            className="w-full h-full object-cover object-[46%_12%] opacity-80" 
          />
        </picture>
        {/* Gentle gradient overlay keeping face clear while providing contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/65 to-dark-900/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900/80" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 xl:col-span-7 2xl:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6 max-w-2xl xl:max-w-3xl"
          >

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.2rem] font-display font-bold text-white leading-[1.12] tracking-tight break-words">
              Nishanth Uday Naik
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-display font-semibold text-neon-blue glow-text flex items-center justify-center lg:justify-start">
              AIML Engineer
            </div>
            
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xl xl:max-w-2xl">
              Passionate about building intelligent, scalable AI solutions using Machine Learning, Deep Learning, Computer Vision, and Generative AI. Final-year Artificial Intelligence & Machine Learning Engineering student with a CGPA of 9.18/10, focused on developing innovative, production-ready systems that solve real-world problems through cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a 
                href={`${import.meta.env.BASE_URL}Nishanth_Resume.pdf`} 
                download="Nishanth_Resume.pdf" 
                className="px-6 sm:px-7 py-3.5 bg-neon-blue text-dark-900 font-semibold rounded-full flex items-center justify-center hover:bg-white hover:text-dark-900 hover:scale-105 active:scale-95 transition-all glow-box duration-300 text-sm sm:text-base shadow-lg shadow-neon-blue/20"
              >
                <FileText size={18} className="mr-2 shrink-0" /> Resume
              </a>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="px-6 sm:px-7 py-3.5 border border-neon-blue text-neon-blue font-semibold rounded-full flex items-center justify-center hover:bg-neon-blue/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                <Mail size={18} className="mr-2 shrink-0" /> Contact
              </Link>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/Nishanthnaik21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub Profile"
                  className="p-3.5 border border-gray-700 text-gray-300 rounded-full hover:border-white hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center bg-dark-900/60"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishanth-naik21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="p-3.5 border border-gray-700 text-gray-300 rounded-full hover:border-neon-blue hover:text-neon-blue hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center bg-dark-900/60"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Empty column for grid spacing on large screens since desktop photo is absolutely positioned */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 2xl:col-span-6"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
