import linguaImage from '@/assets/lingua-project.jpg';
import aiImage from '@/assets/ai-project-bg.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lingua',
      description: 'A revolutionary multilingual chat application with real-time translation capabilities, breaking down language barriers for global communication.',
      image: linguaImage,
      tech: ['React', 'JavaScript', 'Translation API', 'Real-time Chat'],
      github: 'https://github.com/dhruvacodes',
      live: 'https://lingua-demo.com',
      featured: true
    },
    {
      title: 'AI Study Planner',
      description: 'Smart AI-powered study scheduler that adapts to student learning patterns and optimizes study sessions for maximum efficiency.',
      image: aiImage,
      tech: ['Python', 'AI/ML', 'Flask', 'Data Analytics'],
      github: 'https://github.com/dhruvacodes',
      live: 'https://study-planner.com',
      featured: true
    },
    {
      title: 'Anantam Racing Portfolio',
      description: 'Complete F1 in Schools team portfolio featuring pit display game, fundraising campaigns, and team achievements.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Game Development'],
      github: 'https://github.com/dhruvacodes',
      live: 'https://anantam-racing.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine creativity with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-tile group ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-sm"
                  >
                    <i className="fab fa-github mr-2"></i>
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center transition-all duration-300 hover:bg-primary-glow text-sm"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            id="profile-link"
            href="https://github.com/dhruvacodes" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center justify-center"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;