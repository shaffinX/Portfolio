import React, { useEffect } from 'react';
import './Landing.css';
import { initializeAnimations, setupScrollAnimations } from './AnimationHandler';

const Landing = () => {
  useEffect(() => {
    // Initialize page load animations
    initializeAnimations();
    
    // Setup scroll animations
    setupScrollAnimations();
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" data-animate="title">
              Hi, I'm <span className="name-highlight">Shaffin</span>
            </h1>
            <h2 className="hero-subtitle" data-animate="subtitle">
              Full Stack Developer
            </h2>
            <p className="hero-tagline" data-animate="tagline">
              Crafting digital experiences with modern technologies. 
              Passionate about creating scalable solutions that make a difference.
            </p>
            <div className="hero-buttons" data-animate="buttons">
              <button className="cta-button primary">
                <span>View My Work</span>
                <div className="button-glow"></div>
              </button>
              <button className="cta-button secondary">
                <span>Contact Me</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
          
          <div className="hero-image" data-animate="image">
            <div className="image-container">
              <div className="image-circle">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  <defs>
                    <radialGradient id="profileGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ff6b6b" />
                      <stop offset="100%" stopColor="#ff8e8e" />
                    </radialGradient>
                  </defs>
                  <circle cx="150" cy="150" r="140" fill="url(#profileGradient)" opacity="0.1" />
                  <circle cx="150" cy="150" r="130" fill="#1a1a1a" />
                  <text x="150" y="155" textAnchor="middle" fontSize="20" fill="#ff6b6b" fontFamily="Arial">
                    Your Photo
                  </text>
                </svg>
              </div>
              <div className="image-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" data-scroll-animate="skills">
        <div className="skills-container">
          <h2 className="section-title" data-animate="skills-title">
            Skills & Technologies
          </h2>
          
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category" data-animate="category-1">
              <h3 className="category-title">Frontend</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-icon">⚛️</div>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📱</div>
                  <span>React Native</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">⚡</div>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔷</div>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category" data-animate="category-2">
              <h3 className="category-title">Backend</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-icon">🟢</div>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐍</div>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🗄️</div>
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐘</div>
                  <span>PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔥</div>
                  <span>Express.js</span>
                </div>
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="skill-category" data-animate="category-3">
              <h3 className="category-title">DevOps & Tools</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-icon">🐙</div>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐳</div>
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">☁️</div>
                  <span>AWS</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔧</div>
                  <span>Webpack</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;