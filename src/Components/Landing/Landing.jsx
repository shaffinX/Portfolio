import React, { useEffect } from 'react';
import './Landing.css';
import { initializeAnimations, setupScrollAnimations } from './AnimationHandler';
import { useNavigate } from 'react-router-dom';
import prf from '../../Assets/prf.jpg';
import SkillsData from './data_sk';
import * as FaIcons from "react-icons/fa6";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as DiIcons from "react-icons/di";

const iconLibraries = {
  Fa: FaIcons,
  Ri: RiIcons,
  Io: IoIcons,
  Si: SiIcons,
  Tb: TbIcons,
  Di: DiIcons
};

const Landing = () => {
  useEffect(() => {
    // Initialize page load animations
    initializeAnimations();
    
    // Setup scroll animations
    setupScrollAnimations();
  }, []);

  const nav = useNavigate();

  return (
    <div className="portfolio-container1">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content1">
          <div className="hero-text">
            <h1 className="hero-title1" data-animate="title">
              Hi, I'm <span className="name-highlight">Shaffin</span>
            </h1>
            <h2 className="hero-subtitle1" data-animate="subtitle">
              Full Stack Developer
            </h2>
            <p className="hero-tagline1" data-animate="tagline">
              Crafting digital experiences with modern technologies. 
              Passionate about creating scalable solutions that make a difference.
            </p>
            <div className="hero-buttons" data-animate="buttons">
              <button className="cta-button primary" onClick={()=>{nav('/Portfolio')}}>
                <span>View My Work</span>
                <div className="button-glow"></div>
              </button>
              <button className="cta-button secondary" onClick={()=>{nav('/Contact')}}>
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
                    <clipPath id="circleClip">
                      <circle cx="150" cy="150" r="130" />
                    </clipPath>
                  </defs>
                  <circle cx="150" cy="150" r="140" fill="url(#profileGradient)" opacity="0.1" />
                  <circle cx="150" cy="150" r="130" fill="#1a1a1a" />
                  <image href={prf} x="20" y="20" width="260" height="260" clipPath="url(#circleClip)" preserveAspectRatio="xMidYMid slice"/>
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
            {SkillsData.map((data, index) => (
              <div key={index}>
                <div className="skill-category" data-animate={data.category}>
                  <h3 className="category-title">{data.name}</h3>
                  <div className="skills-list">
                    {data.skills.map((skill, idx) => {
                      const IconSet = iconLibraries[skill.type] || {};
                      const IconComponent = IconSet?.[skill.icon];
                      return(
                        <div className="skill-item" key={idx}>
                          {IconComponent?<IconComponent className="skill-icon"/>:<span>#</span>}
                          <span>{skill.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;