import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Users, GraduationCap } from 'lucide-react';

const WelcomeSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const stats = [
    { icon: <GraduationCap size={36} />, value: "150+", label: "Students" },
    { icon: <Users size={36} />, value: "20+", label: "Expert Faculty" },
    { icon: <Award size={36} />, value: "100%", label: "Success Focus" },
    { icon: <BookOpen size={36} />, value: "8+", label: "Years Experience" },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-38 overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/abstract-pattern.svg')] bg-repeat opacity-20" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              WELCOME TO <span className="text-yellow-400">VAGDEVI CAREER INSTITUTE</span>
            </motion.h2>

            <motion.div 
              className="space-y-6 text-gray-200 text-lg leading-relaxed"
              variants={itemVariants}
            >
              <p>
                The fundamental principle of the Vagdevi Institute, <span className="font-semibold text-yellow-300">"Knowledge First,"</span> provides a solid foundation.
              </p>
              <p>
                Vagdevi Institute has been important in molding many brains to reach their intended goals, growing from a single student in 2015 to a student group of 150.
              </p>
              <p>
                Our foundation has around 20 faculties with advanced degrees ranging from master's to Ph.D. Experts in their area have been effective in improving and transforming grasping abilities in students.
              </p>
            </motion.div>

            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30">
                Explore Our Programs
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10"
                whileHover={{ y: -5 }}
              >
                <div className="text-yellow-400 mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animated elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-yellow-400/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default WelcomeSection;