import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const TourSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 1, 0.5, 1],
      } 
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.15,
        duration: 0.6, 
        ease: 'backOut'
      } 
    }),
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'anticipate',
        delay: 0.2
      } 
    },
  };

  const playButtonVariants = {
    initial: { scale: 0.95, opacity: 0.9 },
    hover: { 
      scale: 1.05, 
      opacity: 1,
      boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
      backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    tap: { scale: 0.9 }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 md:py-56 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          <motion.h2 
            variants={textVariants} 
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative"
          >
            Take a Tour
            <div className="absolute left-0 bottom-[-8px] bg-red-500 h-1 w-20 rounded-full" />
          </motion.h2>

          <motion.p 
            variants={textVariants} 
            className="text-lg md:text-xl text-white leading-relaxed"
          >
            Discover our world through an immersive experience. See how we create magic for our clients every day.
          </motion.p>

          <ul className="list-none space-y-5">
            {[
              "High-quality production standards",
              "Cutting-edge technology solutions",
              "Dedicated team of professionals"
            ].map((item, i) => (
              <motion.li 
                key={i}
                custom={i}
                variants={listItemVariants}
                className="flex items-start text-white text-lg"
              >
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="flex-1">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={videoContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <video
            ref={videoRef}
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            className="w-full h-auto aspect-video object-cover"
            controls={isPlaying}
            poster="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
          />

          {!isPlaying && (
            <motion.button
              className="absolute inset-0 m-auto flex items-center justify-center w-24 h-24 rounded-full backdrop-blur-sm bg-white/90 hover:bg-white transition-all"
              variants={playButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handlePlayClick}
              aria-label="Play Video"
            >
              <Play 
                size={48} 
                className="text-red-500 pl-1" 
                strokeWidth={2.5}
              />
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TourSection;