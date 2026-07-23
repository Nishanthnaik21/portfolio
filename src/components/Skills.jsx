import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C#"],
      color: "from-neon-blue to-blue-600"
    },
    {
      title: "AI/ML & GenAI",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "RAG", "Generative AI", "OpenCV", "Scikit-learn"],
      color: "from-neon-purple to-purple-600"
    },
    {
      title: "Frameworks & Tools",
      skills: ["FastAPI", "Git", "GitHub", "MySQL", "MATLAB", "Arduino"],
      color: "from-neon-green to-green-600"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "OOP", "REST APIs", "Database Management", "Model Optimization", "Image Processing"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Technical <span className="text-neon-purple">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${category.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              
              <h3 className="text-2xl font-display font-semibold text-white mb-6 pl-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 pl-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-dark-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-neon-blue hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
