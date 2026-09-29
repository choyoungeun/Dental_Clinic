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
   INTERIOR DATA
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

const photos = [
  /* =======================================================
     접수 · 대기
  ======================================================= */

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

  /* =======================================================
     진료실
  ======================================================= */

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
  {
    category: 'treatment' as CategoryId,
    src: '/images/clinic_room.jpg',
    alt: '수원세브란스치과 독립 진료실',
    title: '독립 진료실',
  },

  /* =======================================================
     상담 · 편의
  ======================================================= */

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

  /* =======================================================
     진료 동선
  ======================================================= */

  {
    category: 'hallway' as CategoryId,
    src: '/images/hallway.jpg',
    alt: '수원세브란스치과 진료실 복도',
    title: '진료실 복도',
  },
  {
    category: 'hallway' as CategoryId,
    src: '/images/hallway2.jpg',
    alt: '수원세브란스치과 내부 동선',
    title: '진료 동선',
  },
];

type Photo = (typeof photos)[number];

/* =========================================================
   COMPONENT
========================================================= */

export const InteriorSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>('waiting');

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredPhotos = useMemo(
    () =>
      photos.filter(
        (photo) =>
          photo.category === activeCategory,
      ),
    [activeCategory],
  );

  const currentPhoto =
    filteredPhotos[activeIndex] ??
    filteredPhotos[0];

  const currentCategory =
    categories.find(
      (category) =>
        category.id === activeCategory,
    ) ?? categories[0];

  /* =======================================================
     TAB
  ======================================================= */

  const changeCategory = (
    category: CategoryId,
  ) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  /* =======================================================
     MAIN IMAGE NAVIGATION
  ======================================================= */

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0
        ? filteredPhotos.length - 1
        : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current ===
      filteredPhotos.length - 1
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
      setSelectedIndex((current) => {
        if (current === null) return null;

        return current === 0
          ? filteredPhotos.length - 1
          : current - 1;
      });
    }, [filteredPhotos.length]);

  const showNextImage =
    useCallback(() => {
      setSelectedIndex((current) => {
        if (current === null) return null;

        return current ===
          filteredPhotos.length - 1
          ? 0
          : current + 1;
      });
    }, [filteredPhotos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
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
      ? filteredPhotos[selectedIndex]
      : null;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="interior"
      className="
        scroll-mt-24
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
              접수와 대기부터 상담,
              진료까지 환자의 동선을
              고려해 각 공간을
              구성했습니다.
            </p>
          </Reveal>
        </div>

        {/* =================================================
            TABS
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
            aria-label="치과 공간"
            className="
              flex
              gap-7
              overflow-x-auto
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              md:gap-10
            "
          >
            {categories.map(
              (category) => {
                const active =
                  activeCategory ===
                  category.id;

                return (
                  <button
                    key={category.id}
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
                      'relative shrink-0 pb-4',
                      'text-left transition-colors duration-200',
                      active
                        ? 'text-navy'
                        : 'text-muted hover:text-ink',
                    ].join(' ')}
                  >
                    <span
                      className="
                        block
                        text-[11px]
                        font-semibold
                        tracking-[0.09em]
                        opacity-60
                      "
                    >
                      {category.eng}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-[17px]
                        font-semibold
                        tracking-[-0.02em]
                        md:text-[18px]
                      "
                    >
                      {category.label}
                    </span>

                    {active && (
                      <span
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          h-[2px]
                          bg-navy
                        "
                      />
                    )}
                  </button>
                );
              },
            )}
          </div>
        </Reveal>

        {/* =================================================
            MAIN GALLERY
        ================================================= */}

        <Reveal
          variant="fade"
          delay={280}
          className="mt-8 md:mt-10"
        >
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[minmax(0,1fr)_260px]
              lg:gap-8
            "
          >
            {/* ===============================================
                MAIN PHOTO
            =============================================== */}

            <div>
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
                    lg:aspect-[3/2]
                  "
                >
                  <Image
                    key={currentPhoto.src}
                    src={
                      currentPhoto.src
                    }
                    alt={
                      currentPhoto.alt
                    }
                    fill
                    quality={95}
                    sizes="
                      (max-width: 1024px) 100vw,
                      900px
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.01]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* image caption */}

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
                          text-[11px]
                          font-semibold
                          tracking-[0.1em]
                          text-white/65
                        "
                      >
                        {
                          currentCategory.eng
                        }
                      </p>

                      <h3
                        className="
                          mt-1.5
                          text-[20px]
                          font-semibold
                          tracking-[-0.025em]
                          text-white
                          md:text-[24px]
                        "
                      >
                        {
                          currentPhoto.title
                        }
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/35
                        bg-black/10
                        text-white
                        backdrop-blur-[2px]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-[18px] w-[18px]"
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

              {/* =============================================
                  CONTROL
              ============================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className="
                    text-[13px]
                    text-muted
                  "
                >
                  {String(
                    activeIndex + 1,
                  ).padStart(2, '0')}{' '}
                  /{' '}
                  {String(
                    filteredPhotos.length,
                  ).padStart(2, '0')}
                </p>

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
                      transition
                      hover:border-navy
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
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
                      transition
                      hover:border-navy
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ===============================================
                THUMBNAILS
            =============================================== */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-3
                lg:grid-cols-1
              "
            >
              {filteredPhotos.map(
                (photo, index) => {
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
                      className={[
                        'group relative overflow-hidden rounded-card',
                        'border bg-white transition',
                        active
                          ? 'border-navy'
                          : 'border-line hover:border-mist',
                      ].join(' ')}
                    >
                      <div
                        className="
                          relative
                          aspect-[4/3]
                          w-full
                        "
                      >
                        <Image
                          src={
                            photo.src
                          }
                          alt=""
                          fill
                          sizes="
                            (max-width: 1024px) 33vw,
                            260px
                          "
                          className="
                            object-cover
                          "
                        />

                        {!active && (
                          <div
                            className="
                              absolute
                              inset-0
                              bg-white/12
                              transition
                              group-hover:bg-transparent
                            "
                          />
                        )}

                        <div
                          className="
                            absolute
                            inset-x-0
                            bottom-0
                            bg-gradient-to-t
                            from-black/50
                            to-transparent
                            px-3
                            pb-3
                            pt-7
                            text-left
                          "
                        >
                          <p
                            className="
                              text-[13px]
                              font-medium
                              text-white
                            "
                          >
                            {
                              photo.title
                            }
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                },
              )}
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
              p-4
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
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                text-white
                md:right-7
                md:top-7
              "
            >
              ×
            </button>

            <button
              type="button"
              onClick={
                showPreviousImage
              }
              aria-label="이전 이미지"
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/25
                text-white
                md:left-7
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={
                showNextImage
              }
              aria-label="다음 이미지"
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/25
                text-white
                md:right-7
              "
            >
              →
            </button>

            <div
              className="
                w-full
                max-w-6xl
              "
            >
              <div
                className="
                  relative
                  h-[70vh]
                  w-full
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
                  className="object-contain"
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
                    text-[11px]
                    font-semibold
                    tracking-[0.1em]
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
              </div>
            </div>
          </div>
        )}
    </section>
  );
};
