import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: "Dynamic Restaurant Ordering and Payment System",
    description: "A web-based platform built for Delicious Bites Restaurant to manage menu items, customer orders, table bookings, and feedback efficiently. The system offers a seamless digital ordering experience with real-time billing and admin analytics.",
    techStack: "HTML, CSS, JavaScript, Node.js, Express.js, SQL",
    features: [
      "Interactive categorized menu (Breakfast, Lunch, Snacks, etc.)",
      "Real-time order management and billing",
      "Online table reservation and confirmation system",
      "Admin dashboard for analytics and feedback tracking"
    ],
    link: "https://github.com/CHIDARISAIKRISHNA/Dynamic-Restaurant-Ordering-Payment-System",
    icon: "fa-cutlery",
    image: "/restaurant.png",
    imagePosition: "left"
  },
  {
    title: "Student Outing Management System",
    description: "A web-based platform developed to streamline and secure the student outing process on campus. The system digitizes outing registration, approval, and monitoring while helping security personnel track student movements and ensure safety.",
    techStack: "HTML, CSS, JavaScript, Node.js, EJS, MongoDB",
    features: [
      "Online outing form submission and permission workflow",
      "Real-time outing tracking and automatic late-return email alerts",
      "Secure staff and student details management",
      "Alumni database for placement and contact information",
    ],
    link: "https://github.com/CHIDARISAIKRISHNA/Student_Outing_Management",
    icon: "fa-calendar",
    image: "outing.png",
    imagePosition: "right"
  },
  {
    title: "LoreZone - Budget Friendly Fashion Recommendation",
    description: "LoreZone is an intelligent, full-stack web platform that recommends outfits based on user preferences, trends, and location. It also connects fashion designers with job opportunities, providing a complete ecosystem for both users and creators.",
    techStack: "React.js, Node.js, Express.js, MongoDB/MySQL, AWS S3",
    features: [
      "Personalized outfit suggestions (gender, skin tone, budget, occasion)",
      "Location-based fashion trends",
      "Real-time offers from Meesho, Flipkart, and Amazon",
      "Job portal for fashion designers",
    ],
    link: "https://github.com/Arpenaboyina/LoreZone",
    icon: "fa-shopping-bag",
    image: "/lorezone.png",
    imagePosition: "left"
  },
  {
    title: "Student Attendance Tracking System",
    description: "The Student Attendance Tracking System is a console-based Java application that enables educational institutions to efficiently record, update, and view attendance data. It integrates with a MySQL database to ensure data consistency and demonstrates the use of JDBC and Object-Oriented Programming (OOP) principles for modular and maintainable backend logic.",
    techStack: "Java, JDBC, MySQL, OOP, Console I/O",
    features: [
      "Record & Update Attendance: Add or modify attendance entries seamlessly",
      "Student Management: Add and view student data from the console",
      "Database Integrity: Enforced through foreign key relationships",
      "Command-Line Interface: Simple text-based menu for interaction"
    ],
    link: "https://github.com/CHIDARISAIKRISHNA/Student-Attendance-Tracking-System",
    icon: "fa-graduation-cap",
    image: "/attendance.png",
    imagePosition: "right"
  },
  {
    title: "Insurance Management System",
    description: "The Insurance Management System is a full-stack web application built to automate and streamline insurance operations. It supports multiple user roles—customers, HR, finance staff, inspectors, and agents—each with specific permissions and workflows for managing policies, claims, and customer data.",
    techStack: "Node.js, Express.js, MySQL, EJS, HTML, CSS, JavaScript",
    features: [
      "Role-Based Access: Custom dashboards for each user type",
      "Database Management: MySQL-backed policy, claims, and user data handling",
      "Dynamic EJS Templates: Interactive and responsive web pages",
      "SQL Procedures: Automated database tasks for efficiency"
    ],
    link: "https://github.com/CHIDARISAIKRISHNA/Insurance-Management-System",
    icon: "fa-shield",
    image: "/ensurance.png",
    imagePosition: "left"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-amber-50 relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-indigo-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 tracking-tight drop-shadow-lg">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-amber-50 rounded-lg sm:rounded-xl shadow-lg border-2 border-amber-300 hover:border-amber-400 transition-all duration-300 group relative overflow-hidden mb-3 sm:mb-4 p-3 sm:p-4"
            >
              {project.image ? (
                /* Layout with Image - Title at top, Image left/right based on imagePosition */
                <div className="relative z-10">
                  {/* Title at Top */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300 break-words mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {project.title}
                  </h3>
                  
                  {/* Content with Image */}
                  <div className={`flex flex-col md:flex-row items-stretch ${project.imagePosition === 'right' ? 'md:flex-row-reverse' : ''} gap-3`}>
                    {/* Image Container - Conditional styling based on project */}
                    <div className={`flex justify-center ${project.imagePosition === 'right' ? 'md:justify-end' : 'md:justify-start'} w-full ${project.title === "Student Attendance Tracking System" ? 'md:w-1/2 lg:w-[45%]' : 'md:w-1/3'}`}>
                      <div className="relative w-full h-full group/image flex flex-col">
                        {project.title === "Student Outing Management System" || project.title === "Dynamic Restaurant Ordering and Payment System" || project.title === "Student Attendance Tracking System" || project.title === "LoreZone - Budget Friendly Fashion Recommendation" || project.title === "Insurance Management System" ? (
                          /* Simple image without background for Student Outing and Restaurant */
                          <div 
                            className={`relative w-full h-full flex-1 flex items-center justify-center cursor-pointer ${project.title === "Student Attendance Tracking System" ? 'sm:h-[280px] sm:max-h-[280px] md:h-full md:max-h-[320px] lg:max-h-[360px]' : ''}`}
                            onClick={() => openModal(project.image, project.title)}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title}
                              loading="lazy"
                              className={`rounded-lg shadow-lg hover:opacity-90 transition-opacity w-full ${project.title === "Student Attendance Tracking System" ? 'h-full object-contain sm:object-cover md:object-cover' : 'h-full object-cover'}`}
                            />
                          </div>
                        ) : (
                          /* Enhanced styling with gradient background for other projects */
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-indigo-500/50 to-purple-600/50 rounded-xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-b from-blue-100 via-indigo-100 to-purple-100 p-2 rounded-xl shadow-2xl border-2 border-blue-200 transform group-hover:scale-[1.02] group-hover:shadow-blue-400/50 transition-all duration-300 overflow-hidden flex-1 flex flex-col cursor-pointer"
                                 onClick={() => openModal(project.image, project.title)}>
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
                              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>
                              <div className="flex-1 flex items-center justify-center relative z-10">
                                <img 
                                  src={project.image} 
                                  alt={project.title}
                                  loading="lazy"
                                  className="w-full h-auto rounded-lg shadow-2xl object-contain hover:opacity-90 transition-opacity"
                                  style={{ maxHeight: '100%', objectFit: 'contain' }}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Content - Enhanced UI */}
                    <div className={`flex flex-col w-full ${project.title === "Student Attendance Tracking System" ? 'md:w-1/2 lg:w-[55%]' : 'md:w-2/3'}`}>
                      {/* Description - Enhanced Card */}
                      {project.description && (
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 p-2.5 mb-2">
                          <p className="text-gray-800 leading-relaxed text-justify text-base">
                            {project.description}
                          </p>
                        </div>
                      )}
                      
                      {/* Tech Stack - Enhanced Card */}
                      {project.techStack && (
                        <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 rounded-xl border-2 border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300 mb-2 p-2">
                          <div className="flex items-center mb-1">
                            <svg className="text-yellow-600 mr-1.5 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            <span className="text-gray-800 font-bold text-base">Tech Stack:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {project.techStack.split(', ').map((tech, idx) => (
                              <span key={idx} className="bg-white rounded-lg text-gray-900 font-semibold shadow-sm border border-yellow-300 hover:bg-yellow-100 transition-colors px-2 py-0.5 text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Key Features - Enhanced Card */}
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 mb-2 p-2.5">
                        <h4 className="text-gray-900 font-bold flex items-center text-base mb-1.5">
                          <svg className="text-blue-600 mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5 group-hover/item:scale-110 transition-transform w-4 h-4">
                                <svg className="text-white w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                              </div>
                              <span className="text-gray-800 leading-relaxed flex-1 text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Button - Enhanced */}
                      <div className="mt-1">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm"
                        >
                          <span className="mr-2">View Project</span>
                          <i className="fa fa-external-link group-hover:translate-x-1 transition-transform"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Original Layout - Icon and Title left, Features right */
                <div className="flex flex-col md:flex-row gap-4 relative z-10">
                  {/* Icon and Title Section */}
                  <div className="flex items-start md:items-center gap-3 md:w-1/3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                      <i className={`fa ${project.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Features List Section */}
                  <div className="md:w-2/3">
                    {/* Description */}
                    {project.description && (
                      <p className="text-gray-800 text-lg leading-relaxed text-justify mb-3">
                        {project.description}
                      </p>
                    )}
                    
                    {/* Tech Stack */}
                    {project.techStack && (
                      <div className="mb-3 bg-white p-2.5 rounded-md border border-amber-200">
                        <span className="text-gray-800 text-lg font-semibold">Tech Stack: </span>
                        <span className="text-gray-900 text-lg">{project.techStack}</span>
                      </div>
                    )}
                    
                    {/* Key Features - No line spacing */}
                    <div className="mb-3">
                      <h4 className="text-gray-900 font-bold text-lg mb-2">Key Features:</h4>
                      <ul className="text-gray-800 text-lg leading-relaxed">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-700 mr-2 mt-0.5 font-bold text-base">•</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Button */}
                    <div className="mt-2">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md group text-sm"
                      >
                        <span className="mr-2">View Project</span>
                        <i className="fa fa-external-link group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300 z-10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-semibold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
