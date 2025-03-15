import { motion } from 'framer-motion';
import { MotionText } from '../animated/MotionText';
import { ParallaxContainer } from '../animated/ParallaxContainer';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 gradient-bg">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(22,163,74,0.12)_0,rgba(0,0,0,0)_100%)]" />

        {/* Animated gradient borders */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-3/4 gradient-border"
          animate={{
            height: ["0%", "70%", "0%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-px h-3/4 gradient-border"
          animate={{
            height: ["0%", "70%", "0%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute inset-0 -z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5"
            initial={{ x: Math.random() * 100, y: Math.random() * 100 }}
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

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
            className="text-6xl md:text-7xl font-bold mb-4 text-white"
          />

          <MotionText
            text="Frontend Developer & UI/UX Designer"
            delay={1}
            className="text-3xl md:text-4xl text-primary/80 mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform relative overflow-hidden group bg-primary/20 hover:bg-primary/30 text-white"
              data-magnetic
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 hover:scale-105 transition-transform border-primary/50 text-primary hover:bg-primary/10"
              data-magnetic
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </ParallaxContainer>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(22,163,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </section>
  );
}