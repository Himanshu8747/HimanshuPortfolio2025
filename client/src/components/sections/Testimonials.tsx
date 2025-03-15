import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp",
    content: "Working with John was an absolute pleasure. His attention to detail and creative solutions helped us achieve our project goals ahead of schedule."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Inc",
    content: "John's expertise in frontend development transformed our application. His work exceeded our expectations and helped us deliver a superior user experience."
  },
  {
    name: "Emily Williams",
    role: "Design Director",
    company: "Creative Agency",
    content: "An exceptional talent in both design and development. John's ability to understand and implement complex requirements is truly remarkable."
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
