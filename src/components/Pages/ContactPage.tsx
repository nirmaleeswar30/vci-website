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
          <MapPin className="h-4 w-4 mr-1" />
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
      title: 'Headquarters',
      address: '123 Business Ave, New York, NY 10001',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      zoom: 13,
    },
    {
      title: 'West Coast Office',
      address: '456 Tech Blvd, San Francisco, CA 94103',
      coordinates: { lat: 37.7749, lng: -122.4194 },
      zoom: 13,
    },
    {
      title: 'European Branch',
      address: '789 Innovation St, London, UK',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      zoom: 13,
    },
  ];

  const contactDetails = [
    { icon: MapPin, text: '457 BigBlue Street, NY 10013' },
    { icon: Phone, text: '+44 300 303 0266' },
    { icon: Mail, text: 'info@academist.edu' },
    { icon: Clock, text: 'Mon - Sat 8.00 - 18.00' },
  ];

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/Contact-us-title-img.jpg"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/70 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Find us at our global locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-16 md:py-30 relative z-10 shadow-md overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-24 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR CENTRES
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
      <section className="py-16 md:py-42 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Get in touch
              </h2>
              <div className="w-16 h-1 bg-red-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team is here to answer your questions and help you with any inquiries you may have.
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <detail.icon
                      className="text-red-500 mr-3 flex-shrink-0"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <span>{detail.text}</span>
                  </motion.div>
                ))}
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
                <div className="grid sm:grid-cols-2 gap-4">
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