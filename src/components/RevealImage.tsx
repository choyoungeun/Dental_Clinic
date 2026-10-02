'use client';

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
} from 'react';

import {
  observeOnce,
} from './Reveal';

interface RevealImageProps {
  children: ReactNode;
  className?: string;

  /*
    Desktop parallax 이동량.
    Mobile에서는 자동 OFF.
  */
  parallax?: number;

  delay?: number;
  noZoom?: boolean;
}

const RevealImage = ({
  children,
  className = '',
  parallax = 0,
  delay = 0,
  noZoom = false,
}: RevealImageProps) => {
  const frameRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const layerRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  /* =======================================================
     REVEAL
  ======================================================= */

  useEffect(() => {
    const frame =
      frameRef.current;

    if (!frame) {
      return;
    }

    return observeOnce(
      frame,
      () =>
        frame.classList.add(
          'is-visible',
        ),
    );
  }, []);

  /* =======================================================
     PARALLAX

     Desktop only.

     모바일 Safari / Android / Kakao in-app 브라우저는
     주소창이 열리고 닫힐 때 viewport 높이가 계속 변함.

     따라서 모바일에서는 아예 사용하지 않음.
  ======================================================= */

  useEffect(() => {
    const frame =
      frameRef.current;

    const layer =
      layerRef.current;

    if (
      !parallax ||
      !frame ||
      !layer
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      );

    const mobile =
      window.matchMedia(
        '(max-width: 767px)',
      );

    /*
      모바일에서는 위치를 강제로 0으로 고정.
    */
    if (
      reducedMotion.matches ||
      mobile.matches
    ) {
      layer.style.setProperty(
        '--parallax-y',
        '0px',
      );

      return;
    }

    const amplitude =
      parallax;

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;

      const rect =
        frame.getBoundingClientRect();

      /*
        Desktop에서만 사용하므로
        innerHeight 사용에 따른 모바일 주소창 문제 없음.
      */
      const viewport =
        window.innerHeight;

      const progress =
        (
          rect.top +
          rect.height / 2 -
          viewport / 2
        ) /
        (
          viewport / 2 +
          rect.height / 2
        );

      const clamped =
        Math.max(
          -1,
          Math.min(
            1,
            progress,
          ),
        );

      layer.style.setProperty(
        '--parallax-y',
        `${(
          -clamped *
          amplitude
        ).toFixed(2)}px`,
      );
    };

    const onScroll = () => {
      if (raf) {
        return;
      }

      raf =
        window.requestAnimationFrame(
          update,
        );
    };

    const start = () => {
      if (active) {
        return;
      }

      active = true;

      window.addEventListener(
        'scroll',
        onScroll,
        {
          passive: true,
        },
      );

      window.addEventListener(
        'resize',
        onScroll,
      );

      onScroll();
    };

    const stop = () => {
      if (!active) {
        return;
      }

      active = false;

      window.removeEventListener(
        'scroll',
        onScroll,
      );

      window.removeEventListener(
        'resize',
        onScroll,
      );

      if (raf) {
        window.cancelAnimationFrame(
          raf,
        );

        raf = 0;
      }
    };

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            start();
          } else {
            stop();
          }
        },
        {
          rootMargin:
            '10% 0px 10% 0px',
        },
      );

    observer.observe(
      frame,
    );

    const handlePageShow =
      () => {
        layer.style.setProperty(
          '--parallax-y',
          '0px',
        );

        if (active) {
          onScroll();
        }
      };

    window.addEventListener(
      'pageshow',
      handlePageShow,
    );

    return () => {
      observer.disconnect();

      stop();

      window.removeEventListener(
        'pageshow',
        handlePageShow,
      );
    };
  }, [parallax]);

  /*
    absolute / fixed / sticky를 직접 전달한 경우에는
    relative를 추가하지 않음.
  */
  const position =
    /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(
      className,
    )
      ? ''
      : 'relative';

  return (
    <div
      ref={frameRef}
      className={[
        'reveal-image',
        position,
        'overflow-hidden',
        noZoom
          ? ''
          : 'reveal-image--zoom',
        className,
      ].join(' ')}
      style={
        {
          '--reveal-delay':
            `${delay}ms`,
        } as CSSProperties
      }
    >
      <div
        className="
          reveal-image__inner
          absolute
          inset-0
        "
      >
        <div
          ref={layerRef}
          className={[
            'reveal-image__layer',
            'absolute',
            parallax
              ? 'inset-x-0'
              : 'inset-0',
          ].join(' ')}
          style={
            parallax
              ? {
                  top:
                    -parallax,
                  bottom:
                    -parallax,
                }
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