// ./src/components/Hero.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const backgroundImageUrl = 'https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2F7y7RtMKuzudxAtN68NzU3b%2Fdfd2a4cdc7c9da04ad78fe8245e912a1%2FG911029504.jpg&w=3840&q=75&dpl=dpl_8rcHgB6nxPGFhM7hq9Crz3KmNm2s';

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, delay: 0.2 }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Improve skills
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          Ready to learn and have fun? Find a perfect course and join us today.
        </motion.p>

        <motion.div 
          className="flex justify-center space-x-4"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded transition duration-200"
            variants={buttonVariants}
          >
            Read More
          </motion.button>
          <motion.button 
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
            variants={buttonVariants}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Arrows */}
      <motion.button 
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </motion.button>
      
      <motion.button 
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>
    </motion.section>
  );
};

export default Hero;