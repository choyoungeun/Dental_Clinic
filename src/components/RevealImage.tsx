'use client';

import { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import { observeOnce } from './Reveal';

/* =========================================================
   RevealImage
   - 이미지가 들어오면 opacity + scale(1.04 → 1)
   - hover 시 아주 느린 zoom (1.03)
   - parallax(px)를 주면 큰 이미지에만 약한 세로 이동을 적용합니다.
     · 화면에 보이는 동안에만 requestAnimationFrame 으로 갱신
     · 모바일은 강도를 절반으로, reduced-motion 은 사용하지 않음
   - 부모(className)에는 크기(높이/aspect)를 지정해 주세요. (layout shift 방지)
   - children 은 next/image 의 `fill` 이미지를 넣으면 됩니다.
========================================================= */

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  /** 세로 parallax 최대 이동량(px). 0이면 사용하지 않음 */
  parallax?: number;
  delay?: number;
  /** hover zoom 비활성화 */
  noZoom?: boolean;
}

const RevealImage = ({
  children,
  className = '',
  parallax = 0,
  delay = 0,
  noZoom = false,
}: RevealImageProps) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  /* 등장 */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    return observeOnce(frame, () => frame.classList.add('is-visible'));
  }, []);

  /* parallax : 화면에 보이는 동안만 rAF */
  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!parallax || !frame || !layer) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const amplitude = window.matchMedia('(max-width: 767px)').matches
      ? parallax * 0.5
      : parallax;

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) /
        (viewport / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));

      layer.style.setProperty('--parallax-y', `${(-clamped * amplitude).toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    const start = () => {
      if (active) return;
      active = true;
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      onScroll();
    };

    const stop = () => {
      if (!active) return;
      active = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: '10% 0px 10% 0px' },
    );

    observer.observe(frame);

    return () => {
      observer.disconnect();
      stop();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [parallax]);

  // absolute/fixed 로 배치할 때는 relative 를 붙이지 않습니다.
  const position = /\b(absolute|fixed|sticky)\b/.test(className) ? '' : 'relative';

  return (
    <div
      ref={frameRef}
      className={`reveal-image ${position} overflow-hidden ${
        noZoom ? '' : 'reveal-image--zoom'
      } ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      <div className="reveal-image__inner absolute inset-0">
        <div
          ref={layerRef}
          className={`reveal-image__layer absolute ${parallax ? 'inset-x-0' : 'inset-0'}`}
          style={
            parallax
              ? { top: -parallax, bottom: -parallax }
              : undefined
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default RevealImage;
