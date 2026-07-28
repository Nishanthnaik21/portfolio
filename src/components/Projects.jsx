import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import dipSimulatorImg from '../assets/projects/dip_simulator.png';
import aiAutoOrderImg from '../assets/projects/ai_auto_order.png';
import hullguardAiImg from '../assets/projects/hullguard_ai.png';
import surveillanceFaceRecImg from '../assets/projects/surveillance_face_rec.png';

const Projects = () => {
  const projects = [
    {
      title: "Digital Image Processing Simulator",
      tech: ["Python", "FastAPI", "React", "OpenCV"],
      features: ["Interactive 3D Scenes", "Code Explainer", "Lab Reports"],
      challenges: "Implementing complex mathematical transformations efficiently.",
      github: "https://github.com/Nishanthnaik21/DIP_learning_simulator",
      demo: "#",
      image: dipSimulatorImg
    },
    {
      title: "AI Auto Order Generator",
      tech: ["Python", "AI/ML", "Automation"],
      features: ["Automated order generation", "AI-driven decision making", "System integration"],
      challenges: "Ensuring reliable and accurate order generation using AI models.",
      github: "https://github.com/Nishanthnaik21/AI_Auto_Order_Generator",
      demo: "#",
      image: aiAutoOrderImg
    },
    {
      title: "HullGuard AI",
      tech: ["YOLOv8", "OpenCV", "Streamlit", "Python"],
      features: ["Marine hull damage detection", "Severity calculation", "Survival time prediction"],
      challenges: "Optimizing YOLOv8 for marine hull conditions and precise damage bounding.",
      github: "https://github.com/Nishanthnaik21/HullGuard-AI",
      demo: "#",
      image: hullguardAiImg
    },
    {
      title: "Face Recognition & Surveillance Management System",
      tech: ["Face Recognition", "Surveillance", "Python", "OpenCV"],
      features: ["Real-time face recognition", "Surveillance management", "System integration"],
      challenges: "Ensuring real-time performance and accuracy in diverse lighting conditions.",
      github: "https://github.com/poorvikkg/Major",
      demo: "#",
      image: surveillanceFaceRecImg
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 border border-gray-800 rounded-2xl overflow-hidden group hover:border-neon-blue/50 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/40 z-10 group-hover:bg-transparent transition-all"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 mb-2 flex-1">
                  <span className="font-semibold text-gray-300">Features:</span> {project.features.join(', ')}
                </p>
                <p className="text-sm text-gray-400 mb-6 flex-1">
                  <span className="font-semibold text-gray-300">Challenges:</span> {project.challenges}
                </p>
                
                <div className="flex justify-end mt-4 pt-4 border-t border-gray-800">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source Code">
                      <FaGithub size={24} />
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
