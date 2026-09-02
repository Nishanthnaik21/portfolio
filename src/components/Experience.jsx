import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "AI Automation & Intelligent Solutions Intern",
      company: "IBM SkillsBuild & BharatCares (in association with AICTE)",
      type: "Internship",
      duration: "June 2026 – July 2026",
      icon: <Briefcase className="text-neon-blue" size={20} />,
      badgeColor: "text-neon-blue bg-neon-blue/10 border-neon-blue/20",
      details: [
        "Completed 6-week technical internship focused on AI Automation and Intelligent Solutions.",
        "Built automated workflows and developed practical AI system solutions leveraging IBM SkillsBuild technologies.",
        "Conducted in association with the All India Council for Technical Education (AICTE) and BharatCares."
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Gym Management System — Client Project",
      type: "Freelance",
      duration: "Ongoing",
      icon: <Briefcase className="text-neon-green" size={20} />,
      badgeColor: "text-neon-green bg-neon-green/10 border-neon-green/20",
      details: [
        "Developing a desktop-based system to automate member registration, attendance tracking, and payments.",
        "Integrated MySQL via JDBC and designed an admin dashboard with automated report generation."
      ]
    },
    {
      role: "Planning & Strategy Lead",
      company: "Nucleus Club",
      type: "Leadership",
      duration: "Active",
      icon: <Briefcase className="text-neon-purple" size={20} />,
      badgeColor: "text-neon-purple bg-neon-purple/10 border-neon-purple/20",
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
    <section id="experience" className="py-14 sm:py-16 md:py-24 relative bg-dark-800/30 scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-900 shadow shrink-0 z-10 group-hover:border-neon-purple transition-colors">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1 ml-4 sm:ml-6 bg-dark-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 group-hover:border-neon-purple/50 transition-colors shadow-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                      <h3 className="font-bold text-white text-lg sm:text-xl leading-snug">{exp.role}</h3>
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.duration && <span className="text-xs text-gray-500 font-medium hidden sm:inline">{exp.duration}</span>}
                        <span className={`text-xs sm:text-sm font-medium border px-2.5 py-0.5 rounded-full ${exp.badgeColor || 'text-neon-purple bg-neon-purple/10 border-neon-purple/20'}`}>{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 font-medium text-sm sm:text-base mb-1">{exp.company}</div>
                    {exp.duration && <div className="text-xs text-gray-500 font-medium mb-3 sm:hidden">{exp.duration}</div>}
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
