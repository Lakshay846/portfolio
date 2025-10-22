import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "lakshaykumar0906@gmail.com",
      href: "mailto:lakshaykumar0906@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Lakshay846",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lakshaykumar846",
      href: "https://linkedin.com",
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] group"
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <contact.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-[var(--shadow-glow)] transition-all"
              asChild
            >
              <a href="mailto:contact@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
