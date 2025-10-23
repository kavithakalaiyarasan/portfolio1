import { Code2, Database, Globe, Server, Wrench, Coffee } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
      color: "primary"
    },
    {
      icon: Server,
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "ReactJS", "REST APIs"],
      color: "secondary"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Eclipse", "VS Code", "Git", "GitHub", "MySQL", "Postman"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["WordPress", "Responsive UI Design", "Elementor"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "SEO & Analytics",
      skills: ["SEO Optimization", "Google Analytics", "Yoast SEO", "Content Analysis"],
      color: "secondary"
    },
    {
      icon: Coffee,
      title: "Other Skills",
      skills: ["Google Sheets", "MS Excel", "Problem Solving", "Team Collaboration"],
      color: "accent"
    }
  ];

  const getGradientClass = (color: string) => {
    if (color === "primary") return "from-primary to-primary/70";
    if (color === "secondary") return "from-secondary to-secondary/70";
    return "from-accent to-accent/70";
  };

  const getHoverGlow = (color: string) => {
    if (color === "primary") return "hover:shadow-[0_0_50px_hsl(330_85%_65%/0.4)]";
    if (color === "secondary") return "hover:shadow-[0_0_50px_hsl(260_75%_65%/0.4)]";
    return "hover:shadow-[0_0_50px_hsl(200_80%_60%/0.4)]";
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 group ${getHoverGlow(category.color)}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getGradientClass(category.color)} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <category.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-gradient-to-r ${getGradientClass(category.color)} bg-opacity-20 text-sm rounded-full backdrop-blur-sm border border-white/10`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
