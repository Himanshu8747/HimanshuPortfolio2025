import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionText } from '../animated/MotionText';
import { ParallaxContainer } from '../animated/ParallaxContainer';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { AnimatedCodeDisplay } from '../animated/AnimatedCodeDisplay';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  
  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function that doesn't modify the URL
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    // Don't use href attribute to avoid hash in URL
    const targetElement = document.getElementById('contact');
    
    if (targetElement) {
      // Get the element's position relative to the document
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      // Longer duration for smoother effect (in ms)
      const duration = 1500;
      let startTime = null;
      
      // Custom easing function for smoother animation (ease-in-out cubic)
      function easeInOutCubic(t) {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    }
  };

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

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="absolute inset-0 flex justify-around">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              initial={{ height: "0%", opacity: 0 }}
              animate={{
                height: ["0%", "100%", "0%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-0 bg-primary/5"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <ParallaxContainer className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-primary mb-4"
          >
            Hello, I'm
          </motion.p>

          <MotionText
            text="Himanshu Javiya"
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
          />

          <MotionText
            text="Frontend Developer & Accessibility Advocate"
            delay={1}
            className="text-2xl md:text-4xl text-primary/80 mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform relative overflow-hidden group bg-primary/20 hover:bg-primary/30 text-white"
              data-magnetic
              onClick={handleSmoothScroll}
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
              className="text-lg px-8 hover:scale-105 transition-transform border-primary/50 text-primary hover:bg-primary/10 gap-2"
              data-magnetic
              asChild
            >
              <a href="/Himanshu_Javiya_resume.pdf" download>
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>
        </ParallaxContainer>

        {/* Animated Code Display - replacing the profile image */}
        <motion.div
          style={{ 
            scale,
            opacity,
            y,
          }}
        >
          <AnimatedCodeDisplay />
        </motion.div>
      </div>
    </section>
  );
}