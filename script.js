// Luxe Nest Decor - Main JavaScript

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Set Active Navigation Link
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Cookie Consent Banner
function initCookieConsent() {
  const banner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');
  const closeBtn = document.getElementById('close-cookies');
  
  // Check if consent already given
  const consent = localStorage.getItem('cookieConsent');
  
  if (!consent && banner) {
    banner.classList.add('active');
  }
  
  function hideConsent(status) {
    localStorage.setItem('cookieConsent', status);
    if (banner) {
      banner.classList.remove('active');
    }
  }
  
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => hideConsent('accepted'));
  }
  
  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => hideConsent('rejected'));
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => hideConsent('rejected'));
  }
}

// Lead Form Dialog
function initLeadFormDialog() {
  const modal = document.getElementById('lead-form-modal');
  const openBtns = document.querySelectorAll('[data-open-lead-form]');
  const closeBtn = document.getElementById('close-lead-form');
  const form = document.getElementById('lead-form');
  
  // Open modal
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.add('active');
      }
    });
  });
  
  // Close modal
  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
    }
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Click outside modal to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  // Handle form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const consent = document.getElementById('lead-consent');
      if (!consent.checked) {
        alert('Please agree to the Privacy Policy and Terms & Conditions');
        return;
      }
      
      // Get form data
      const formData = {
        name: document.getElementById('lead-name').value,
        email: document.getElementById('lead-email').value,
        phone: document.getElementById('lead-phone').value,
        service: document.getElementById('lead-service').value,
        message: document.getElementById('lead-message').value
      };
      
      console.log('Form submitted:', formData);
      alert('Thank you for your interest! We\'ll contact you shortly.');
      
      // Reset form and close modal
      form.reset();
      closeModal();
    });
  }
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const consent = document.getElementById('contact-consent');
      if (!consent.checked) {
        alert('Please agree to the Privacy Policy and Terms & Conditions');
        return;
      }
      
      // Get form data
      const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        service: document.getElementById('contact-service').value,
        message: document.getElementById('contact-message').value
      };
      
      console.log('Contact form submitted:', formData);
      alert('Thank you for contacting us! We\'ll get back to you shortly.');
      
      // Reset form
      form.reset();
    });
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNav();
  initCookieConsent();
  initLeadFormDialog();
  initContactForm();
  initSmoothScroll();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  
  if (mobileMenu && menuBtn && mobileMenu.classList.contains('active')) {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  }
});