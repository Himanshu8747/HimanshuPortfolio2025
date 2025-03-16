import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const sampleCode = `const frontendDeveloper = {
  name: "Himanshu",
  passion: "Building seamless user experiences",
  skills: ["HTML", "CSS", "JavaScript", "React", "Accessibility"],
  mindset: {
    problemSolving: true,
    continuousLearning: true,
    userFirst: true,
  },
  challenges: [
    "Cross-browser inconsistencies",
    "Performance optimization",
    "Accessibility Standards",
  ],
  motivation: () => console.log("Every pixel, every interaction matters."),
};

const keepBuilding = () => {
  while (frontendDeveloper.continuousLearning) {
    frontendDeveloper.skills.push("New Frameworks & Best Practices");
    console.log("Leveling up! 🚀");
  }
};

keepBuilding();`;

export function AnimatedCodeDisplay() {
  const [displayText, setDisplayText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDeleting && cursorPosition === 0) {
      setTimeout(() => setIsDeleting(false), 500);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(sampleCode.slice(0, cursorPosition + 1));
      setCursorPosition((prev) =>
        isDeleting ? Math.max(prev - 1, 0) : prev + 1
      );

      if (!isDeleting && cursorPosition === sampleCode.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }, isDeleting ? 25 : 20);

    return () => clearTimeout(timeout);
  }, [cursorPosition, isDeleting]);

  return (
    <motion.div 
      className="w-[500px] rounded-md bg-zinc-900 p-4 shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      {/* Title Bar */}
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Code Animation */}
      <pre className="text-xs font-mono text-zinc-300 relative">
        {displayText}
        <motion.span 
          ref={cursorRef}
          className="inline-block bg-white w-[6px] h-4"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      </pre>
    </motion.div>
  );
}
