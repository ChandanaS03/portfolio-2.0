
const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
  "Express", "MongoDB", "MySQL", "HTML/CSS",
  "Tailwind CSS", "Git & GitHub", "RESTful APIs", "Python"
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
                Hello! I'm Chandana, a passionate developer dedicated to creating 
                technology that makes a positive impact. My journey in web 
                development began during my engineering studies, where I discovered 
                my love for transforming ideas into reality through code.
              </p>
              
              <p className="text-foreground/80 mb-4">
                I enjoy building robust applications that not only solve problems but 
                also provide intuitive, user-friendly experiences. With a strong foundation 
                in both frontend and backend technologies, I strive to create clean, efficient, 
                and maintainable code.
              </p>
              
              <p className="text-foreground/80 mb-4">
                When I'm not coding, you'll find me learning new technologies, contributing to 
                open-source projects, or exploring outdoor activities. I'm always open to new 
                challenges and opportunities for growth.
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
                src="/placeholder.svg" 
                alt="Chandana S" 
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
