import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <p className="mb-6">Vagdevi Institute is dedicated to quality education and student success.</p>

            {/* Branch Office */}
            <div className="flex items-start mb-3">
              <span className="mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <p className="font-semibold">Branch Office</p>
                <p>#354, 1st Cross Rd, BHEL Layout, RR Nagar, Bengaluru, Karnataka – 560098</p>
              </div>
            </div>

            {/* Registered Office */}
            <div className="flex items-start mb-3">
              <span className="mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <p className="font-semibold">Registered Office</p>
                <p>#197, Sairam krupa, Above SBI, opp to R.R Nagar police station, BEML 4th stage, J.N.Road, Rajarajeshwarinagar, Bengaluru-560098</p>
              </div>
            </div>

            
          </div>

          {/* Popular Courses Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular courses</h3>
            <ul>
              <li className="mb-4">
                <Link 
                  to="/courses/entrance-exams" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  <div className="font-semibold">Entrance Exams</div>
                  
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/courses/competitive-exams" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  <div className="font-semibold">Competitive Exams</div>
                  
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/courses/board-exams" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  <div className="font-semibold">Board Exams</div>
                  
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/courses/foundation" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  <div className="font-semibold">Foundation Courses</div>
                  
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul>
              <li className="mb-4">
                <Link 
                  to="/about" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/admissions" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  Admissions
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/contact" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-4">
                <Link 
                  to="/gallery" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <p className="mb-8">Feel free to reach out to us for any inquiries or support.</p>
              
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-2 flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@vagdeviinstitute.com" className="hover:text-rose-500 transition-colors">
                  info@vagdeviinstitute.com
                </a>
              </div>

              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-2 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919845352222" className="hover:text-rose-500 transition-colors">
                  +91 98453 52222
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Vagdevi Institute, All Rights Reserved</p>
          </div>
          <div className="flex items-center">
            <a 
              href="tel:+919845352222" 
              className="mr-6 hover:text-rose-500 transition-colors"
              onClick={scrollToTop}
            >
              Call +91 98453 52222
            </a>
            <div className="flex items-center">
              <span className="mr-3">Follow us</span>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/vagdeviinstitute" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="hover:text-rose-500 transition-colors"
                  onClick={scrollToTop}
                >
                  {/* Facebook icon */}
                </a>
                {/* Other social links */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <Link
        to="#top"
        className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-sm shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;