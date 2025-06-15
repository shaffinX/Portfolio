import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const NotFoundPage = () => {
  const containerRef = useRef(null);
  const glitchRef = useRef(null);
  const particlesRef = useRef(null);
  const codeRef = useRef(null);

  useEffect(() => {
    // Main container fade in
    anime({
      targets: containerRef.current,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuart'
    });

    // Glitch effect on 404 text
    const glitchAnimation = () => {
      anime({
        targets: glitchRef.current,
        translateX: [
          { value: -2, duration: 100 },
          { value: 2, duration: 100 },
          { value: -1, duration: 100 },
          { value: 1, duration: 100 },
          { value: 0, duration: 100 }
        ],
        opacity: [
          { value: 0.8, duration: 100 },
          { value: 1, duration: 100 },
          { value: 0.9, duration: 100 },
          { value: 1, duration: 100 }
        ],
        easing: 'easeInOutQuart',
        complete: () => {
          setTimeout(glitchAnimation, Math.random() * 3000 + 2000);
        }
      });
    };
    setTimeout(glitchAnimation, 1000);

    // Floating particles animation
    anime({
      targets: '.particle',
      translateY: [
        { value: -10, duration: 2000 },
        { value: 10, duration: 2000 }
      ],
      translateX: [
        { value: -5, duration: 1500 },
        { value: 5, duration: 1500 }
      ],
      opacity: [
        { value: 0.3, duration: 1000 },
        { value: 0.8, duration: 1000 },
        { value: 0.3, duration: 1000 }
      ],
      delay: anime.stagger(200),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    // Code rain effect
    anime({
      targets: '.code-line',
      opacity: [0, 0.6, 0],
      translateY: ['-100vh', '100vh'],
      duration: 4000,
      delay: anime.stagger(300),
      loop: true,
      easing: 'linear'
    });

    // Pulse effect on error message
    anime({
      targets: '.error-message',
      scale: [
        { value: 1, duration: 1000 },
        { value: 1.02, duration: 1000 }
      ],
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });

    // Button hover animations will be handled by CSS, but initial state
    anime({
      targets: '.action-button',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: 1500,
      duration: 800,
      easing: 'easeOutBack'
    });

  }, []);

  const handleButtonClick = (action) => {
    anime({
      targets: '.action-button',
      scale: [1, 0.95, 1],
      duration: 200,
      easing: 'easeInOutQuad',
      complete: () => {
        if (action === 'home') {
          window.location.href = '/';
        } else if (action === 'back') {
          window.history.back();
        }
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="not-found-container"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0
      }}
    >
      {/* Background code rain */}
      <div 
        ref={codeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              color: '#ff0000',
              fontSize: '12px',
              opacity: 0,
              fontWeight: 'bold'
            }}
          >
            {Math.random() > 0.5 ? '01010101' : '10101010'}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div 
        ref={particlesRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: '#ff0000',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #ff0000'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{ textAlign: 'center', zIndex: 3, position: 'relative' }}>
        {/* 404 Title with glitch effect */}
        <div 
          ref={glitchRef}
          style={{
            fontSize: 'clamp(80px, 15vw, 200px)',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #ff0000, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '2px 2px 4px rgba(255, 0, 0, 0.5)',
            position: 'relative'
          }}
        >
          404
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #ff0000, #000000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              zIndex: -1,
              transform: 'translate(2px, 2px)',
              opacity: 0.3
            }}
          >
            404
          </div>
        </div>

        {/* Error message */}
        <div 
          className="error-message"
          style={{
            fontSize: 'clamp(18px, 4vw, 28px)',
            marginBottom: '30px',
            color: '#ffffff',
            textShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
          }}
        >
          <div style={{ marginBottom: '10px' }}>PAGE NOT FOUND</div>
          <div style={{ 
            fontSize: 'clamp(14px, 3vw, 18px)', 
            color: '#cccccc',
            fontFamily: 'Arial, sans-serif'
          }}>
            The page you're looking for has vanished into the void
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="action-button"
            onClick={() => handleButtonClick('home')}
            style={{
              padding: '15px 30px',
              backgroundColor: 'transparent',
              border: '2px solid #ff0000',
              color: '#ffffff',
              fontSize: '16px',
              fontFamily: "'Courier New', monospace",
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff0000';
              e.target.style.color = '#000000';
              e.target.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
              e.target.style.boxShadow = 'none';
            }}
          >
            GO HOME
          </button>

          <button
            className="action-button"
            onClick={() => handleButtonClick('back')}
            style={{
              padding: '15px 30px',
              backgroundColor: 'transparent',
              border: '2px solid #ffffff',
              color: '#ffffff',
              fontSize: '16px',
              fontFamily: "'Courier New', monospace",
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ffffff';
              e.target.style.boxShadow = 'none';
            }}
          >
            GO BACK
          </button>
        </div>

        {/* Additional decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '100px',
          height: '100px',
          border: '1px solid rgba(255, 0, 0, 0.3)',
          borderRadius: '50%',
          animation: 'rotate 10s linear infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-30px',
          width: '60px',
          height: '60px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: 'rotate 15s linear infinite reverse'
        }} />
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .not-found-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;