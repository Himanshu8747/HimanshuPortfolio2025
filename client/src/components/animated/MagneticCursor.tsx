import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.dataset.magnetic) {
        setCursorVariant('hover');
      }
    };

    const handleMouseOut = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      scale: 1
    },
    hover: {
      x: mousePos.x - 32,
      y: mousePos.y - 32,
      scale: 2
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
        style={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", stiffness: 750, damping: 28 }}
      />
    </>
  );
}
