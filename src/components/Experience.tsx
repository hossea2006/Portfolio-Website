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
      company: 'Lindt & Sprüngli',
      position: 'Sales Associate',
      duration: 'Jul 2025 - Present',
      location: 'Hamilton, ON',
      description: [
        'Deliver exceptional customer service by creating positive and engaging in-store experiences',
        'Provide expert product knowledge and recommendations to customers about premium chocolate products',
        'Consistently contribute to achieving weekly, monthly, and annual sales targets through effective selling skills',
        'Promote current marketing programs and utilize company resources to optimize sales activity',
        'Maintain operational standards including cash management, inventory restocking, and store cleanliness',
        'Monitor product date codes and pricing to ensure quality assurance compliance',
      ],
    },
    {
      company: 'Pitch Perfect Solutions',
      position: 'Transfer Agent',
      duration: 'Apr 2024 - Sep 2024',
      location: 'Hamilton, ON',
      description: [
        'Utilized auto-calling dialer system to efficiently manage high-volume customer calls',
        'Conducted pre-qualifying questions about Medicare benefits and insurance eligibility',
        'Informed customers about potential new benefits and increased coverage at no additional cost',
        'Accurately dispositioned calls based on context and customer responses',
        'Transferred qualified customers to licensed agents after meeting all requirements',
        'Maintained positive and professional attitude when handling diverse customer feedback',
      ],
    },
    {
      company: 'CityKidz',
      position: 'Hallway Monitor',
      duration: 'Sep 2023 - Dec 2023',
      location: 'Hamilton, ON',
      description: [
        'Guided and supervised children during events ensuring their safety and engagement',
        'Maintained effective communication with team members via walkie-talkie',
        'Supported post-show cleanup operations to maintain facility standards',
      ],
    },
    {
      company: 'Tim Hortons',
      position: 'Counter Staff Member',
      duration: 'Jun 2021 - Feb 2022',
      location: 'Hamilton, ON',
      description: [
        'Enhanced customer satisfaction by providing friendly and efficient service at front counter',
        'Managed cash transactions, took orders, and handled customer inquiries professionally',
        'Assisted in inventory management to optimize product availability and minimize waste',
        'Collaborated with team members to provide seamless service during peak rush hours',
        'Trained new employees on company procedures, fostering a positive work environment',
        'Monitored equipment maintenance needs and reported issues promptly for timely repairs',
      ],
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
