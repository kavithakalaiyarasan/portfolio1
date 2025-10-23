import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="text-sm">© 2025 Kavitha K. Built with React & passion for code.</p>
      </footer>
    </div>
  );
};

export default Index;
