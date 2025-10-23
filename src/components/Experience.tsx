import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Ramaussys Technologies Pvt. Ltd.",
      period: "Jan 2025 – Present",
      location: "Remote",
      type: "Full-time",
      responsibilities: [
        "Developing web-based applications using Java, WordPress, and MySQL",
        "Collaborating with cross-functional teams for design, testing, and deployment",
        "Conducting code reviews, debugging, and performance optimization",
        "Contributing to SEO and content planning aligned with project goals"
      ]
    },
    {
      title: "Website Maintenance Specialist",
      company: "Ramaussys Technologies, Getin Technologies & Getin Infotech",
      period: "Jan 2025 – Present",
      location: "Remote",
      type: "Contract",
      responsibilities: [
        "Managed and optimized multiple WordPress websites",
        "Performed plugin/theme management, SEO improvements, and UI/UX enhancements",
        "Collaborated with design and content teams to maintain branding consistency",
        "Implemented Google Analytics tracking and performance monitoring"
      ]
    },
    {
      title: "Junior Software Engineer Intern",
      company: "Ramaussys Technologies Pvt. Ltd.",
      period: "May 2024 – Dec 2024",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Developed and debugged modules using Java, JavaScript, and SQL",
        "Assisted in UI/UX design and documentation",
        "Supported live project deployments and team collaboration",
        "Learned industry best practices for software development lifecycle"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-[7px] rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_hsl(330_85%_65%/0.6)] animate-glow" />
                
                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_60px_hsl(330_85%_65%/0.3)] transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                        {exp.type}
                      </span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
