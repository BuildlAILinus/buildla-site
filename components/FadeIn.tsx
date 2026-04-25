'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

/**
 * DS-spec reveal (SKILL.md §5):
 *  - threshold 0.15
 *  - rootMargin '0px 0px -80px 0px'
 *  - duration 520 ms (macro)
 *  - easing var(--ease) = cubic-bezier(0.2, 0.6, 0.2, 1)
 *  - translate-distance 16 px (within 8–24 spec)
 *  - unobserve after firing
 *  - respects prefers-reduced-motion (collapses to ~0 ms / no transform)
 */
export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Lazy initial state: if reduced motion, start visible — avoids setState in effect.
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isVisible) return; // Reduced motion already resolved.
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  const offset = '16px';
  const transform =
    direction === 'up'   ? `translateY(${offset})` :
    direction === 'left' ? `translateX(-${offset})` :
    direction === 'right' ? `translateX(${offset})` :
    'none';

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '520ms',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : transform,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
