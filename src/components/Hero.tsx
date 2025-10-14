import './Hero.css';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Hero = ({
  name,
  title,
  description,
  imageUrl
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
