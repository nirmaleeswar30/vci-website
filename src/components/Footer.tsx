import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <p className="mb-6">Academist is dedicated to constant learning & knowledge sharing.</p>

            <div className="flex items-center mb-3">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <span>457 Mott Street, NY 10013</span>
            </div>

            <div className="flex items-center mb-3">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <a href="tel:+443003030266" className="hover:text-rose-500 transition-colors">
                +44 300 303 0266
              </a>
            </div>

            <div className="flex items-center">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              <span>Mon - Sat 8.00 - 18.00</span>
            </div>
          </div>

          {/* Popular Courses Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular courses</h3>
            <ul>
              <li className="mb-4">
                <a href="/courses/leadership" className="hover:text-rose-500 transition-colors">
                  <div className="font-semibold">Leadership Skills</div>
                  <div className="text-gray-400">Mark Hook</div>
                </a>
              </li>
              <li className="mb-4">
                <a href="/courses/typography" className="hover:text-rose-500 transition-colors">
                  <div className="font-semibold">Typography Design</div>
                  <div className="text-gray-400">Una Anston</div>
                </a>
              </li>
              <li className="mb-4">
                <a href="/courses/german" className="hover:text-rose-500 transition-colors">
                  <div className="font-semibold">Learn German</div>
                  <div className="text-gray-400">Scott Brown</div>
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul>
              <li className="mb-4">
                <a href="/about-us" className="hover:text-rose-500 transition-colors">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/registration" className="hover:text-rose-500 transition-colors">
                  Registration
                </a>
              </li>
              <li className="mb-4">
                <a href="/courses" className="hover:text-rose-500 transition-colors">
                  Available Courses
                </a>
              </li>
              <li className="mb-4">
                <a href="/become-instructor" className="hover:text-rose-500 transition-colors">
                  Become An Instructor
                </a>
              </li>
              <li className="mb-4">
                <a href="/events" className="hover:text-rose-500 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
        <div>
        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
        <div className="space-y-3">
            <p className="mb-8">Feel free to reach out to us for any inquiries or support.</p>
            
            {/* Email - Aligned properly */}
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
                <span>info@academist.com</span>
                </div>

                {/* Phone - Aligned properly */}
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
                <span>+44 300 303 026</span>
                </div>
                    </div>
                    </div>
                </div>
            </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2018 Qode Interactive, All Rights Reserved</p>
          </div>
          <div className="flex items-center">
            <a href="tel:+443003030266" className="mr-6 hover:text-rose-500 transition-colors">
              Call +44 300 303 026
            </a>
            <div className="flex items-center">
              <span className="mr-3">Follow us</span>
              <div className="flex space-x-3">
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-rose-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" className="hover:text-rose-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-rose-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://google.com" aria-label="Google Plus" className="hover:text-rose-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M16.39 10.61a7 7 0 0 1-9.78 0c.59-1.22 1.63-2.12 2.97-2.68 1.34-.56 2.84-.56 4.18 0 1.34.56 2.38 1.46 2.97 2.68z"/>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/></svg> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-sm shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;