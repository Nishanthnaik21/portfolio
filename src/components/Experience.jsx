import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Planning & Strategy Lead",
      company: "Nucleus Club",
      type: "Leadership",
      icon: <Briefcase className="text-neon-purple" size={20} />,
      details: [
        "Strategic Planning & Operations",
        "Team Coordination & Leadership",
      ]
    }
  ];

  const education = [
    {
      degree: "BE in Artificial Intelligence & Machine Learning",
      institution: "Current",
      score: "CGPA: 9.18",
      icon: <GraduationCap className="text-neon-blue" size={20} />
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Completed",
      score: "94.5%",
      icon: <GraduationCap className="text-neon-blue" size={20} />
    },
    {
      degree: "SSLC",
      institution: "Completed",
      score: "94.08%",
      icon: <GraduationCap className="text-neon-blue" size={20} />
    }
  ];

  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20 relative bg-dark-800/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-8 flex items-center">
              Experience & <span className="text-neon-purple ml-2">Leadership</span>
            </h2>
            
            <div className="space-y-6 sm:space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-5 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-neon-purple before:via-gray-700 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-900 text-neon-purple shadow shrink-0 z-10 group-hover:border-neon-purple transition-colors">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1 ml-4 sm:ml-6 bg-dark-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 group-hover:border-neon-purple/50 transition-colors shadow-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                      <h3 className="font-bold text-white text-lg sm:text-xl leading-snug">{exp.role}</h3>
                      <span className="text-neon-purple text-xs sm:text-sm font-medium bg-neon-purple/10 border border-neon-purple/20 px-2.5 py-0.5 rounded-full shrink-0">{exp.type}</span>
                    </div>
                    <div className="text-gray-400 font-medium text-sm sm:text-base mb-3">{exp.company}</div>
                    <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 list-disc list-inside">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-8 flex items-center">
              Education <span className="text-neon-blue ml-2">Timeline</span>
            </h2>
            
            <div className="space-y-6 sm:space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-5 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-gray-700 before:to-transparent">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-900 text-neon-blue shadow shrink-0 z-10 group-hover:border-neon-blue transition-colors">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 ml-4 sm:ml-6 bg-dark-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 group-hover:border-neon-blue/50 transition-colors shadow-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 mb-1.5">
                      <h3 className="font-bold text-white text-base sm:text-lg leading-snug">{edu.degree}</h3>
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm mb-3">{edu.institution}</div>
                    <div className="text-neon-blue font-bold text-xl sm:text-2xl">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
