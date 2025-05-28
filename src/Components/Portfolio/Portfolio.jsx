// Portfolio.jsx
import React, { useEffect, useRef } from 'react';
import './Portfolio.css';
import projects from './data'; // Assuming you have a data.js file with project details
import { 
  initPageAnimations, 
  initScrollAnimations, 
  initHoverAnimations 
} from './AnimationHandler2';

const Portfolio = () => {
  const portfolioRef = useRef(null);

  

  useEffect(() => {
    initPageAnimations();
    initScrollAnimations();
    initHoverAnimations();
  }, []);

  return (
    <div className="portfolio-container" ref={portfolioRef}>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-content">
          <h1 className="hero-title animate-title">
            My Portfolio
          </h1>
          <p className="hero-subtitle animate-subtitle">
            Discover my latest projects and technical achievements
          </p>
          <div className="hero-divider animate-divider"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title animate-section-title">
            Featured Projects
          </h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card animate-project-card animate-on-scroll`}
                data-index={index}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title-mobile">{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="tech-stack">
                    <h4 className="tech-stack-title">Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag animate-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <a 
                      href={project.sourceCode}
                      className="btn-primary animate-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-text">View Source</span>
                      <div className="btn-glow"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="15"><span className="stat-value">0</span>+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="8"><span className="stat-value">0</span>+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="3"><span className="stat-value">0</span>+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="100"><span className="stat-value">0</span>%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;