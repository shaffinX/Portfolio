import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { 
  initContactAnimations, 
  handleHoverAnimations, 
  handleScrollAnimations 
} from './AnimationHandler5';
import { useForm } from '@formspree/react';
import { FaLinkedin,FaGithub,FaXTwitter,FaInstagram } from "react-icons/fa6";


const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const headerRef = useRef(null);
  const [state, handleSubmit] = useForm("xqabzqyp");
  useEffect(() => {
    if (state.succeeded) {
      alert("Message Sent, Successfully!")
      window.location.reload()
    }
     // eslint-disable-next-line
  }, [state]);

  useEffect(() => {
    // Initialize page load animations
    initContactAnimations();
    
    // Setup scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleScrollAnimations(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements for scroll animations
    const elements = [formRef.current, socialRef.current, headerRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-container" ref={contactRef}>
      <div className="contact-content">
        {/* Header Section */}
        <div className="contact-header" ref={headerRef}>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let's create something amazing together. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="contact-main">
          {/* Contact Form */}
          <div className="contact-form-section" ref={formRef}>
            <div className="form-container">
              <h2 className="form-title">Send Message</h2>
              <form 
                action="https://formspree.io/f/xqabzqyp" 
                method="POST" 
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-input"
                    required
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'input-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'input-leave')}
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'input-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'input-leave')}
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-input"
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'input-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'input-leave')}
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-textarea"
                    rows="6"
                    required
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'input-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'input-leave')}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  onMouseEnter={(e) => handleHoverAnimations(e.target, 'button-hover')}
                  onMouseLeave={(e) => handleHoverAnimations(e.target, 'button-leave')}
                >
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="contact-info-section" ref={socialRef}>
            <div className="contact-info">
              <h2 className="info-title">Connect With Me</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">✉</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <a href="mailto:imamshaffin@gmail.com">imamshaffin@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-icons">
                  <a 
                    href="https://www.linkedin.com/in/shaffin-imam-4b100a372" 
                    className="social-link linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'social-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'social-leave')}
                  >
                    <FaLinkedin color='#0072b1' className="social-icon"/>
                    <span className="social-name">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/shaffinX" 
                    className="social-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'social-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'social-leave')}
                  >
                    <FaGithub color='#6cc644' className="social-icon"/>
                    <span className="social-name">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://x.com/Code_SXc?s=09" 
                    className="social-link twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'social-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'social-leave')}
                  >
                    <FaXTwitter color='white'  className="social-icon"/>
                    <span className="social-name">Twitter</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/shaffinx?igsh=MW81anlhc2xnd2xqOQ==" 
                    className="social-link instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleHoverAnimations(e.target, 'social-hover')}
                    onMouseLeave={(e) => handleHoverAnimations(e.target, 'social-leave')}
                  >
                    <FaInstagram color='#d62976' className="social-icon"/>
                    <span className="social-name">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </div>
  );
};

export default Contact;