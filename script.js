// ============================================
// DOXINOVA - Interactive Features
// ============================================

// ============================================
// NAVIGATION - Mobile Menu Toggle
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FORM SUBMISSION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = this.querySelector('input[placeholder="Nama Anda"]').value;
            const email = this.querySelector('input[placeholder="Email Anda"]').value;
            const subject = this.querySelector('input[placeholder="Subjek"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Mohon lengkapi semua field yang diperlukan!', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Email tidak valid!', 'error');
                return;
            }
            
            // Construct mailto link
            const mailtoLink = `mailto:doxinova@palangkaraya.ac.id?subject=${encodeURIComponent(subject || 'Inquiry from DOXINOVA Website')}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Terima kasih! Email siap dikirim ke client email Anda.', 'success');
            
            // Reset form
            this.reset();
        });
    }
});

// ============================================
// EMAIL VALIDATION
// ============================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        zIndex: '2000',
        animation: 'slideIn 0.3s ease-out',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        maxWidth: '300px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    });
    
    if (type === 'success') {
        notification.style.backgroundColor = '#6B8E23';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#C41E3A';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = '#E8D5B7';
        notification.style.color = '#3D3D3D';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// ADD ANIMATIONS STYLESHEET
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL ANIMATION FOR ELEMENTS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
    
    const cards = document.querySelectorAll('.team-card, .project-card, .feature-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Add fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// COUNTER ANIMATION (for stats if added)
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// THEME PREFERENCES (for future dark mode)
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get URL parameters
function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// ============================================
// ANALYTICS TRACKING (optional)
// ============================================

// Track page views
document.addEventListener('DOMContentLoaded', function() {
    // You can add Google Analytics or other tracking here
    console.log('DOXINOVA Website loaded successfully');
    console.log('Page: ' + window.location.pathname);
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Press '?' for help (can be expanded)
    if (e.key === '?') {
        console.log('DOXINOVA Research Website v1.0');
        console.log('Keyboard Shortcuts:');
        console.log('- Home: Press H');
        console.log('- About: Press A');
        console.log('- Contact: Press C');
    }
    
    // Quick navigation
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'h') {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        }
        if (e.key === 'a') {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }
        if (e.key === 'c') {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// PAGE LOAD OPTIMIZATION
// ============================================

// Ensure page is fully loaded before animations start
if (document.readyState !== 'complete') {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
} else {
    document.body.classList.add('loaded');
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add skip to main content link
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #C41E3A;
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.prepend(skipLink);
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You can send error logs to your server here
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
});

// ============================================
// INITIALIZATION
// ============================================

console.log('DOXINOVA Website Scripts Loaded Successfully');
console.log('Version: 1.0');
console.log('Theme: Butter, Cherry, Olive, Oat');
