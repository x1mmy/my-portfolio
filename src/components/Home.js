// src/components/Intro.js
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import "../styles/Home.css";

function Home() {
  const [showContent, setShowContent] = useState(false);

  // Show content after a brief delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="intro-section">
      <div className="container-custom">
        <div className="intro-content">
          {/* Animated greeting */}
          <div className="intro-greeting">

            <TypeAnimation
              sequence={[
                'hi, zimraan here.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: 'var(--purple-bright)' }}
              cursor={true}
              repeat={0}
              
            />
          </div>

          {/* Subtitle with fade-in animation */}
          <div className={`intro-subtitle ${showContent ? 'fade-in' : ''}`}>
            I like to build things for the web.
          </div>

          {/* Description */}
          <div className={`intro-description ${showContent ? 'fade-in delay-1' : ''}`}>
            I'm a software engineer passionate about creating digital experiences 
            that are both beautiful and functional. Currently focused on building 
            responsive web applications with modern technologies.
          </div>

          {/* Call to action */}
          <div className={`intro-cta ${showContent ? 'fade-in delay-2' : ''}`}>
            <a href="mailto:zimraan2012@gmail.com" className="cta-button">
              <EmailRoundedIcon />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`scroll-indicator ${showContent ? 'fade-in delay-3' : ''}`}>
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;