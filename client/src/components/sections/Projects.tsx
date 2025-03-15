import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.site"
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard using React and D3.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.site"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with drag-and-drop interface",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager-demo.site"
  }
];

export function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4" />
                          <span>Live Site</span>
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