import anime from 'animejs/lib/anime.es.js';

// Page Load Animations
export const initPageAnimations = () => {
  // Title animation
  anime({
    targets: '.animate-title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 300
  });

  // Subtitle animation
  anime({
    targets: '.animate-subtitle',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 600
  });

  // Section animation
  anime({
    targets: '.animate-section',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 900
  });

  // Button animation
  anime({
    targets: '.animate-btn',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutBack',
    delay: 1200
  });

  // Embed animation
  anime({
    targets: '.animate-embed',
    scale: [0.95, 1],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1400
  });

  // Floating circles animation
  anime({
    targets: '.floating-circle',
    scale: [0, 1],
    opacity: [0, 0.6],
    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
    delay: anime.stagger(200, {start: 1000})
  });
};

// Scroll Animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate elements coming into view
        anime({
          targets: entry.target,
          translateX: [entry.target.dataset.direction === 'right' ? 100 : -100, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }
    });
  }, observerOptions);

  // Add scroll animation to resume sections
  document.querySelectorAll('.resume-viewer-section').forEach(el => {
    observer.observe(el);
  });
};

// Hover Animations
export const initHoverAnimations = () => {
  // Download button hover
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('mouseenter', () => {
      anime({
        targets: downloadBtn,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutBack'
      });
    });

    downloadBtn.addEventListener('mouseleave', () => {
      anime({
        targets: downloadBtn,
        scale: 1,
        duration: 300,
        easing: 'easeOutBack'
      });
    });
  }

  // Title hover effect
  const title = document.querySelector('.page-title');
  if (title) {
    title.addEventListener('mouseenter', () => {
      anime({
        targets: title,
        scale: 1.02,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });

    title.addEventListener('mouseleave', () => {
      anime({
        targets: title,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  }
};

// Utility function for custom animations
export const animateElement = (target, properties, options = {}) => {
  return anime({
    targets: target,
    ...properties,
    duration: options.duration || 1000,
    easing: options.easing || 'easeOutExpo',
    ...options
  });
};

// Button click animation
export const buttonClickAnimation = (target) => {
  anime({
    targets: target,
    scale: [1, 0.95, 1],
    duration: 200,
    easing: 'easeInOutQuad'
  });
};

// Loading animation for PDF
export const pdfLoadingAnimation = () => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  timeline
    .add({
      targets: '.pdf-viewer',
      opacity: [0, 1],
      scale: [0.9, 1],
    })
    .add({
      targets: '.resume-controls',
      translateY: [-20, 0],
      opacity: [0, 1],
    }, '-=500');

  return timeline;
};