import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Planning & Strategy Lead",
      company: "Nucleus Club",
      type: "Leadership",
      icon: <Briefcase className="text-neon-purple" size={24} />,
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
      icon: <GraduationCap className="text-neon-blue" size={24} />
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Completed",
      score: "94.5%",
      icon: <GraduationCap className="text-neon-blue" size={24} />
    },
    {
      degree: "SSLC",
      institution: "Completed",
      score: "94.08%",
      icon: <GraduationCap className="text-neon-blue" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center">
              Experience & <span className="text-neon-purple ml-2">Leadership</span>
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-neon-purple transition-colors">
                    {exp.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-900 p-6 rounded-2xl border border-gray-800 group-hover:border-neon-purple/50 transition-colors">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                      <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                      <span className="text-neon-purple text-sm font-medium bg-neon-purple/10 px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.type}</span>
                    </div>
                    <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                    <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center">
              Education <span className="text-neon-blue ml-2">Timeline</span>
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-neon-blue transition-colors">
                    {edu.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-900 p-6 rounded-2xl border border-gray-800 group-hover:border-neon-blue/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                    </div>
                    <div className="text-gray-400 mb-4">{edu.institution}</div>
                    <div className="text-neon-blue font-bold text-2xl">{edu.score}</div>
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
