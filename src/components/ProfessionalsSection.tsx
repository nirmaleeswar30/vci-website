// ./src/components/ProfessionalsSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Link } from 'lucide-react';

interface Professional {
    name: string;
    title: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  }
  
  const professionalsData: Professional[] = [
    {
      name: 'Mark Hook',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-1.jpg',
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    {
      name: 'Tom Ander',
      title: 'Coordinator',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-4.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Neil Flynn',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-2.jpg',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Una Anston',
      title: 'Assistant',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-5.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Scott Brown',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-3.jpg',
      linkedin: '#',
      instagram: '#',
    },
    {
      name: 'Ella Colean',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-6.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Zoey Dudek',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-7.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Ariana Holt',
      title: 'Teacher',
      image: 'https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-8.jpg',
      linkedin: '#',
      instagram: '#',
    },
  ];

const ProfessionalsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <section ref={sectionRef} className="py-34 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {professionalsData.map((professional, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6"
            >
              <motion.div 
                className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4"
                variants={imageVariants}
              >
                <img 
                  src={professional.image} 
                  alt={professional.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                className="text-center"
                variants={textVariants}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{professional.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{professional.title}</p>
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-3 text-gray-700"
                variants={containerVariants}
              >
                {professional.linkedin && (
                  <motion.a 
                    href={professional.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                )}
                {professional.twitter && (
                  <motion.a 
                    href={professional.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    className="text-gray-600 hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={20} />
                  </motion.a>
                )}
                {professional.instagram && (
                  <motion.a 
                    href={professional.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    <Instagram size={20} />
                  </motion.a>
                )}
                {professional.website && (
                  <motion.a 
                    href={professional.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Link size={20} />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;