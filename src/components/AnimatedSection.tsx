import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, x: 0 };
      case 'down':
        return { y: -50, x: 0 };
      case 'left':
        return { x: 50, y: 0 };
      case 'right':
        return { x: -50, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
