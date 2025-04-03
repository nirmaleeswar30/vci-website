import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplySection from '../ApplySection';
import { Stethoscope, ArrowRight, Award, BookOpen, BrainCircuit, Laptop, Languages } from 'lucide-react';

interface ExamInfo {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
  image: string;
  color: string;
}

const examData: ExamInfo[] = [
  {
    title: "Olympiad",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "Competitive Exams for Academic Excellence",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          Olympiads provide students with the opportunity to compete against students of similar educational backgrounds. 
          These exams are open to students from class 1 to 12, with <span className="font-semibold text-purple-600">Vagdevi specializing in classes 6 to 10 preparation</span>.
        </motion.p>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" /> Subjects Covered
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-purple-600" />, text: "Mathematics" },
              { icon: <BrainCircuit className="w-5 h-5 text-blue-600" />, text: "Science" },
              { icon: <Laptop className="w-5 h-5 text-indigo-600" />, text: "Computer Technology" },
              { icon: <Languages className="w-5 h-5 text-teal-600" />, text: "English Language" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Exam Benefits</h3>
          <ul className="space-y-3">
            {[
              "Helps students analyze their strengths and weaknesses",
              "Provides accurate assessment of subject knowledge",
              "Improves performance in regular academic exams",
              "Develops critical thinking and problem-solving skills",
              "Offers national/international level exposure"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-green-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Key Features</h3>
          <ul className="space-y-3">
            {[
              "Open to students under CBSE, ICSE, and KSEEB syllabi",
              "Conducted at various levels (school, state, national, international)",
              "Focuses on conceptual understanding rather than rote learning"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1">-</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Vagdevi's Olympiad Program</h3>
          <p className="text-gray-700 mb-4">Our expert faculty helps students:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Identify and work on weak areas",
              "Develop strong analytical skills",
              "Prepare for national/international competitions",
              "Understand true potential through assessments",
              "Gain confidence through mock tests",
              "Achieve top ranks consistently"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500">✓</span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-200 text-blue-800 font-medium"
        >
          With our specialized training, students consistently achieve top ranks in various Olympiad examinations.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
    color: "from-purple-600 to-blue-600"
  }
];

function CompetitiveExams() {
  const [selectedExam, setSelectedExam] = useState<string | null>(examData[0].title);

  useEffect(() => {
    if (!selectedExam && examData.length > 0) {
      setSelectedExam(examData[0].title);
    }
  }, [selectedExam]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Dark gray header section */}
      <div className='bg-gray-800 p-10 md:px-8 lg:px-16 relative z-10'>
        {/* Navigation would go here */}
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 p-2">
            Competitive Exam Preparation
          </h1>
          <p className="text-gray-600 text-lg">
            Your Gateway to Academic Excellence
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-4"
          >
            {examData.map((exam) => (
              <motion.div
                key={exam.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateX: 10 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-2xl ${
                  selectedExam === exam.title
                    ? 'bg-white shadow-lg border-2 border-blue-100'
                    : 'bg-white/80 hover:bg-white hover:shadow-md border border-gray-100'
                } transition-all duration-300 ease-out`}
                onClick={() => setSelectedExam(exam.title)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exam.color} text-white`}>
                        {exam.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{exam.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{exam.description}</p>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedExam === exam.title ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedExam ? (
                <motion.div
                  key={selectedExam}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100"
                >
                  {examData.map((exam) => 
                    exam.title === selectedExam && (
                      <div key={exam.title}>
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={exam.image} 
                            alt={exam.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8">
                              <h2 className="text-3xl font-bold text-white mb-3">{exam.title}</h2>
                              <p className="text-lg text-gray-200">{exam.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-8">
                          {exam.content}
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full min-h-[400px] flex items-center justify-center rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                    alt="Education Background" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 text-center p-8 bg-white bg-opacity-80 rounded-xl">
                    <p className="text-xl text-gray-800 font-medium">Select an entrance exam to explore detailed information</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ApplySection />
    </div>
  );
}

export default CompetitiveExams;