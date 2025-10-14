import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

const Navbar = ({ githubUrl = '', linkedinUrl = '' }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Portfolio</h2>
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experience
              </button>
            </li>
          </ul>

          <div className="navbar-social">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
