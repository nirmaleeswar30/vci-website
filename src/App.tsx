import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import CampaignSection from './components/CampaignSection';
import ProfessionalsSection from './components/ProfessionalsSection';
import TestimonialsSection from './components/TestamonialsSection';
import TourSection from './components/TourSection';
import StatsSection from './components/StatsSection';
import WelcomeSection from './components/WelcomeSection';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';
import ToppersPage from './components/Pages/ToppersPage';
import AdmissionPage from './components/Pages/Admissions';
import ImageGallery from './components/Pages/Gallery';
import AboutPage from './components/Pages/AboutPage';
import ContactSection from './components/Pages/ContactPage';
import EntranceExams from './components/Pages/EntranceExams';
import CompetitiveExams from './components/Pages/CompetitiveExams';
import BoardExams from './components/Pages/BoardExams';
import FoundationCourses from './components/Pages/FoundationCourses';
import MissingPage from './components/Pages/404'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <WelcomeSection />
              <CategorySection />
              <CampaignSection />
              <StatsSection />
              <ProfessionalsSection />
              <TestimonialsSection />
              <TourSection />
              <ApplySection />
            </main>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/toppers" element={<ToppersPage />} />
          <Route path="/admissions" element={<AdmissionPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/courses/entrance-exams" element={<EntranceExams />} />
          <Route path="/courses/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/courses/board-exams" element={<BoardExams />} />
          <Route path="/courses/foundation" element={<FoundationCourses />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;