import { motion } from 'framer-motion';
import { Brain, GraduationCap, Code2, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-neon-blue" size={32} />,
      title: "Education",
      desc: "Final Year AIML Engineering with 9.18/10 CGPA"
    },
    {
      icon: <Brain className="text-neon-purple" size={32} />,
      title: "Passion",
      desc: "Deeply interested in Artificial Intelligence & Generative AI"
    },
    {
      icon: <Code2 className="text-neon-green" size={32} />,
      title: "Experience",
      desc: "Building real-world applications and intelligent systems"
    },
    {
      icon: <Rocket className="text-neon-blue" size={32} />,
      title: "Leadership",
      desc: "Planning and Strategy Lead at Nucleus Club"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-6">
              My Journey into AI
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am an AI/ML Engineer driven by the potential of artificial intelligence to solve complex problems and create intelligent solutions. Currently in my final year of AIML Engineering, I have cultivated a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My passion extends into Generative AI, where I continuously explore cutting-edge models like LLMs and RAG architectures. I pride myself on bridging the gap between sophisticated AI models and robust full-stack development, delivering scalable applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I have taken on leadership roles, notably as the Planning & Strategy Lead for the Nucleus Club, where I focused on strategic planning and fostered collaboration among peers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="bg-dark-800/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-neon-blue/50 transition-all hover:-translate-y-2">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
