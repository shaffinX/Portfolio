import anime from 'animejs/lib/anime.es.js';

// Page Load Animations
export const initContactAnimations = () => {
  // Header animation
  anime({
    targets: '.contact-header',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 300
  });

  // Stagger background circles
  anime({
    targets: '.bg-circle',
    scale: [0, 1],
    opacity: [0, 0.05],
    duration: 1500,
    easing: 'easeOutElastic(1, .8)',
    delay: anime.stagger(200, { start: 800 })
  });

  // Title character animation
  anime({
    targets: '.contact-title',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutExpo',
    delay: 600
  });
};

// Scroll Animations
export const handleScrollAnimations = (element) => {
  if (element.classList.contains('contact-form-section')) {
    anime({
      targets: element,
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 800,
      easing: 'easeOutExpo'
    });

    // Animate form elements
    anime({
      targets: element.querySelectorAll('.form-group'),
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      easing: 'easeOutExpo',
      delay: anime.stagger(100, { start: 200 })
    });
  }

  if (element.classList.contains('contact-info-section')) {
    anime({
      targets: element,
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 800,
      easing: 'easeOutExpo'
    });

    // Animate contact methods
    anime({
      targets: element.querySelectorAll('.contact-method'),
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 600,
      easing: 'easeOutExpo',
      delay: anime.stagger(150, { start: 300 })
    });

    // Animate social links
    anime({
      targets: element.querySelectorAll('.social-link'),
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 500,
      easing: 'easeOutExpo',
      delay: anime.stagger(100, { start: 600 })
    });
  }
};

// Hover Animations
export const handleHoverAnimations = (element, type) => {
  switch (type) {
    case 'button-hover':
      anime({
        targets: element,
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(255, 0, 0, 0.3)',
        duration: 300,
        easing: 'easeOutExpo'
      });
      break;

    case 'button-leave':
      anime({
        targets: element,
        scale: 1,
        boxShadow: '0 0px 0px rgba(255, 0, 0, 0)',
        duration: 300,
        easing: 'easeOutExpo'
      });
      break;

    case 'input-hover':
      anime({
        targets: element,
        scale: 1.02,
        duration: 200,
        easing: 'easeOutQuad'
      });
      break;

    case 'input-leave':
      anime({
        targets: element,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad'
      });
      break;

    case 'social-hover':
      anime({
        targets: element,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutExpo'
      });
      
      anime({
        targets: element.querySelector('.social-icon'),
        rotate: '360deg',
        duration: 500,
        easing: 'easeOutExpo'
      });
      break;

    case 'social-leave':
      anime({
        targets: element,
        scale: 1,
        duration: 300,
        easing: 'easeOutExpo'
      });
      break;

    case 'submit':
      anime({
        targets: element,
        scale: [1, 0.95, 1],
        duration: 200,
        easing: 'easeOutExpo'
      });
      
      // Success animation
      anime({
        targets: element.querySelector('.btn-text'),
        opacity: [1, 0, 1],
        duration: 300,
        easing: 'easeOutExpo',
        complete: () => {
          element.querySelector('.btn-text').textContent = 'Message Sent!';
          setTimeout(() => {
            element.querySelector('.btn-text').textContent = 'Send Message';
          }, 2000);
        }
      });
      break;

    default:
      break;
  }
};

// Utility function for custom animations
export const customAnimation = (targets, properties) => {
  return anime({
    targets,
    ...properties
  });
};

// Mouse follower effect
export const initMouseFollower = () => {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  anime({
    targets: '.bg-circle-1',
    translateX: () => mouseX * 0.02,
    translateY: () => mouseY * 0.02,
    duration: 1000,
    easing: 'easeOutExpo',
    loop: true
  });

  anime({
    targets: '.bg-circle-2',
    translateX: () => mouseX * -0.01,
    translateY: () => mouseY * -0.01,
    duration: 1500,
    easing: 'easeOutExpo',
    loop: true
  });
};

// Parallax scroll effect
export const initParallaxScroll = () => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.bg-circle');
    
    parallax.forEach((element, index) => {
      const speed = (index + 1) * 0.5;
      anime.set(element, {
        translateY: scrolled * speed
      });
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};