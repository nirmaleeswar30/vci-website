import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, School, Award, ClipboardList, 
  BrainCircuit, ArrowRight, LineChart 
} from 'lucide-react';

interface CourseInfo {
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  description: string;
  content: React.ReactNode;
  image: string;
  color: string;
  themeColorClass: string;
}

const courseData: CourseInfo[] = [
  {
    title: "CBSE/ICSE (8th to 10th)",
    icon: <School className="w-6 h-6" />,
    description: "Comprehensive coaching for CBSE & ICSE students",
    content: (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <motion.p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold text-indigo-600">Vagdevi Career Institute</span>, we offer specialized tutorials for students from classes 8 to 10 following the CBSE and ICSE curriculums. Our programs are designed to strengthen core concepts, boost academic performance, and prepare students for future academic challenges.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-indigo-800">Subjects Covered</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-indigo-600" />, text: "Mathematics" },
              { icon: <ClipboardList className="w-5 h-5 text-blue-600" />, text: "Science (Physics, Chemistry, Biology)" },
              { icon: <BookOpen className="w-5 h-5 text-purple-600" />, text: "English" },
              { icon: <LineChart className="w-5 h-5 text-teal-600" />, text: "Social Studies" }
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
            <h3 className="text-xl font-bold text-gray-900">Why Choose Us?</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Expert Faculty: Experienced in both CBSE and ICSE syllabi",
              "Personalized Learning: Individual attention for each student",
              "Concept-Based Approach: Strong foundation in core subjects",
              "Regular Assessments: Periodic tests to track progress",
              "Interactive Classes: Engaging sessions with real-time doubt solving",
              "Exam Preparation: Focused board exam strategies",
              "Small Batch Sizes: Better teacher-student ratio",
              "Progress Reports: Detailed feedback for parents"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-gray-100"
              >
                <span className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full">✓</span>
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
            <span>Our Teaching Methodology</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Conceptual clarity through practical examples",
              "Regular revision cycles for better retention",
              "Dedicated doubt-clearing sessions",
              "Interactive learning with multimedia tools",
              "Stress on application-based learning",
              "Customized study plans for each student",
              "Focus on time management skills",
              "Exam-oriented question practice"
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
            className="text-center py-4 px-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border border-indigo-200 text-indigo-800 font-medium"
          >
            Join Vagdevi Career Institute and excel in your CBSE/ICSE academic journey with expert support and a result-oriented approach.
          </motion.p>
        </motion.div>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
    color: "from-indigo-600 to-purple-600",
    themeColorClass: "indigo-600"
  }
];

function SchoolPrograms() {
  const [selectedCourse, setSelectedCourse] = useState<string>(courseData[0].title);
  const selectedCourseData = courseData.find(course => course.title === selectedCourse)!;

  const themeClasses = {
    indigo: {
      text: 'text-indigo-600',
      border: 'border-indigo-600',
      bg: 'bg-indigo-600'
    }
  };

  const getThemeClasses = (theme: string) => {
    switch(theme) {
      case 'indigo-600': return themeClasses.indigo;
      default: return themeClasses.indigo;
    }
  };

  const currentTheme = getThemeClasses(selectedCourseData.themeColorClass);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 p-2">
            CBSE/ICSE Programs (8th to 10th)
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Building strong academic foundations for future success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1"
          >
            {courseData.map((course) => {
              const isSelected = selectedCourse === course.title;
              const courseTheme = getThemeClasses(course.themeColorClass);

              return (
                <motion.div
                  key={course.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className={`cursor-pointer rounded-xl transition-all duration-300 mb-4 ${
                    isSelected 
                      ? `bg-white shadow-lg border-2 ${courseTheme.border}`
                      : 'bg-white/70 hover:bg-white border border-gray-200'
                  }`}
                  onClick={() => setSelectedCourse(course.title)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color}`}>
                          {React.cloneElement(course.icon, {
                            className: "w-6 h-6 text-white"
                          })}
                        </div>
                        <div>
                          <h3 className={`font-semibold ${isSelected ? courseTheme.text : 'text-gray-800'}`}>
                            {course.title}
                          </h3>
                          <p className={`text-sm ${isSelected ? 'text-gray-600' : 'text-gray-500'}`}>
                            {course.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${
                        isSelected ? courseTheme.text : 'text-gray-400'
                      } transition-transform`} />
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div 
                      layoutId="underline"
                      className={`h-1 ${courseTheme.bg} w-full`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCourse}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100"
              >
                <div className="relative h-64">
                  <img
                    src={selectedCourseData.image}
                    alt={selectedCourseData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedCourseData.color} opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {selectedCourseData.title}
                      </h2>
                      <p className="text-gray-200 mt-1">
                        {selectedCourseData.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {selectedCourseData.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolPrograms;