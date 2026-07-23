import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_X335PpI1uxW81Z2nTMOBoGMdP-1xIa0YUjBl0YtNA4keLg/formResponse";
    const formParams = new URLSearchParams();
    formParams.append("entry.2063394056", formData.name);
    formParams.append("entry.1921124867", formData.email);
    formParams.append("entry.2066157899", formData.message);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formParams
    })
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    })
    .catch((error) => {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-neon-blue mr-4 border border-gray-800">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <a href="mailto:nishanthnaik21@gmail.com" className="text-gray-300 hover:text-white transition-colors">nishanthnaik21@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-neon-purple mr-4 border border-gray-800">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <a href="tel:+918073593206" className="text-gray-300 hover:text-white transition-colors">+91 8073593206</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center text-neon-green mr-4 border border-gray-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/Nishanthnaik21" target="_blank" rel="noreferrer" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-dark-900 transition-all border border-gray-800">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nishanth-naik21" target="_blank" rel="noreferrer" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all border border-gray-800">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-neon-blue text-dark-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed glow-box"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
              
              {status === 'success' && <p className="mt-4 text-neon-green text-center text-sm font-medium">Message sent successfully!</p>}
              {status === 'error' && <p className="mt-4 text-red-500 text-center text-sm font-medium">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
