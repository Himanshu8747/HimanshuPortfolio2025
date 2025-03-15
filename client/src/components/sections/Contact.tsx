import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';

export function Contact() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background/50 backdrop-blur-sm focus:ring-2 ring-primary/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background/50 backdrop-blur-sm focus:ring-2 ring-primary/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-background/50 backdrop-blur-sm focus:ring-2 ring-primary/50 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                data-magnetic
              >
                Send Message
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
