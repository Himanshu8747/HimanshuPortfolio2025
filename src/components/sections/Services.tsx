import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { ParallaxContainer } from '../animated/ParallaxContainer';
import { Code2, Palette, Globe, Rocket, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with a focus on user experience."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end development solutions from database to frontend implementation."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Design",
    description: "Designing responsive layouts that work perfectly on all devices."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Architecture",
    description: "Designing and implementing efficient database solutions."
  }
];

export function Services() {
  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Services I Offer</h2>
        
        <ParallaxContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="h-full backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2"
                  data-magnetic
                >
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-4 text-primary"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
}
