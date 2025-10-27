/**
 * Enhanced Animations with anime.js
 * Adds smooth, performant animations throughout the site
 */

// Particle Background System
class ParticleBackground {
  constructor() {
    this.canvas = document.getElementById('particle-canvas');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 50;
    this.mouse = { x: null, y: null, radius: 100 };
    
    this.init();
  }
  
  init() {
    this.resize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Get current theme color
    const style = getComputedStyle(document.body);
    const accentColor = style.getPropertyValue('--accent').trim() || '#8b5cf6';
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.y > this.canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      
      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.mouse.radius) {
        const force = (this.mouse.radius - distance) / this.mouse.radius;
        particle.x -= dx * force * 0.02;
        particle.y -= dy * force * 0.02;
      }
      
      // Draw particle
      this.ctx.fillStyle = accentColor;
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw connections
      for (let j = index + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.ctx.strokeStyle = accentColor;
          this.ctx.globalAlpha = (1 - distance / 100) * 0.2;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      }
    });
    
    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// Scroll reveal animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements (skip .no-animations containers)
  document.querySelectorAll('.portfolio-card, .video-card, .gallery-card, .page-section, .fact-list li').forEach(el => {
    // Skip if parent has no-animations class
    if (!el.closest('.no-animations')) {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    }
  });
}

// 3D Tilt effect on cards
function init3DTilt() {
  const cards = document.querySelectorAll('.portfolio-card, .gallery-card');
  
  cards.forEach(card => {
    // Skip if parent has no-animations class
    if (card.closest('.no-animations')) {
      return;
    }
    
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      
      // Add subtle glow effect
      this.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.3), 0 0 20px rgba(${Math.abs(rotateY) * 2}, ${Math.abs(rotateX) * 2}, 255, 0.2)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      this.style.boxShadow = '';
    });
  });
}

// Smooth theme transitions with anime.js
function enhanceThemeTransitions() {
  const themeButtons = document.querySelectorAll('.theme-button');
  
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Animate the page shell
      anime({
        targets: '.page-shell',
        opacity: [0.9, 1],
        duration: 300,
        easing: 'easeInOutQuad'
      });
      
      // Ripple effect from button
      const ripple = document.createElement('div');
      ripple.className = 'theme-ripple';
      ripple.style.left = button.offsetLeft + 'px';
      ripple.style.top = button.offsetTop + 'px';
      button.parentElement.appendChild(ripple);
      
      anime({
        targets: ripple,
        scale: [0, 50],
        opacity: [0.5, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: () => ripple.remove()
      });
    });
  });
}

// Staggered animations for lists and grids
function animatePortfolioGrid() {
  const grids = document.querySelectorAll('.portfolio-grid, .gallery-grid');
  
  grids.forEach(grid => {
    const items = Array.from(grid.children);
    
    // Add a subtle pulse/zoom effect on each card as they appear
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8) translateY(30px)';
    });
    
    anime({
      targets: items,
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [30, 0],
      delay: anime.stagger(80, {start: 200}),
      duration: 600,
      easing: 'easeOutExpo'
    });
  });
}

// Enhanced gallery image hover effects
function enhanceGalleryImages() {
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  galleryCards.forEach(card => {
    const img = card.querySelector('img');
    if (!img) return;
    
    card.addEventListener('mouseenter', function() {
      anime({
        targets: img,
        scale: 1.1,
        duration: 400,
        easing: 'easeOutQuad'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      anime({
        targets: img,
        scale: 1,
        duration: 400,
        easing: 'easeOutQuad'
      });
    });
  });
}

// Text reveal animation
function animateTextReveal() {
  const textElements = document.querySelectorAll('.section-title, .lead');
  
  textElements.forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      el.appendChild(span);
    });
    
    anime({
      targets: el.children,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(30),
      duration: 800,
      easing: 'easeOutExpo'
    });
  });
}

// Floating animation for badges
function animateBadges() {
  const badges = document.querySelectorAll('.badge');
  
  badges.forEach((badge, i) => {
    anime({
      targets: badge,
      translateY: [-5, 5],
      duration: 2000,
      delay: i * 100,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  });
}

// Button hover effects
function enhanceButtonHovers() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      anime({
        targets: this,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutElastic(1, .5)'
      });
    });
    
    button.addEventListener('mouseleave', function() {
      anime({
        targets: this,
        scale: 1,
        duration: 300,
        easing: 'easeOutElastic(1, .5)'
      });
    });
  });
}

// Initialize all animations
function initAnimations() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    console.log('Reduced motion preference detected, skipping animations');
    return;
  }
  
  // Initialize particle background (only on homepage)
  if (document.querySelector('#particle-canvas')) {
    new ParticleBackground();
  }
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize 3D tilt on cards
  init3DTilt();
  
  // Enhance theme transitions
  enhanceThemeTransitions();
  
  // Animate badges
  animateBadges();
  
  // Enhance button hovers
  enhanceButtonHovers();
  
  // Animate portfolio grids on load
  animatePortfolioGrid();
  
  // Enhance gallery image hovers
  enhanceGalleryImages();
  
  // Initial page load animation
  anime({
    targets: '.page-shell',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    easing: 'easeOutQuad'
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
