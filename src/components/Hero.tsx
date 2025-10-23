import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(330_85%_65%/0.25),transparent_50%),radial-gradient(circle_at_80%_50%,hsl(260_75%_65%/0.25),transparent_50%),radial-gradient(circle_at_50%_80%,hsl(200_80%_60%/0.2),transparent_50%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8 animate-float">
            <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-[0_0_50px_hsl(330_85%_65%/0.5)]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">KK</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Junior Software Engineer</p>
            <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Kavitha K</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate about building elegant web applications with <span className="text-primary font-semibold">Java</span>, <span className="text-secondary font-semibold">Spring Boot</span>, and <span className="text-accent font-semibold">ReactJS</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_30px_hsl(330_85%_65%/0.5)]"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a
              href="https://github.com/kavithakalaiyarasan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kavitha-k-0273b9265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:kavithakalaiyarasan.122610@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="tel:+918610883090"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Call</span>
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
