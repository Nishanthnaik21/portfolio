import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    "Winner – Digital Image Processing Competition",
    "Runner-Up – AI/ML Project Competition",
    "Deloitte Data Analytics & Forensic Technology Simulation",
    "Google Developer Group Workshop Participant"
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Honors & <span className="text-neon-blue">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center bg-dark-800/50 p-6 rounded-xl border border-gray-800 hover:border-neon-blue/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-neon-blue mr-4 shrink-0 group-hover:scale-110 transition-transform">
                {index < 2 ? <Trophy size={20} /> : <Award size={20} />}
              </div>
              <p className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
