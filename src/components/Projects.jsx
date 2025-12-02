import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Kurakani – Real-time Chat App',
            description: 'Responsive real-time chat application with seamless text, image, and friend request management features. Built with secure authentication and AJAX-based message handling.',
            tags: ['PHP', 'MySQL', 'AJAX', 'JavaScript'],
            image: 'https://placehold.co/600x400/1e293b/38bdf8?text=Kurakani',
            link: 'https://github.com/Hari-Parajuli/kurakani-Realtime-Chat-App'
        },
        {
            id: 2,
            title: 'ThinkLog - Full-Stack MERN Project',
            description: 'MERN Stack notes application where users can View, Create, Update and Delete notes. Features REST APIs, rate limiting with Redis (Upstash), and Tailwind CSS for styling.',
            tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'Tailwind CSS', 'REST APIs'],
            image: 'https://placehold.co/600x400/1e293b/818cf8?text=ThinkLog',
            link: 'https://github.com/Hari-Parajuli/ThinkLog'
        },
        {
            id: 3,
            title: 'Bank Account Management System',
            description: 'Functional banking system with login/signup, balance operations, and fund transfer. Designed with clear workflows and efficient logic handling.',
            tags: ['Java', 'OOP', 'Console'],
            image: 'https://placehold.co/600x400/1e293b/a855f7?text=Bank+System',
            link: 'https://github.com/Hari-Parajuli/CustomerBankAccountManagementSystem'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
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
