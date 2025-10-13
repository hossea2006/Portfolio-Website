import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

export interface JobExperience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

interface ExperienceProps {
  experiences?: JobExperience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const defaultExperiences: JobExperience[] = [
    {
      company: 'Company Name 1',
      position: 'Senior Software Developer',
      duration: 'Jan 2022 - Present',
      location: 'Remote',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Architected and deployed scalable cloud infrastructure on AWS',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
    },
    {
      company: 'Company Name 2',
      position: 'Software Developer',
      duration: 'Jun 2020 - Dec 2021',
      location: 'New York, NY',
      description: [
        'Developed and maintained full-stack web applications',
        'Collaborated with cross-functional teams to deliver features',
        'Optimized database queries improving performance by 40%',
        'Integrated third-party APIs and payment systems',
      ],
      technologies: ['C#', '.NET', 'SQL Server', 'React', 'Azure'],
    },
    {
      company: 'Company Name 3',
      position: 'Junior Developer',
      duration: 'Jan 2019 - May 2020',
      location: 'San Francisco, CA',
      description: [
        'Built responsive web applications using modern frameworks',
        'Participated in agile development processes and sprint planning',
        'Fixed bugs and implemented new features based on user feedback',
        'Wrote unit tests to ensure code quality and reliability',
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    },
  ];

  const displayExperiences = experiences || defaultExperiences;

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey as a developer</p>

        <div className="timeline">
          {displayExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-duration">{exp.duration}</span>
                    {exp.location && (
                      <span className="experience-location">{exp.location}</span>
                    )}
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
