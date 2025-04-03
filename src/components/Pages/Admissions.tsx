import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Presentation, FileText, Calculator } from 'lucide-react';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    telephone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ firstName: '', telephone: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const scrollToForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Background Image */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 text-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-8 text-white drop-shadow-md">
            Join Vagdevi Career Institute
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Join our community. At Vagdevi Career Institute, we bring together the bright minds of today who will outline the innovations of tomorrow. Fill in the online application/enquiry form and we will contact you at the earliest.
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#enquiry-form"
              onClick={scrollToForm}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-300 hover:bg-gray-100 inline-block"
            >
              JOIN NOW
            </motion.a>
            <motion.a
              href="/api/download/admission-form"
              download
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-300 hover:bg-white hover:text-red-600 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Form
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Presentation className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Expert Counselling</h3>
            <p className="text-gray-600">We ease your biggest doubts with personalized Video Counselling from our Curated Experts and Answers on Exams, Courses, Colleges and Career selection from Vagdevi Institute.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <FileText className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Data & Exams</h3>
            <p className="text-gray-600">We simplify information for you on over top level Colleges, pre exams and question papers based on the courses.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Calculator className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Prediction</h3>
            <p className="text-gray-600">We predict your Institute admission chances and Ranks based on years of historical data and advanced Analytics to help you plan in advance.</p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Quick Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <label className="block text-gray-700 mb-1 font-medium">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out" 
                placeholder="Enter your first name"/>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <label className="block text-gray-700 mb-1 font-medium">Telephone</label>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out" 
                placeholder="Enter your phone number"/>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out" 
                placeholder="Enter your email address"/>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <label className="block text-gray-700 mb-1 font-medium">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out" 
                placeholder="Your message or query..."/>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full px-6 py-3 rounded-md font-medium text-white transition duration-300 ease-in-out ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' :
                isSuccess ? 'bg-green-500 cursor-not-allowed' :
                'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              }`}
            >
              {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;