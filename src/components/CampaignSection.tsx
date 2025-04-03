// ./src/components/CampaignSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CampaignSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const slideIn = {
    initial: { x: '-100%', opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
  };

  const slideInRight = {
    initial: { x: '100%', opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
  };

  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section ref={sectionRef}>
      <div className="mx-auto rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 grid-rows-2">
        {/* Top Left - Sales Expert */}
        <motion.div
          className="bg-red-600 p-8 flex flex-col justify-center items-center"
          variants={slideIn}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Become a sales expert with us.</h2>
          <div className="relative group">
            <button className="text-white font-semibold py-2 px-4 rounded-md">
              Read More
            </button>
            <div className="absolute left-0 bottom-[-4px] bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Top Right - Notebook Image */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <img
            src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_650/dpr_2.0/element/22/220259_220219_other_images-04-08-22_Capitol_Tech_50941.jpg"
            alt="Notebook"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Left - Code Snippet Image */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <img
            src="https://www.captechu.edu/sites/default/files/04-07-22_Capitol_Tech_1409_0_0.jpg"
            alt="Code Snippet"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Right - Learn to Code */}
        <motion.div
          className="bg-gray-200 p-8 flex flex-col justify-center items-center"
          variants={slideInRight}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Learn to code like a professional.</h2>
          <div className="relative group">
            <button className="text-gray-800 font-semibold py-2 px-4 rounded-md">
              Read More
            </button>
            <div className="absolute left-0 bottom-[-4px] bg-gray-800 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignSection;