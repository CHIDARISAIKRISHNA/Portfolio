import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import About from '../components/About';
import '../styles/main.css';

const AboutPage = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Setup intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white' : 'bg-amber-50 text-gray-900'}`} data-theme={theme}>
      <Header />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
