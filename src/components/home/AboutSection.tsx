
const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
  "Machine Learning", "Python", "Generative AI", "Web Development",
  "Tailwind CSS", "Git & GitHub", "RESTful APIs", "Problem Solving"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-primary font-mono">02.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 mb-4">
                I am passionate about AI/ML, tech, yoga, and music. I enjoy building intelligent solutions
                that merge creativity with innovation. An AI enthusiast and engineering student, I love
                exploring the frontiers of technology.
              </p>
              
              <p className="text-foreground/80 mb-4">
                With a keen interest in Machine Learning, Generative AI, Python, web development, and 
                problem-solving, I'm building a robust skill set. Beyond coding, you'll find me expressing 
                myself through music as a vocalist and practicing yoga for mindfulness.
              </p>
              
              <p className="text-foreground/80 mb-4">
                I'm driven by the intersection of technology and creativity, always seeking to create
                meaningful solutions that make a positive impact. My approach combines technical knowledge
                with mindful thinking to develop innovative applications.
              </p>
              
              <p className="text-foreground/80">
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/70">
                  <span className="text-primary mt-1">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-md bg-primary/10 p-1">
              <img 
                src="/lovable-uploads/3a61e00d-1b81-4d4c-8212-f753749b513b.png" 
                alt="Chandana Shastri" 
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-300 w-full max-w-xs mx-auto"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300 rounded-md"></div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
