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
  
  // Adjusted margin to trigger more precisely when clearly visible
  const isInView = useInView(ref, { once: true, margin: '0px' });

  // Split value into numerical and non-numerical segments
  const segments = value.split(/(\d+)/).filter(Boolean).map(segment => ({
    isNumber: /^\d+$/.test(segment),
    value: /^\d+$/.test(segment) ? parseInt(segment) : segment,
  }));

  // Helper to build the display value for a specific progress [0-1]
  const buildDisplayString = (progress: number) => {
    return segments.map(segment => {
      if (segment.isNumber) {
        const currentVal = Math.floor((segment.value as number) * progress);
        return currentVal.toString();
      }
      return segment.value;
    }).join('');
  };

  useEffect(() => {
    if (isInView) {
      motionValue.set(100);
    }
  }, [motionValue, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const progress = Math.min(Math.max(latest / 100, 0), 1);
        const displayValue = buildDisplayString(progress);

        // Ensure the final value exactly matches 'value' once progress hits 1 (100%)
        ref.current.textContent = progress >= 0.999 ? value : displayValue;
      }
    });
    return () => unsubscribe();
  }, [springValue, value]);

  // Start with the 'zero' version of the value (e.g. 0/0 or 0%)
  return <span ref={ref}>{buildDisplayString(0)}</span>;
}

export default AnimatedCounter;

