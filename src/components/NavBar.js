// src/components/NavBar.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="#intro" className="navbar-brand">
          Zimraan Anjum
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main navigation links */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>

          {/* Social links */}
          <Nav className="social-links">
            <Nav.Link 
              href="mailto:zimraan2012@gmail.com"
              title="Email"
            >
              <EmailRoundedIcon />
            </Nav.Link>
            <Nav.Link 
              href="https://github.com/x1mmy" 
              target="_blank"
              title="GitHub"
            >
              <GitHubIcon />
            </Nav.Link>
            <Nav.Link 
              href="https://www.linkedin.com/in/zimraananjum/" 
              target="_blank"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;