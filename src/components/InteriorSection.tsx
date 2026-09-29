'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Reveal from './Reveal';
import TextReveal from './TextReveal';


const photos = [
  {
    src: '/images/entrance.jpg',
    alt: '수원세브란스치과 입구',
    label: 'ENTRANCE',
    title: '치과 입구',
  },
  {
    src: '/images/infodesk.jpg',
    alt: '수원세브란스치과 접수 데스크',
    label: 'RECEPTION',
    title: '접수 데스크',
  },
  {
    src: '/images/waitingarea.jpg',
    alt: '수원세브란스치과 대기공간',
    label: 'WAITING LOUNGE',
    title: '대기공간',
  },
  {
    src: '/images/waitingarea2.jpg',
    alt: '수원세브란스치과 대기공간 전경',
    label: 'WAITING LOUNGE',
    title: '대기공간',
  },
  {
    src: '/images/hallway.jpg',
    alt: '수원세브란스치과 진료실 복도',
    label: 'HALLWAY',
    title: '진료 동선',
  },
  {
    src: '/images/hallway2.jpg',
    alt: '수원세브란스치과 내부 복도',
    label: 'HALLWAY',
    title: '진료실 복도',
  },
  {
    src: '/images/openclinic.jpg',
    alt: '수원세브란스치과 오픈 진료실',
    label: 'TREATMENT ROOM',
    title: '진료공간',
  },
  {
    src: '/images/openclinic2.jpg',
    alt: '수원세브란스치과 진료공간',
    label: 'TREATMENT ROOM',
    title: '진료공간',
  },
  {
    src: '/images/implantroom.jpg',
    alt: '수원세브란스치과 임플란트 수술실',
    label: 'IMPLANT ROOM',
    title: '임플란트 수술실',
  },
  {
    src: '/images/counceling.jpg',
    alt: '수원세브란스치과 상담실',
    label: 'CONSULTATION',
    title: '상담실',
  },
  {
    src: '/images/powderroom.jpg',
    alt: '수원세브란스치과 파우더룸',
    label: 'POWDER ROOM',
    title: '파우더룸',
  },
];

type Photo = (typeof photos)[number];

/* =========================================================
   COMPONENT
========================================================= */

