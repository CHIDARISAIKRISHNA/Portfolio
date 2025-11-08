import React from 'react';

const skills = [
  {
    title: "Programming Languages",
    icon: "code",
    items: [
      { name: "Python", color: "bg-orange-200 text-orange-800" },
      { name: "Java", color: "bg-red-200 text-red-800" },
      { name: "C", color: "bg-green-200 text-green-800" },
      { name: "JavaScript", color: "bg-yellow-200 text-yellow-800" },
      { name: "HTML/CSS", color: "bg-purple-200 text-purple-800" },
      { name: "SQL", color: "bg-pink-200 text-pink-800" }
    ],
    description: "Proficient in multiple programming languages with experience in web development, data structures, and algorithms."
  },
  {
    title: "Frameworks & Libraries",
    icon: "gears",
    items: [
      { name: "React", color: "bg-blue-200 text-blue-800" },
      { name: "Node.js", color: "bg-green-200 text-green-800" },
      { name: "Express.js", color: "bg-yellow-200 text-yellow-800" },
      { name: "Tailwind CSS", color: "bg-purple-200 text-purple-800" },
      { name: "Bootstrap", color: "bg-cyan-200 text-cyan-800" }
    ],
    description: "Modern web frameworks and libraries for building responsive, scalable applications with excellent user experience."
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    items: [
      { name: "VS Code", color: "bg-purple-200 text-purple-800" },
      { name: "Git/GitHub", color: "bg-indigo-200 text-indigo-800" },
      { name: "Google Cloud", color: "bg-blue-200 text-blue-800" },
      { name: "AWS", color: "bg-orange-200 text-orange-800" },
      { name: "Linux", color: "bg-teal-200 text-teal-800" }
    ],
    description: "Professional development tools and cloud platforms for efficient coding, version control, and deployment."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-amber-50 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 tracking-tight drop-shadow-lg">
          Skills & Technologies
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 group">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <i className={`fas fa-${skill.icon} text-lg sm:text-xl md:text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 drop-shadow-md break-words">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className={`px-2 sm:px-3 py-0.5 sm:py-1 ${item.color} rounded-full text-xs sm:text-sm font-medium shadow-md`}>
                      {item.name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-800 text-xs sm:text-sm flex-grow leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
