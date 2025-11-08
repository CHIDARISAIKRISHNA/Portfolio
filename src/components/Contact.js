import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = 'Please enter a valid email address';
          }
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else {
          const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
          if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            error = 'Please enter a valid phone number';
          }
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/chidarisai2004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New portfolio message from ${formData.name}`
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ text: 'Thank you! Your message has been sent successfully.', type: 'success' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Auto-remove success messages after 5 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 5000);
      } else {
        setMessage({ text: data.message || 'Sorry, there was an error sending your message. Please try again later.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'Sorry, there was an error sending your message. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-amber-50 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 md:mb-16 text-center text-gray-900 tracking-tight drop-shadow-lg">
          Get In Touch
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-md flex items-center">
                  <i className="fas fa-user text-blue-600 mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
                  Let's Connect
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                      <i className="fas fa-envelope text-white text-base sm:text-lg md:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Email</p>
                      <a href="mailto:chidarisai2004@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base break-all">
                        chidarisai2004@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                      <i className="fas fa-phone text-white text-base sm:text-lg md:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Phone</p>
                      <a href="tel:+917672000985" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base">
                        +91 7672000985
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform flex-shrink-0">
                      <i className="fas fa-location-dot text-white text-base sm:text-lg md:text-xl"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">Location</p>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm md:text-base">Mahabubabad, Telangana</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 drop-shadow-md flex items-center">
                    <i className="fas fa-users text-blue-600 mr-2"></i>
                    Follow Me
                  </h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a href="https://www.linkedin.com/in/chidari-sai-krishna/" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="LinkedIn">
                      <i className="fab fa-linkedin text-white"></i>
                    </a>
                    <a href="https://github.com/CHIDARISAIKRISHNA" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="GitHub">
                      <i className="fab fa-github text-white"></i>
                    </a>
                    <a href="https://www.instagram.com/chidarisaikrishna/" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="Instagram">
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-md">Send Message</h3>
              
              {message.text && (
                <div className={`form-message p-4 rounded-lg mb-4 text-center font-semibold ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-800 border-2 border-green-200' 
                    : 'bg-red-100 text-red-800 border-2 border-red-200'
                }`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name && touched.name 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/50'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email && touched.email 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/50'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone && touched.phone 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/50'
                    }`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message && touched.message 
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
                        : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400/50'
                    }`}
                  ></textarea>
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
