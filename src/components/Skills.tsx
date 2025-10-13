import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiSharp,
  SiDotnet,
} from 'react-icons/si';
import './Skills.css';

export interface Skill {
  name: string;
  icon: React.ReactElement;
  color: string;
}

interface SkillsProps {
  customSkills?: Skill[];
}

const Skills = ({ customSkills }: SkillsProps) => {
  const defaultSkills: Skill[] = [
    {
      name: 'React',
      icon: <FaReact />,
      color: '#61DAFB',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      color: '#3178C6',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      color: '#339933',
    },
    {
      name: 'C#',
      icon: <SiSharp />,
      color: '#239120',
    },
    {
      name: '.NET',
      icon: <SiDotnet />,
      color: '#512BD4',
    },
    {
      name: 'AWS',
      icon: <FaAws />,
      color: '#FF9900',
    },
    {
      name: 'Docker',
      icon: <FaDocker />,
      color: '#2496ED',
    },
    {
      name: 'SQL Server',
      icon: <FaDatabase />,
      color: '#CC2927',
    },
  ];

  const skills = customSkills || defaultSkills;

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I work with to bring ideas to life
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
