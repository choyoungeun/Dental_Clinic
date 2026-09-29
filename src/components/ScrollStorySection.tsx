'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const stories = [
  {
    eyebrow: '01 · BEFORE THE VISIT',
    heading: [
      '“대학병원에서 한 번 더 확인해보세요.”',
      '그런 설명을 들으셨나요?',
    ],
    body: [
      '큰 병원 예약과 이동이 부담스럽고,',
      '지금 어떤 치료가 필요한지부터',
      '차분히 확인하고 싶을 수 있습니다.',
    ],
    note: [
      '대학병원·종합병원 임상경험을 바탕으로',
      '이현민 대표원장이 직접 진료합니다.',
    ],
  },
  {
    eyebrow: '02 · DIAGNOSIS',
    heading: [
      '치료를 결정하기 전에,',
      '현재 상태부터 다시 확인합니다.',
    ],
    body: [
      '구강검사와 방사선 영상,',
      '필요한 경우 3D CT를 통해',
      '치아와 치근, 잇몸뼈와 주변 구조를 확인합니다.',
    ],
    note: [
      '치료가 필요한 이유와',
      '현재 상태에서 가능한 선택지를 설명합니다.',
    ],
  },
  {
    eyebrow: '03 · TREATMENT OPTIONS',
    heading: [
      '한 가지 치료를',
      '먼저 정해두지 않습니다.',
    ],
    body: [
      '자연치아를 유지할 수 있는지 살펴보고,',
      '신경치료·재신경치료부터 임플란트,',
      '구강외과적 치료까지 필요한 범위를 검토합니다.',
    ],
    note: [
      '현재 치아 상태에 따라',
      '가능한 방법과 치료 순서를 설명합니다.',
    ],
  },
  {
    eyebrow: '04 · SYSTEMIC CARE',
    heading: [
      '치아만이 아니라,',
      '치료에 영향을 주는 전신 상태까지 확인합니다.',
    ],
    body: [
      '당뇨·고혈압·심혈관질환이나 복용 중인 약물이 있다면',
      '치과 치료에 영향을 줄 수 있는 부분을 함께 확인합니다.',
    ],
    note: [
      '필요한 경우 같은 건물 내 내과 진료와 연계해',
      '치료 전 확인이 필요한 사항을 점검합니다.',
    ],
  },
  {
    eyebrow: '05 · OUR STANDARD',
    heading: [
      '진단부터 치료계획까지,',
      '대표원장이 직접 봅니다.',
    ],
    body: [
      '자연치아 보존, 재신경치료, 임플란트, 구강외과까지',
      '현재 상태에 필요한 치료 범위를 직접 확인하고 계획합니다.',
    ],
    note: [
      '필요한 경우 상급의료기관 또는 관련 진료과와의 연계까지',
      '치료 흐름에 맞게 안내합니다.',
    ],
  },
];

const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, index) => (
      <span key={line}>
        {index > 0 && (
          <>
            {' '}
            <br className="hidden md:block" />
          </>
        )}
        {line}
      </span>
    ))}
  </>
);

const clamp = (value: number) =>
  Math.min(1, Math.max(0, value));

