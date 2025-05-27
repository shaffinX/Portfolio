// Animation handler for portfolio website using Anime.js v3
import anime from 'animejs/lib/anime.es.js';

// Initialize page load animations
export const initializeAnimations = () => {
  // Hero title animation
  anime({
    targets: '[data-animate="title"]',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 200
  });

  // Hero subtitle animation
  anime({
    targets: '[data-animate="subtitle"]',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutExpo',
    delay: 600
  });

  // Hero tagline animation
  anime({
    targets: '[data-animate="tagline"]',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutExpo',
    delay: 1000
  });

  // Hero buttons animation
  anime({
    targets: '[data-animate="buttons"]',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutExpo',
    delay: 1400
  });

  // Hero image animation
  anime({
    targets: '[data-animate="image"]',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 800
  });

  // Setup hover animations after initial load
  setTimeout(setupHoverAnimations, 2000);
};

// Setup scroll-triggered animations
export const setupScrollAnimations = () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        if (target.dataset.scrollAnimate === 'skills') {
          animateSkillsSection();
        }
      }
    });
  }, observerOptions);

  // Observe skills section
  const skillsSection = document.querySelector('[data-scroll-animate="skills"]');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
};

// Animate skills section
const animateSkillsSection = () => {
  // Skills title animation
  anime({
    targets: '[data-animate="skills-title"]',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    easing: 'easeOutExpo'
  });

  // Animate skill categories with stagger
  anime({
    targets: '[data-animate^="category-"]',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    delay: anime.stagger(200, {start: 400}),
    easing: 'easeOutExpo'
  });

  // Animate skill items within each category
  setTimeout(() => {
    anime({
      targets: '.skill-item',
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });
  }, 1000);
};

// Setup hover animations
const setupHoverAnimations = () => {
  // Hero title hover animation
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => {
      anime({
        targets: '.name-highlight',
        scale: [1, 1.1],
        duration: 300,
        easing: 'easeOutQuad'
      });
    });

    heroTitle.addEventListener('mouseleave', () => {
      anime({
        targets: '.name-highlight',
        scale: [1.1, 1],
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      anime({
        targets: button,
        scale: [1, 1.05],
        duration: 200,
        easing: 'easeOutQuad'
      });
    });

    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        scale: [1.05, 1],
        duration: 200,
        easing: 'easeOutQuad'
      });
    });
  });

  // Image circle hover animation
  const imageCircle = document.querySelector('.image-circle');
  if (imageCircle) {
    imageCircle.addEventListener('mouseenter', () => {
      anime({
        targets: '.ring',
        scale: [1, 1.1],
        duration: 400,
        easing: 'easeOutElastic(1, .6)'
      });
    });

    imageCircle.addEventListener('mouseleave', () => {
      anime({
        targets: '.ring',
        scale: [1.1, 1],
        duration: 400,
        easing: 'easeOutElastic(1, .6)'
      });
    });
  }

  // Skill item hover animations
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      anime({
        targets: item.querySelector('.skill-icon'),
        rotate: [0, 360],
        duration: 600,
        easing: 'easeOutExpo'
      });
    });
  });
};

// Utility function for creating particle effects
export const createParticleEffect = (element) => {
  const particles = [];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#ff6b6b';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    
    const rect = element.getBoundingClientRect();
    particle.style.left = rect.left + rect.width / 2 + 'px';
    particle.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(particle);
    particles.push(particle);
  }

  anime({
    targets: particles,
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    scale: [1, 0],
    opacity: [1, 0],
    duration: 1000,
    easing: 'easeOutExpo',
    complete: () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    }
  });
};

// Enhanced scroll animations with multiple triggers
export const setupAdvancedScrollAnimations = () => {
  let ticking = false;

  const updateAnimations = () => {
    const scrolled = window.pageYOffset;
    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.2;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateAnimations);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick);
};

// Initialize all animations
export const initializeAllAnimations = () => {
  initializeAnimations();
  setupScrollAnimations();
  setupAdvancedScrollAnimations();
};