'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { stagger } from './stagger';
import RevealImage from './RevealImage';
import TextReveal from './TextReveal';

const photos = [
  {
    src: '/images/loby.jpg',
    alt: '수원세브란스치과 로비',
    label: 'RECEPTION & LOBBY',
    title: '로비 · 대기공간',
    featured: true,
  },
  {
    src: '/images/clinic_room.jpg',
    alt: '수원세브란스치과 진료실',
    label: 'TREATMENT ROOM',
    title: '진료실',
  },
  {
    src: '/images/counceling.jpg',
    alt: '수원세브란스치과 상담실',
    label: 'CONSULTATION',
    title: '상담실',
  },
  {
    src: '/images/test.jpg',
    alt: '수원세브란스치과 검사실',
    label: 'DIAGNOSTIC ROOM',
    title: '검사 · 진단공간',
  },
];

export const InteriorSection = () => {
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  return (
    <section
      id="interior"
      className="scroll-mt-24 bg-[#06182e] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-10 md:mb-14">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#79b6ff]">
              CLINIC TOUR
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl"
            lines={['치과 둘러보기']}
          />

          <Reveal variant="soft" delay={300}>
            <p className="mt-5 break-keep text-[16px] leading-[1.75] text-white/60 md:text-[18px]">
              편안하고 쾌적한 진료 환경을 준비합니다.
            </p>
          </Reveal>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:grid-cols-4 lg:grid-rows-2">
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
                    ? 'col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto lg:min-h-[470px]'
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
                className={[
                  'group absolute inset-0 overflow-hidden rounded-[16px] bg-[#eef2f6] text-left',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f89fc] focus-visible:ring-offset-2',
                ].join(' ')}
                aria-label={`${photo.title} 크게 보기`}
              >
                <RevealImage
                  className="absolute inset-0"
                  parallax={featured ? 16 : 0}
                  delay={stagger(index, 110) + 150}
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
                    className="object-cover"
                  />
                </RevealImage>

                <div className="absolute inset-0 bg-gradient-to-t from-[#06182e]/70 via-[#06182e]/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#8ec5ff] md:text-[11px]">
                    {photo.label}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-[17px] font-semibold tracking-[-0.025em] text-white md:text-[19px]">
                      {photo.title}
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-base text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#071b33]">
                      +
                    </span>
                  </div>
                </div>
              </button>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-5 text-[12px] leading-[1.6] text-white/40 md:text-[13px]">
          사진을 선택하면 크게 확인하실 수 있습니다.
        </p>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020812]/90 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} 이미지`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-2xl font-light text-white transition hover:bg-white hover:text-[#071b33]"
            aria-label="닫기"
          >
            ×
          </button>

          <div className="w-full max-w-6xl">
            <div className="relative aspect-[16/10] max-h-[78vh] w-full overflow-hidden rounded-[16px] bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <div className="mt-3 text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-[#8ec5ff]">
                {selected.label}
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
