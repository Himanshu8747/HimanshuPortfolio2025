import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Github, Globe } from 'lucide-react';

const openSourceProjects = [
  {
    title: "Sifusec",
    description: "Contributed to the UI development of a security platform that prevents fraud in Solana smart contracts. Designed and implemented user-friendly interfaces for monitoring on-chain security, improving accessibility for developers and users.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/sifusec",
    tech: ["Solana", "React", "Security"]
  },
  {
    title: "Dashlit",
    description: "Developed a feature-rich browser extension for productivity enhancement. Enables efficient management of links, to-do lists, meetings, and emails in a single interface with customizable widgets and quick access shortcuts.",
    image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/dashlit",
    tech: ["Browser Extension", "JavaScript", "UI/UX"]
  }
];

export function OpenSource() {
  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Open Source Contributions</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group cursor-pointer" data-magnetic>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}