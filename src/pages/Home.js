import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Hero from '../components/Hero';
import '../styles/main.css';

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white' : 'bg-amber-50 text-gray-900'}`} data-theme={theme}>
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Hero />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
