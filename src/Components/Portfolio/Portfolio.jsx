// Portfolio.jsx
import React, { useEffect, useRef,useState } from 'react';
import './Portfolio.css';
import projects from './data'; // Assuming you have a data.js file with project details
import { 
  initPageAnimations, 
  initScrollAnimations, 
  initHoverAnimations 
} from './AnimationHandler2';

const Portfolio = () => {
  const portfolioRef = useRef(null);

  //----------------------------------------
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleReadMore = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const maxLength = 200;
  //----------------------------------------
  

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
          {projects.map((project, index) => {
            const isExpanded = expandedDescriptions[project.id];
            const isLong = project.description.length > maxLength;
            const displayedText = isExpanded
              ? project.description
              : project.description.slice(0, maxLength);

            return (
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
                    {displayedText}
                    {isLong && !isExpanded && '...'}
                    {isLong && (
                    <span
                      onClick={() => toggleReadMore(project.id)}
                      className="read-more-button"
                      style={{ color: 'red', cursor: 'pointer' }}
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </span>
                  )}
                  </p>
                  

                  <div className="tech-stack">
                    <h4 className="tech-stack-title">Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag animate-tech-tag"
                        >
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
            );
          })}
        </div>
      </div>
    </section>

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="20"><span className="stat-value">0</span>+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item animate-stat">
              <div className="stat-number" data-value="30"><span className="stat-value">0</span>+</div>
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