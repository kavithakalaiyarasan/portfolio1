const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-8 hover:shadow-[0_0_80px_hsl(330_85%_65%/0.3)] transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Career Summary</h3>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Motivated Junior Software Engineer with hands-on experience in Java, Spring Boot, and ReactJS. 
              Skilled in developing web-based applications, debugging, and optimizing websites for performance 
              and SEO. I demonstrate strong problem-solving abilities and teamwork, with a passion for continuous 
              learning and delivering quality software solutions.
            </p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 hover:shadow-[0_0_80px_hsl(260_75%_65%/0.3)] transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-foreground">Bachelor of Computer Applications</h4>
                <p className="text-muted-foreground">G. Venkataswamy Naidu College</p>
                <p className="text-sm text-primary">2021 - 2024 | 81%</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">Higher Secondary - Computer Science</h4>
                <p className="text-muted-foreground">St. Joseph's Hr. Sec. School</p>
                <p className="text-sm text-primary">2020 - 2021</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 glass-effect rounded-3xl p-8 hover:shadow-[0_0_80px_hsl(200_80%_60%/0.3)] transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4 text-accent">What Drives Me</h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm passionate about bridging the gap between elegant design and robust functionality. 
            My journey in software development has taught me the value of clean code, user-centered 
            design, and continuous improvement. Whether it's optimizing website performance, implementing 
            SEO best practices, or collaborating with cross-functional teams, I bring dedication and 
            enthusiasm to every project. I believe in the power of technology to solve real-world problems 
            and create meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
