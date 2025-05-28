// AnimationHandler.js
import anime from 'animejs/lib/anime.es.js';

// Page Load Animations
export const initPageAnimations = () => {
  // Hero title animation
  anime({
    targets: '.animate-title',
    opacity: [0, 1],
    translateY: [100, 0],
    scale: [0.8, 1],
    duration: 1200,
    easing: 'easeOutCubic',
    delay: 300
  });

  // Hero subtitle animation
  anime({
    targets: '.animate-subtitle',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 800
  });

  // Hero divider animation
  anime({
    targets: '.animate-divider',
    opacity: [0, 1],
    scaleX: [0, 1],
    duration: 800,
    easing: 'easeOutCubic',
    delay: 1200
  });

  // Section title animation
  anime({
    targets: '.animate-section-title',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 500
  });
};

// Scroll-triggered animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        if (target.classList.contains('animate-project-card')) {
          animateProjectCard(target);
        } else if (target.classList.contains('stats-section')) {
          animateStatsSection();
        }
        
        target.classList.add('animated');
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  // Observe all scroll-triggered elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Project cards animation
  document.querySelectorAll('.animate-project-card').forEach(el => {
    observer.observe(el);
  });
};

// Individual project card animation
const animateProjectCard = (card) => {
  const index = card.getAttribute('data-index');
  
  anime({
    targets: card,
    opacity: [0, 1],
    translateY: [100, 0],
    rotateX: [45, 0],
    scale: [0.8, 1],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: index * 200
  });

  // Animate tech tags with stagger
  anime({
    targets: card.querySelectorAll('.animate-tech-tag'),
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.8, 1],
    duration: 600,
    easing: 'easeOutCubic',
    delay: anime.stagger(100, {start: 800 + (index * 200)})
  });
};

// Stats section animation
const animateStatsSection = () => {
  anime({
    targets: '.animate-stat',
    opacity: [0, 1],
    translateY: [50, 0],
    scale: [0.9, 1],
    duration: 800,
    easing: 'easeOutCubic',
    delay: anime.stagger(200)
  });

  // Animate numeric values inside .stat-value spans
  document.querySelectorAll('.stat-number').forEach(el => {
    const valueElement = el.querySelector('.stat-value');
    const finalValue = parseInt(el.getAttribute('data-value'));

    anime({
      targets: valueElement,
      innerHTML: [0, finalValue],
      duration: 2000,
      easing: 'easeOutCubic',
      round: 1
    });
  });
};



// Hover animations
export const initHoverAnimations = () => {
  // Button hover animations
  document.querySelectorAll('.animate-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      anime({
        targets: btn,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });

    btn.addEventListener('mouseleave', () => {
      anime({
        targets: btn,
        scale: 1,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });
  });

  // Project card hover effects
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card.querySelector('.project-image'),
        scale: 1.1,
        duration: 600,
        easing: 'easeOutCubic'
      });

      anime({
        targets: card.querySelectorAll('.tech-tag'),
        translateY: [-5, 0],
        duration: 400,
        easing: 'easeOutCubic',
        delay: anime.stagger(50)
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card.querySelector('.project-image'),
        scale: 1,
        duration: 600,
        easing: 'easeOutCubic'
      });

      anime({
        targets: card.querySelectorAll('.tech-tag'),
        translateY: [0, 0],
        duration: 400,
        easing: 'easeOutCubic'
      });
    });
  });

  // Hero title continuous animation
  anime({
    targets: '.hero-title',
    rotateY: [-2, 2],
    duration: 4000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });

  // Floating animation for stats
  anime({
    targets: '.stat-item',
    translateY: [-5, 5],
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(500)
  });
};

// Utility function for custom animations
export const customScrollAnimation = (selector, options = {}) => {
  const defaults = {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic'
  };

  const settings = { ...defaults, ...options };

  anime({
    targets: selector,
    ...settings
  });
};

// Advanced parallax scroll effect
export const initParallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax');
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// Mouse follow effect for enhanced interactivity
export const initMouseFollowEffect = () => {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      anime({
        targets: cursor,
        left: e.clientX,
        top: e.clientY,
        duration: 100,
        easing: 'easeOutCubic'
      });
    }
  });
};