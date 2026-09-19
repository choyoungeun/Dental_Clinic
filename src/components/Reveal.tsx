'use client';

import { CSSProperties, ElementType, ReactNode, useEffect, useRef } from 'react';

/* =========================================================
   공유 IntersectionObserver
   - 요소마다 observer를 만들지 않고 하나를 함께 씁니다.
   - 한 번 나타나면 관찰을 멈춥니다. (scroll 이벤트 미사용)
========================================================= */

const callbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

const getObserver = () => {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  return sharedObserver;
};

/** 요소가 화면에 들어오면 한 번만 callback을 실행합니다. 정리 함수를 돌려줍니다. */
export const observeOnce = (element: Element, callback: () => void) => {
  if (typeof IntersectionObserver === 'undefined') {
    callback();
    return () => {};
  }

  const observer = getObserver();
  callbacks.set(element, callback);
  observer.observe(element);

  return () => {
    callbacks.delete(element);
    observer.unobserve(element);
  };
};

/* =========================================================
   Reveal
   - variant: up(기본) | soft(짧게) | left | right | fade
   - delay: ms. 카드 순차 등장은 stagger(index)를 사용하세요.
   - 이동거리·강도는 globals.css의 .reveal 에서 관리합니다.
     (모바일은 자동으로 약하게, reduced-motion은 즉시 표시)
========================================================= */

export type RevealVariant = 'up' | 'soft' | 'left' | 'right' | 'fade';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

const Reveal = ({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration,
  className = '',
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return observeOnce(element, () => element.classList.add('is-visible'));
  }, []);

  const style = {
    '--reveal-delay': `${delay}ms`,
    ...(duration ? { '--reveal-duration': `${duration}ms` } : {}),
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
