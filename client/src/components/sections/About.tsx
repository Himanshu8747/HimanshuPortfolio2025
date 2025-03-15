import { motion } from 'framer-motion';
import { ParallaxContainer } from '../animated/ParallaxContainer';
import { Card } from '../ui/card';

const skills = [
  "React", "TypeScript", "Tailwind CSS", "Next.js",
  "Node.js", "GraphQL", "Framer Motion", "UI/UX Design"
];

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ParallaxContainer>
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate frontend developer and UI/UX designer with a keen eye for creating beautiful, functional, and user-friendly web applications. With years of experience in modern web technologies, I bring ideas to life through clean code and stunning designs.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences that users love.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center hover:bg-primary/5 transition-colors cursor-pointer" data-magnetic>
                    <h3 className="font-medium">{skill}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
}
