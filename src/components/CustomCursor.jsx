import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over an interactive element or something marked hoverable
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable') ||
        target.closest('.hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'var(--text-main)',
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.15
      }
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: 'var(--bg-main)', // Contrast color for difference mode
      mixBlendMode: 'difference',
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.15
      }
    }
  };

  // Do not render on server or touch devices
  if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <style>
        {`
          @media (pointer: fine) {
            body, a, button, select, .hoverable {
              cursor: none !important;
            }
          }
        `}
      </style>
      <motion.div
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          borderRadius: '50%',
        }}
      />
    </>
  );
}
