// ./src/components/ApplySection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ApplySection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const buttonHoverVariants = {
    hover: { backgroundColor: '#ef4444' }, // Darker shade of black on hover 
  };

  return (
    <motion.section
  ref={sectionRef}
  className="py-16 md:py-36 bg-white relative overflow-hidden"
  style={{
    backgroundImage: `url('https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-background-2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 place-items-center"> {/* Centered both vertically and horizontally */}
    
    {/* Centered Form */}
    <div className="bg-white py-12 px-6 md:p-16 flex flex-col justify-center items-center w-full max-w-xl rounded-lg shadow-lg">
    <h3 className="text-3xl font-bold text-gray-800 mb-3 text-center">For Admissions,</h3>
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Apply Now!</h3>
      <form className="space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Phone Number"
          />
        </div>
        <motion.button
          variants={buttonHoverVariants}
          whileHover="hover"
          className="bg-gray-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline w-full"
        >
          Get it now
        </motion.button>
      </form>
    </div>
  </div>
</motion.section>

  );
};

export default ApplySection;