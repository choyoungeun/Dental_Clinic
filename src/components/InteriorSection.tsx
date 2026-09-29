'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Reveal from './Reveal';
import TextReveal from './TextReveal';

/* =========================================================
   CATEGORY
========================================================= */

const categories = [
  {
    id: 'waiting',
    label: '접수 · 대기',
    eng: 'RECEPTION & WAITING',
  },
  {
    id: 'treatment',
    label: '진료실',
    eng: 'TREATMENT ROOM',
  },
  {
    id: 'consultation',
    label: '상담 · 편의',
    eng: 'CONSULTATION',
  },
  {
    id: 'hallway',
    label: '진료 동선',
    eng: 'CLINIC FLOW',
  },
] as const;

type CategoryId =
  (typeof categories)[number]['id'];

/* =========================================================
   PHOTO DATA
========================================================= */

const photos = [
  /* -------------------------------------------------------
     접수 · 대기
  ------------------------------------------------------- */

  {
    category: 'waiting' as CategoryId,
    src: '/images/entrance.jpg',
    alt: '수원세브란스치과 입구',
    title: '치과 입구',
  },
  {
    category: 'waiting' as CategoryId,
    src: '/images/infodesk.jpg',
    alt: '수원세브란스치과 접수 데스크',
    title: '접수 데스크',
  },
  {
    category: 'waiting' as CategoryId,
    src: '/images/waitingarea.jpg',
    alt: '수원세브란스치과 대기공간',
    title: '대기공간',
  },
  {
    category: 'waiting' as CategoryId,
    src: '/images/waitingarea2.jpg',
    alt: '수원세브란스치과 대기공간 전경',
    title: '대기공간 전경',
  },

  /* -------------------------------------------------------
     진료실
  ------------------------------------------------------- */

  {
    category: 'treatment' as CategoryId,
    src: '/images/openclinic.jpg',
    alt: '수원세브란스치과 오픈 진료실',
    title: '오픈 진료실',
  },
  {
    category: 'treatment' as CategoryId,
    src: '/images/openclinic2.jpg',
    alt: '수원세브란스치과 진료공간',
    title: '진료공간',
  },
  {
    category: 'treatment' as CategoryId,
    src: '/images/implantroom.jpg',
    alt: '수원세브란스치과 임플란트 수술실',
    title: '임플란트 수술실',
  },

  /* -------------------------------------------------------
     상담 · 편의
  ------------------------------------------------------- */

  {
    category: 'consultation' as CategoryId,
    src: '/images/counceling.jpg',
    alt: '수원세브란스치과 상담실',
    title: '상담실',
  },
  {
    category: 'consultation' as CategoryId,
    src: '/images/powderroom.jpg',
    alt: '수원세브란스치과 파우더룸',
    title: '파우더룸',
  },

  /* -------------------------------------------------------
     진료 동선
  ------------------------------------------------------- */

  {
    category: 'hallway' as CategoryId,
    src: '/images/hallway.jpg',
    alt: '수원세브란스치과 진료실 복도',
    title: '진료실 복도',
  },
  {
    category: 'hallway' as CategoryId,
    src: '/images/hallway2.jpg',
    alt: '수원세브란스치과 내부 진료 동선',
    title: '진료 동선',
  },
];

type Photo = (typeof photos)[number];

/* =========================================================
   INTERIOR SECTION
========================================================= */

export const InteriorSection = () => {
  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<CategoryId>('waiting');

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState<number | null>(
    null,
  );

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredPhotos =
    useMemo(
      () =>
        photos.filter(
          (photo) =>
            photo.category ===
            activeCategory,
        ),
      [activeCategory],
    );

  const currentPhoto: Photo =
    filteredPhotos[
      activeIndex
    ] ?? filteredPhotos[0];

  const currentCategory =
    categories.find(
      (category) =>
        category.id ===
        activeCategory,
    ) ?? categories[0];

  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const changeCategory = (
    category: CategoryId,
  ) => {
    setActiveCategory(category);
    setActiveIndex(0);
    setSelectedIndex(null);
  };

  /* =======================================================
     MAIN PHOTO NAVIGATION
  ======================================================= */

  const goPrevious = () => {
    setActiveIndex(
      (current) =>
        current === 0
          ? filteredPhotos.length -
            1
          : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex(
      (current) =>
        current ===
        filteredPhotos.length -
          1
          ? 0
          : current + 1,
    );
  };

  /* =======================================================
     LIGHTBOX
  ======================================================= */

  const closeLightbox =
    useCallback(() => {
      setSelectedIndex(null);
    }, []);

  const showPreviousImage =
    useCallback(() => {
      setSelectedIndex(
        (current) => {
          if (
            current === null
          ) {
            return null;
          }

          return current === 0
            ? filteredPhotos.length -
                1
            : current - 1;
        },
      );
    }, [filteredPhotos.length]);

  const showNextImage =
    useCallback(() => {
      setSelectedIndex(
        (current) => {
          if (
            current === null
          ) {
            return null;
          }

          return current ===
            filteredPhotos.length -
              1
            ? 0
            : current + 1;
        },
      );
    }, [filteredPhotos.length]);

  useEffect(() => {
    if (
      selectedIndex === null
    ) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      'hidden';

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === 'Escape'
      ) {
        closeLightbox();
      }

      if (
        event.key ===
        'ArrowLeft'
      ) {
        showPreviousImage();
      }

      if (
        event.key ===
        'ArrowRight'
      ) {
        showNextImage();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [
    selectedIndex,
    closeLightbox,
    showPreviousImage,
    showNextImage,
  ]);

  const selectedPhoto =
    selectedIndex !== null
      ? filteredPhotos[
          selectedIndex
        ]
      : null;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="interior"
      className="
        scroll-mt-24
        overflow-hidden
        bg-fog
        py-20
        md:py-28
        lg:py-36
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
          lg:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[1fr_420px]
            lg:items-end
          "
        >
          <div>
            <Reveal variant="fade">
              <p
                className="
                  text-[13px]
                  font-semibold
                  tracking-[0.08em]
                  text-mist
                  md:text-[14px]
                "
              >
                CLINIC SPACE
              </p>
            </Reveal>

            <TextReveal
              delay={100}
              className="
                mt-4
                break-keep
                text-[30px]
                font-bold
                leading-[1.3]
                tracking-[-0.035em]
                text-navy
                md:text-[42px]
                lg:text-[48px]
              "
              lines={[
                '편안하게 머물고,',
                '차분하게 진료받을 수 있도록.',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={180}
          >
            <p
              className="
                break-keep
                text-[16px]
                leading-[1.75]
                text-body
                md:text-[17px]
              "
            >
              접수와 대기부터
              상담과 진료까지,
              환자의 이동 흐름을
              고려해 공간을
              구성했습니다.
            </p>
          </Reveal>
        </div>

        {/* =================================================
            CATEGORY TABS
        ================================================= */}

        <Reveal
          variant="fade"
          delay={220}
          className="
            mt-10
            border-b
            border-line
            md:mt-14
          "
        >
          <div
            role="tablist"
            aria-label="수원세브란스치과 공간"
            className="
              flex
              gap-7
              overflow-x-auto
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              md:gap-11
            "
          >
            {categories.map(
              (category) => {
                const active =
                  activeCategory ===
                  category.id;

                return (
                  <button
                    key={
                      category.id
                    }
                    type="button"
                    role="tab"
                    aria-selected={
                      active
                    }
                    onClick={() =>
                      changeCategory(
                        category.id,
                      )
                    }
                    className={[
                      'group relative shrink-0 pb-4 text-left',
                      'transition-colors duration-200',
                      active
                        ? 'text-navy'
                        : 'text-muted hover:text-ink',
                    ].join(' ')}
                  >
                    <span
                      className="
                        block
                        text-[10px]
                        font-semibold
                        tracking-[0.1em]
                        opacity-55
                        md:text-[11px]
                      "
                    >
                      {
                        category.eng
                      }
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[16px]
                        font-semibold
                        tracking-[-0.02em]
                        md:text-[18px]
                      "
                    >
                      {
                        category.label
                      }
                    </span>

                    <span
                      className={[
                        'absolute inset-x-0 bottom-0 h-[2px]',
                        'transition-transform duration-300',
                        active
                          ? 'scale-x-100 bg-navy'
                          : 'scale-x-0 bg-navy',
                      ].join(' ')}
                    />
                  </button>
                );
              },
            )}
          </div>
        </Reveal>

        {/* =================================================
            GALLERY AREA

            max-width 별도 제한:
            사이트 전체는 max-w-7xl이지만
            사진 갤러리는 일부러 조금 좁게 둠.
        ================================================= */}

        <Reveal
          variant="fade"
          delay={280}
          className="
            mx-auto
            mt-8
            max-w-[1120px]
            md:mt-10
          "
        >
          <div
            className="
              grid
              gap-5
              lg:grid-cols-[minmax(0,1fr)_210px]
              lg:items-start
              lg:gap-6
              xl:grid-cols-[minmax(0,1fr)_220px]
            "
          >
            {/* =============================================
                MAIN COLUMN
            ============================================= */}

            <div>
              {/* -------------------------------------------
                  MAIN PHOTO
              ------------------------------------------- */}

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    activeIndex,
                  )
                }
                aria-label={`${currentPhoto.title} 크게 보기`}
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-card
                  bg-white
                  text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-navy
                  focus-visible:ring-offset-2
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/3]
                    w-full

                    sm:aspect-[16/10]

                    lg:aspect-auto
                    lg:h-[500px]

                    xl:h-[520px]
                  "
                >
                  <Image
                    key={
                      currentPhoto.src
                    }
                    src={
                      currentPhoto.src
                    }
                    alt={
                      currentPhoto.alt
                    }
                    fill
                    quality={92}
                    sizes="
                      (max-width: 640px) calc(100vw - 40px),
                      (max-width: 1024px) calc(100vw - 64px),
                      860px
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.008]
                    "
                  />

                  {/* subtle overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/34
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* caption */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      flex
                      items-end
                      justify-between
                      gap-5
                      p-5
                      md:p-7
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.11em]
                          text-white/60
                          md:text-[11px]
                        "
                      >
                        {
                          currentCategory.eng
                        }
                      </p>

                      <h3
                        className="
                          mt-1.5
                          text-[19px]
                          font-semibold
                          tracking-[-0.025em]
                          text-white
                          md:text-[23px]
                        "
                      >
                        {
                          currentPhoto.title
                        }
                      </h3>
                    </div>

                    {/* 확대 icon */}

                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/35
                        bg-black/10
                        text-white
                        backdrop-blur-[2px]
                        transition
                        duration-300
                        group-hover:bg-white
                        group-hover:text-navy
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-[17px] w-[17px]"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                        />

                        <path d="m16 16 4 4" />

                        <path d="M11 8v6" />

                        <path d="M8 11h6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>

              {/* -------------------------------------------
                  BOTTOM CONTROL
              ------------------------------------------- */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-baseline
                    gap-2
                  "
                >
                  <span
                    className="
                      text-[15px]
                      font-semibold
                      tracking-[-0.02em]
                      text-navy
                    "
                  >
                    {String(
                      activeIndex +
                        1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>

                  <span
                    className="
                      text-[12px]
                      text-muted
                    "
                  >
                    /{' '}
                    {String(
                      filteredPhotos.length,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <button
                    type="button"
                    onClick={
                      goPrevious
                    }
                    aria-label="이전 사진"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-line
                      bg-white
                      text-navy
                      transition-colors
                      duration-200
                      hover:border-navy
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-[18px] w-[18px]"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={
                      goNext
                    }
                    aria-label="다음 사진"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-line
                      bg-white
                      text-navy
                      transition-colors
                      duration-200
                      hover:border-navy
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-[18px] w-[18px]"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* =============================================
                DESKTOP THUMBNAILS

                - 개수 적어도 늘어나지 않음
                - 고정 높이
                - 메인 사진 높이 이상 넘어가지 않음
                - 많으면 내부 scroll
            ============================================= */}

            <div
              className="
                hidden
                lg:block
                lg:h-[500px]
                xl:h-[520px]
              "
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                  gap-3
                  overflow-y-auto
                  overscroll-contain
                  pr-1
                  [scrollbar-color:#dde2e8_transparent]
                  [scrollbar-width:thin]
                "
              >
                {filteredPhotos.map(
                  (
                    photo,
                    index,
                  ) => {
                    const active =
                      index ===
                      activeIndex;

                    return (
                      <button
                        key={
                          photo.src
                        }
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            index,
                          )
                        }
                        aria-label={`${photo.title} 보기`}
                        className={[
                          'group relative',
                          'h-[92px] w-full shrink-0',
                          'overflow-hidden rounded-card border',
                          'bg-white text-left',
                          'transition-colors duration-200',

                          active
                            ? 'border-navy'
                            : 'border-line hover:border-mist',
                        ].join(
                          ' ',
                        )}
                      >
                        <Image
                          src={
                            photo.src
                          }
                          alt=""
                          fill
                          sizes="220px"
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-[1.015]
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/55
                            via-black/5
                            to-transparent
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            px-3
                            pb-2.5
                            pt-5
                          "
                        >
                          <p
                            className="
                              truncate
                              text-[12px]
                              font-medium
                              text-white
                            "
                          >
                            {
                              photo.title
                            }
                          </p>
                        </div>

                        {active && (
                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              inset-y-0
                              left-0
                              w-[3px]
                              bg-navy
                            "
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* =============================================
                MOBILE / TABLET THUMBNAILS

                가로 strip.
                모두 같은 크기.
            ============================================= */}

            <div
              className="
                col-span-full
                lg:hidden
              "
            >
              <div
                className="
                  flex
                  gap-2.5
                  overflow-x-auto
                  pb-2
                  [scrollbar-width:none]
                  [-ms-overflow-style:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                {filteredPhotos.map(
                  (
                    photo,
                    index,
                  ) => {
                    const active =
                      index ===
                      activeIndex;

                    return (
                      <button
                        key={
                          photo.src
                        }
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            index,
                          )
                        }
                        aria-label={`${photo.title} 보기`}
                        className={[
                          'relative',
                          'h-[68px] w-[96px]',
                          'shrink-0 overflow-hidden',
                          'rounded-[6px] border',
                          'bg-white transition-colors duration-200',

                          active
                            ? 'border-navy'
                            : 'border-line',
                        ].join(
                          ' ',
                        )}
                      >
                        <Image
                          src={
                            photo.src
                          }
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover"
                        />

                        {!active && (
                          <div
                            className="
                              absolute
                              inset-0
                              bg-white/10
                            "
                          />
                        )}

                        {active && (
                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              inset-x-0
                              bottom-0
                              h-[3px]
                              bg-navy
                            "
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ===================================================
          LIGHTBOX
      =================================================== */}

      {selectedPhoto &&
        selectedIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPhoto.title} 확대 이미지`}
            className="
              fixed
              inset-0
              z-[300]
              flex
              items-center
              justify-center
              bg-[#07111f]/96
              px-3
              py-14
              backdrop-blur-[3px]
              md:p-8
            "
            onMouseDown={(
              event,
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeLightbox();
              }
            }}
          >
            {/* close */}

            <button
              type="button"
              onClick={
                closeLightbox
              }
              aria-label="닫기"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                text-white
                transition
                hover:bg-white
                hover:text-navy
                md:right-7
                md:top-7
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            {/* previous */}

            <button
              type="button"
              onClick={
                showPreviousImage
              }
              aria-label="이전 이미지"
              className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/25
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white
                hover:text-navy
                md:left-7
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* next */}

            <button
              type="button"
              onClick={
                showNextImage
              }
              aria-label="다음 이미지"
              className="
                absolute
                right-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/25
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white
                hover:text-navy
                md:right-7
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* image */}

            <div
              className="
                flex
                h-full
                w-full
                max-w-6xl
                flex-col
                justify-center
              "
            >
              <div
                className="
                  relative
                  h-[68vh]
                  w-full
                  md:h-[78vh]
                "
              >
                <Image
                  src={
                    selectedPhoto.src
                  }
                  alt={
                    selectedPhoto.alt
                  }
                  fill
                  quality={100}
                  sizes="95vw"
                  className="
                    object-contain
                  "
                />
              </div>

              <div
                className="
                  mt-4
                  text-center
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.11em]
                    text-white/45
                  "
                >
                  {
                    currentCategory.eng
                  }
                </p>

                <p
                  className="
                    mt-1
                    text-[17px]
                    font-medium
                    text-white
                  "
                >
                  {
                    selectedPhoto.title
                  }
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    text-white/35
                  "
                >
                  {String(
                    selectedIndex +
                      1,
                  ).padStart(
                    2,
                    '0',
                  )}{' '}
                  /{' '}
                  {String(
                    filteredPhotos.length,
                  ).padStart(
                    2,
                    '0',
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};
