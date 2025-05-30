import React, { useEffect, useRef } from 'react';
import './Resume.css';
import { 
  initPageAnimations, 
  initScrollAnimations, 
  initHoverAnimations 
} from './AnimationHandler3';
import { FaDownload } from "react-icons/fa6";

const Resume = () => {
  const pageRef = useRef(null);
  const resumeContainerRef = useRef(null);
  const downloadBtnRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Initialize all animations
    initPageAnimations();
    initScrollAnimations();
    initHoverAnimations();
  }, []);

  const handleDownload = () => {
    // Replace with your actual resume PDF path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'ShaffinX_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page" ref={pageRef}>
      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header" ref={headerRef}>
          <h1 className="page-title gradient-text animate-title">
            Resume / CV
          </h1>
          <p className="page-subtitle animate-subtitle">
            Professional Experience & Skills
          </p>
        </header>

        {/* Resume Viewer Section */}
        <section className="resume-viewer-section animate-section">
          <div className="resume-controls">
            <button 
              className="download-btn gradient-btn animate-btn"
              onClick={handleDownload}
              ref={downloadBtnRef}
            >
              <span className="btn-icon"><FaDownload color='white'/></span>
              Download PDF
            </button>
          </div>

          <div className="resume-container-wrapper" ref={resumeContainerRef}>
            <div className="resume-embed animate-embed">
              {/* <iframe
                type="application/pdf"
                src={`https://docs.google.com/gview?url=localhost:3000/resume.pdf&embedded=true`}
                title="Resume PDF"
                className="pdf-viewer"
                width="100%"
                height="800px"
                allow="autoplay"
                loading="lazy"
                
              /> */}
              <object
                  data="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  type="application/pdf"
                  width="100%"
                  height="800px"
                  className="pdf-viewer"
                >
                  <embed
                    src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                    type="application/pdf"
                    width="100%"
                    height="800px"
                  />
             </object>

            </div>
          </div>
        </section>

        {/* Floating Elements for Visual Appeal */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;