'use client';

import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

/* =========================================================
   SCROLL STORY
   Mobile-stable version

   핵심:
   1. vh / svh / innerHeight 혼용 제거
   2. sticky 실제 높이를 기준으로 스크롤 거리 계산
   3. CSS duration 기반 전환 제거
   4. 스크롤 진행률과 opacity / translate를 직접 연결
   5. 모바일 브라우저 주소창 resize에 영향 최소화
========================================================= */

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

/* =========================================================
   TEXT LINES
========================================================= */

const Lines = ({
  lines,
}: {
  lines: string[];
}) => (
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

/* =========================================================
   HELPERS
========================================================= */

const clamp = (
  value: number,
  min = 0,
  max = 1,
) => Math.min(max, Math.max(min, value));

/*
  첫 번째와 마지막 문장이 너무 빨리 사라지지 않도록
  전체 진행률 양 끝에 약간의 hold 구간을 둡니다.
*/
const HOLD = 0.08;

const ScrollStorySection = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const stickyRef =
    useRef<HTMLDivElement | null>(null);

  const articleRefs =
    useRef<(HTMLElement | null)[]>([]);

  const activeRef =
    useRef(0);

  const frameRef =
    useRef<number | null>(null);

  const metricsRef = useRef({
    navHeight: 0,
    distance: 1,
  });

  const [active, setActive] =
    useState(0);

  /* =======================================================
     MEASURE
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;

    if (!section || !sticky) return;

    /*
      body > nav 같이 DOM 위치를 강하게 가정하지 않고
      실제 nav 요소를 찾습니다.
    */
    const nav =
      document.querySelector<HTMLElement>('nav');

    const measure = () => {
      const navHeight =
        nav?.offsetHeight ?? 0;

      section.style.setProperty(
        '--story-nav-h',
        `${navHeight}px`,
      );

      /*
        CSS로 실제 렌더된 높이를 사용합니다.

        window.innerHeight를 사용하지 않기 때문에
        Safari / Chrome 모바일 주소창 변화와
        진행도 계산이 서로 충돌하지 않습니다.
      */
      const distance = Math.max(
        1,
        section.offsetHeight -
          sticky.offsetHeight,
      );

      metricsRef.current = {
        navHeight,
        distance,
      };
    };

    measure();

    /*
      orientation change / 실제 레이아웃 변화만
      ResizeObserver가 처리합니다.

      모바일 브라우저 주소창 때문에 발생하는
      window resize 이벤트에는 의존하지 않습니다.
    */
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

    /*
      prefers-reduced-motion
    */
    const reduceMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      );

    /* =====================================================
       SCROLL UPDATE
    ===================================================== */

    const update = () => {
      frameRef.current = null;

      const {
        navHeight,
        distance,
      } = metricsRef.current;

      /*
        section의 문서상 절대 위치.

        rect.top 단독값 대신 scrollY와 합쳐서 사용해
        모바일 visual viewport 변화의 영향을 줄입니다.
      */
      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      const scrolled =
        window.scrollY +
        navHeight -
        sectionTop;

      const rawProgress =
        clamp(scrolled / distance);

      /*
        양 끝 hold.

        첫 문구가 들어오자마자 바로 사라지거나,
        마지막 문구가 보이는 즉시 Services로
        넘어가는 느낌을 줄입니다.
      */
      const storyProgress =
        clamp(
          (rawProgress - HOLD) /
            (1 - HOLD * 2),
        );

      /*
        0 → 4 사이의 연속된 값.

        예:
        0.0  = 1번 완전 표시
        0.5  = 1번/2번 crossfade
        1.0  = 2번 완전 표시
    */
      const position =
        storyProgress *
        (stories.length - 1);

      /*
        reduced-motion은 단계 전환만.
      */
      if (reduceMotion.matches) {
        const nearest = Math.round(position);

        articleRefs.current.forEach(
          (element, index) => {
            if (!element) return;

            const visible =
              index === nearest;

            element.style.opacity =
              visible ? '1' : '0';

            element.style.transform =
              'translate3d(0, 0, 0)';

            element.style.pointerEvents =
              visible ? 'auto' : 'none';
          },
        );

        if (
          nearest !== activeRef.current
        ) {
          activeRef.current = nearest;
          setActive(nearest);
        }

        return;
      }

      /*
        각 텍스트가 스크롤 위치를 직접 따라가게 합니다.

        CSS transition 시간에 의존하지 않습니다.
      */
      articleRefs.current.forEach(
        (element, index) => {
          if (!element) return;

          const delta =
            index - position;

          const distanceFromStep =
            Math.abs(delta);

          /*
            인접한 2개 step만 crossfade.

            cos² easing:
            step 중앙 = opacity 1
            두 step 사이 = 각각 0.5
            한 step 이상 멀면 = 0
          */
          const opacity =
            distanceFromStep >= 1
              ? 0
              : Math.pow(
                  Math.cos(
                    distanceFromStep *
                      Math.PI *
                      0.5,
                  ),
                  2,
                );

          /*
            다음 문구는 살짝 아래,
            지난 문구는 살짝 위로 이동.

            모바일에서는 이동량을 작게 유지해
            과한 모션을 막습니다.
          */
          const translateY =
            clamp(delta, -1, 1) * 18;

          element.style.opacity =
            opacity.toFixed(3);

          element.style.transform =
            `translate3d(0, ${translateY}px, 0)`;

          element.style.pointerEvents =
            distanceFromStep < 0.5
              ? 'auto'
              : 'none';
        },
      );

      /*
        indicator만 nearest step 기준.
        React state는 단계가 실제 변경될 때만 갱신.
      */
      const nearest =
        Math.round(position);

      if (
        nearest !== activeRef.current
      ) {
        activeRef.current = nearest;
        setActive(nearest);
      }
    };

    function requestUpdate() {
      if (
        frameRef.current !== null
      ) {
        return;
      }

      frameRef.current =
        requestAnimationFrame(update);
    }

    /*
      최초 위치 반영
    */
    update();

    window.addEventListener(
      'scroll',
      requestUpdate,
      { passive: true },
    );

    /*
      orientationchange는 주소창 resize와 달리
      실제 화면 구조 변경이므로 다시 측정.
    */
    const handleOrientationChange =
      () => {
        window.setTimeout(() => {
          measure();
          requestUpdate();
        }, 100);
      };

    window.addEventListener(
      'orientationchange',
      handleOrientationChange,
    );

    return () => {
      if (
        frameRef.current !== null
      ) {
        cancelAnimationFrame(
          frameRef.current,
        );
      }

      resizeObserver?.disconnect();

      window.removeEventListener(
        'scroll',
        requestUpdate,
      );

      window.removeEventListener(
        'orientationchange',
        handleOrientationChange,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="scroll-story-title"
      /*
        모바일:
        500vh → 450svh

        주소창 변화에 영향을 덜 받고,
        5개 문장을 읽기에 너무 길지도 짧지도 않은 거리.

        Desktop은 기존 느낌을 살려 500svh.
      */
      className="
        relative
        h-[450svh]
        bg-[#2a2e33]
        md:h-[500svh]
      "
    >
      {/* SEO / AEO heading */}
      <h2
        id="scroll-story-title"
        className="sr-only"
      >
        수원세브란스치과 진료 과정
      </h2>

      {/* ===================================================
          STICKY VIEWPORT
      =================================================== */}
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
          priority={false}
        />

        {/* Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,rgba(28,31,35,0.70)_0%,rgba(28,31,35,0.56)_55%,rgba(28,31,35,0.42)_100%)]
          "
        />

        {/* =================================================
            STORY CONTENT
        ================================================= */}
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
            {stories.map(
              (story, index) => (
                <article
                  key={story.eyebrow}
                  ref={(element) => {
                    articleRefs.current[
                      index
                    ] = element;
                  }}
                  aria-labelledby={`scroll-story-step-${
                    index + 1
                  }`}
                  className={[
                    '[grid-area:story]',
                    'self-center',
                    'text-center',
                    'text-white',
                    'will-change-[opacity,transform]',
                    /*
                      JS 실행 전에도
                      첫 번째만 보이도록.
                    */
                    index === 0
                      ? 'opacity-100'
                      : 'opacity-0',
                  ].join(' ')}
                >
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      tracking-[0.08em]
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
                      tracking-[-0.03em]
                      sm:text-[30px]
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
                      lines={
                        story.body
                      }
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
                      lines={
                        story.note
                      }
                    />
                  </p>
                </article>
              ),
            )}
          </div>
        </div>

        {/* =================================================
            DESKTOP PROGRESS
        ================================================= */}
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
          {stories.map(
            (story, index) => (
              <li
                key={story.eyebrow}
                className={[
                  'flex items-center justify-end gap-3',
                  'text-[13px] font-semibold tracking-[0.04em]',
                  'transition-colors duration-300',
                  index === active
                    ? 'text-white'
                    : 'text-white/35',
                ].join(' ')}
              >
                <span
                  className={[
                    'h-px bg-white',
                    'transition-[width] duration-300',
                    index === active
                      ? 'w-6'
                      : 'w-0',
                  ].join(' ')}
                />

                {String(
                  index + 1,
                ).padStart(2, '0')}
              </li>
            ),
          )}
        </ol>

        {/* =================================================
            MOBILE PROGRESS
        ================================================= */}
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
          {stories.map(
            (story, index) => (
              <li
                key={story.eyebrow}
                className={[
                  'h-5 w-[2px]',
                  'transition-colors duration-200',
                  index === active
                    ? 'bg-white'
                    : 'bg-white/25',
                ].join(' ')}
              />
            ),
          )}
        </ol>
      </div>
    </section>
  );
};

export default ScrollStorySection;