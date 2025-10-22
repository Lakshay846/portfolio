import { Code2, Rocket, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong communicator working seamlessly with teams",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying current with latest technologies and trends",
    },
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Vue.js",
    "Tailwind CSS", "Node.js", "GraphQL", "REST APIs",
    "Git", "CI/CD", "Testing", "Accessibility"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Senior frontend developer with 8+ years of experience building beautiful, 
              performant web applications. Passionate about creating intuitive user experiences 
              and writing clean, maintainable code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] group"
              >
                <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-lg text-secondary-foreground font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
