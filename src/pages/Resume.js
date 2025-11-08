import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/resume.css';

const Resume = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white' : 'bg-amber-50 text-gray-900'}`} data-theme={theme}>
      <Header />
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <Link 
              to="/" 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg border-2 transition-all duration-300 transform hover:scale-105 group order-2 sm:order-1 w-full sm:w-auto justify-center ${theme === 'dark' ? 'bg-gray-800 border-blue-600 hover:border-blue-500' : 'bg-white border-blue-200 hover:border-blue-400'}`}
            >
              <i className={`fas fa-arrow-left group-hover:-translate-x-1 transition-transform ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}></i>
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Back to Portfolio</span>
            </Link>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg order-1 sm:order-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
              My Resume
            </h1>
            
            <div className="hidden sm:block w-20 order-3"></div> {/* Spacer for center alignment */}
          </div>
          
          {/* Resume PDF Container */}
          <div className={`p-4 sm:p-6 rounded-2xl shadow-2xl border-2 hover:shadow-3xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-2">
                <i className={`fas fa-file-pdf text-xl ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}></i>
                <span className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Chidari Sai Krishna - Resume</span>
              </div>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
                <a 
                  href="/Chidari_Sai_Krishna_Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md justify-center"
                >
                  <i className="fas fa-eye"></i>
                  <span>View Resume</span>
                </a>
                <a 
                  href="/Chidari_Sai_Krishna_Resume.pdf" 
                  download 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md justify-center"
                >
                  <i className="fas fa-download"></i>
                  <span>Download</span>
                </a>
              </div>
            </div>
            <div className={`rounded-lg overflow-hidden border-2 shadow-inner hidden sm:block ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <iframe
                src="/Chidari_Sai_Krishna_Resume.pdf"
                title="Resume PDF"
                className="w-full h-[80vh] min-h-[560px] md:min-h-[640px] border-0"
              ></iframe>
            </div>
            <p className={`mt-3 text-xs text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} sm:hidden`}>
              Tip: Use “View Resume” for a full-screen preview or “Download” for offline access.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Resume;
