import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypingAnimation from './TypingAnimation';
import '../styles/image-removal.css';

const Hero = () => {
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    // Reload image immediately and after a short delay to catch updates
    const reloadImage = () => {
      setImageKey(prev => prev + 1);
    };
    
    reloadImage();
    const timeout = setTimeout(reloadImage, 500);
    const timeout2 = setTimeout(reloadImage, 2000);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-around justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden bg-amber-50">
      {/* Background decorative elements - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-indigo-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-5 md:space-y-6" style={{ fontFamily: "var(--font-body)" }}>
          {/* Name - Always single line with responsive sizing */}
          <h1 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight drop-shadow-lg whitespace-nowrap">
            Chidari Sai Krishna
          </h1>
          
          {/* Profession with modern styling */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-700 mb-1 sm:mb-2 drop-shadow-md">
              I'm a
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 drop-shadow-md">
              <TypingAnimation textArray={["Full Stack Web Developer", "Software Developer"]} />
            </h2>
          </div>
          
          {/* Description with better readability */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-4 lg:px-0 font-light drop-shadow-sm">
            Passionate about creating innovative web solutions and bringing ideas to life through modern technologies. 
            <br className="hidden sm:block" />
            Specializing in full-stack development with a focus on user experience and performance.
          </p>
          
          {/* Modern CTA buttons - Better mobile spacing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start items-stretch sm:items-center px-2 sm:px-4 lg:px-0">
            <Link
              to="/about"
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <i className="fa fa-user mr-2 text-xs sm:text-sm group-hover:scale-110 transition-transform"></i>
              <span>About Me</span>
            </Link>
            <Link
              to="/projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm md:text-base font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fa fa-code mr-2 text-xs sm:text-sm group-hover:scale-110 transition-transform"></i>
              <span>My Projects</span>
            </Link>
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-blue-700 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <i className="fa fa-envelope mr-2 text-xs sm:text-sm group-hover:scale-110 transition-transform"></i>
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Photo - hidden on mobile */}
        <div className="hidden sm:flex justify-center lg:justify-end order-1 lg:order-2 relative sm:mb-0">
          <div className="relative w-full max-w-[220px] sm:max-w-sm lg:max-w-sm">
            {/* Photo - completely mixed into page, no container borders */}
            <div className="hero-photo-container">
              <img
                key={imageKey}
                src={`/Photo.png?refresh=${imageKey}&t=${Date.now()}`}
                alt="Chidari Sai Krishna"
                className="hero-photo w-full h-auto transform hover:scale-105 transition-all duration-300"
                style={{
                  maxHeight: '80vh',
                  display: 'block',
                  objectFit: 'contain',
                  objectPosition: 'center top'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
