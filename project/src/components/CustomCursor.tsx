import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';

const CustomCursor = () => {
  const { cursorVariant } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      border: '2px solid rgba(59, 130, 246, 0.8)',
      mixBlendMode: 'difference' as const,
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(139, 92, 246, 0.3)',
      border: '2px solid rgba(139, 92, 246, 0.6)',
      mixBlendMode: 'difference' as const,
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(16, 185, 129, 0.4)',
      border: '2px solid rgba(16, 185, 129, 0.7)',
      mixBlendMode: 'difference' as const,
    },
    card: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      width: 56,
      height: 56,
      backgroundColor: 'rgba(245, 158, 11, 0.3)',
      border: '2px solid rgba(245, 158, 11, 0.6)',
      mixBlendMode: 'difference' as const,
    },
    image: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
      backgroundColor: 'rgba(239, 68, 68, 0.3)',
      border: '2px solid rgba(239, 68, 68, 0.6)',
      mixBlendMode: 'difference' as const,
    },
  };

  // Don't render on mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none rounded-full"
      animate={variants[cursorVariant as keyof typeof variants]}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CustomCursor;