export const InteriorSection = () => {
  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  const slideRefs =
    useRef<(HTMLButtonElement | null)[]>([]);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  /* =======================================================
     SLIDER
  ======================================================= */

  const goToSlide = useCallback(
    (index: number) => {
      const safeIndex =
        (index + photos.length) %
        photos.length;

      const element =
        slideRefs.current[safeIndex];

      if (!element) return;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });

      setActiveIndex(safeIndex);
    },
    [],
  );

  const goPrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const goNext = () => {
    goToSlide(activeIndex + 1);
  };

  /* =======================================================
     현재 보이는 slide 감지

     scroll event로 좌표를 계속 계산하는 대신
     IntersectionObserver 사용
  ======================================================= */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio,
            );

          if (!visible.length) return;

          const index = Number(
            (
              visible[0].target as HTMLElement
            ).dataset.index,
          );

          if (!Number.isNaN(index)) {
            setActiveIndex(index);
          }
        },
        {
          root: slider,
          threshold: [
            0.45,
            0.6,
            0.75,
            0.9,
          ],
        },
      );

    slideRefs.current.forEach(
      (element) => {
        if (element) {
          observer.observe(element);
        }
      },
    );

    return () => {
      observer.disconnect();
    };
  }, []);

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

        return (
          (current - 1 + photos.length) %
          photos.length
        );
      });
    }, []);

  const showNextImage =
    useCallback(() => {
      setSelectedIndex((current) => {
        if (current === null) return null;

        return (
          (current + 1) %
          photos.length
        );
      });
    }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

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
      ? photos[selectedIndex]
      : null;

  return (
    <section
      id="interior"
      className="
        scroll-mt-24
        overflow-hidden
        bg-fog
        py-20
        md:py-28
      "
    >
      {/* ===================================================
          HEADER
      =================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
        "
      >
        <div
          className="
            grid
            gap-8
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
              delay={120}
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
            delay={200}
            className="lg:pb-1"
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
            COUNTER + CONTROLS
        ================================================= */}

        <Reveal
          variant="fade"
          delay={260}
          className="
            mt-10
            flex
            items-end
            justify-between
            border-t
            border-line
            pt-5
            md:mt-14
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
                text-[25px]
                font-semibold
                tracking-[-0.04em]
                text-navy
              "
            >
              {String(
                activeIndex + 1,
              ).padStart(2, '0')}
            </span>

            <span
              className="
                text-[13px]
                text-muted
              "
            >
              /{' '}
              {String(
                photos.length,
              ).padStart(2, '0')}
            </span>
          </div>

          {/* Desktop arrows */}

          <div
            className="
              hidden
              items-center
              gap-2
              md:flex
            "
          >
            <button
              type="button"
              onClick={goPrevious}
              aria-label="이전 공간 사진"
              className="
                flex
                h-11
                w-11
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
              aria-label="다음 공간 사진"
              className="
                flex
                h-11
                w-11
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
        </Reveal>
      </div>

      {/* ===================================================
          SLIDER

          max-width 바깥까지 사용해서
          사진이 좀 더 시원하게 보이도록 함.
      =================================================== */}

      <Reveal
        variant="fade"
        delay={300}
        className="mt-6 md:mt-8"
      >
        <div
          ref={sliderRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-3
            overflow-x-auto
            scroll-smooth
            px-5
            pb-4
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            md:gap-5
            md:px-[max(32px,calc((100vw-1280px)/2))]
          "
          style={{
            WebkitOverflowScrolling:
              'touch',
          }}
        >
          {photos.map(
            (photo, index) => (
              <button
                key={photo.src}
                ref={(element) => {
                  slideRefs.current[
                    index
                  ] = element;
                }}
                data-index={index}
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    index,
                  )
                }
                aria-label={`${photo.title} 크게 보기`}
                className="
                  group
                  relative
                  aspect-[4/3]
                  w-[86vw]
                  max-w-[1100px]
                  shrink-0
                  snap-center
                  overflow-hidden
                  rounded-[6px]
                  bg-line
                  text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-navy
                  focus-visible:ring-offset-2
                  sm:aspect-[16/10]
                  md:w-[78vw]
                  lg:aspect-[16/9]
                  lg:w-[72vw]
                "
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="
                    (max-width: 768px) 86vw,
                    (max-width: 1200px) 78vw,
                    72vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.015]
                  "
                />

                {/* 아주 약한 하단 그라데이션 */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/45
                    via-transparent
                    to-transparent
                  "
                />

                {/* Caption */}

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
                        md:text-[12px]
                      "
                    >
                      {photo.label}
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
                      {photo.title}
                    </h3>
                  </div>

                  {/* 확대 아이콘 */}

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
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
                      group-hover:bg-white
                      group-hover:text-navy
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
              </button>
            ),
          )}
        </div>
      </Reveal>

      {/* ===================================================
          MOBILE GUIDE / DOTS
      =================================================== */}

      <div
        className="
          mx-auto
          mt-2
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          md:px-8
        "
      >
        <div className="flex gap-1.5">
          {photos.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  goToSlide(index)
                }
                aria-label={`${index + 1}번째 사진 보기`}
                className={[
                  'h-[3px] transition-all duration-300',
                  index ===
                  activeIndex
                    ? 'w-7 bg-navy'
                    : 'w-3 bg-line',
                ].join(' ')}
              />
            ),
          )}
        </div>

        <p
          className="
            text-[12px]
            text-muted
          "
        >
          사진을 눌러 크게 보기
        </p>
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
              bg-[#07111f]/95
              px-3
              py-16
              backdrop-blur-sm
              md:p-10
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
              aria-label="이미지 닫기"
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
                md:right-8
                md:top-8
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
                md:h-13
                md:w-13
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
                md:h-13
                md:w-13
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
                max-w-[1500px]
                flex-col
                justify-center
              "
            >
              <div
                className="
                  relative
                  h-[65vh]
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
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div
                className="
                  mt-4
                  text-center
                  text-white
                "
              >
                <p
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.1em]
                    text-white/50
                  "
                >
                  {
                    selectedPhoto.label
                  }
                </p>

                <p
                  className="
                    mt-1
                    text-[17px]
                    font-medium
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
                    text-white/40
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
                    photos.length,
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
