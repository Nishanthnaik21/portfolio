import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import dipSimulatorImg from '../assets/projects/dip_simulator.png';
import dipSimulatorWebp from '../assets/projects/dip_simulator.webp';
import aiAutoOrderImg from '../assets/projects/ai_auto_order.png';
import aiAutoOrderWebp from '../assets/projects/ai_auto_order.webp';
import hullguardAiImg from '../assets/projects/hullguard_ai.png';
import hullguardAiWebp from '../assets/projects/hullguard_ai.webp';
import surveillanceFaceRecImg from '../assets/projects/surveillance_face_rec.png';
import surveillanceFaceRecWebp from '../assets/projects/surveillance_face_rec.webp';

const Projects = () => {
  const projects = [
    {
      title: "Digital Image Processing Simulator",
      tech: ["Python", "FastAPI", "React", "OpenCV"],
      features: ["Interactive 3D Scenes", "Code Explainer", "Lab Reports"],
      challenges: "Implementing complex mathematical transformations efficiently.",
      github: "https://github.com/Nishanthnaik21/DIP_learning_simulator",
      demo: "#",
      image: dipSimulatorImg,
      webpImage: dipSimulatorWebp
    },
    {
      title: "AI Auto Order Generator",
      tech: ["Python", "AI/ML", "Automation"],
      features: ["Automated order generation", "AI-driven decision making", "System integration"],
      challenges: "Ensuring reliable and accurate order generation using AI models.",
      github: "https://github.com/Nishanthnaik21/AI_Auto_Order_Generator",
      demo: "#",
      image: aiAutoOrderImg,
      webpImage: aiAutoOrderWebp
    },
    {
      title: "HullGuard AI",
      tech: ["YOLOv8", "OpenCV", "Streamlit", "Python"],
      features: ["Marine hull damage detection", "Severity calculation", "Survival time prediction"],
      challenges: "Optimizing YOLOv8 for marine hull conditions and precise damage bounding.",
      github: "https://github.com/Nishanthnaik21/HullGuard-AI",
      demo: "#",
      image: hullguardAiImg,
      webpImage: hullguardAiWebp
    },
    {
      title: "Face Recognition & Surveillance Management System",
      tech: ["Face Recognition", "Surveillance", "Python", "OpenCV"],
      features: ["Real-time face recognition", "Surveillance management", "System integration"],
      challenges: "Ensuring real-time performance and accuracy in diverse lighting conditions.",
      github: "https://github.com/poorvikkg/FinalMajor",
      demo: "#",
      image: surveillanceFaceRecImg,
      webpImage: surveillanceFaceRecWebp
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-16 md:py-24 relative scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden group hover:border-neon-blue/50 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-dark-900">
                <div className="absolute inset-0 bg-dark-900/30 z-10 group-hover:bg-transparent transition-all"></div>
                <picture>
                  <source srcSet={project.webpImage} type="image/webp" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="350"
                  />
                </picture>
              </div>
              
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 leading-snug">{project.title}</h3>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-neon-blue bg-neon-blue/10 border border-neon-blue/20 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs sm:text-sm text-gray-400 mb-2 leading-relaxed">
                  <span className="font-semibold text-gray-300">Features:</span> {project.features.join(', ')}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed flex-1">
                  <span className="font-semibold text-gray-300">Challenges:</span> {project.challenges}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-gray-800/80">
                  <span className="text-xs text-gray-500 font-medium">Open Source</span>
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 text-gray-400 hover:text-white hover:bg-dark-700/50 rounded-lg transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-medium" 
                      title="View Source Code"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <FaGithub size={20} />
                      <span className="inline">Code</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
