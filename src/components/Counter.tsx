import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  trigger?: boolean;
}

/**
 * A smooth, high-performance counter component that animates from 0 to a target number.
 * Uses requestAnimationFrame for optimal frame rates and outQuad easing for a premium feel.
 */
const Counter: React.FC<CounterProps> = ({ end, duration = 2000, trigger = false }) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // Only start animating when triggered and if we haven't animated yet
    if (!trigger || animatedRef.current) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1);
      
      // outQuad easing function for a smooth finish
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        animatedRef.current = true;
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [trigger, end, duration]);

  return <span>{count}</span>;
};

export default Counter;
