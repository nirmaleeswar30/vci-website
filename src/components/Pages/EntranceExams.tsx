import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Building2, 
  PencilRuler, 
  Stethoscope, 
  ArrowRight, 
  Award, 
  BrainCircuit, 
  Laptop, 
  Languages, 
  CalendarDays, 
  CheckCircle, 
  ListChecks,
  Building,
  Users,
  Target
} from 'lucide-react';
import ApplySection from '../ApplySection';

interface ExamInfo {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
  image: string;
  color: string;
  themeColorClass: string;
}

const examData: ExamInfo[] = [
  {
    title: "NEET (UG) (Medical)",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "National Eligibility cum Test Entrance for Medical Aspirants",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          National Eligibility cum Test Entrance (NEET) serves as the primary entrance examination for admission to MBBS, BDS, AYUSH, and other undergraduate medical courses across India, including prestigious institutions like AIIMS & JIPMER. It is conducted by the <span className="font-semibold text-purple-600">National Testing Agency (NTA)</span>.
        </motion.p>
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5" /> NEET Exam Pattern
          </h3>
          <p className="text-gray-700 mb-4">The test comprises Physics, Chemistry, Botany, and Zoology. Each subject has two sections:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-600 mb-4">
            <li>Section A: 35 mandatory questions.</li>
            <li>Section B: 15 questions, attempt any 10.</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-purple-600" />, text: "Physics" },
              { icon: <BrainCircuit className="w-5 h-5 text-blue-600" />, text: "Chemistry" },
              { icon: <Laptop className="w-5 h-5 text-indigo-600" />, text: "Botany" },
              { icon: <Languages className="w-5 h-5 text-teal-600" />, text: "Zoology" }
            ].map((item, index) => (
              <motion.div 
                key={index} whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Key Information</h3>
          <ul className="space-y-3">
            {[
              "Total Marks: 720 | Duration: 3 Hours 20 Minutes",
              "MCQ format: +4 for correct, -1 for incorrect, 0 for unattempted",
              "Available in 13 languages including English and Hindi",
              "Single gateway for most medical/dental admissions in India",
            ].map((item, index) => (
              <motion.li 
                key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-purple-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Vagdevi's NEET Program</h3>
          <p className="text-gray-700 mb-4">Our tailored coaching empowers students to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Excel through regular and weekend classes",
              "Improve scores with expert faculty guidance",
              "Secure admission in reputed medical colleges",
              "Master concepts with comprehensive study material",
              "Build confidence via frequent mock tests",
              "Achieve top ranks consistently"
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500 mt-1"><CheckCircle className="w-4 h-4" /></span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200 text-purple-800 font-medium"
        >
          Join Vagdevi to turn your medical aspirations into reality with proven strategies and dedicated support.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
    color: "from-purple-600 to-blue-600",
    themeColorClass: "purple-600" 
  },
  {
    title: "JEE Main",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Joint Entrance Examination for Engineering Aspirants",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          The Joint Entrance Examination (JEE) Main, conducted by the NTA, is the gateway for admission to undergraduate engineering programs (BE/B.Tech, B.Arch, B.Planning) in prestigious institutions like <span className="font-semibold text-orange-600">NITs, IIITs</span>, and other Centrally Funded Technical Institutions (CFTIs). It also serves as the eligibility test for JEE Advanced (for IIT admissions).
        </motion.p>
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
          <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5" /> JEE Main Exam Pattern (B.E./B.Tech)
          </h3>
          <p className="text-gray-700 mb-4">The exam covers Physics, Chemistry, and Mathematics:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-600 mb-4">
            <li>Each subject: 20 MCQs and 10 Numerical Value Questions (NVQs).</li>
            <li>Attempt any 5 out of 10 NVQs per subject.</li>
            <li>Marking: +4 for correct, -1 for incorrect (MCQs only), 0 for unattempted.</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5 text-orange-600" />, text: "Physics" },
              { icon: <BrainCircuit className="w-5 h-5 text-red-600" />, text: "Chemistry" },
              { icon: <Laptop className="w-5 h-5 text-amber-600" />, text: "Mathematics" }
            ].map((item, index) => (
              <motion.div 
                key={index} whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 text-sm">Note: Patterns for B.Arch and B.Planning differ.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Benefits of Excelling in JEE Main</h3>
          <ul className="space-y-3">
            {[
              "Qualify for JEE Advanced (for IIT admission)",
              "Secure seats in top-tier NITs, IIITs, and CFTIs",
              "Gain a strong foundation for engineering studies",
              "Access subsidized education in government institutions",
              "Enhance career prospects significantly"
            ].map((item, index) => (
              <motion.li 
                key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-orange-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
          <h3 className="text-xl font-bold text-red-800 mb-4">Vagdevi's JEE Program Advantage</h3>
          <p className="text-gray-700 mb-4">Our structured approach focuses on:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Building strong conceptual understanding",
              "Developing advanced problem-solving skills",
              "Rigorous practice through mock tests & DPPs",
              "Personalized doubt clearing sessions",
              "Effective time management strategies",
              "Consistent delivery of top ranks"
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500 mt-1"><CheckCircle className="w-4 h-4" /></span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200 text-orange-800 font-medium"
        >
          Vagdevi's experienced faculty guides students to conquer JEE Main and step confidently towards their engineering dreams.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000",
    color: "from-orange-600 to-red-600",
    themeColorClass: "orange-600"
  },
  {
    title: "K-CET",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Karnataka Common Entrance Test for State-level Admissions",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          The Karnataka Common Entrance Test (KCET), conducted by the <span className="font-semibold text-green-600">Karnataka Examinations Authority (KEA)</span>, is a state-level entrance exam primarily for Karnataka domicile students. It facilitates admission into various professional courses within the state.
        </motion.p>
        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" /> Courses Covered via KCET
          </h3>
          <p className="text-gray-700 mb-4">KCET scores are used for admission into:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <GraduationCap className="w-5 h-5 text-green-600" />, text: "Engineering Technology (B.E/B.Tech)" },
              { icon: <Stethoscope className="w-5 h-5 text-teal-600" />, text: "Bachelor of Pharmacy (B.Pharma)" },
              { icon: <BookOpen className="w-5 h-5 text-lime-600" />, text: "Diploma in Pharmacy (D.Pharma)" },
              { icon: <BrainCircuit className="w-5 h-5 text-emerald-600" />, text: "Agriculture Courses (Farm Science)" },
              { icon: <Laptop className="w-5 h-5 text-cyan-600" />, text: "Veterinary Courses" },
              { icon: <Building2 className="w-5 h-5 text-sky-600" />, text: "Architecture (Based on NATA & JEE Paper 2 scores, processed via KEA)" },
            ].map((item, index) => (
              <motion.div 
                key={index} whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Benefits of KCET</h3>
          <ul className="space-y-3">
            {[
              "Access to government and private colleges in Karnataka",
              "Lower tuition fees in government-quota seats",
              "Wide range of professional course options",
              "State-level competition benchmark",
              "Simplified admission process for Karnataka students"
            ].map((item, index) => (
              <motion.li 
                key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-green-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
          <h3 className="text-xl font-bold text-teal-800 mb-4">Vagdevi's KCET Edge</h3>
          <p className="text-gray-700 mb-4">We ensure KCET success through:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Focused coaching aligned with PUC syllabus",
              "Personalized attention for every student",
              "Strategies to maximize scores in PCM/B",
              "Extensive mock tests simulating KEA pattern",
              "Guidance for securing top ranks",
              "Support during the KEA counseling process"
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500 mt-1"><CheckCircle className="w-4 h-4" /></span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg border border-green-200 text-green-800 font-medium"
        >
          Excel in KCET with Vagdevi's expert guidance and secure your place in Karnataka's leading professional colleges.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
    color: "from-green-600 to-teal-600",
    themeColorClass: "green-600"
  },
  {
    title: "COMED-K",
    icon: <Building2 className="w-6 h-6" />,
    description: "Consortium of Medical, Engineering and Dental Colleges of Karnataka",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          COMEDK UGET is an entrance exam conducted by the <span className="font-semibold text-blue-600">Consortium of Medical, Engineering and Dental Colleges of Karnataka</span>. It serves as a gateway for admission primarily into private engineering colleges in Karnataka and is open to students from across India.
          <br/><br/>
          Historically, COMEDK covered Medical and Dental admissions as well, but now focuses on Engineering after NEET became the sole entrance for Medical/Dental courses.
        </motion.p>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5" /> Focus Area: Engineering Admissions
          </h3>
          <p className="text-gray-700 mb-4">COMEDK UGET primarily evaluates candidates for B.E./B.Tech programs in its ~190 member engineering institutions.</p>
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-800">Admission to Private Engineering Colleges in Karnataka</span>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Advantages of COMEDK</h3>
          <ul className="space-y-3">
            {[
              "Open to students nationwide (All India Quota)",
              "Access to a wide network of reputed private engineering colleges in Karnataka",
              "Transparent, single-window online counseling process",
              "Objective assessment based on merit",
              "Alternative pathway for students seeking engineering seats in Karnataka"
            ].map((item, index) => (
              <motion.li 
                key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Vagdevi's COMEDK Coaching</h3>
          <p className="text-gray-700 mb-4">We provide specialized preparation to help students:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Master Physics, Chemistry, and Mathematics concepts",
              "Develop speed and accuracy for the online test",
              "Understand the exam pattern and marking scheme",
              "Practice extensively with relevant question banks",
              "Achieve competitive ranks for desired colleges",
              "Navigate the online counseling effectively"
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500 mt-1"><CheckCircle className="w-4 h-4" /></span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200 text-blue-800 font-medium"
        >
          Secure your engineering seat in Karnataka's top private colleges through Vagdevi's result-oriented COMEDK coaching.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000",
    color: "from-blue-600 to-indigo-600",
    themeColorClass: "blue-600"
  },
  {
    title: "NATA",
    icon: <PencilRuler className="w-6 h-6" />,
    description: "National Aptitude Test in Architecture",
    content: (
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          The National Aptitude Test in Architecture (NATA), conducted by the <span className="font-semibold text-pink-600">Council of Architecture (CoA)</span>, is a qualifying examination for admission into the 5-year Bachelor of Architecture (B.Arch) program offered by architectural institutions across India. Passing NATA is mandatory for B.Arch admission.
        </motion.p>
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
          <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" /> NATA Assessment Areas
          </h3>
          <p className="text-gray-700 mb-4">NATA evaluates a candidate's aptitude for architecture through tests covering:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <BrainCircuit className="w-5 h-5 text-pink-600" />, text: "Cognitive Skills (Visualisation, Reasoning)" },
              { icon: <PencilRuler className="w-5 h-5 text-rose-600" />, text: "Drawing & Observation Skills" },
              { icon: <BookOpen className="w-5 h-5 text-fuchsia-600" />, text: "General Aptitude (PCM concepts, Architectural Awareness)" },
              { icon: <Laptop className="w-5 h-5 text-purple-600" />, text: "Logical Reasoning & Critical Thinking" }
            ].map((item, index) => (
              <motion.div 
                key={index} whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-2">Eligibility & Career Scope</h3>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Eligibility:</span> Passed 10+2 with Physics, Chemistry, Mathematics OR 10+3 Diploma with Mathematics.</p>
          <h4 className="font-semibold text-gray-800 mt-3 mb-1">Career Paths:</h4>
          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Architectural Designer / Manager</li>
            <li>Industrial Designer</li>
            <li>Urban Planner</li>
            <li>Construction Manager / Inspector</li>
            <li>Landscape Architect</li>
          </ul>
          <p className="text-gray-700 mt-3"><span className="font-semibold">Potential Employers:</span> L&T, DLF, NBCC, National Building Organisation, Private Firms, Government Departments.</p>
        </div>
        <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
          <h3 className="text-xl font-bold text-rose-800 mb-4">Vagdevi's NATA Success Program</h3>
          <p className="text-gray-700 mb-4">Our program ensures comprehensive preparation through:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Expert coaching for Drawing and Aptitude tests",
              "Customized modules from basics to advanced",
              "Focus on aesthetic sensitivity & observation",
              "Mock tests simulating the NATA environment",
              "Guidance on portfolio development (if required)",
              "Proven track record of placements in top architecture schools"
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}
                className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
              >
                <span className="text-green-500 mt-1"><CheckCircle className="w-4 h-4" /></span>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-center py-4 px-6 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg border border-pink-200 text-pink-800 font-medium"
        >
          Shape your architectural future with Vagdevi's specialized NATA coaching, designed for creative minds.
        </motion.p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000",
    color: "from-pink-600 to-rose-600",
    themeColorClass: "pink-600"
  }
];

function EntranceExams() {
  const [selectedExam, setSelectedExam] = useState<string>(examData[0].title);
  const selectedExamData = examData.find(exam => exam.title === selectedExam) || examData[0];

  // Define all possible theme classes explicitly
  const themeClasses = {
    purple: {
      text: 'text-purple-600',
      textDark: 'text-purple-700',
      border: 'border-purple-600',
      bg: 'bg-purple-600'
    },
    orange: {
      text: 'text-orange-600',
      textDark: 'text-orange-700',
      border: 'border-orange-600',
      bg: 'bg-orange-600'
    },
    green: {
      text: 'text-green-600',
      textDark: 'text-green-700',
      border: 'border-green-600',
      bg: 'bg-green-600'
    },
    blue: {
      text: 'text-blue-600',
      textDark: 'text-blue-700',
      border: 'border-blue-600',
      bg: 'bg-blue-600'
    },
    pink: {
      text: 'text-pink-600',
      textDark: 'text-pink-700',
      border: 'border-pink-600',
      bg: 'bg-pink-600'
    }
  };

  // Map themeColorClass to predefined theme classes
  const getThemeClasses = (theme: string) => {
    switch(theme) {
      case 'purple-600': return themeClasses.purple;
      case 'orange-600': return themeClasses.orange;
      case 'green-600': return themeClasses.green;
      case 'blue-600': return themeClasses.blue;
      case 'pink-600': return themeClasses.pink;
      default: return themeClasses.purple; // Fallback
    }
  };

  const currentTheme = getThemeClasses(selectedExamData.themeColorClass);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0  pointer-events-none opacity-50" />
      <div className='bg-gray-800 p-10 md:px-8 lg:px-16 relative z-10'>
        {/* Navigation placeholder */}
      </div>
      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 p-2">
            Entrance Exam Preparation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Your Gateway to Top Medical, Engineering, and Architecture Colleges. Explore our focused coaching programs.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Exam Selection List */}
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
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-xl transition-all duration-300 ease-in-out overflow-hidden group
                    ${isSelected 
                      ? `bg-white shadow-lg border-2 ${examTheme.border}`
                      : 'bg-white/70 hover:bg-white border border-gray-200 hover:shadow-md'
                    }`}
                  onClick={() => setSelectedExam(exam.title)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div 
                          className={`p-3 rounded-lg bg-gradient-to-br ${exam.color} transition-all duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}
                        >
                          {React.cloneElement(exam.icon as React.ReactElement<{ className?: string }>, {
                            className: `w-6 h-6 text-white` 
                          })}
                        </div>
                        <div className="flex-1">
                          <h3 
                            className={`font-semibold text-base md:text-lg transition-colors duration-300 
                              ${isSelected 
                                ? examTheme.text
                                : 'text-gray-800 group-hover:text-gray-900' 
                              }`}
                          >
                            {exam.title}
                          </h3>
                          <p 
                            className={`text-xs sm:text-sm mt-1 transition-colors duration-300 
                              ${isSelected 
                                ? examTheme.textDark 
                                : 'text-gray-500 group-hover:text-gray-600'
                              }`}
                          >
                            {exam.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight 
                        className={`w-5 h-5 transition-all duration-300 
                          ${isSelected 
                            ? `rotate-90 ${examTheme.text}` 
                            : 'text-gray-400 group-hover:text-gray-600 translate-x-0 group-hover:translate-x-1'
                          }`}
                      />
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div 
                      layoutId="underline"
                      className={`h-1 ${examTheme.bg}`} 
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Exam Content Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExamData.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img 
                    src={selectedExamData.image} 
                    alt={selectedExamData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedExamData.color} opacity-20 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 sm:p-8">
                      <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-2xl sm:text-3xl font-bold text-white mb-2 shadow-sm"
                      >
                        {selectedExamData.title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-base sm:text-lg text-gray-200"
                      >
                        {selectedExamData.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
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

export default EntranceExams;