
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicHeroBackground from './DynamicHeroBackground';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <DynamicHeroBackground />
      
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="space-y-6 max-w-3xl">
          <p className="text-primary font-mono text-lg md:text-xl">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Chandana Shastri
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/70">
            Blending AI, mindfulness, and creativity into impactful solutions.
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            I am passionate about AI/ML, tech, yoga, and music. I enjoy building intelligent solutions
            that merge creativity with innovation. Welcome to my portfolio.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="#projects" className="button-primary">
              View my work
            </Link>
            <Link to="#contact" className="button-secondary flex items-center gap-2">
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
