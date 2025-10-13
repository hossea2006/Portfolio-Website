import './Hero.css';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Hero = ({
  name = 'Your Name',
  title = 'Software Developer',
  description = "I'm passionate about building scalable web applications and solving complex problems with clean, efficient code. I love working with modern technologies and continuously learning new skills to create innovative solutions.",
  imageUrl = 'https://via.placeholder.com/400x400?text=Your+Photo'
}: HeroProps) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hi, I'm</h1>
            <h2 className="hero-name">{name}</h2>
            <h3 className="hero-title">{title}</h3>
            <p className="hero-description">{description}</p>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
