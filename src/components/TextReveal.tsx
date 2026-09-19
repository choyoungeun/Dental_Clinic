'use client';

import { CSSProperties, ElementType, ReactNode, useEffect, useRef } from 'react';
import { observeOnce } from './Reveal';

/* =========================================================
   TextReveal
   - 제목을 "줄 단위"로 아래에서 위로 올라오게 합니다. (글자 단위 X)
   - 각 줄은 overflow-hidden 마스크 안에서 올라와 레이아웃이 흔들리지 않습니다.
   - lines 에는 문자열 또는 <span>이 섞인 노드를 줄 단위로 넣습니다.
========================================================= */

interface TextRevealProps {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  /** 시작 지연(ms) */
  delay?: number;
  /** 줄 사이 간격(ms) */
  stagger?: number;
  duration?: number;
}

const TextReveal = ({
  lines,
  as: Tag = 'h2',
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 110,
  duration = 900,
}: TextRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return observeOnce(element, () => element.classList.add('is-visible'));
  }, []);

  return (
    <Tag ref={ref} className={`text-reveal ${className}`}>
      {lines.map((line, index) => (
        <span key={index} className="text-reveal__mask">
          <span
            className={`text-reveal__line ${lineClassName}`}
            style={
              {
                '--reveal-delay': `${delay + index * stagger}ms`,
                '--reveal-duration': `${duration}ms`,
              } as CSSProperties
            }
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
