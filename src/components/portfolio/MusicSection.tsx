import musicBg from '@/assets/music-section-bg.jpg';

const MusicSection = () => {
  return (
    <section id="music" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${musicBg})`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 glow-text">Music & Creativity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond code and racing, I express myself through music - creating melodies that tell stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="racing-card">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Musical Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Music has always been a parallel passion alongside my love for technology. 
              I create original compositions that blend modern electronic elements with traditional melodies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From producing beats to composing full tracks, music provides me with a creative outlet 
              that complements my analytical side as a developer.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="fas fa-music text-primary"></i>
                <span>Original Compositions</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-headphones text-primary"></i>
                <span>Electronic Music Production</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-microphone text-primary"></i>
                <span>Audio Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-record-vinyl text-primary"></i>
                <span>Sound Design</span>
              </div>
            </div>
          </div>

          <div className="racing-card text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <i className="fas fa-play text-primary text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Explore My Music</h3>
              <p className="text-muted-foreground mb-6">
                Visit my dedicated music website to listen to my latest tracks and compositions.
              </p>
            </div>
            
            <a 
              href="https://dhruva-music.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center justify-center"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Visit Music Site
            </a>
            
            <div className="mt-6 flex justify-center gap-4">
              <a 
                href="https://spotify.com/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-spotify text-xl"></i>
              </a>
              <a 
                href="https://soundcloud.com/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-soundcloud text-xl"></i>
              </a>
              <a 
                href="https://youtube.com/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;