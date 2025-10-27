const textArray = ["Full Stack Web Developer", "Software Developer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}
function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenuBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        `;
    } else {
        mobileMenu.classList.add('show');
        mobileMenuBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        `;
    }
}
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    mobileMenu.classList.remove('show');
    mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function setupIntersectionObserver() {
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
}
function handleScroll() {
    const header = document.querySelector('header');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (window.scrollY > 100) {
        header.classList.add('bg-gray-900/95');
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        }
    } else {
        header.classList.remove('bg-gray-900/95');
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: event.target.name.value.trim(),
        email: event.target.email.value.trim(),
        phone: event.target.phone.value.trim(),
        message: event.target.message.value.trim()
    };
        if (!formData.name || !formData.email || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formDataToSend
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage(data.message, 'success');
            event.target.reset();
        } else {
            showMessage(data.message, 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

function showMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message p-4 rounded-lg mb-4 text-center font-semibold ${
        type === 'success' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
    }`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageDiv, form);
    
    if (type === 'success') {
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Switching theme from', currentTheme, 'to', newTheme);
    body.setAttribute('data-theme', newTheme);
    body.className = body.className.replace(/data-theme-\w+/g, '');
    body.classList.add(`data-theme-${newTheme}`);
    
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
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
    
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    
    if (newTheme === 'light') {
        themeIcon.className = 'fa fa-moon text-lg group-hover:scale-110 transition-transform duration-300';
        mobileThemeIcon.className = 'fa fa-moon text-lg group-hover:scale-110 transition-transform duration-300';
    } else {
        themeIcon.className = 'fa fa-sun text-lg group-hover:scale-110 transition-transform duration-300';
        mobileThemeIcon.className = 'fa fa-sun text-lg group-hover:scale-110 transition-transform duration-300';
    }
    
    body.offsetHeight;
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    console.log('Initializing theme:', savedTheme);
    body.setAttribute('data-theme', savedTheme);
    body.className = body.className.replace(/data-theme-\w+/g, '');
    body.classList.add(`data-theme-${savedTheme}`);
    
    if (savedTheme === 'light') {
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
    
    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    
    if (savedTheme === 'light') {
        themeIcon.className = 'fa fa-moon text-lg group-hover:scale-110 transition-transform duration-300';
        mobileThemeIcon.className = 'fa fa-moon text-lg group-hover:scale-110 transition-transform duration-300';
    } else {
        themeIcon.className = 'fa fa-sun text-lg group-hover:scale-110 transition-transform duration-300';
        mobileThemeIcon.className = 'fa fa-sun text-lg group-hover:scale-110 transition-transform duration-300';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();    
    setTimeout(typeEffect, 1000);    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }    
    document.querySelectorAll('.nav-link, .scroll-to').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');            
            if (target.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(target);
                closeMobileMenu();
            }
        });
    });
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    window.addEventListener('scroll', handleScroll);
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    setupIntersectionObserver();
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});
window.addEventListener('resize', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth > 768 && mobileMenu.classList.contains('show')) {
        closeMobileMenu();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            closeMobileMenu();
        }
    }
});

