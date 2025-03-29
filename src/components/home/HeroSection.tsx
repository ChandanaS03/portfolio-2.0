
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted z-[-1]"></div>
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col space-y-6 max-w-3xl animate-fade-in">
          <span className="text-primary font-mono text-sm md:text-base">Hi, my name is</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Chandana S.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/70">
            I build things for the web.
          </h2>
          <p className="text-foreground/70 max-w-xl text-base md:text-lg">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="pt-4">
            <a href="#projects" className="button-primary inline-flex items-center gap-2 group">
              View My Work 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
