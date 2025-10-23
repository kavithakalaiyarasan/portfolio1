import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing personal details, resume, and project work with smooth navigation using React Router.",
      tags: ["ReactJS", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com/kavithakalaiyarasan",
      demo: "https://your-portfolio-link.com",
      date: "Oct 2025"
    },
    {
      title: "Supermarket Billing System",
      description: "Java-based billing system with MySQL integration supporting real-time billing, cart operations, and comprehensive inventory management.",
      tags: ["Java", "MySQL", "JDBC", "Eclipse IDE"],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
      github: "https://github.com/kavithakalaiyarasan",
      date: "Nov-Dec 2024"
    },
    {
      title: "Job Portal Backend",
      description: "Robust backend system for job listings and applications featuring authentication, data management, and secure API endpoints.",
      tags: ["Java", "JDBC", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      github: "https://github.com/kavithakalaiyarasan",
      date: "Sep-Oct 2024"
    },
    {
      title: "Mobile Sales & Service Shop",
      description: "Responsive frontend website with product listings, dynamic UI components, and smooth user interactions for mobile shop business.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      github: "https://github.com/kavithakalaiyarasan",
      demo: "https://kavithakalaiyarasan.github.io/MobileShop/",
      date: "Oct-Nov 2024"
    },
    {
      title: "BCA Department Website",
      description: "Dynamic department website showcasing faculty details, academic resources, and department activities with responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      demo: "https://bcarockers2024.blogspot.com/",
      date: "Nov 2023 - Feb 2024"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-[0_0_60px_hsl(330_85%_65%/0.4)] transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs text-primary font-semibold">
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
