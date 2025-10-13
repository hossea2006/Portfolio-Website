import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

const Navbar = ({ githubUrl = '', linkedinUrl = '' }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Portfolio</h2>
        </div>

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
    </nav>
  );
};

export default Navbar;
