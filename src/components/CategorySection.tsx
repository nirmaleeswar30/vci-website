// ./src/components/CategorySection.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Course {
  id: number;
  category: string;
  title: string;
  instructor: string;
  description: string;
  students: number;
  ratings: number;
  price: string;
  imageUrl: string;
}

const coursesData: Course[] = [
    {
      id: 1,
      category: 'Certificate',
      title: 'Leadership Skills',
      instructor: 'Mark Hook',
      description: 'Lorem ipsum dolor sit amet, consec ter adipiscing elit. Donec us poere turpis ocio, vel porttitor magna tincidu ntsitamet euti ame',
      students: 38,
      ratings: 0,
      price: '$ Free',
      imageUrl: 'https://via.placeholder.com/400x250/EEEEEE/000000/?Text=Leadership', // Placeholder image
    },
    {
      id: 2,
      category: 'Popular',
      title: 'Typography Design',
      instructor: 'Una Anston',
      description: 'Lorem ipsum dolor sit amet, consec ter adipis cing elit. Donec us poere turpis odio, vel porttitor magna tinodu ritsitamet euti ame',
      students: 20,
      ratings: 0,
      price: '$ 340',
      imageUrl: 'https://via.placeholder.com/400x250/DDDDDD/000000/?Text=Typography', // Placeholder image
    },
    {
      id: 3,
      category: 'Learning',
      title: 'Learn German',
      instructor: 'Scott Brown',
      description: 'Lorem ipsum dolor sit amet, consec ter adipiscing elit. Donec us poere turpis odio, vel porttitor magna tincidu nisitarnet euti ame',
      students: 21,
      ratings: 0,
      price: '$ Free',
      imageUrl: 'https://via.placeholder.com/400x250/CCCCCC/000000/?Text=German', // Placeholder image
    },
    // Add more courses as needed
  ];

const CategorySection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const categories = ['Show all', 'Certificate', 'Learning', 'Popular'];
  const [activeCategory, setActiveCategory] = useState('Show all');
  const filteredCourses = activeCategory === 'Show all' ? coursesData : coursesData.filter(course => course.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <section className="py-34 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div 
          className="mb-8 flex space-x-4 overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              custom={i}
              variants={buttonVariants}
              className={`py-2 px-4 rounded-full text-gray-700 font-semibold transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                activeCategory === category ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <motion.img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="p-6">
                  <motion.span 
                    className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold rounded-full px-3 py-1 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {course.category}
                  </motion.span>
                  <div className="relative mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition duration-300">{course.title}</h3>
                    <div className="absolute left-0 bottom-[-8px] bg-pink-600 h-1 w-0 group-hover:w-full transition-all duration-300"></div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{course.description.substring(0, 80)}...</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>{course.students} Students</span>
                    <span>{course.ratings} Ratings</span>
                    <span className="font-semibold text-gray-800">{course.price}</span>
                  </div>
                  <motion.button
                    className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 block w-full text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategorySection;