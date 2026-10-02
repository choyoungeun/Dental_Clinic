'use client';

import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

/* =========================================================
   DATA
========================================================= */

const stories = [
  {
    eyebrow:
      '01 · BEFORE THE VISIT',

    heading: [
      '“치과 치료, 가격만 비교하고 계신가요?”',
      '임플란트는 어디에서나 같은 치료가 되는 것은 아닙니다.',
    ],

    body: [
      '검사를 어떻게 하는지,',
      '어떤 기준으로 치료를 결정하는지,',
      '치료 후에는 어떻게 경과를 확인하고 관리하는지.',
    ],

    note: [
      '가격에는 보이지 않는 과정이 있습니다.',
    ],
  },

  {
    eyebrow:
      '02 · DIAGNOSIS',

    heading: [
      '중요한 것은',
      '“왜 하는가”입니다.',
    ],

    body: [
      '치아를 살릴 수 있는지,',
      '정말 발치가 필요한지,',
      '지금 치료해야 하는지.',
    ],

    note: [
      '수원세브란스치과는 치료를 시작하기 전에 먼저 묻습니다.',
      '“이 치료가 지금 이 환자에게 필요한가?”',
    ],
  },

  {
    eyebrow:
      '03 · TREATMENT OPTIONS',

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
    eyebrow:
      '04 · SYSTEMIC CARE',

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
    eyebrow:
      '05 · OUR STANDARD',

    heading: [
      '진단부터 치료계획까지,',
      '대표원장이 직접 봅니다.',
    ],

    body: [
      '자연치아 보존, 재신경치료, 임플란트, 구강외과까지',
      '현재 상태에 필요한 치료 범위를 직접 확인하고 계획합니다.',
    ],

    note: [
      '진단부터 치료 후 관리까지 이어지는 과정을 중요하게 생각합니다.',
    ],
  },
];

/* =========================================================
   TEXT
========================================================= */

const Lines = ({
  lines,
}: {
  lines: string[];
}) => (
  <>
    {lines.map(
      (
        line,
        index,
      ) => (
        <span key={line}>
          {index > 0 && (
            <>
              {' '}
              <br className="hidden md:block" />
            </>
          )}

          {line}
        </span>
      ),
    )}
  </>
);

/* =========================================================
   HELPERS
========================================================= */

const clamp = (
  value: number,
  min = 0,
  max = 1,
) =>
  Math.min(
    max,
    Math.max(
      min,
      value,
    ),
  );

const smoothstep = (
  value: number,
) => {
  const t =
    clamp(value);

  return (
    t *
    t *
    (3 - 2 * t)
  );
};

const EDGE_HOLD =
  0.06;

const FADE_OUT_START =
  0.3;

const FADE_OUT_END =
  0.46;

const FADE_IN_START =
  0.54;

const FADE_IN_END =
  0.7;

/* =========================================================
   COMPONENT
========================================================= */

