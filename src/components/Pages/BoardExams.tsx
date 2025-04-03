import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Award, BookOpen, BrainCircuit, 
  ClipboardList, FlaskConical, Languages, 
  LineChart, School 
} from 'lucide-react';
import ApplySection from '../ApplySection';

interface ExamInfo {
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  description: string;
  content: React.ReactNode;
  image: string;
  color: string;
  themeColorClass: string;
}

const examData: ExamInfo[] = [
  {
    title: "CLASS X",
    icon: <School className="w-6 h-6" />,
    description: "Secondary School Leaving Certificate",
    content: (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <motion.p className="text-lg leading-relaxed text-gray-700">
            Class 10 board examinations (CBSE/ICSE/State) are pivotal milestones, often considered the first national-level academic challenge. Excelling in these exams can significantly elevate a student's academic and future career prospects, reflecting their dedication and responsibility. At <span className="font-semibold text-green-600">Vagdevi</span>, we understand this significance and provide comprehensive coaching to help students excel in their board exams, building a strong foundation for future studies regardless of the board (CBSE, ICSE, or State).
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800">Subjects Covered</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-green-600" />, text: "Mathematics" },
              { icon: <FlaskConical className="w-5 h-5 text-blue-600" />, text: "Science (Physics, Chemistry, Biology)" },
              { icon: <Languages className="w-5 h-5 text-teal-600" />, text: "Languages (English, Hindi, Kannada, etc.)" },
              { icon: <LineChart className="w-5 h-5 text-indigo-600" />, text: "Social Science (History, Geography, Civics, Economics)" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-xs border border-gray-100 transition-all"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Program Highlights</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Full coverage of CBSE, ICSE, and State Board syllabi",
              "Dedicated timetables tailored to chosen subjects",
              "Conceptual teaching for thorough understanding",
              "Regular chapter-wise tests and mock exams",
              "One-on-one coaching in supportive environment",
              "Personalized attention for doubt clearing",
              "Detailed progress tracking for parents",
              "Guidance from experienced faculty",
              "Encouragement for research and learning",
              "Focus on overall development"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-gray-100"
              >
                <span className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center bg-green-100 text-green-600 rounded-full">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50/80 rounded-xl p-6 border border-blue-100"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
            <BrainCircuit className="w-5 h-5 text-blue-600" />
            <span>Vagdevi's Approach for Class X Success</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Building strong conceptual clarity",
              "Consistent revision schedules",
              "Analysis of previous year papers",
              "Individual doubt-clearing sessions",
              "Expert faculty guidance",
              "Performance analysis and feedback",
              "Confidence building training",
              "Interactive learning environment"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-xs"
              >
                <span className="text-blue-500 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="text-center py-4 px-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg border border-green-200 text-teal-800 font-medium"
          >
            Join Vagdevi to build your academic foundation today.
          </motion.p>
        </motion.div>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000",
    color: "from-green-600 to-teal-600",
    themeColorClass: "green-600"
  },
  {
    title: "PUC SCIENCE",
    icon: <FlaskConical className="w-6 h-6" />,
    description: "Pre-University Course (Science Stream)",
    content: (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <motion.p className="text-lg leading-relaxed text-gray-700">
            The PUC Science program builds a robust foundation for competitive exams (like NEET, IIT JEE) and higher education in prestigious fields like engineering, medicine, and pure sciences. Studying science develops discovery, creative thinking, and excellent problem-solving abilities. <span className="font-semibold text-red-600">Vagdevi's specialized coaching</span> is designed to help students master both their board examinations and crucial competitive entrance tests, paving the way to premier institutions like IITs and AIIMS.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-red-100 rounded-lg">
              <FlaskConical className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-red-800">Core Subjects & Streams</h3>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Coaching available for both I & II PUC Science streams:</p>
            <div className="flex flex-wrap gap-2">
              {["PCMB (Physics, Chemistry, Mathematics, Biology)", "PCMC (Physics, Chemistry, Mathematics, Computer Science)"].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 bg-white rounded-full shadow-xs border border-gray-200 text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-red-600" />, text: "Physics" },
              { icon: <FlaskConical className="w-5 h-5 text-purple-600" />, text: "Chemistry" },
              { icon: <BrainCircuit className="w-5 h-5 text-blue-600" />, text: "Mathematics" },
              { icon: <BookOpen className="w-5 h-5 text-green-600" />, text: "Biology / Computer Science" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-xs border border-gray-100 transition-all"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Award className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-teal-800">Benefits & Career Opportunities</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Develops critical thinking and problem-solving skills",
              "Broadens understanding of the world",
              "Opens doors to diverse career paths",
              "Eligibility for premier national institutes",
              "Preparation for medical and engineering careers",
              "Foundation for research and innovation"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-gray-100"
              >
                <span className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-purple-50/80 rounded-xl p-6 border border-purple-100"
        >
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-3">
            <BrainCircuit className="w-5 h-5 text-purple-600" />
            <span>Why Choose Vagdevi for PUC Science?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Proven track record of success",
              "Small batch sizes for attention",
              "Regular parent-teacher interactions",
              "Dedicated doubt-solving sessions",
              "Structured revision programs",
              "Exam-oriented teaching methodology"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-xs"
              >
                <span className="text-purple-500 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="text-center py-4 px-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg border border-red-200 text-orange-800 font-medium"
          >
            Join Vagdevi to turn your scientific aspirations into reality with proven strategies and dedicated support.
          </motion.p>
        </motion.div>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000",
    color: "from-red-600 to-orange-600",
    themeColorClass: "red-600"
  },
  {
    title: "PUC COMMERCE",
    icon: <LineChart className="w-6 h-6" />,
    description: "Pre-University Course (Commerce Stream)",
    content: (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <motion.p className="text-lg leading-relaxed text-gray-700">
            In today's global economy, Commerce education is increasingly vital. It provides a strong foundation for diverse careers in business, finance, accounting, and management. At <span className="font-semibold text-blue-600">Vagdevi</span>, we bridge the gap between academic learning and real-world industry needs, preparing students to become future business leaders and professionals like Chartered Accountants (CA).
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ClipboardList className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">Subject Combinations</h3>
          </div>
          <p className="text-sm text-gray-600 mb-6">Aligned with Karnataka State Board syllabus:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { code: "ABMS", subjects: "Accounts, Business Studies, Mathematics, Statistics" },
              { code: "ABES", subjects: "Accounts, Business Studies, Economics, Statistics" },
              { code: "ABEM", subjects: "Accounts, Business Studies, Economics, Maths" },
              { code: "ABECs", subjects: "Accounts, Business Studies, Economics, Computer Science" },
              { code: "ABSCs", subjects: "Accounts, Business Studies, Statistics, Computer Science" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-white p-4 rounded-lg shadow-xs border border-gray-100 transition-all"
              >
                <span className="font-bold text-blue-700 block mb-1">{item.code}:</span>
                <span className="text-sm text-gray-800">{item.subjects}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-orange-800">Benefits & Skills Development</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Deep understanding of business aspects",
              "Development of essential soft skills",
              "Pathway to professional qualifications",
              "Foundation for entrepreneurship",
              "Understanding economic systems",
              "Preparation for corporate careers"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-gray-100"
              >
                <span className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-5 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <LineChart className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Vagdevi's Advantage in Commerce</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Expert faculty for each subject",
              "Focus on academic excellence",
              "Industry-relevant methodology",
              "Practical application emphasis",
              "Comprehensive exam preparation",
              "Regular assessments and feedback",
              "Guidance for professional courses"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-indigo-500 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="text-center py-4 px-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200 text-indigo-800 font-medium"
          >
            Join Vagdevi to turn your business aspirations into reality with proven strategies and dedicated support.
          </motion.p>
        </motion.div>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
    color: "from-blue-600 to-indigo-600",
    themeColorClass: "blue-600"
  }
];

function BoardExams() {
  const [selectedExam, setSelectedExam] = useState<string>(examData[0].title);
  const selectedExamData = examData.find(exam => exam.title === selectedExam)!;

  const themeClasses = {
    green: {
      text: 'text-green-600',
      border: 'border-green-600',
      bg: 'bg-green-600'
    },
    red: {
      text: 'text-red-600',
      border: 'border-red-600',
      bg: 'bg-red-600'
    },
    blue: {
      text: 'text-blue-600',
      border: 'border-blue-600',
      bg: 'bg-blue-600'
    }
  };

  const getThemeClasses = (theme: string) => {
    switch(theme) {
      case 'green-600': return themeClasses.green;
      case 'red-600': return themeClasses.red;
      case 'blue-600': return themeClasses.blue;
      default: return themeClasses.green;
    }
  };

  const currentTheme = getThemeClasses(selectedExamData.themeColorClass);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0  opacity-50" />
      <div className='bg-gray-800 p-10 md:px-8 lg:px-16 relative z-10'>
        {/* Navigation placeholder */}
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3 p-2">
            Board Exams Preparation
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Comprehensive coaching for academic excellence across all streams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-4"
          >
            {examData.map((exam) => {
              const isSelected = selectedExam === exam.title;
              const examTheme = getThemeClasses(exam.themeColorClass);

              return (
                <motion.div
                  key={exam.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className={`cursor-pointer rounded-xl transition-all duration-300 ${
                    isSelected 
                      ? `bg-white shadow-lg border-2 ${examTheme.border}`
                      : 'bg-white/70 hover:bg-white border border-gray-200'
                  }`}
                  onClick={() => setSelectedExam(exam.title)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${exam.color}`}>
                          {React.cloneElement(exam.icon, {
                            className: "w-6 h-6 text-white"
                          })}
                        </div>
                        <div>
                          <h3 className={`font-semibold ${isSelected ? examTheme.text : 'text-gray-800'}`}>
                            {exam.title}
                          </h3>
                          <p className={`text-sm ${isSelected ? 'text-gray-600' : 'text-gray-500'}`}>
                            {exam.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${
                        isSelected ? examTheme.text : 'text-gray-400'
                      } transition-transform`} />
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div 
                      layoutId="underline"
                      className={`h-1 ${examTheme.bg} w-full`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExam}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100"
              >
                <div className="relative h-64">
                  <img
                    src={selectedExamData.image}
                    alt={selectedExamData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedExamData.color} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {selectedExamData.title}
                      </h2>
                      <p className="text-gray-200 mt-1">
                        {selectedExamData.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {selectedExamData.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ApplySection />
    </div>
  );
}

export default BoardExams;