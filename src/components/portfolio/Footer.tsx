const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold glow-text">DG</span>
              <span className="text-lg font-semibold">Dhruva Goyal</span>
            </div>
            <p className="text-muted-foreground mb-4">
              15-year-old developer passionate about creating innovative solutions 
              through code, racing, and music.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://twitter.com/dhruvacodes" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#music" className="block text-muted-foreground hover:text-primary transition-colors">
                Music
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:dhruva@example.com" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                dhruva@example.com
              </a>
              <p className="text-muted-foreground">Available for collaborations</p>
              <p className="text-muted-foreground">Open to exciting opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dhruva Goyal. Built with passion and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;