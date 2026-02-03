import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace(/\D/g, ''));
      if (!isNaN(numValue)) {
        motionValue.set(numValue);
      }
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const numValue = parseInt(value.replace(/\D/g, ''));
        if (!isNaN(numValue)) {
          const displayValue = Math.floor(latest);
          if (value.includes('+')) {
            ref.current.textContent = `${displayValue}+`;
          } else if (value.includes('%')) {
            ref.current.textContent = `${displayValue}%`;
          } else {
            ref.current.textContent = displayValue.toString();
          }
        } else {
          ref.current.textContent = value;
        }
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

export default AnimatedCounter;

