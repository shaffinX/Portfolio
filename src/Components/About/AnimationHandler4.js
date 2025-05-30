import anime from 'animejs/lib/anime.es.js';

// Page Load Animations
export const initPageAnimations = () => {
  // Hero title animation
  anime({
    targets: '.animate-title',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    delay: 300,
    easing: 'easeOutExpo'
  });

  // Hero subtitle animation
  anime({
    targets: '.animate-subtitle',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 600,
    easing: 'easeOutExpo'
  });
};

// Scroll-based Animations
export const initScrollAnimations = () => {
  // Create intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        // Section animations
        if (target.classList.contains('animate-section')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutExpo'
          });
        }

        // Heading animations
        if (target.classList.contains('animate-heading')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.9, 1],
            duration: 600,
            delay: 200,
            easing: 'easeOutExpo'
          });
        }

        // Text animations
        if (target.classList.contains('animate-text')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            delay: 400,
            easing: 'easeOutExpo'
          });
        }

        // Stats animations
        if (target.classList.contains('animate-stats')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            delay: 600,
            easing: 'easeOutExpo'
          });

          // Animate stat numbers
          anime({
            targets: target.querySelectorAll('.stat-number'),
            scale: [0, 1],
            duration: 600,
            delay: anime.stagger(100, {start: 800}),
            easing: 'easeOutBounce'
          });
        }

        // Card animations
        if (target.classList.contains('animate-card')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.9, 1],
            duration: 600,
            delay: anime.random(0, 300),
            easing: 'easeOutExpo'
          });
        }

        // Button animations
        if (target.classList.contains('animate-button')) {
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.8, 1],
            duration: 500,
            delay: 800,
            easing: 'easeOutBounce'
          });
        }

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.animate-section, .animate-heading, .animate-text, .animate-stats, .animate-card, .animate-button'
  );
  
  animatedElements.forEach(el => observer.observe(el));
};

// Hover Animations
export const initHoverAnimations = () => {
  // Button hover animations
  const hoverButtons = document.querySelectorAll('.hover-button');
  
  hoverButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      anime({
        targets: button,
        scale: 1.05,
        duration: 200,
        easing: 'easeOutQuad'
      });
    });

    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad'
      });
    });
  });

  // Card hover animations with magnetic effect
  const cards = document.querySelectorAll('.unique-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        scale: 1.02,
        rotateY: 5,
        duration: 300,
        easing: 'easeOutQuad'
      });

      anime({
        targets: card.querySelector('.card-icon'),
        rotateZ: 360,
        duration: 600,
        easing: 'easeOutExpo'
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        scale: 1,
        rotateY: 0,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });

    // Magnetic effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      anime({
        targets: card,
        translateX: x * 0.1,
        translateY: y * 0.1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });

  // Heading pulse animation on hover
  const headings = document.querySelectorAll('.section-heading');
  
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
      anime({
        targets: heading,
        scale: [1, 1.05, 1],
        duration: 600,
        easing: 'easeInOutQuad'
      });
    });
  });
};

// Floating animation for hero elements
export const initFloatingAnimation = () => {
  anime({
    targets: '.hero-content',
    translateY: [-10, 10],
    duration: 3000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
};

// Particle-like animation for background elements
export const initBackgroundAnimations = () => {
  // Create floating particles
  const createParticles = () => {
    const particleCount = 50;
    const container = document.querySelector('.about-hero');
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 0, 0, 0.3);
        border-radius: 50%;
        pointer-events: none;
      `;
      
      container.appendChild(particle);
      
      anime({
        targets: particle,
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        opacity: [0, 1, 0],
        duration: () => anime.random(2000, 4000),
        delay: () => anime.random(0, 2000),
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  };

  createParticles();
};

// Text reveal animation
export const animateTextReveal = (selector) => {
  const textElements = document.querySelectorAll(selector);
  
  textElements.forEach(element => {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
      `<span style="opacity: 0;">${char}</span>`
    ).join('');
    
    anime({
      targets: element.querySelectorAll('span'),
      opacity: [0, 1],
      duration: 50,
      delay: anime.stagger(50),
      easing: 'easeOutExpo'
    });
  });
};