export default function ScrollStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const frameRef = useRef<number | null>(null);

  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;

    if (!section || !sticky) return;

    const nav =
      document.querySelector<HTMLElement>('nav');

    let navHeight = nav?.offsetHeight ?? 0;
    let scrollDistance = 1;

    const measure = () => {
      navHeight = nav?.offsetHeight ?? 0;

      section.style.setProperty(
        '--story-nav-h',
        `${navHeight}px`,
      );

      scrollDistance = Math.max(
        1,
        section.offsetHeight - sticky.offsetHeight,
      );
    };

    const update = () => {
      frameRef.current = null;

      /*
       * 문서 전체에서 section의 실제 시작 위치.
       */
      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      const scrolled =
        window.scrollY +
        navHeight -
        sectionTop;

      const progress = clamp(
        scrolled / scrollDistance,
      );

      /*
       * 중요:
       *
       * crossfade 하지 않는다.
       * 화면에는 반드시 하나의 story만 표시.
       */
      const nextActive = Math.min(
        stories.length - 1,
        Math.floor(
          progress * stories.length,
        ),
      );

      if (
        nextActive !== activeRef.current
      ) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) return;

      frameRef.current =
        requestAnimationFrame(update);
    };

    measure();
    update();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            measure();
            requestUpdate();
          })
        : null;

    resizeObserver?.observe(section);
    resizeObserver?.observe(sticky);

    if (nav) {
      resizeObserver?.observe(nav);
    }

    window.addEventListener(
      'scroll',
      requestUpdate,
      { passive: true },
    );

    const onOrientationChange = () => {
      window.setTimeout(() => {
        measure();
        requestUpdate();
      }, 150);
    };

    window.addEventListener(
      'orientationchange',
      onOrientationChange,
    );

    return () => {
      resizeObserver?.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(
          frameRef.current,
        );
      }

      window.removeEventListener(
        'scroll',
        requestUpdate,
      );

      window.removeEventListener(
        'orientationchange',
        onOrientationChange,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="scroll-story-title"
      className="
        relative
        h-[450svh]
        bg-[#2a2e33]
        md:h-[500svh]
      "
    >
      <h2
        id="scroll-story-title"
        className="sr-only"
      >
        수원세브란스치과 진료 과정
      </h2>

      <div
        ref={stickyRef}
        className="
          sticky
          top-[var(--story-nav-h,0px)]
          overflow-hidden
        "
        style={{
          height:
            'calc(100svh - var(--story-nav-h, 0px))',
        }}
      >
        {/* Background */}
        <Image
          src="/images/test04.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="
            object-cover
            object-[60%_center]
          "
        />

        {/* Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,rgba(28,31,35,0.72)_0%,rgba(28,31,35,0.58)_55%,rgba(28,31,35,0.44)_100%)]
          "
        />

        {/* Story */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            justify-center
            px-5
            md:px-8
          "
        >
          <div
            className="
              grid
              w-full
              max-w-[820px]
              [grid-template-areas:'story']
              md:pr-16
            "
          >
            {stories.map((story, index) => {
              const isActive =
                index === active;

              return (
                <article
                  key={story.eyebrow}
                  aria-labelledby={`scroll-story-step-${
                    index + 1
                  }`}
                  className={[
                    '[grid-area:story]',
                    'self-center',
                    'text-center',
                    'text-white',

                    /*
                     * 핵심:
                     * inactive story는 완전히 안 보이게.
                     *
                     * visibility를 같이 써서
                     * opacity transition 중 글자가 겹치지 않도록 함.
                     */
                    isActive
                      ? [
                          'visible',
                          'opacity-100',
                          'translate-y-0',
                          'transition-[opacity,transform]',
                          'duration-500',
                          'ease-out',
                          'delay-100',
                        ].join(' ')
                      : [
                          'invisible',
                          'pointer-events-none',
                          'opacity-0',
                          'translate-y-4',
                          'transition-none',
                        ].join(' '),

                    'motion-reduce:transform-none',
                    'motion-reduce:transition-none',
                  ].join(' ')}
                >
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      tracking-[0.09em]
                      text-white/70
                      sm:text-[13px]
                      md:text-[14px]
                    "
                  >
                    {story.eyebrow}
                  </p>

                  <h3
                    id={`scroll-story-step-${
                      index + 1
                    }`}
                    className="
                      mt-4
                      break-keep
                      text-[28px]
                      font-bold
                      leading-[1.32]
                      tracking-[-0.035em]
                      sm:text-[31px]
                      md:mt-6
                      md:text-[44px]
                      lg:text-[52px]
                    "
                  >
                    {story.heading.map(
                      (line) => (
                        <span
                          key={line}
                          className="block"
                        >
                          {line}
                        </span>
                      ),
                    )}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-5
                      max-w-[680px]
                      break-keep
                      text-[15px]
                      leading-[1.75]
                      text-white/90
                      sm:text-[16px]
                      md:mt-8
                      md:text-[19px]
                    "
                  >
                    <Lines
                      lines={story.body}
                    />
                  </p>

                  <p
                    className="
                      mx-auto
                      mt-7
                      max-w-[560px]
                      break-keep
                      border-t
                      border-white/30
                      pt-5
                      text-[13px]
                      leading-[1.7]
                      text-white/75
                      sm:text-[14px]
                      md:mt-10
                      md:pt-6
                      md:text-[16px]
                    "
                  >
                    <Lines
                      lines={story.note}
                    />
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Desktop progress */}
        <ol
          aria-hidden="true"
          className="
            absolute
            right-8
            top-1/2
            z-10
            hidden
            -translate-y-1/2
            flex-col
            gap-4
            md:flex
            lg:right-12
          "
        >
          {stories.map((story, index) => (
            <li
              key={story.eyebrow}
              className={[
                'flex items-center justify-end gap-3',
                'text-[13px] font-semibold',
                'tracking-[0.04em]',
                index === active
                  ? 'text-white'
                  : 'text-white/35',
              ].join(' ')}
            >
              <span
                className={[
                  'h-px bg-white',
                  index === active
                    ? 'w-6'
                    : 'w-0',
                ].join(' ')}
              />

              {String(
                index + 1,
              ).padStart(2, '0')}
            </li>
          ))}
        </ol>

        {/* Mobile progress */}
        <ol
          aria-hidden="true"
          className="
            absolute
            right-2
            top-1/2
            z-10
            flex
            -translate-y-1/2
            flex-col
            gap-1.5
            md:hidden
          "
        >
          {stories.map((story, index) => (
            <li
              key={story.eyebrow}
              className={[
                'h-5 w-[2px]',
                index === active
                  ? 'bg-white'
                  : 'bg-white/25',
              ].join(' ')}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}