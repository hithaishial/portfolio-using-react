import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="badge">Welcome to my portfolio</span>
        <h1>Hi, I'm <span className="highlight">Hithaishi</span> 👋</h1>
        <p className="hero-bio">
          Frontend Developer crafting clean, responsive, and interactive web experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}