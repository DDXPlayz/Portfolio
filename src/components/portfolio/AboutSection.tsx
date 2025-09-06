import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 80, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', icon: 'fab fa-react', level: 75, color: 'from-cyan-400 to-blue-500' },
    { name: 'Python', icon: 'fab fa-python', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'C++', icon: 'fas fa-code', level: 70, color: 'from-purple-500 to-pink-500' },
    { name: 'GitHub', icon: 'fab fa-github', level: 80, color: 'from-gray-600 to-gray-800' },
    { name: 'Figma', icon: 'fab fa-figma', level: 75, color: 'from-purple-400 to-purple-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary/20 transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            About Me
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} px-4`}>
            A passionate 15-year-old innovator reshaping the digital landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="racing-card hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <i className="fas fa-rocket text-primary text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From a curious kid asking "how do websites work?" to building AI-powered applications that solve real problems. 
                My journey in tech started early, and I've never looked back.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I don't just write code—I craft digital experiences that make a difference. Whether it's breaking down language 
                barriers with multilingual chat apps or optimizing study schedules with AI, I believe in technology's power to transform lives.
              </p>
            </div>

            <div className="racing-card hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <i className="fas fa-flag-checkered text-primary text-xl"></i>
                </div>
                <h3 className="text-2xl font-semibold text-primary">Beyond Code</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When I'm not coding, you'll find me designing aerodynamic cars for F1 in Schools with Team Anantam Racing, 
                or composing music that blends electronic beats with traditional melodies.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Innovation', 'Leadership', 'Racing Tech', 'Music Production', 'AI Ethics', 'Sustainability'].map((interest, index) => (
                  <span 
                    key={interest}
                    className={`px-3 py-1 glass-card text-sm font-medium hover-cyber transition-all duration-300 delay-${index * 100}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-primary">Technical Arsenal</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className={`racing-card text-center hover-lift transition-all duration-300 delay-${index * 100}`}
                >
                  <i className={`${skill.icon} text-5xl text-primary mb-4 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}></i>
                  <h4 className="font-semibold mb-3 text-lg">{skill.name}</h4>
                  
                  <div className="relative w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 800}ms`
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i}
                          className={`fas fa-star text-xs ${i < Math.floor(skill.level / 20) ? 'text-primary' : 'text-muted'}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="glass-card p-6 hover-lift">
                <h4 className="text-lg font-semibold mb-2 text-primary">Currently Learning</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Next.js', 'Machine Learning', 'Blockchain', 'WebGL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30 animate-pulse"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;