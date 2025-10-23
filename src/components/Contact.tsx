import { Mail, Linkedin, Phone, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "../components/ui/sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_50px_hsl(330_85%_65%/0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                  <a 
                    href="mailto:kavithakalaiyarasan.122610@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    kavithakalaiyarasan.122610@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_50px_hsl(260_75%_65%/0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                  <a 
                    href="tel:+918610883090"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 8610883090
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_50px_hsl(200_80%_60%/0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/kavitha-k-0273b9265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_50px_hsl(330_85%_65%/0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">GitHub</h3>
                  <a 
                    href="https://github.com/kavithakalaiyarasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    View my repositories
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-6 space-y-4 hover:shadow-[0_0_60px_hsl(330_85%_65%/0.3)] transition-all duration-300">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">Name</label>
              <Input
                id="name"
                placeholder="Your Name"
                required
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">Message</label>
              <Textarea
                id="message"
                placeholder="Your message..."
                required
                rows={5}
                className="bg-background/50 border-primary/20 focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_hsl(330_85%_65%/0.4)]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
