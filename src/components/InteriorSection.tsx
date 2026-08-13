'use client';

import { useState } from 'react';
import Image from 'next/image';

export const InteriorSection = () => {
  // 클릭된 이미지를 관리하는 상태 (null이면 모달이 닫힌 상태)
  const [selectedImg, setSelectedImg] = useState<{src: string, alt: string} | null>(null);

  const interiorPhotos = [
    { src: '/images/loby.jpg', alt: '메인 로비' },
    { src: '/images/clinic_room.jpg', alt: '진료실' },
    { src: '/images/test.jpg', alt: '검사실' },
    { src: '/images/counceling.jpg', alt: '상담실' },
    { src: '/images/loby.jpg', alt: '메인 로비' },
    { src: '/images/clinic_room.jpg', alt: '진료실' },
  ];

  return (
    <section className="py-20 overflow-hidden dark:bg-white">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <h2 className="text-[14px] font-black tracking-[0.3em] text-[#2f89fc] uppercase mb-4">Interior View</h2>
        <p className="text-2xl font-bold text-[#001d4a]">편안함이 머무는 공간</p>
      </div>

      <div className="relative flex">
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] w-max">
          {interiorPhotos.map((photo, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(photo)} // 클릭 시 이미지 정보 저장
              className="relative w-[300px] md:w-[500px] aspect-[16/10] overflow-hidden rounded-2xl shrink-0 shadow-xl cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-white/80">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 모달(팝업) 영역 --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
          onClick={() => setSelectedImg(null)} // 배경 클릭 시 닫기
        >
          {/* 닫기 버튼 (X표) */}
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          {/* 큰 이미지 */}
          <div className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-lg">
            <Image 
              src={selectedImg.src} 
              alt={selectedImg.alt} 
              fill 
              className="object-contain" // 이미지가 잘리지 않게 조정
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImg.alt}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};