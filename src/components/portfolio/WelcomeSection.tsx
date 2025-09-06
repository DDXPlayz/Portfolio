import { useEffect, useState } from 'react';
import heroImage from '@/assets/tech-hero-bg.jpg';
import ParticleSystem from './ParticleSystem';

const WelcomeSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const fullText = "Hi, I'm Dhruva Goyal";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtitle(true), 500);
        setTimeout(() => setShowCTA(true), 1500);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="welcome-section" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      <ParticleSystem />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-primary/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-primary/20 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-primary/20 transform rotate-45 animate-float delay-500"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="typing-animation inline-block overflow-hidden whitespace-nowrap glow-text">
              {displayText}
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4 animate-slide-in-left px-2">
            Developer • Team Manager • Music Creator
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right delay-300 px-4">
            At 15, I'm building the future with cutting-edge code, leading teams to achieve ambitious goals, 
            and creating melodies that inspire innovation.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 ${showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 animate-zoom-in delay-700 px-4">
            <button 
              onClick={scrollToProjects}
              className="btn-hero group relative overflow-hidden touch-target min-h-[48px] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center px-2">
                <i className="fas fa-rocket mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300"></i>
                <span className="text-sm sm:text-base">Explore My Universe</span>
              </span>
            </button>
            
            <a 
              href="#contact" 
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 text-foreground font-semibold transition-all duration-500 hover:text-primary hover:scale-105 hover:shadow-[var(--glow-primary)] relative group touch-target min-h-[48px] w-full sm:w-auto flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center justify-center px-2">
                <i className="fas fa-envelope mr-2 sm:mr-3 group-hover:bounce transition-all duration-300"></i>
                <span className="text-sm sm:text-base">Let's Connect</span>
              </span>
            </a>
          </div>
          
          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in delay-1000 px-4">
            {['React', 'Python', 'TypeScript', 'AI/ML', 'Leadership'].map((tech, index) => (
              <span 
                key={tech}
                className={`px-3 sm:px-4 py-2 glass-card text-xs sm:text-sm font-medium hover-cyber transition-all duration-300 delay-${index * 100} touch-target`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WelcomeSection;