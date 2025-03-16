import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function TimelineAnimation({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="space-y-8 relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="ml-12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Circle on timeline */}
            <motion.div
              className="absolute -left-[52px] w-4 h-4 rounded-full bg-primary"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
            />

            <Card className="backdrop-blur-sm hover:bg-primary/5 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-primary font-medium">{item.year}</span>
                </div>
                <p className="text-muted-foreground mb-2">{item.institution}</p>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
