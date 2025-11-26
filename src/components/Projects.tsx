import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const defaultProjects: Project[] = [
    {
      title: 'Probability Distribution Visualizer',
      description:
        'An interactive web application for exploring and visualizing probability distributions. Features real-time parameter adjustment, multiple distribution types (Normal, Binomial, Poisson, Exponential), and both PDF and CDF visualizations with statistical calculations.',
      technologies: ['React', 'TypeScript', 'Recharts', 'jStat'],
      githubUrl: 'https://github.com/hossea2006/Probability-Distribution-Visualizer',
      liveUrl: 'https://hossea2006.github.io/Probability-Distribution-Visualizer/',
      imageUrl: '/assets/project1.png',
    },
    {
      title: 'AI Study Buddy',
      description:
        'An AI-powered learning platform that helps students study more effectively through automated flashcard generation, quiz creation, concept explanations, and progress tracking with spaced repetition.',
      technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'OpenAI API', 'Prisma'],
      githubUrl: 'https://github.com/hossea2006/AI-Study-Buddy',
      imageUrl: '/assets/project2.png',
    },
    {
      title: 'Project 3',
      description:
        'A mobile-responsive dashboard for data visualization and analytics. Includes interactive charts and real-time data updates.',
      technologies: ['React', 'D3.js', 'AWS', 'Docker'],
      githubUrl: 'https://github.com',
      imageUrl: 'https://via.placeholder.com/400x250?text=Project+3',
    },
  ];

  const displayProjects = projects || defaultProjects;

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Some of the projects I've worked on recently
        </p>

        <div className="projects-grid">
          {displayProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
