import Navbar from '@/components/portfolio/Navbar';
import WelcomeSection from '@/components/portfolio/WelcomeSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import MusicSection from '@/components/portfolio/MusicSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import ScrollProgress from '@/components/portfolio/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <MusicSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
