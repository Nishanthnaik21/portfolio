import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    "IBM SkillsBuild & AICTE – AI Automation & Intelligent Solutions Certified",
    "Winner – Digital Image Processing Competition",
    "Runner-Up – AI/ML Project Competition",
    "Deloitte Data Analytics & Forensic Technology Simulation"
  ];

  return (
    <section id="achievements" className="py-14 sm:py-16 md:py-24 relative scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Honors & <span className="text-neon-blue">Achievements</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center bg-dark-800/50 p-4 sm:p-5 rounded-xl border border-gray-800 hover:border-neon-blue/50 transition-colors group shadow-sm"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-neon-blue mr-3.5 sm:mr-4 shrink-0 group-hover:scale-110 transition-transform">
                {index < 2 ? <Trophy size={20} /> : <Award size={20} />}
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-medium group-hover:text-white transition-colors leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
