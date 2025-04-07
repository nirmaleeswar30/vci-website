import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Define the slide content interface
interface SlideContent {
  backgroundImage: string;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Array of slide contents
  const slides: SlideContent[] = [
    {
      backgroundImage: 'hero2.jpg',
      title: 'Improve Skills',
      description: 'Ready to learn and have fun? Find a perfect course and join us today.'
    },
    {
      backgroundImage: 'hero1.jpg', // Replace with a different image
      title: 'Expand Knowledge',
      description: 'Discover new subjects and perspectives to broaden your horizons.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: { duration: 0.3 }
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[currentSlide].backgroundImage}')` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={`title-${currentSlide}`}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.1 }}
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

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

      {/* Slider Navigation Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Arrows */}
      <motion.button 
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </motion.button>
      
      <motion.button 
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>

      {/* Overlay Image at Bottom Right */}
      <motion.img
        src="https://res.cloudinary.com/dqnvoqyvr/image/upload/v1743940530/Adobe_Express_-_file_2_agzi0w.png"
        alt="Overlay Graphic"
        className="absolute bottom-0 right-0 w-80 md:w-[28rem] lg:w-[32rem] pointer-events-none select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.section>
  );
};

export default Hero;