import React, { useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TourSection from '../TourSection';
import StatsSection from '../StatsSection';

// Enhanced animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] } },
};

const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] } },
};

const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Parallax effect for images
const parallaxEffect: Variants = {
  initial: { scale: 1.2 },
  animate: { 
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

// Elegant text reveal animation
const textReveal: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
  color?: string;
}

interface Skill {
  label: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  delay = 0,
  color = 'bg-gold-600',
}) => {
  return (
    <motion.div
      className="w-full mb-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: delay * 0.15 + 0.3 }}
      variants={fadeInUp}
    >
      <div className="flex justify-between mb-3">
        <span className="text-sm font-bold font-serif tracking-wider text-gray-800">{label}</span>
        <span className="text-sm font-bold font-serif tracking-wider text-gray-800">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 shadow-inner">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: '0%' }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.34, 1.56, 0.64, 1], 
            delay: delay * 0.15 + 0.5 
          }}
        />
      </div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  
  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const handleEnrollClick = () => {
    navigate('/admissions');
  };

  // Enhanced skills with custom colors
  const skills: Skill[] = [
    { label: 'Mentorship', percentage: 92, color: 'bg-amber-600' },
    { label: 'Education', percentage: 98, color: 'bg-emerald-600' },
    { label: 'Learning', percentage: 88, color: 'bg-indigo-600' },
    { label: 'Motivation', percentage: 95, color: 'bg-rose-600' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          variants={parallaxEffect}
          initial="initial"
          animate="animate"
        >
          <img
            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/About-us-title-img.jpg"
            alt="Students studying"
            className="w-full h-full object-cover scale-105 filter brightness-90"
          />
        </motion.div>
        
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        
        {/* Content with Staggered Animation */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            className="text-center overflow-hidden"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              variants={textReveal}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight"
            >
              About Us
            </motion.h1>
            <motion.div
              variants={textReveal}
              className="overflow-hidden"
            >
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed">
                Creating a world-class educational experience that transforms lives
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="mt-10">
                <motion.button
                  className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg tracking-wide transition-all shadow-lg hover:shadow-xl hover:bg-opacity-90"
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/about')}
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-md"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-20 w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-md"
          animate={{ 
            y: [0, 20, 0], 
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-900 py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              variants={staggerContainer}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden relative"
            >
              {/* Content */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    Our Mission
                  </h2>
                </div>
                
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                  Our mission is to provide a safe haven where everyone is valued and respected. All staff members, in partnership with parents and families are fully committed to students' college and career readiness. Students are empowered to meet current and future challenges to develop social awareness, civic responsibility, and personal growth.
                </p>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              variants={staggerContainer}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden relative"
            >
              {/* Content */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    Our Vision
                  </h2>
                </div>
                
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                  Our vision is to prepare and motivate our students for a rapidly changing world by instilling in them critical thinking skills, a global perspective, and a respect for core values of honesty, loyalty, perseverance, and compassion. Students will have success for today and be prepared for tomorrow.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl text-gray-700 font-light italic mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vagdevi Institute has its sound ground in its founding principle "Knowledge First". From a single student in 2015 to a strength of 150 strong student group Vagdevi Institute has been instrumental in shaping many minds to achieve their desired goals. The foundation has more than 20 faculties with highest qualification ranging from masters to PhD. Each an expert in their field of study and with diverse experience and good subject matter expertise they have been successful in even converting dull minds to knowledgeable students – even some of them becoming toppers. Value-based knowledge delivery is always been our strength and we are ever committed to continue this tradition in the near future too.

              When it comes to "Education" the motto of Vagdevi is "Knowledge First". The foundation has been striving to impart excellent education and knowledge to its pupil and students across Bangalore since 2015. Our knowledgeable and expert panel of faculty have been our backbone and their only goal is to turn every student an excellent learner and an outstanding student in their area of expertise. We not only create rank holders we create an all round individual ready to taken on the world.
            </motion.h3>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Luxurious Glass Effect */}
      <section className="relative py-24 md:py-22 px-4">
        {/* Background with parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden -z-10"
          variants={parallaxEffect}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:2400/1*kCuNL07RRQvPWiiaTpWARg.gif"
            alt="Animated background"
            className="w-full h-full object-cover"
          />
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </motion.div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column with enhanced animations */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="relative"
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-serif font-bold mb-18 text-white"
                variants={fadeInLeft}
              >
                Excellence in <span className="text-amber-400">Education</span>
              </motion.h2>
              
              <motion.p 
                className="text-black mb-6 leading-relaxed font-medium text-xl"
                variants={fadeInLeft}
              >
                For over two decades, our institution has been at the forefront of educational innovation, 
                cultivating minds and inspiring future leaders to excel in their chosen paths.
              </motion.p>
              
              <motion.p 
                className="text-black leading-relaxed font-medium text-xl mb-8"
                variants={fadeInLeft}
              >
                We blend time-honored academic traditions with cutting-edge pedagogical approaches 
                to create an unparalleled learning experience that prepares students for the challenges of tomorrow.
              </motion.p>
              
              
            </motion.div>

            {/* Right Column - Skills with Glass Morphism */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden"
            >
              <motion.h3 
                className="text-3xl font-serif text-white mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-amber-400">Expertise</span>
              </motion.h3>
              
              {skills.map((skill, index) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                  delay={index}
                  color={skill.color}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Enhanced CTA Section */}
      <section className="grid md:grid-cols-2">
        {/* Left Column - Gradient CTA */}
        <motion.div 
          className="bg-gradient-to-br from-red-600 via-red-500 to-amber-600 text-white p-12 md:p-16 lg:p-24 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Begin Your Academic Journey
          </motion.h2>
          
          <motion.p 
            className="mb-10 text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-lg relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join our prestigious community of scholars, innovators, and future leaders. 
            Experience education that transforms not just careers, but lives.
          </motion.p>
          
          <motion.button
            className="px-10 py-4 bg-white text-red-600 rounded-full font-medium text-lg tracking-wide shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)" 
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onClick={handleEnrollClick}
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Right Column - Image with Parallax */}
        <motion.div
          className="h-80 md:h-auto relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            variants={parallaxEffect}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <img
              src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-img-2.jpg"
              alt="Students learning"
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;