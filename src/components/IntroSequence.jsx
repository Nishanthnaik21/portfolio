import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSequence = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setTimeout(onComplete, 800); // Wait for fade out animation
  };

  const handleSkip = () => {
    setIsPlaying(false);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}introduction.mp4`}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10" />

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={handleSkip}
            className="absolute bottom-12 z-20 px-8 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
