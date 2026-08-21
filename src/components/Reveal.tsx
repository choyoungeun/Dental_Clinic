'use client';

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const Reveal = ({
  children,
  delay = 0,
  duration = 900,
  distance = 30,
  className = '',
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all
        ease-out
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${className}
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0px)'
          : `translateY(${distance}px)`,
        filter: visible
          ? 'blur(0px)'
          : 'blur(5px)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;