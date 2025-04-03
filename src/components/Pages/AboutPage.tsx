import React from 'react';
import { motion, Variants } from 'framer-motion';
import TourSection from '../TourSection';
import StatsSection from '../StatsSection';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

interface Skill {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  delay = 0,
}) => {
  return (
    <motion.div
      className="w-full mb-6"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      variants={fadeInUp}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold font-mono text-gray-700">{label}</span>
        <span className="text-sm font-bold font-mono text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-red-600 h-2 rounded-full"
          initial={{ width: '0%' }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut', delay: delay * 0.1 + 0.4 }}
        />
      </div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const skills: Skill[] = [
    { label: 'Mentorship', percentage: 78 },
    { label: 'Education', percentage: 95 },
    { label: 'Learning', percentage: 66 },
    { label: 'Motivation', percentage: 82 },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/About-us-title-img.jpg"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Learn more about our institution and what makes us unique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Animated Background */}
      <section className="relative py-16 md:py-64 px-4">
        {/* Animated Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:2400/1*kCuNL07RRQvPWiiaTpWARg.gif"
            alt="Animated background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-10 text-white"
                variants={fadeInUp}
              >
                Why Choose Us
              </motion.h2>
              <motion.p 
                className="text-white/90 mb-2 leading-relaxed font-semibold text-lg"
                variants={fadeInUp}
              >
                Our institution has been providing quality education for over 20 years, 
                helping students achieve their academic and professional goals.
              </motion.p>
              <motion.p 
                className="text-white/90 leading-relaxed font-semibold text-lg"
                variants={fadeInUp}
              >
                We combine traditional teaching methods with innovative approaches 
                to create the best learning environment for our students.
              </motion.p>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg"
            >
              {skills.map((skill, index) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                  delay={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid md:grid-cols-2">
        {/* Left Column - Red CTA */}
        <motion.div 
          className="bg-red-600 text-white p-8 md:p-12 lg:p-34"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-6">
            Join Our Community
          </h2>
          <p className="mb-6 text-white/90 text-2xl">
            Become part of our growing community of learners and educators.
          </p>
          <motion.button
            className="px-6 py-3 bg-white text-red-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="h-64 md:h-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-img-2.jpg"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
      <TourSection />
      <StatsSection />
    </div>
  );
};

export default AboutPage;