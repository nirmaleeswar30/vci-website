// ./src/components/TestimonialsSection.tsx
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  themeColor: string;
  fromColor: string;
  toColor: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'The courses completely transformed my coding skills. I went from beginner to landing a developer job in just 6 months!',
    rating: 5,
    themeColor: 'bg-gradient-to-br from-rose-600 to-pink-700',
    fromColor: 'rose-600',
    toColor: 'pink-700'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Analytics Student',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The instructors are incredibly knowledgeable and the platform is so intuitive. Best learning investment I ever made.',
    rating: 5,
    themeColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    fromColor: 'blue-600',
    toColor: 'indigo-700'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Graphic Design Student',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    content: 'I loved the project-based approach. The portfolio I built during the courses helped me get my first design clients.',
    rating: 4,
    themeColor: 'bg-gradient-to-br from-purple-600 to-violet-700',
    fromColor: 'purple-600',
    toColor: 'violet-700'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Science Student',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    content: 'The curriculum is perfectly structured. Complex topics are broken down into digestible lessons with practical applications.',
    rating: 5,
    themeColor: 'bg-gradient-to-br from-teal-600 to-emerald-700',
    fromColor: 'teal-600',
    toColor: 'emerald-700'
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const testimonialVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Get current theme colors
  const currentTheme = testimonialsData[activeIndex];
  const fromColor = currentTheme.fromColor;
  const toColor = currentTheme.toColor;

  return (
    <section ref={sectionRef} className="py-14 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic background */}
      <div className={`absolute inset-0 ${currentTheme.themeColor} opacity-95 transition-colors duration-500`}></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Student Success Stories
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Hear how our courses transformed careers
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTheme.id}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl p-10 shadow-lg relative overflow-hidden"
            >
              {/* Dynamic top border */}
              <div 
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${fromColor} to-${toColor}`}
              ></div>
              <Quote className={`absolute top-10 right-10 text-${fromColor}/20 w-8 h-8`} />
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={currentTheme.avatar} 
                      alt={currentTheme.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < currentTheme.rating ? 
                          "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    "{currentTheme.content}"
                  </p>
                  
                  <div className="border-t pt-4 border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {currentTheme.name}
                    </h3>
                    <p className="text-gray-600">
                      {currentTheme.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons with increased spacing */}
          <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-2">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110 -ml-16"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={`text-${fromColor}`} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all hover:scale-110 -mr-16"
              aria-label="Next testimonial"
            >
              <ChevronRight className={`text-${fromColor}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;