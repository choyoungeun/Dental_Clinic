'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CaseItem {
  id: number;
  category: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  period: string;
  description: string;
}

const clinicalCases: CaseItem[] = [
  {
    id: 1,
    category: 'IMPLANT SURGERY',
    title: '고난도 뼈이식 임플란트 재식립',
    beforeImg:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
    afterImg:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop',
    period: '약 5개월',
    description:
      '골조직이 부족한 부위를 충분히 평가한 뒤 뼈이식을 병행하여 치료 계획을 진행한 증례',
  },
  {
    id: 2,
    category: 'IMPLANT SURGERY',
    title: '상악동 거상술을 동반한 임플란트',
    beforeImg:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop',
    afterImg:
      'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1000&auto=format&fit=crop',
    period: '약 13개월',
    description:
      '상악 구치부의 잔존골 상태를 확인한 뒤 상악동 거상술과 골이식을 병행하여 치료한 증례',
  },
  {
    id: 3,
    category: 'PRESERVATION',
    title: '자연치아 보존 치료',
    beforeImg:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
    afterImg:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
    period: '개인별 상이',
    description:
      '치아 상태를 평가한 후 발치 여부를 먼저 결정하기보다 자연치아 유지 가능성을 검토한 증례',
  },
];

export const ClinicalCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === clinicalCases.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? clinicalCases.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === clinicalCases.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentCase = clinicalCases[currentIndex];

  return (
    <section className="overflow-hidden bg-[#f7f8fa] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="block text-[10px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[11px]">
              CLINICAL EXPERIENCE
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.4] tracking-[-0.03em] text-[#071b33] md:text-5xl">
              다양한 경험이
              <br />
              판단의 기준을 만듭니다.
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-[1.8] text-gray-400 md:text-[13px]">
            실제 증례 공개 시에는 환자의 사전 동의 및
            의료광고 관련 기준을 확인하여 게시합니다.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Caption */}
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center md:px-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#2f89fc]">
                {currentCase.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#071b33] md:text-xl">
                {currentCase.title}
              </h3>
            </div>

            <div className="text-[11px] font-semibold tracking-[0.15em] text-gray-400">
              0{currentIndex + 1} / 0{clinicalCases.length}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <span className="absolute left-4 top-4 z-10 bg-[#071b33]/80 px-3 py-1.5 text-[10px] font-semibold text-white">
                BEFORE
              </span>

              <img
                src={currentCase.beforeImg}
                alt={`${currentCase.title} 치료 전`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <span className="absolute left-4 top-4 z-10 bg-[#2f89fc] px-3 py-1.5 text-[10px] font-semibold text-white">
                AFTER
              </span>

              <img
                src={currentCase.afterImg}
                alt={`${currentCase.title} 치료 후`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="grid gap-5 border-t border-gray-100 p-6 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-8">
            <p className="text-[13px] leading-[1.8] text-gray-500 md:text-[14px]">
              {currentCase.description}
            </p>

            <div className="text-[12px] text-gray-400">
              치료기간 {currentCase.period}
            </div>
          </div>

          {/* Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/40 bg-[#071b33]/70 text-white backdrop-blur-sm transition hover:bg-[#071b33] md:flex"
            aria-label="이전 증례"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/40 bg-[#071b33]/70 text-white backdrop-blur-sm transition hover:bg-[#071b33] md:flex"
            aria-label="다음 증례"
          >
            ›
          </button>
        </div>

        {/* Indicator */}
        <div className="mt-7 flex justify-center gap-2">
          {clinicalCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`${idx + 1}번 증례`}
              className={`h-[2px] transition-all duration-500 ${
                currentIndex === idx
                  ? 'w-12 bg-[#2f89fc]'
                  : 'w-4 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Legal note */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-[11px] leading-[1.8] text-gray-400">
            치료 결과와 기간은 개인의 구강 상태, 골 상태,
            전신 상태 및 치료 과정에 따라 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};