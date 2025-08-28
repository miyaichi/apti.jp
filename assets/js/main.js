// APTI MVP Site JavaScript

// Language configuration
const languageConfig = {
    'ja': {
        basePath: '/',
        pages: {
            'index.html': 'index.html',
            'about.html': 'about.html',
            'join.html': 'join.html',
            'news.html': 'news.html'
        }
    },
    'en': {
        basePath: '/en/',
        pages: {
            'index.html': 'index.html',
            'about.html': 'about.html',
            'join.html': 'join.html',
            'news.html': 'news.html'
        }
    }
};

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ja')) {
        return 'ja';
    } else if (browserLang.startsWith('en')) {
        return 'en';
    }
    return 'en'; // Default to English
}

// Get current page filename
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    return filename === '' ? 'index.html' : filename;
}

// Change language function
function changeLanguage(targetLang) {
    const currentPage = getCurrentPage();
    const targetConfig = languageConfig[targetLang];
    
    if (targetConfig && targetConfig.pages[currentPage]) {
        const targetPath = window.location.origin + targetConfig.basePath + targetConfig.pages[currentPage];
        window.location.href = targetPath;
    }
}

// Set language selector based on current page
function setLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (!languageSelect) return;

    const currentPath = window.location.pathname;
    let currentLang = 'ja'; // Default

    if (currentPath.startsWith('/en/')) {
        currentLang = 'en';
    }

    languageSelect.value = currentLang;
}

// Initialize language detection and set selector
function initializeLanguage() {
    const currentPath = window.location.pathname;
    
    // Only redirect for root path on first visit
    if (currentPath === '/' || currentPath === '/index.html') {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            const browserLang = detectBrowserLanguage();
            sessionStorage.setItem('hasVisited', 'true');
            
            if (browserLang === 'en') {
                window.location.href = '/en/index.html';
                return;
            }
        }
    }
    
    setLanguageSelector();
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language functionality
    initializeLanguage();
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling (placeholder for future Google Forms integration)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Custom form handling will be added here
        });
    });
});

// News loading function (placeholder)
function loadNews() {
    // This will be used to dynamically load news items
    // For now, it's a placeholder for future functionality
}

// Contact form validation (placeholder)
function validateContactForm(form) {
    // Form validation logic will be added here
    return true;
}