import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.body.className = document.body.className.replace(/data-theme-\w+/g, '');
    document.body.classList.add(`data-theme-${theme}`);
    
    // Update CSS variables
    if (theme === 'light') {
      document.documentElement.style.setProperty('--bg-primary', 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)');
      document.documentElement.style.setProperty('--text-primary', '#0f172a');
      document.documentElement.style.setProperty('--text-secondary', '#475569');
      document.documentElement.style.setProperty('--text-accent', '#0ea5e9');
    } else {
      document.documentElement.style.setProperty('--bg-primary', 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#d1d5db');
      document.documentElement.style.setProperty('--text-accent', '#06b6d4');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

