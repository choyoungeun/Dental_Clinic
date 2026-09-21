'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Reveal from './Reveal';
import RevealImage from './RevealImage';
import TextReveal from './TextReveal';
import { stagger } from './stagger';

/* =========================================================
   CLINIC SPACE

   확정된 공간과 실제 사진만 사용합니다.
   평수, 체어 수 등 변경될 수 있는 숫자는 본문에서 강조하지 않습니다.
========================================================= */

const photos = [
  {
    src: '/images/loby.jpg',
    alt: '수원세브란스치과 로비 및 대기공간',
    label: 'RECEPTION & LOUNGE',
    title: '접수 · 대기공간',
    description:
      '내원 후 접수하고 진료를 기다리는 공간입니다. 처음 방문한 환자도 동선을 쉽게 확인할 수 있도록 접수와 대기 영역을 구성합니다.',
  },
  {
    src: '/images/clinic_room.jpg',
    alt: '수원세브란스치과 진료실',
    label: 'TREATMENT ROOM',
    title: '진료공간',
    description:
      '구강검사와 일반진료, 수술 등 각 진료 과정에 맞춰 사용하는 공간입니다.',
  },
  {
    src: '/images/counceling.jpg',
    alt: '수원세브란스치과 상담실',
    label: 'CONSULTATION ROOM',
    title: '상담실',
    description:
      '검사 결과와 치료계획, 치료 순서에 대해 설명을 듣고 상담할 수 있는 공간입니다.',
  },
  {
    src: '/images/test.jpg',
    alt: '수원세브란스치과 검사 및 진단공간',
    label: 'DIAGNOSTIC ROOM',
    title: '검사 · 진단공간',
    description:
      '영상검사와 진료에 필요한 자료를 확인하고 기록하는 공간입니다.',
  },
];

type Photo = (typeof photos)[number];

export const InteriorSection = () => {
  const [selected, setSelected] = useState<Photo | null>(null);

  /* =========================================================
     LIGHTBOX
  ========================================================= */

  useEffect(() => {
    if (!selected) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      id="interior"
      className="scroll-mt-24 overflow-hidden bg-[#f4f7fa] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                CLINIC SPACE
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={[
                '진료 과정에 맞춰',
                '공간을 나누었습니다.',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={220}
            className="lg:pb-2"
          >
            <p className="break-keep text-[16px] leading-[1.85] text-[#5c6d7f] md:text-[17px]">
              접수와 대기부터 검사, 상담, 진료까지
              환자가 이동하는 순서에 맞춰
              각 공간의 역할을 구분했습니다.
            </p>
          </Reveal>
        </div>

        {/* =====================================================
            SPACE FLOW
        ===================================================== */}

        <Reveal
          variant="soft"
          delay={250}
          className="mt-10 md:mt-12"
        >
          <div className="grid border-y border-[#071b33]/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: '접수 · 대기',
                text: '내원과 접수',
              },
              {
                number: '02',
                title: '검사',
                text: '필요한 자료 확인',
              },
              {
                number: '03',
                title: '상담',
                text: '상태와 계획 설명',
              },
              {
                number: '04',
                title: '진료',
                text: '계획에 따른 치료',
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={[
                  'px-1 py-5 sm:px-5',
                  index > 0
                    ? 'border-t border-[#071b33]/10 sm:border-t-0'
                    : '',
                  index % 2 === 1
                    ? 'sm:border-l sm:border-[#071b33]/10'
                    : '',
                  index >= 2
                    ? 'lg:border-l lg:border-[#071b33]/10'
                    : '',
                  index === 2
                    ? 'sm:border-l-0'
                    : '',
                ].join(' ')}
              >
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#2f89fc]">
                  {item.number}
                </p>

                <p className="mt-2 text-[16px] font-semibold text-[#071b33]">
                  {item.title}
                </p>

                <p className="mt-1 text-[12px] text-[#788694]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <div className="mt-10 grid grid-cols-2 gap-2.5 md:mt-14 md:gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((photo, index) => {
            const featured = index === 0;
            const wide = index === 1;

            return (
              <Reveal
                key={photo.src}
                delay={stagger(index, 110)}
                className={[
                  'relative',
                  featured
                    ? 'col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto lg:min-h-[520px]'
                    : '',
                  wide
                    ? 'col-span-2 aspect-[16/8] lg:col-span-2 lg:aspect-auto'
                    : '',
                  !featured && !wide
                    ? 'aspect-[4/3] lg:aspect-auto'
                    : '',
                ].join(' ')}
              >
                <button
                  type="button"
                  onClick={() => setSelected(photo)}
                  aria-label={`${photo.title} 크게 보기`}
                  className={[
                    'group absolute inset-0 overflow-hidden bg-[#e9eef3] text-left',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f89fc] focus-visible:ring-offset-2',
                  ].join(' ')}
                >
                  <RevealImage
                    noZoom
                    parallax={featured ? 14 : 0}
                    delay={stagger(index, 110) + 120}
                    className="absolute inset-0"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={
                        featured
                          ? '(max-width: 1024px) 100vw, 50vw'
                          : '(max-width: 1024px) 50vw, 25vw'
                      }
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                    />
                  </RevealImage>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/85 via-[#06182e]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#8ec5ff] md:text-[10px]">
                      {photo.label}
                    </p>

                    <div className="mt-1.5 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="break-keep text-[18px] font-semibold tracking-[-0.025em] text-white md:text-[21px]">
                          {photo.title}
                        </h3>

                        {featured && (
                          <p className="mt-2 hidden max-w-md break-keep text-[13px] leading-[1.7] text-white/65 md:block">
                            {photo.description}
                          </p>
                        )}
                      </div>

                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/30 bg-white/10 text-lg font-light text-white transition-colors group-hover:bg-white group-hover:text-[#071b33]"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* =====================================================
            SPACE DESCRIPTIONS
        ===================================================== */}

        <div className="mt-10 grid gap-x-8 gap-y-0 border-t border-[#071b33]/15 md:mt-14 md:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal
              key={`${photo.src}-description`}
              variant="soft"
              delay={stagger(index, 80)}
              className="border-b border-[#071b33]/10 py-6"
            >
              <div className="grid grid-cols-[42px_1fr] gap-4">
                <span className="pt-0.5 text-[10px] font-bold tracking-[0.14em] text-[#2f89fc]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#071b33]">
                    {photo.title}
                  </h3>

                  <p className="mt-2 break-keep text-[13px] leading-[1.8] text-[#697988] md:text-[14px]">
                    {photo.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-[11px] leading-[1.7] text-gray-400 md:text-[12px]">
          사진을 선택하면 공간을 크게 확인할 수 있습니다.
        </p>
      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020812]/90 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} 이미지`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="닫기"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-2xl font-light text-white transition hover:bg-white hover:text-[#071b33]"
          >
            ×
          </button>

          <div className="w-full max-w-6xl">
            <div className="relative aspect-[16/10] max-h-[78vh] w-full overflow-hidden bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <div className="mx-auto mt-5 max-w-2xl text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                {selected.label}
              </p>

              <p className="mt-1.5 text-[18px] font-semibold text-white">
                {selected.title}
              </p>

              <p className="mt-2 break-keep text-[13px] leading-[1.7] text-white/55">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};