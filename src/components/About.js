import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-18 bg-amber-50 relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 sm:top-10 right-8 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-6 sm:bottom-10 left-8 sm:left-20 w-48 h-48 sm:w-80 sm:h-80 bg-indigo-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-gray-900 tracking-tight drop-shadow-lg">
          About Me
        </h1>

        {/* About Paragraph - First */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-xl mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-md flex items-center">
            <span className="w-1 h-6 sm:h-8 bg-blue-600 rounded-full mr-2 sm:mr-3"></span>
            About
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-justify" style={{ fontFamily: "var(--font-body)" }}>
            <p className="text-gray-800">
              Hi, I'm <span className="font-semibold text-blue-600">Chidari Sai Krishna</span>, a Computer Science student at IIIT Dharwad, passionate about technology and innovation. I work as a Software Developer and Full-Stack Web Developer, focused on building scalable, responsive, and user-friendly web applications.
            </p>
            <p className="text-gray-800">
              I specialize in modern technologies such as <span className="font-semibold text-indigo-600">HTML, CSS, JavaScript, React.js, Node.js, Express, and MySQL</span>, and I enjoy transforming real-world ideas into functional digital products. Some of my notable projects include a restaurant menu management website and a student outing monitoring system, both designed to enhance user experience and operational efficiency.
            </p>
            <p className="text-gray-800">
              I actively participate in coding contests on CodeChef and have been a part of Naukri Campus Young Turks, India's largest skill contest — experiences that have strengthened my problem-solving and software design skills.
            </p>
            <p className="text-gray-800">
              I'm currently seeking opportunities as a Full-Stack Developer or Software Developer, where I can apply my skills, collaborate with experienced professionals, and contribute to impactful projects that make a difference.
            </p>
          </div>
        </div>

        {/* Info Cards - Education, Location, Goal */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Education Card - Full Width on Large Screens */}
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.01] sm:hover:scale-105 shadow-xl">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:rotate-6 transition-transform">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 drop-shadow-md flex items-center">
                <i className="fa fa-graduation-cap text-xl sm:text-2xl text-blue-600 mr-2"></i>
                Education
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {/* Education 1 */}
              <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-l-4 border-blue-600">
                <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg mb-2">Indian Institute of Information Technology (IIIT), Dharwad</h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-1">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-1">CGPA: 8.22</p>
                <p className="text-gray-500 text-xs sm:text-sm">Nov 2022 - April 2026</p>
              </div>
              {/* Education 2 */}
              <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-l-4 border-indigo-600">
                <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg mb-2">Narayana Junior College</h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-1">Higher Secondary Standard</p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-1">Percentage: 98.5%</p>
                <p className="text-gray-500 text-xs sm:text-sm">June 2020 - March 2022</p>
              </div>
              {/* Education 3 */}
              <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-l-4 border-purple-600">
                <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg mb-2">Dr.K.K.R Gowtham Concept School, Hyderabad</h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-1">Board of Secondary Education</p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-1">Percentage: 100%</p>
                <p className="text-gray-500 text-xs sm:text-sm">June 2019 - March 2020</p>
              </div>
            </div>
          </div>
          
          {/* Location Card */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.01] sm:hover:scale-105 shadow-xl">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:rotate-6 transition-transform">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 drop-shadow-md flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Location
              </h3>
            </div>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Hno:4-225, Market Road, Opp: Old Andhra Bank, Kesamudram, Mahabubabad Dist, Telangana
            </p>
          </div>
          
          {/* Goal Card */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.01] sm:hover:scale-105 shadow-xl">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:rotate-6 transition-transform">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 drop-shadow-md flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                Goal
              </h3>
            </div>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Integrating and Building Solutions with Frontend, Backend, and Database
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-md">Connect With Me</h3>
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
            {/* Email Icon */}
            <a 
              href="mailto:chidarisai2004@gmail.com" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-xl relative z-10" 
              aria-label="Email"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            
            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/chidari-sai-krishna/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0077b5] rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-[#006399] transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-xl relative z-10" 
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            {/* GitHub Icon */}
            <a 
              href="https://github.com/CHIDARISAIKRISHNA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-xl relative z-10" 
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/chidarisaikrishna/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-xl relative z-10" 
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
