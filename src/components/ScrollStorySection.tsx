'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* =========================================================
   SCROLL STORY
   - 바깥 section이 스크롤 거리(500vh)를 만들고
     안쪽 sticky 뷰포트가 한 화면에 고정됩니다.
   - 배경 이미지는 고정, 스크롤 진행도에 따라 텍스트만 교체됩니다.
   - 5개 이야기 모두 실제 HTML로 DOM에 존재합니다 (SEO / AI 크롤러).
========================================================= */

const stories = [
  {
    eyebrow: '01 · BEFORE THE VISIT',
    heading: ['“대학병원에서 한 번 더 확인해보세요.”', '그런 설명을 들으셨나요?'],
    body: [
      '큰 병원 예약과 이동이 부담스럽고,',
      '지금 어떤 치료가 필요한지부터',
      '차분히 확인하고 싶을 수 있습니다.',
    ],
    note: ['대학병원·종합병원 임상경험을 바탕으로', '이현민 대표원장이 직접 진료합니다.'],
  },
  {
    eyebrow: '02 · DIAGNOSIS',
    heading: ['치료를 결정하기 전에,', '현재 상태부터 다시 확인합니다.'],
    body: [
      '구강검사와 방사선 영상,',
      '필요한 경우 3D CT를 통해',
      '치아와 치근, 잇몸뼈와 주변 구조를 확인합니다.',
    ],
    note: ['치료가 필요한 이유와', '현재 상태에서 가능한 선택지를 설명합니다.'],
  },
  {
    eyebrow: '03 · TREATMENT OPTIONS',
    heading: ['한 가지 치료를', '먼저 정해두지 않습니다.'],
    body: [
      '자연치아를 유지할 수 있는지 살펴보고,',
      '신경치료·재신경치료부터 임플란트,',
      '구강외과적 치료까지 필요한 범위를 검토합니다.',
    ],
    note: ['현재 치아 상태에 따라', '가능한 방법과 치료 순서를 설명합니다.'],
  },
  {
    eyebrow: '04 · SYSTEMIC CARE',
    heading: ['치아만이 아니라,', '치료에 영향을 주는 전신 상태까지 확인합니다.'],
    body: [
      '당뇨·고혈압·심혈관질환이나 복용 중인 약물이 있다면',
      '치과 치료에 영향을 줄 수 있는 부분을 함께 확인합니다.',
    ],
    note: ['필요한 경우 같은 건물 내 내과 진료와 연계해', '치료 전 확인이 필요한 사항을 점검합니다.'],
  },
  {
    eyebrow: '05 · OUR STANDARD',
    heading: ['진단부터 치료계획까지,', '대표원장이 직접 봅니다.'],
    body: [
      '자연치아 보존, 재신경치료, 임플란트, 구강외과까지',
      '현재 상태에 필요한 치료 범위를 직접 확인하고 계획합니다.',
    ],
    note: ['필요한 경우 상급의료기관 또는 관련 진료과와의 연계까지', '치료 흐름에 맞게 안내합니다.'],
  },
];

/* 데스크톱에서는 원문 줄바꿈 유지, 모바일에서는 자연 줄바꿈 */
const Lines = ({ lines }: { lines: string[] }) =>
  lines.map((line, index) => (
    <span key={line}>
      {index > 0 && (
        <>
          {' '}
          <br className="hidden md:block" />
        </>
      )}
      {line}
    </span>
  ));

const ScrollStorySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  /* ---------------------------------------------------------
     Navbar 높이 측정 → sticky top / 뷰포트 높이에 반영
     (Navbar는 sticky이며 화면 크기별로 높이가 달라짐)
  --------------------------------------------------------- */
  useEffect(() => {
    const section = sectionRef.current;
    const nav = document.querySelector<HTMLElement>('body > nav');
    if (!section || !nav || typeof ResizeObserver === 'undefined') return;

    const apply = () =>
      section.style.setProperty('--story-nav-h', `${nav.offsetHeight}px`);

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(nav);

    return () => observer.disconnect();
  }, []);

  /* ---------------------------------------------------------
     스크롤 진행도 → 활성 단계
     - rAF로 프레임당 1회만 계산
     - 단계가 바뀔 때만 setState (같은 값이면 React가 무시)
  --------------------------------------------------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const navHeight =
        parseFloat(section.style.getPropertyValue('--story-nav-h')) || 0;
      const stickyHeight = window.innerHeight - navHeight;

      // sticky 뷰포트가 고정되어 있는 동안 이동 가능한 전체 거리
      const distance = rect.height - stickyHeight;
      if (distance <= 0) return;

      const scrolled = navHeight - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / distance));

      setActive(
        Math.min(stories.length - 1, Math.floor(progress * stories.length)),
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="scroll-story-title"
      className="relative h-[500vh] bg-[#2a2e33]"
    >
      {/* 섹션 제목 : 페이지 heading 계층(h1 Hero → h2 섹션 → h3 단계)용, 화면에는 숨김 */}
      <h2 id="scroll-story-title" className="sr-only">
        수원세브란스치과 진료 과정
      </h2>

      {/* Sticky viewport */}
      <div className="sticky top-[var(--story-nav-h,0px)] h-[calc(100svh_-_var(--story-nav-h,0px))] overflow-hidden">
        {/* Background : 전 단계 동일, 움직이지 않음 */}
        <Image
          src="/images/test04.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />

        {/* Readability overlay : 중립 차콜 그레이, 중앙(텍스트 영역)만 조금 더 진하게 */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,31,35,0.70)_0%,rgba(28,31,35,0.56)_55%,rgba(28,31,35,0.42)_100%)]" />

        {/* Story content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-5 md:px-8">
          {/* 5개 article을 같은 grid 칸에 겹쳐 배치 → 레이아웃 이동 없음 */}
          <div className="grid w-full max-w-[820px] [grid-template-areas:'story'] md:pr-16">
            {stories.map((story, index) => {
              const isActive = index === active;

              return (
                <article
                  key={story.eyebrow}
                  aria-labelledby={`scroll-story-step-${index + 1}`}
                  className={[
                    '[grid-area:story] self-center text-center text-white',
                    'transition-[opacity,transform] duration-700 ease-out',
                    'motion-reduce:translate-y-0 motion-reduce:transition-opacity motion-reduce:duration-300',
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-6 opacity-0',
                  ].join(' ')}
                >
                  <p className="text-[13px] font-semibold tracking-[0.08em] text-white/70 md:text-[14px]">
                    {story.eyebrow}
                  </p>

                  <h3
                    id={`scroll-story-step-${index + 1}`}
                    className="mt-5 break-keep text-[30px] font-bold leading-[1.3] tracking-[-0.03em] md:mt-6 md:text-[44px] lg:text-[52px]"
                  >
                    {story.heading.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p className="mx-auto mt-6 max-w-[680px] break-keep text-[16px] leading-[1.75] text-white/90 md:mt-8 md:text-[19px]">
                    <Lines lines={story.body} />
                  </p>

                  <p className="mx-auto mt-8 max-w-[560px] break-keep border-t border-white/30 pt-6 text-[14px] leading-[1.7] text-white/75 md:mt-10 md:text-[16px]">
                    <Lines lines={story.note} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Progress : 데스크톱 우측 세로 번호 */}
        <ol
          aria-hidden="true"
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 md:flex lg:right-12"
        >
          {stories.map((story, index) => (
            <li
              key={story.eyebrow}
              className={[
                'flex items-center justify-end gap-3 text-[13px] font-semibold tracking-[0.04em] transition-colors duration-500',
                index === active ? 'text-white' : 'text-white/35',
              ].join(' ')}
            >
              <span
                className={[
                  'h-px bg-white transition-[width] duration-500 motion-reduce:transition-none',
                  index === active ? 'w-6' : 'w-0',
                ].join(' ')}
              />
              {String(index + 1).padStart(2, '0')}
            </li>
          ))}
        </ol>

        {/* Progress : 모바일 우측 가장자리 얇은 세로 막대
            (하단은 FloatingBar가 덮으므로 사용하지 않음) */}
        <ol
          aria-hidden="true"
          className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-1.5 md:hidden"
        >
          {stories.map((story, index) => (
            <li
              key={story.eyebrow}
              className={[
                'h-5 w-[2px] transition-colors duration-500',
                index === active ? 'bg-white' : 'bg-white/30',
              ].join(' ')}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ScrollStorySection;