const ScrollStorySection =
  () => {
    const sectionRef =
      useRef<HTMLElement | null>(
        null,
      );

    const stickyRef =
      useRef<HTMLDivElement | null>(
        null,
      );

    const articleRefs =
      useRef<
        (
          | HTMLElement
          | null
        )[]
      >([]);

    const frameRef =
      useRef<number | null>(
        null,
      );

    const activeRef =
      useRef(0);

    const metricsRef =
      useRef({
        navHeight: 0,
        distance: 1,
      });

    const [
      active,
      setActive,
    ] = useState(0);

    /* =====================================================
       ENGINE
    ===================================================== */

    useEffect(() => {
      const section =
        sectionRef.current;

      const sticky =
        stickyRef.current;

      if (
        !section ||
        !sticky
      ) {
        return;
      }

      const nav =
        document.querySelector<HTMLElement>(
          'nav',
        );

      const reduceMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        );

      /* ===================================================
         MEASURE
      =================================================== */

      const measure =
        () => {
          const navHeight =
            nav?.offsetHeight ??
            0;

          section.style.setProperty(
            '--story-nav-h',
            `${navHeight}px`,
          );

          /*
            실제 section / sticky DOM 높이만 사용.
          */
          const distance =
            Math.max(
              1,
              section.offsetHeight -
                sticky.offsetHeight,
            );

          metricsRef.current =
            {
              navHeight,
              distance,
            };
        };

      /* ===================================================
         UPDATE
      =================================================== */

      const update =
        () => {
          frameRef.current =
            null;

          const {
            navHeight,
            distance,
          } =
            metricsRef.current;

          const sectionTop =
            section.getBoundingClientRect()
              .top +
            window.scrollY;

          const scrolled =
            window.scrollY +
            navHeight -
            sectionTop;

          const rawProgress =
            clamp(
              scrolled /
                distance,
            );

          const storyProgress =
            clamp(
              (
                rawProgress -
                EDGE_HOLD
              ) /
                (
                  1 -
                  EDGE_HOLD *
                    2
                ),
            );

          const position =
            storyProgress *
            (
              stories.length -
              1
            );

          const baseIndex =
            Math.min(
              stories.length -
                1,
              Math.floor(
                position,
              ),
            );

          const nextIndex =
            Math.min(
              stories.length -
                1,
              baseIndex +
                1,
            );

          const localProgress =
            position -
            baseIndex;

          /* ===============================================
             REDUCED MOTION
          =============================================== */

          if (
            reduceMotion.matches
          ) {
            const nearest =
              Math.round(
                position,
              );

            articleRefs.current.forEach(
              (
                element,
                index,
              ) => {
                if (
                  !element
                ) {
                  return;
                }

                const visible =
                  index ===
                  nearest;

                element.style.opacity =
                  visible
                    ? '1'
                    : '0';

                element.style.transform =
                  'translate3d(0,0,0)';

                element.style.pointerEvents =
                  visible
                    ? 'auto'
                    : 'none';

                element.style.visibility =
                  visible
                    ? 'visible'
                    : 'hidden';
              },
            );

            if (
              nearest !==
              activeRef.current
            ) {
              activeRef.current =
                nearest;

              setActive(
                nearest,
              );
            }

            return;
          }

          /* ===============================================
             NORMAL
          =============================================== */

          articleRefs.current.forEach(
            (
              element,
              index,
            ) => {
              if (
                !element
              ) {
                return;
              }

              let opacity =
                0;

              let translateY =
                12;

              /*
                마지막 Story
              */
              if (
                baseIndex ===
                stories.length -
                  1
              ) {
                if (
                  index ===
                  stories.length -
                    1
                ) {
                  opacity =
                    1;

                  translateY =
                    0;
                }
              } else {
                /*
                  CURRENT
                */
                if (
                  index ===
                  baseIndex
                ) {
                  if (
                    localProgress <=
                    FADE_OUT_START
                  ) {
                    opacity =
                      1;

                    translateY =
                      0;
                  } else if (
                    localProgress <
                    FADE_OUT_END
                  ) {
                    const rawT =
                      (
                        localProgress -
                        FADE_OUT_START
                      ) /
                      (
                        FADE_OUT_END -
                        FADE_OUT_START
                      );

                    const t =
                      smoothstep(
                        rawT,
                      );

                    opacity =
                      1 - t;

                    translateY =
                      -10 *
                      t;
                  } else {
                    opacity =
                      0;

                    translateY =
                      -10;
                  }
                }

                /*
                  NEXT
                */
                if (
                  index ===
                  nextIndex
                ) {
                  if (
                    localProgress <=
                    FADE_IN_START
                  ) {
                    opacity =
                      0;

                    translateY =
                      12;
                  } else if (
                    localProgress <
                    FADE_IN_END
                  ) {
                    const rawT =
                      (
                        localProgress -
                        FADE_IN_START
                      ) /
                      (
                        FADE_IN_END -
                        FADE_IN_START
                      );

                    const t =
                      smoothstep(
                        rawT,
                      );

                    opacity =
                      t;

                    translateY =
                      12 *
                      (
                        1 -
                        t
                      );
                  } else {
                    opacity =
                      1;

                    translateY =
                      0;
                  }
                }
              }

              element.style.opacity =
                opacity.toFixed(
                  3,
                );

              element.style.transform =
                `translate3d(0, ${translateY}px, 0)`;

              element.style.pointerEvents =
                opacity >
                0.5
                  ? 'auto'
                  : 'none';

              /*
                완전히 안 보이는 Story는 paint에서도 숨김.
              */
              element.style.visibility =
                opacity <=
                0.001
                  ? 'hidden'
                  : 'visible';
            },
          );

          /* ===============================================
             INDICATOR
          =============================================== */

          let nextActive =
            baseIndex;

          if (
            baseIndex <
              stories.length -
                1 &&
            localProgress >=
              0.5
          ) {
            nextActive =
              nextIndex;
          }

          if (
            nextActive !==
            activeRef.current
          ) {
            activeRef.current =
              nextActive;

            setActive(
              nextActive,
            );
          }
        };

      /* ===================================================
         RAF
      =================================================== */

      const requestUpdate =
        () => {
          if (
            frameRef.current !==
            null
          ) {
            return;
          }

          frameRef.current =
            window.requestAnimationFrame(
              update,
            );
        };

      /* ===================================================
         RESIZE OBSERVER
      =================================================== */

      const resizeObserver =
        typeof ResizeObserver !==
        'undefined'
          ? new ResizeObserver(
              () => {
                measure();
                requestUpdate();
              },
            )
          : null;

      resizeObserver?.observe(
        section,
      );

      resizeObserver?.observe(
        sticky,
      );

      if (nav) {
        resizeObserver?.observe(
          nav,
        );
      }

      measure();
      update();

      /* ===================================================
         EVENTS
      =================================================== */

      window.addEventListener(
        'scroll',
        requestUpdate,
        {
          passive: true,
        },
      );

      const handleOrientationChange =
        () => {
          window.setTimeout(
            () => {
              measure();
              requestUpdate();
            },
            180,
          );
        };

      window.addEventListener(
        'orientationchange',
        handleOrientationChange,
      );

      /*
        Safari bfcache / 뒤로가기 복원 대응.
      */
      const handlePageShow =
        () => {
          window.setTimeout(
            () => {
              measure();
              requestUpdate();
            },
            0,
          );
        };

      window.addEventListener(
        'pageshow',
        handlePageShow,
      );

      return () => {
        resizeObserver?.disconnect();

        if (
          frameRef.current !==
          null
        ) {
          window.cancelAnimationFrame(
            frameRef.current,
          );
        }

        window.removeEventListener(
          'scroll',
          requestUpdate,
        );

        window.removeEventListener(
          'orientationchange',
          handleOrientationChange,
        );

        window.removeEventListener(
          'pageshow',
          handlePageShow,
        );
      };
    }, []);

    return (
      <section
        ref={sectionRef}
        aria-labelledby="scroll-story-title"
        className="
          relative
          h-[600svh]
          bg-[#2a2e33]
          md:h-[550svh]
        "
      >
        <h2
          id="scroll-story-title"
          className="sr-only"
        >
          수원세브란스치과
          진료 과정
        </h2>

        {/* ===============================================
            STICKY

            외부 scroll 거리 = svh
            실제 화면 높이 = dvh
        =============================================== */}

        <div
          ref={stickyRef}
          className="
            sticky
            top-[var(--story-nav-h,0px)]
            overflow-hidden
          "
          style={{
            height:
              'calc(100dvh - var(--story-nav-h, 0px))',
          }}
        >
          {/* BACKGROUND */}

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

          {/* OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(
                ellipse_at_center,
                rgba(28,31,35,0.72)_0%,
                rgba(28,31,35,0.58)_55%,
                rgba(28,31,35,0.44)_100%
              )]
            "
          />

          {/* CONTENT */}

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
                (
                  story,
                  index,
                ) => (
                  <article
                    key={
                      story.eyebrow
                    }
                    ref={(
                      element,
                    ) => {
                      articleRefs.current[
                        index
                      ] =
                        element;
                    }}
                    aria-labelledby={`scroll-story-step-${
                      index +
                      1
                    }`}
                    aria-hidden={
                      index !==
                      active
                    }
                    className={[
                      '[grid-area:story]',
                      'self-center',
                      'text-center',
                      'text-white',
                      'will-change-[opacity,transform]',
                      index ===
                      0
                        ? 'visible opacity-100'
                        : 'invisible opacity-0',
                    ].join(
                      ' ',
                    )}
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
                      {
                        story.eyebrow
                      }
                    </p>

                    <h3
                      id={`scroll-story-step-${
                        index +
                        1
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
                        (
                          line,
                        ) => (
                          <span
                            key={
                              line
                            }
                            className="block"
                          >
                            {
                              line
                            }
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

          {/* ===============================================
              DESKTOP INDICATOR
          =============================================== */}

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
              (
                story,
                index,
              ) => (
                <li
                  key={
                    story.eyebrow
                  }
                  className={[
                    'flex items-center justify-end gap-3',
                    'text-[13px] font-semibold tracking-[0.04em]',
                    'transition-colors duration-300',
                    index ===
                    active
                      ? 'text-white'
                      : 'text-white/35',
                  ].join(
                    ' ',
                  )}
                >
                  <span
                    className={[
                      'h-px bg-white transition-[width] duration-300',
                      index ===
                      active
                        ? 'w-6'
                        : 'w-0',
                    ].join(
                      ' ',
                    )}
                  />

                  {String(
                    index +
                      1,
                  ).padStart(
                    2,
                    '0',
                  )}
                </li>
              ),
            )}
          </ol>

          {/* ===============================================
              MOBILE INDICATOR
          =============================================== */}

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
              (
                story,
                index,
              ) => (
                <li
                  key={
                    story.eyebrow
                  }
                  className={[
                    'h-5 w-[2px] transition-colors duration-300',
                    index ===
                    active
                      ? 'bg-white'
                      : 'bg-white/25',
                  ].join(
                    ' ',
                  )}
                />
              ),
            )}
          </ol>
        </div>
      </section>
    );
  };

export default ScrollStorySection;