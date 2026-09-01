import './Projects.css';

export default function Projects() {
  const githubBaseUrl = "https://github.com/hithaishial";

  const projectList = [
    {
      id: 1,
    title: 'Portfolio Website',
    desc: 'Personal portfolio application built to showcase skills and project experience.',
    tags: ['React', 'Vite', 'CSS3'],
    githubLink: 'https://github.com/hithaishial/portfolio-using-react'
  },  
  {
    id: 2,
    title: 'Static YouTube & Spotify Webpage',
    desc: 'A clean clone page featuring landing interfaces built with modern responsive styling.',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    githubLink: 'https://github.com/hithaishial/spotify-clone-page'
    },
    {
      id: 3,
      title: 'Student Management System',
      desc: 'A complete system for handling student records, course allocations, and grade tracking.',
      tags: ['Java', 'OOP', 'Data Structures'],
      githubLink: `https://github.com/hithaishial/mini-project-student-management-system/student-management-system`
    },
    {
      id: 4,
      title: 'Bank Loan Form',
      desc: 'An interactive multi-step web application built for processing bank loan applications.',
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      githubLink: `https://github.com/hithaishial/Bank-loan-form/bank-loan-form`
    },
    {
      id: 5,
      title: 'Basic Web Development Projects',
      desc: 'A collection of foundational frontend projects demonstrating layout techniques and DOM manipulation.',
      tags: ['HTML5', 'CSS Flexbox', 'JavaScript'],
      githubLink: `https://github.com/hithaishial/basic-website-projects`
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">Some of the works and concepts I have built</p>
        
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
              >
                View Code on GitHub <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}