import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      set({ xy: [x * 100, y * 100] });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [set]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0"
      >
        {/* Dynamic Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20" />

        {/* Animated Gradient Orbs */}
        <animated.div
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary-500/20 via-primary-500/5 to-transparent blur-3xl"
        />
        <animated.div
          style={{
            transform: xy.to((x, y) => `translate3d(${-x}px,${-y}px,0)`),
          }}
          className="absolute right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent-500/20 via-accent-500/5 to-transparent blur-3xl"
        />

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`particle particle-${i % 3 + 1} absolute`}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              color: i % 2 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;