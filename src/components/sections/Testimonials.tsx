import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

const testimonials = [
  {
    name: "David Vindas Solis",
    role: "Full-Stack Engineer",
    company: "MetLife",
    content: "Himanshu’s expertise in Vue.js and accessibility made a huge impact on our projects. His problem-solving skills and attention to detail set him apart."
  },
  {
    name: "Genevieve Rainey",
    role: "Project Manager",
    company: "CurbCutOS",
    content: "Himanshu's work in accessibility and frontend development significantly improved our platform. He’s a valuable and detail-oriented teammate."
  },
  {
    name: "Anant Panchal",
    role: "Senior Software Engineer",
    company: "Tech Solutions",
    content: "Himanshu is an exceptional frontend developer. His expertise in React, Vue.js, and mentoring junior developers makes him a key asset to any team."
  }
];


export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
