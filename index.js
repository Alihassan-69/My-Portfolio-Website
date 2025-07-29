// Mobile Menu Script
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
});

// Smooth Scroll Script
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      const mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
});

// Particles Script
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles');
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 8000);
  }
  
  setInterval(createParticle, 2000);
});

// Skills Animation Script
document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});

// Project Filter Script
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('text-gray-600');
      });
      
      this.classList.add('active', 'bg-primary', 'text-white');
      this.classList.remove('text-gray-600');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  filterBtns[0].classList.add('bg-primary', 'text-white');
});

// Contact Form Script
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.classList.add('bg-green-500');
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-green-500');
        contactForm.reset();
      }, 2000);
    }, 1000);
  });
});

// Back to Top Script
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = '1';
    } else {
      backToTopBtn.style.opacity = '0';
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Custom Cursor Script
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.custom-cursor');
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  document.addEventListener('mousedown', function() {
    cursor.style.transform = 'scale(0.8)';
  });
  
  document.addEventListener('mouseup', function() {
    cursor.style.transform = 'scale(1)';
  });
});