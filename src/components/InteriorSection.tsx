'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      className="scroll-mt-24 bg-white py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-3 md:mb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
              CLINIC TOUR
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#071b33] md:text-4xl">
              치과 둘러보기
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-[1.75] text-gray-500 md:text-right md:text-[13px]">
            환자분이 머무는 공간부터 진료 공간까지
            <br className="hidden md:block" />
            편안하고 쾌적한 진료 환경을 준비합니다.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((photo, index) => {
            const featured = index === 0;
            const wide = index === 1;

            return (
              <button
                type="button"
                key={photo.src}
                onClick={() => setSelected(photo)}
                className={[
                  'group relative overflow-hidden rounded-[16px] bg-[#eef2f6] text-left',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f89fc] focus-visible:ring-offset-2',
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
                aria-label={`${photo.title} 크게 보기`}
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
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06182e]/70 via-[#06182e]/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[8px] font-bold tracking-[0.18em] text-[#8ec5ff] md:text-[9px]">
                    {photo.label}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-[15px] font-semibold tracking-[-0.025em] text-white md:text-[19px]">
                      {photo.title}
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#071b33]">
                      +
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <p className="text-[10px] leading-[1.6] text-gray-400 md:text-[11px]">
            사진을 선택하면 크게 확인하실 수 있습니다.
          </p>

          <span className="text-[9px] font-bold tracking-[0.18em] text-[#071b33]/35">
            SUWON SEVERANCE DENTAL
          </span>
        </div>
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
              <p className="text-[9px] font-bold tracking-[0.18em] text-[#8ec5ff]">
                {selected.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
