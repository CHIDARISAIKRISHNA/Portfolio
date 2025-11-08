import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (event, path) => {
    event.preventDefault();

    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileMenu();
      return;
    }

    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 120);

    closeMobileMenu();
  };

  return (
    <header className={`${theme === 'dark' ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white' : 'bg-amber-100/95 text-gray-800'} backdrop-blur-sm py-4 fixed w-full top-0 z-50 shadow-lg transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center" id="home">
        <div className="text-2xl font-bold">
          <Link to="/" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-800 hover:text-blue-600'} transition duration-300 drop-shadow-md font-extrabold`}>
            Portfolio
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'} focus:outline-none`}
          onClick={toggleMobileMenu}
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-panel"
          type="button"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/about' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/projects' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/skills' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/contact' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className={`${theme === 'dark' ? 'text-white hover:text-yellow-200' : 'text-gray-700 hover:text-blue-600'} transition duration-300 nav-link drop-shadow-sm font-medium ${location.pathname === '/resume' ? (theme === 'dark' ? 'text-yellow-200' : 'text-blue-600') + ' font-semibold' : ''}`}>
                Resume
              </Link>
            </li>
            <li>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-800'} transition duration-300 group relative backdrop-blur-sm`}
                title="Toggle Dark/Light Mode"
                id="theme-toggle"
              >
                <i 
                  id="theme-icon"
                  className={`fa ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg group-hover:scale-110 transition-transform duration-300`}
                ></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-panel"
          className={`md:hidden absolute top-full left-0 w-full z-40 shadow-2xl ${theme === 'dark' ? 'bg-slate-900 text-white border-t border-slate-700' : 'bg-white text-gray-800 border-t border-amber-200'}`}
        >
          <div className="container mx-auto px-4 py-5 space-y-4" style={{ fontFamily: "var(--font-body)" }}>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Skills', path: '/skills' },
                { label: 'Contact', path: '/contact' },
                { label: 'Resume', path: '/resume' }
              ].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={(event) => handleNavClick(event, item.path)}
                    className={`block w-full rounded-xl px-4 py-3 text-base font-semibold transition duration-200 ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-amber-50'} ${location.pathname === item.path ? (theme === 'dark' ? 'bg-slate-800 text-yellow-200' : 'bg-amber-100 text-blue-600') : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700">
              <button
                onClick={() => { toggleTheme(); closeMobileMenu(); }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition duration-200 ${theme === 'dark' ? 'bg-white/15 hover:bg-white/25 text-white' : 'bg-gray-200/90 hover:bg-gray-300 text-gray-800'}`}
                title="Toggle Dark/Light Mode"
              >
                <i className={`fa ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
