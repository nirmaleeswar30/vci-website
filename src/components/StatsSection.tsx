import React from 'react';
import { GraduationCap, Users, UserRoundPlus, Building2, Award, BookOpenCheck, School, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const statsData: Stat[] = [
  { 
    icon: <School className="text-red-400" size={40} />, 
    value: '1500 +', 
    label: 'STUDYING OFFLINE' 
  },
  { 
    icon: <BookOpenCheck className="text-red-400" size={40} />, 
    value: '850 +', 
    label: 'NEET/JEE STUDENTS' 
  },
  { 
    icon: <GraduationCap className="text-red-400" size={40} />, 
    value: '2500 +', 
    label: 'ALUMNI STUDENTS' 
  },
  { 
    icon: <Building2 className="text-red-400" size={40} />, 
    value: '2 +', 
    label: 'CAMPUS BRANCHES' 
  },
];

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "backOut"
    }
  })
};

const StatsSection: React.FC = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-vector/school-seamless-background-education-science-260nw-2185343577.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay with reduced opacity for better readability */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={statItemVariants}
              className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-[2px] border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 font-mono">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-300 font-medium tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;