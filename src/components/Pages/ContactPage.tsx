import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ApplySection from '../ApplySection';

// Replace the existing Variants type with these
const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
  };
  
  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };
  
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

// --- Map Location Interface ---
interface MapLocation {
  title: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

// --- Map Card Component ---
const MapCard: React.FC<{ location: MapLocation }> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView(
        [location.coordinates.lat, location.coordinates.lng],
        location.zoom
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([location.coordinates.lat, location.coordinates.lng])
        .addTo(map)
        .bindPopup(location.title)
        .openPopup();

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [location]);

  return (
    <motion.div
    className="border rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.05 }}
    onClick={openGoogleMaps}
    >
      <div ref={mapRef} className="w-full h-60 md:h-72"></div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{location.title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          {/* <MapPin className="h-4 w-4 mr-1" /> */}
          <p>{location.address}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message Sent (simulation)!');
  };

  const mapLocations: MapLocation[] = [
    {
        title: 'REGISTERED ADDRESS',
        address: '197, Sairam krupa, Above SBI, opp to R.R Nagar police station, BEML 4th stage, J.N.Road, Rajarajeshwarinagar, Bengaluru-560098',
        coordinates: { lat: 12.913061, lng: 77.520982 },
        zoom: 25,
    },
    {
        title: 'BRANCH OFFICE',
        address: ' 354, 1st Cross Rd, BHEL Layout, RR Nagar, Bengaluru, Karnataka,  Pin Code - 560098',
        coordinates: { lat: 12.9197697, lng: 77.5098746 },
        zoom: 17,
    },
]; 

  const contactDetails = [
    { icon: MapPin, text: 'REGISTERED ADDRESS:#197, Sairam krupa, Above SBI, opp to R.R Nagar police station, BEML 4th stage, J.N.Road, Rajarajeshwarinagar, Bengaluru-560098' },
    { icon: MapPin, text: 'BRANCH OFFICE: #354, 1st Cross Rd, BHEL Layout, RR Nagar, Bengaluru, Karnataka – 560098' },
    { icon: Phone, text: ' +91 98453 52222' },
    { icon: Mail, text: ' info@vagdeviinstitute.com' },
  ];

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Hero Section */}
<section className="relative h-[30vh] md:h-[50vh] w-full">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img
      src="contact.jpg"
      alt="Contact background"
      className="w-full h-full object-cover object-center "
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gray-800/50 z-0"></div>

  {/* Content */}
  <div className="w-full h-full flex items-center justify-center relative z-10">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
        Contact Us
      </h1>
      <p className="text-xl text-white/90">
        Find us at our global locations
      </p>
    </motion.div>
  </div>
</section>

{/* Maps Section */}
<section className="py-6 md:py-18 relative z-10 shadow-md overflow-hidden">
        {/* Fixed background image for Our Centres */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div 
            className="w-full h-full bg-fixed"
            style={{
              backgroundImage: "url('https://t4.ftcdn.net/jpg/07/93/18/75/360_F_793187504_gzjlJ1q1p6KpwKymhIHUJRRB8ZAcCHIf.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.1
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-20 relative z-10">
          

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20"
            initial="initial"
            animate="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            >
            {mapLocations.map((location, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <MapCard location={location} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="pt-10 pb-12 md:pt-17 md:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
                Get in touch
              </h2>
              <div className="w-16 h-1 bg-red-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team is here to answer your questions and help you with any inquiries you may have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-red-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Registered Office</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      #197, Sairam krupa, Above SBI, opp to R.R Nagar police station, BEML 4th stage, J.N.Road, Rajarajeshwarinagar, Bengaluru-560098
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-red-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Branch Office</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      #354, 1st Cross Rd, BHEL Layout, RR Nagar, Bengaluru, Karnataka – 560098
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <p className="text-gray-700 text-sm font-medium">+91 98453 52222</p>
                </div>

                <div className="flex items-center">
                  <Mail className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <p className="text-gray-700 text-sm font-medium">info@vagdeviinstitute.com</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4 mt-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition resize-none"
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    className="bg-red-500 text-white py-3 px-8 rounded font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <ApplySection />
    </div>
  );
};

export default ContactSection;