
'use client';

import Image from 'next/image';
import {
  useRef,
  useState,
  type TouchEvent,
} from 'react';

const slides = [
  {
    eyebrow: '01 / DIAGNOSIS FIRST',
    title: [
      '치료보다 먼저,',
      '정확한 진단.',
    ],
    description:
      '치료가 필요한 이유와 선택지를 충분히 설명합니다.',
  },
  {
    eyebrow: '02 / COMPREHENSIVE CARE',
    title: [
      '자연치아 보존부터',
      '임플란트·구강외과까지.',
    ],
    description:
      '치아 상태에 맞는 치료 방법을 신중하게 검토합니다.',
  },
  {
    eyebrow: '03 / DOCTOR-LED CARE',
    title: [
      '진단부터 치료계획까지,',
      '대표원장이 직접.',
    ],
    description:
      '대학병원과 종합병원에서의 임상 경험을 바탕으로 진료합니다.',
  },
];

export default function MobileScrollStory() {
  const [active, setActive] = useState(0);

  const touchStart = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const goTo = (index: number) => {
    setActive(
      Math.max(0, Math.min(slides.length - 1, index))
    );
  };

  const onTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    touchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const onTouchEnd = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    if (!touchStart.current) return;

    const dx =
      event.changedTouches[0].clientX -
      touchStart.current.x;

    const dy =
      event.changedTouches[0].clientY -
      touchStart.current.y;

    touchStart.current = null;

    // 세로 스크롤은 브라우저에 그대로 맡김
    if (Math.abs(dy) >= Math.abs(dx)) return;

    // 작은 손가락 움직임은 무시
    if (Math.abs(dx) < 45) return;

    if (dx < 0) {
      goTo(active + 1);
    } else {
      goTo(active - 1);
    }
  };

  return (
    <section
      aria-label="수원세브란스치과 진료 철학"
      className="relative isolate overflow-hidden bg-[#202830] text-white md:hidden"
    >
      {/* 기존 스크롤 스토리 배경 유지 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/images/test04.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[#18232e]/75" />
      </div>

      <div
        className="relative flex min-h-[480px] flex-col justify-center overflow-hidden"
        style={{
          touchAction: 'pan-y',
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 슬라이드 콘텐츠 */}
        <div className="relative flex min-h-[360px] items-center justify-center px-7 py-12">
          <div
            key={active}
            className="w-full max-w-[440px] text-center"
            aria-live="polite"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#a9c8ed]">
              {slides[active].eyebrow}
            </p>

            <h2 className="mt-6 break-keep text-[30px] font-bold leading-[1.4] tracking-[-0.04em]">
              {slides[active].title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mx-auto mt-6 h-px w-10 bg-white/40" />

            <p className="mx-auto mt-6 max-w-[340px] break-keep text-[15px] leading-[1.8] text-white/80">
              {slides[active].description}
            </p>
          </div>
        </div>

        {/* 하단 컨트롤 */}
        <div className="relative flex items-center justify-between px-7 pb-9">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="이전 슬라이드"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-opacity disabled:opacity-25"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            className="flex items-center gap-2"
            aria-label="슬라이드 선택"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${index + 1}번 슬라이드`}
                aria-current={active === index ? 'step' : undefined}
                className={[
                  'h-[3px] rounded-full transition-all duration-300',
                  active === index
                    ? 'w-8 bg-white'
                    : 'w-3 bg-white/35',
                ].join(' ')}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === slides.length - 1}
            aria-label="다음 슬라이드"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-opacity disabled:opacity-25"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
