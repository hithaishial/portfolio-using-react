import './About.css';
import profilePic from '../assets/profilephoto.jpeg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="image-wrapper">
          <img src={profilePic} alt="Hithaishi" className="profile-img" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate developer focused on building modern web applications. 
            I enjoy transforming ideas into clean code and intuitive user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}