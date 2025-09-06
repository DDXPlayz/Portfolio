const ExperienceSection = () => {
  const experiences = [
    {
      title: 'F1 in Schools - Anantam Racing',
      role: 'Team Member & Tech Lead',
      period: '2023 - Present',
      description: 'Leading technical development for our F1 in Schools team, including car design optimization, pit display game development, and fundraising campaign management.',
      achievements: ['Developed interactive pit display game', 'Led fundraising technology initiatives', 'Optimized car aerodynamics using simulation'],
      icon: 'fas fa-racing-car'
    },
    {
      title: 'Technical Internship',
      role: 'Software Development Intern',
      period: '2023',
      description: 'Gained hands-on experience in professional software development, working on real-world projects and learning industry best practices.',
      achievements: ['Built production-ready features', 'Collaborated with senior developers', 'Learned agile development methodologies'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Leadership Summit',
      role: 'Participant & Speaker',
      period: '2023',
      description: 'Participated in youth leadership programs, developing communication skills and sharing insights about technology and innovation.',
      achievements: ['Delivered tech innovation presentation', 'Networked with industry leaders', 'Developed leadership skills'],
      icon: 'fas fa-users'
    },
    {
      title: 'Model United Nations',
      role: 'Delegate',
      period: '2022 - Present',
      description: 'Active participation in MUN conferences, developing diplomatic skills, public speaking, and global awareness.',
      achievements: ['Won Best Delegate award', 'Improved public speaking skills', 'Enhanced global perspective'],
      icon: 'fas fa-globe'
    }
  ];

  const serviceProjects = [
    {
      title: 'Eco-Friendly T-Shirt NGO Fundraiser',
      description: 'Organized sustainable fashion campaign raising funds for environmental causes.',
      impact: '₹50,000+ raised'
    },
    {
      title: 'Cyber Safety Website',
      description: 'Created educational platform teaching digital safety to young internet users.',
      impact: '1000+ users educated'
    },
    {
      title: 'Tree Plantation Drive',
      description: 'Led community initiative planting trees and raising environmental awareness.',
      impact: '500+ trees planted'
    },
    {
      title: 'Toy Donation Campaign',
      description: 'Coordinated toy collection and distribution to underprivileged children.',
      impact: '200+ toys donated'
    },
    {
      title: 'Book Translation Project',
      description: 'Translated educational content to make learning accessible across languages.',
      impact: '5 books translated'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Experience & Service</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building skills through diverse experiences and making a positive impact in the community.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="racing-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className={`${exp.icon} text-primary text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{exp.role}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Service as Action Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceProjects.map((project, index) => (
              <div key={project.title} className="racing-card text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2 text-primary">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20 inline-block">
                  {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;