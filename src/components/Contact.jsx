import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">Feel free to reach out for collaborations or queries!</p>
      
      <div className="contact-cards">
        <div className="card">
          <h3>Email</h3>
          <a href="mailto:hithaishi@example.com">hithaishial2007@gamil.com</a>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <a href="tel:+919876543210">+91 82968 44243</a>
        </div>
      </div>
    </section>
  );
}