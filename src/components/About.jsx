import { motion } from 'framer-motion';
import { Brain, GraduationCap, Code2, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-neon-blue" size={28} />,
      title: "Education",
      desc: "Final Year AIML Engineering with 9.18/10 CGPA"
    },
    {
      icon: <Brain className="text-neon-purple" size={28} />,
      title: "Passion",
      desc: "Deeply interested in Artificial Intelligence & Generative AI"
    },
    {
      icon: <Code2 className="text-neon-green" size={28} />,
      title: "Experience",
      desc: "Building real-world applications and intelligent systems"
    },
    {
      icon: <Rocket className="text-neon-blue" size={28} />,
      title: "Leadership",
      desc: "Planning and Strategy Lead at Nucleus Club"
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-16 md:py-24 relative scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto lg:max-w-none"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4 sm:mb-6">
              My Journey into AI
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              I am an AI/ML Engineer driven by the potential of artificial intelligence to solve complex problems and create intelligent solutions. Currently in my final year of AIML Engineering, I have cultivated a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              My passion extends into Generative AI, where I continuously explore cutting-edge models like LLMs and RAG architectures. I pride myself on bridging the gap between sophisticated AI models and robust full-stack development, delivering scalable applications.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Beyond coding, I have taken on leadership roles, notably as the Planning & Strategy Lead for the Nucleus Club, where I focused on strategic planning and fostered collaboration among peers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
          >
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-dark-800/50 backdrop-blur-sm border border-gray-800 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:border-neon-blue/50 transition-all hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="mb-3 sm:mb-4">{item.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
