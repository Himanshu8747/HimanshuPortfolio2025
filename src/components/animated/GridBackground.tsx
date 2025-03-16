import { motion } from 'framer-motion';

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className = '' }: GridBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      {/* Base grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Animated vertical lines */}
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

      {/* Pulsating glow effect */}
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
  );
}
