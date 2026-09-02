import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FastForward } from 'lucide-react';

const IntroSequence = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // 1. Responsive Viewport Detection (Mobile vs Desktop)
  useEffect(() => {
    const checkMobile = () => {
      const isMobileViewport = window.matchMedia('(max-width: 768px)').matches || window.innerWidth <= 768;
      setIsMobile(isMobileViewport);
    };

    checkMobile();
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaChange = (e) => setIsMobile(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    window.addEventListener('resize', checkMobile);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 2. Autoplay Attempt & Safety Timeout Fallback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAutoplayBlocked(false);
          })
          .catch((error) => {
            console.warn("Autoplay prevented or restricted by browser policy:", error);
            setAutoplayBlocked(true);
          });
      }
    }

    // Safety timeout: If video takes longer than 12s or stalls, transition cleanly
    const safetyTimer = setTimeout(() => {
      handleComplete();
    }, 12000);

    // Keyboard navigation (Escape or Space to skip)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setAutoplayBlocked(false))
        .catch(() => handleComplete());
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsPlaying(false);
    setTimeout(onComplete, 600); // Wait for smooth fade-out animation
  };

  const baseUrl = import.meta.env.BASE_URL || '/';
  const desktopVideo = `${baseUrl}introduction.mp4`;
  const mobileVideo = `${baseUrl}video_mobile.mp4`;
  const currentVideoSrc = isMobile ? mobileVideo : desktopVideo;

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Background Video with Mobile & Desktop Source */}
          <video
            key={isMobile ? 'mobile-video' : 'desktop-video'}
            ref={videoRef}
            src={currentVideoSrc}
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleComplete}
            onError={() => {
              console.warn("Video failed to load, proceeding to portfolio");
              handleComplete();
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isVideoLoaded ? 'opacity-90' : 'opacity-0'
            }`}
          >
            <source src={mobileVideo} media="(max-width: 768px)" type="video/mp4" />
            <source src={desktopVideo} media="(min-width: 769px)" type="video/mp4" />
          </video>
          
          {/* Cinematic Vignette & Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/85 z-10 pointer-events-none" />

          {/* Fallback Play Button if Autoplay was restricted by browser/OS */}
          {autoplayBlocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute z-30 flex flex-col items-center gap-3 px-6 text-center"
            >
              <button
                onClick={handleManualPlay}
                className="flex items-center gap-3 px-6 py-3.5 bg-neon-blue text-dark-900 font-bold rounded-full shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-white transition-all cursor-pointer text-sm sm:text-base active:scale-95"
              >
                <Play size={18} fill="currentColor" />
                Tap to Watch Intro
              </button>
              <button
                onClick={handleComplete}
                className="text-xs sm:text-sm text-gray-400 hover:text-white underline transition-colors cursor-pointer"
              >
                or Skip directly to Portfolio
              </button>
            </motion.div>
          )}

          {/* Loading Glow while video buffers */}
          {!isVideoLoaded && !autoplayBlocked && (
            <div className="absolute z-20 flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin" />
              <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">Loading Experience</span>
            </div>
          )}

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={handleComplete}
            aria-label="Skip introduction video"
            className="absolute bottom-7 sm:bottom-10 md:bottom-12 z-20 flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 bg-dark-900/60 hover:bg-white/15 border border-white/25 text-white/90 rounded-full transition-all duration-300 backdrop-blur-md text-xs sm:text-sm font-medium shadow-lg hover:border-neon-blue/60 active:scale-95 cursor-pointer group"
          >
            <span>Skip Intro</span>
            <FastForward size={14} className="text-gray-400 group-hover:text-neon-blue transition-colors" />
          </motion.button>

          {/* Subtle Progress Bar at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
            <div
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;

