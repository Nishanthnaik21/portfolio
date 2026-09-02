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
    <section id="contact" className="py-14 sm:py-16 md:py-24 relative scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/40 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 sm:mb-4">Let's Connect</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-neon-blue mr-3 sm:mr-4 border border-gray-800 shrink-0">
                  <Mail size={18} className="sm:size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</div>
                  <a href="mailto:nishanthnaik21@gmail.com" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors break-all">nishanthnaik21@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-neon-purple mr-3 sm:mr-4 border border-gray-800 shrink-0">
                  <Phone size={18} className="sm:size-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</div>
                  <a href="tel:+918073593206" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">+91 8073593206</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-neon-green mr-3 sm:mr-4 border border-gray-800 shrink-0">
                  <MapPin size={18} className="sm:size-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</div>
                  <span className="text-sm sm:text-base text-gray-300">India</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8 pt-6 border-t border-gray-800/80">
              <a 
                href="https://github.com/Nishanthnaik21" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub Profile"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-dark-900 transition-all border border-gray-800 shadow-md"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nishanth-naik21" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn Profile"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all border border-gray-800 shadow-md"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-800/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-800 shadow-xl">
              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-gray-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-gray-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-dark-900 border border-gray-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-neon-blue text-dark-900 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed glow-box text-sm sm:text-base cursor-pointer"
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
