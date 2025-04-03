import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavSearch from './NavSearch';

interface NavItem {
  name: string;
  path: string;
  subItems?: { name: string; path: string }[];
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Courses', 
      path: '/courses',
      subItems: [
        { name: 'Entrance Exams', path: '/courses/entrance-exams' },
        { name: 'Competitive Exams', path: '/courses/competitive-exams' },
        { name: 'Board Exams', path: '/courses/board-exams' },
        { name: 'Foundation Courses', path: '/courses/foundation' }
      ]
    },
    { name: 'Toppers', path: '/toppers' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navbarClassName = `fixed top-0 left-0 right-0 z-50 transition duration-300 ${
    scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
  } p-6 md:px-8 lg:px-16`;

  const logoClassName = `text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`;

  const actionIconClassName = `hover:text-gray-300 ${scrolled ? 'text-gray-800' : 'text-white'}`;

  const isActive = (path: string) => location.pathname === path;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '100%', opacity: 1 },
    exit: { width: 0, opacity: 0 }
  };

  return (
    <header className={navbarClassName}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={logoClassName}>
          Academist
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.subItems ? (
                  <div ref={dropdownRef}>
                    <button 
                      className={`hover:text-gray-300 transition duration-200 ${
                        scrolled ? 'hover:text-gray-600' : ''
                      } ${
                        isActive(item.path) ? 'border-b-2 border-pink-600' : ''
                      } flex items-center`}
                      onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                    >
                      {item.name}
                      <motion.svg 
                        className="h-4 w-4 ml-1"
                        animate={coursesDropdownOpen ? "up" : "down"}
                        variants={{
                          up: { rotate: 180 },
                          down: { rotate: 0 }
                        }}
                      >
                        <path fill="currentColor" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                              onClick={() => setCoursesDropdownOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`hover:text-gray-300 transition duration-200 ${
                      scrolled ? 'hover:text-gray-600' : ''
                    } ${
                      isActive(item.path) ? 'border-b-2 border-pink-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <AnimatePresence>
            {searchOpen ? (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={searchVariants}
                className="absolute md:static top-full left-0 right-0 md:w-96"
              >
                <NavSearch 
                  onClose={() => setSearchOpen(false)}
                  scrolled={scrolled}
                  navItems={navItems}
                />
              </motion.div>
            ) : (
              <motion.button 
                key="search-icon"
                className={actionIconClassName}
                onClick={() => setSearchOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
          
          <button 
            className={`md:hidden ${actionIconClassName}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <details className="group">
                        <summary className={`flex justify-between items-center py-2 ${
                          isActive(item.path) 
                            ? 'text-pink-600 font-medium' 
                            : 'text-gray-800 hover:text-gray-600'
                        }`}>
                          {item.name}
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 ml-1" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                            animate={mobileMenuOpen ? "up" : "down"}
                            variants={{
                              up: { rotate: 180 },
                              down: { rotate: 0 }
                            }}
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </motion.svg>
                        </summary>
                        <motion.ul 
                          className="pl-4 mt-2 space-y-2"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: { opacity: 1, height: 'auto' }
                          }}
                        >
                          {item.subItems?.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className={`block py-1 ${
                                  isActive(subItem.path) 
                                    ? 'text-pink-600 font-medium' 
                                    : 'text-gray-600 hover:text-gray-800'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </details>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block py-2 ${
                          isActive(item.path) 
                            ? 'text-pink-600 font-medium' 
                            : 'text-gray-800 hover:text-gray-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;