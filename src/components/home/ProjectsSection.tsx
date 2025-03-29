
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AutoVision",
    description: "AI-powered system that can detect car damage and estimate repair costs.",
    image: "/lovable-uploads/2c5ff90b-b9c3-4c77-894d-f41957e5d623.png",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/ChandanaS03/AutoVision",
    liveUrl: "https://autovision-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Gizzz101",
    description: "An AI Summarizer built on Replit.",
    image: "/lovable-uploads/6ca7ab0f-187f-4c57-85dc-76e9cc68c890.png",
    technologies: ["JavaScript", "React", "AI API", "Replit"],
    githubUrl: "https://github.com/ChandanaS03/Gizzz101",
    liveUrl: "https://gizzz101.replit.app",
    featured: true
  },
  {
    id: 3,
    title: "AWS Cloud Webapp",
    description: "A mini cloud project deployed on AWS S3.",
    image: "/lovable-uploads/010dd25f-fbc6-494e-bfe2-464b40864a90.png",
    technologies: ["AWS", "S3", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/ChandanaS03/aws-webapp",
    liveUrl: "https://cloudapp.aws.s3.com",
    featured: true
  },
  {
    id: 4,
    title: "DeepFake Text Detection",
    description: "Detects Fake News using DL",
    image: "/placeholder.svg",
    technologies: ["Python", "Deep Learning", "NLP", "TensorFlow"],
    githubUrl: "https://github.com/ChandanaS03/deepfake-detection",
    featured: false
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">
        <span className="text-primary font-mono">03.</span> Projects
      </h2>

      <div className="space-y-32 mb-20">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}
          >
            <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative group overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-primary/30 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className={`${index % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
                <p className="text-primary font-mono text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
                <div className="bg-card p-6 rounded-md shadow-md mb-4">
                  <p className="text-foreground/80">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-foreground/60 font-mono text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-card rounded-md p-6 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary">
                {/* Project icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            
            <p className="text-foreground/70 text-sm mb-6">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="text-foreground/60 font-mono text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
