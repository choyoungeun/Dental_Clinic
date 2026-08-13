'use client';

import React, { useState, useEffect, useRef } from 'react';

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
    category: 'IMPLANT',
    title: '고난도 뼈이식 임플란트 재식립',
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop',
    period: '약 5개월',
    description: '잇몸 뼈 손상이 심했던 부위에 뼈이식을 병행하여 자연치아의 기능과 형태를 회복한 증례'
  },
  {
    id: 2,
    category: 'ORTHODONTICS',
    title: '윗잇몸 뼈 보강 임플란트 (상악동 거상술)',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1000&auto=format&fit=crop',
    period: '약 13개월',
    description: '잇몸 천장 부위의 공간을 확보하고 뼈를 이식하는 과정을 거쳐, 자사 임플란트가 단단하게 뿌리내릴 수 있는 바탕을 완성'
  },
  {
      id: 3,
      category: 'AESTHETIC',
      title: '앞니 무삭제 라미네이트 케이스',
      beforeImg: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop',
      period: '약 2주',
      description: '치아 손상을 최소화하는 무삭제 방식을 적용하여 매끄럽고 자연스러운 앞니 미소를 완성했습니다.'
    }
];

export const ClinicalCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 모바일 터치 스와이프 useRef
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 2초 간격 자동 슬라이드 (Autoplay)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === clinicalCases.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clinicalCases.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === clinicalCases.length - 1 ? 0 : prev + 1));
  };

  // 모바일 터치 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentCase = clinicalCases[currentIndex];

  return (
    <section className="bg-white py-14 md:py-20 border-t border-gray-100 overflow-hidden">
      {/* 1400px 초와이드 레이아웃 */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        
        {/* 헤더 섹션 */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#2f89fc] uppercase block mb-1">
              CLINICAL GALLERY
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              주요 치료 증례 및 케이스
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-400">
            * 의료법 가이드라인을 준수한 실제 치료 증례입니다.
          </p>
        </div>

        {/* 📸 메인 와이드 카드 슬라이더 */}
        <div 
          className="relative bg-gray-50/80 rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 상단 캡션 바 */}
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200/60">
            <div className="flex items-center gap-3">
              <span className="bg-[#001d4a] text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded">
                {currentCase.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-gray-900 truncate">
                {currentCase.title}
              </h3>
            </div>
            <div className="text-xs text-gray-400 font-semibold shrink-0">
              <span className="text-[#2f89fc]">{currentIndex + 1}</span> / {clinicalCases.length}
            </div>
          </div>

          {/* Before & After 이미지 갤러리 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* BEFORE */}
            <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[16/10] md:aspect-[16/9] group">
              <span className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded">
                BEFORE (치료 전)
              </span>
              <img
                src={currentCase.beforeImg}
                alt="치료 전"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* AFTER */}
            <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[16/10] md:aspect-[16/9] group ring-2 ring-[#2f89fc]/30">
              <span className="absolute top-3 left-3 z-10 bg-[#2f89fc] text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded">
                AFTER (치료 후)
              </span>
              <img
                src={currentCase.afterImg}
                alt="치료 후"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 깔끔하게 정돈된 하단 한 줄 설명 */}
          <div className="mt-4 pt-3 border-t border-gray-200/60 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
            <p className="text-gray-700 font-medium">
              <strong className="text-gray-900">치료 내용:</strong> {currentCase.description}
            </p>
          </div>

          {/* 좌우 화살표 버튼 (데스크톱) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg items-center justify-center border border-gray-200 hover:bg-[#001d4a] hover:text-white transition-all z-20"
            aria-label="이전"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-gray-800 rounded-full shadow-lg items-center justify-center border border-gray-200 hover:bg-[#001d4a] hover:text-white transition-all z-20"
            aria-label="다음"
          >
            ❯
          </button>
        </div>

        {/* 게이지 인디케이터 */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {clinicalCases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-10 bg-[#2f89fc]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* ⚖️ 통합 법적 공지 및 주의사항 섹션 (하단 단독 배치) */}
        <div className="mt-10 bg-gray-50/90 rounded-xl p-5 border border-gray-100 text-xs text-gray-500 leading-relaxed">
          <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>치료 증례 안내</span>
          </div>
          <ul className="space-y-1 text-[11px] text-gray-500 list-disc list-inside">
            <li>본 치료 증례 사진은 동일한 촬영 조건에서 촬영되었으며, 환자분의 사전 동의를 받아 공개되었습니다.</li>
            <li>치료 결과 및 경과는 개인의 골밀도, 치아 상태 및 체질에 따라 차이가 있을 수 있습니다.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};