import React from 'react';
import { motion } from 'framer-motion';

function Missing() {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-gray-800/50"
          aria-hidden="true"
        />
      </div>
      
      {/* Content box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 mb-6 md:mb-8">404</h1>
          
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-gray-700">
              Oops! The page you are looking for
              <br className="hidden sm:block" />does not exist. It might have been
              <br className="hidden sm:block" />moved or deleted.
              <motion.span 
                className="absolute hidden sm:block -right-32 sm:-right-32 -bottom-8 sm:-bottom-10 text-red-500 transform rotate-12"
                style={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: '4rem',
                  lineHeight: '1',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
                initial={{ y: -20 }}
                animate={{ 
                  y: [0, -20, 0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut"
                }}
              >
                Oops!
              </motion.span>
            </h2>
            
            <motion.a 
              href="/"
              className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white text-lg font-bold transition-colors duration-200 rounded-lg shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back home
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missing;