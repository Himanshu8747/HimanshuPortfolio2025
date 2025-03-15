import { motion } from 'framer-motion';
import { MotionText } from '../animated/MotionText';
import { ParallaxContainer } from '../animated/ParallaxContainer';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(var(--primary-rgb),0.13)_0,rgba(var(--primary-rgb),0)_100%)]" />
      </div>

      <ParallaxContainer className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary mb-4"
          >
            Hello, I'm
          </motion.p>

          <MotionText
            text="John Doe"
            className="text-6xl md:text-7xl font-bold mb-4"
          />

          <MotionText
            text="Frontend Developer & UI/UX Designer"
            delay={1}
            className="text-3xl md:text-4xl text-muted-foreground mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform"
              data-magnetic
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
      </ParallaxContainer>
    </section>
  );
}
