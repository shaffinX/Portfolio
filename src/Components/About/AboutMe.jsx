import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import { 
  initPageAnimations, 
  initScrollAnimations, 
  initHoverAnimations 
} from './AnimationHandler4';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const pageRef = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    // Initialize all animations when component mounts
    initPageAnimations();
    initScrollAnimations();
    initHoverAnimations();
  }, []);

  return (
    <div className="about-container" ref={pageRef}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title animate-title">About Me</h1>
          <div className="hero-subtitle animate-subtitle">
            Crafting Digital Experiences with Passion
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        {/* Biography Section */}
        <section className="bio-section animate-section">
          <div className="content-wrapper">
            <h2 className="section-heading animate-heading">Who I Am</h2>
            <div className="bio-content">
              <div className="bio-text animate-text">
                <p>
                 My name is Shaffin Imam, and I am a dedicated Full Stack Developer with over three years of hands-on experience building innovative and reliable digital solutions. My expertise spans web, mobile, and desktop application development, allowing me to create cohesive experiences that work seamlessly across platforms. I am highly skilled in both front-end and back-end technologies, enabling me to take projects from initial concept all the way to deployment and maintenance.
                </p>
                <p>
                  In addition to development, I have a strong background in DevOps and server management, which empowers me to design, deploy, and scale secure and efficient infrastructures. I am adept at automating workflows, optimizing performance, and implementing best practices to ensure robust and scalable systems.
                </p>
                <p>
                  As a problem-solver at heart, I am passionate about leveraging technology to solve real-world challenges and deliver measurable value.
                </p>
              </div>
              <div className="bio-stats animate-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Me Unique Section */}
        <section className="unique-section animate-section">
          <div className="content-wrapper">
            <h2 className="section-heading animate-heading">What Makes Me Unique</h2>
            
            <div className="unique-grid">
              <div className="unique-card animate-card" data-category="skills">
                <div className="card-icon">🚀</div>
                <h3 className="card-title">Technical Excellence</h3>
                <p className="card-description">
                  Proficient in modern JavaScript frameworks, cloud technologies, 
                  and emerging tech stacks. I stay ahead of the curve with 
                  continuous learning and experimentation.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">AWS</span>
                </div>
              </div>

              <div className="unique-card animate-card" data-category="passions">
                <div className="card-icon">🎨</div>
                <h3 className="card-title">Design & UX Focus</h3>
                <p className="card-description">
                  I believe great code should be matched with exceptional design. 
                  My passion for UI/UX ensures every project delivers both 
                  functionality and aesthetic appeal.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">UI/UX Design</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Animation</span>
                  <span className="skill-tag">Responsive</span>
                </div>
              </div>

              <div className="unique-card animate-card" data-category="values">
                <div className="card-icon">🤝</div>
                <h3 className="card-title">Collaborative Spirit</h3>
                <p className="card-description">
                  Strong believer in teamwork, knowledge sharing, and mentoring. 
                  I thrive in collaborative environments where ideas flow freely 
                  and innovation happens naturally.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">Team Leadership</span>
                  <span className="skill-tag">Mentoring</span>
                  <span className="skill-tag">Agile</span>
                  <span className="skill-tag">Communication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section animate-section">
          <div className="content-wrapper">
            <div className="cta-content">
              <h2 className="cta-title animate-heading">Let's Build Something Amazing</h2>
              <p className="cta-description animate-text">
                Ready to turn your ideas into reality? I'm always excited to 
                collaborate on innovative projects and explore new challenges.
              </p>
              <button className="cta-buttonaaa animate-button hover-button" onClick={()=> nav('/Contact')}>
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;