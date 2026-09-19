'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  // 팝업으로 보여줄 이미지를 관리하는 상태
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
    <main className="dark:bg-white min-h-screen bg-white">
      {/* 1. 서브 헤더 (기존 코드 유지) */}

      {/* 2. 소개 내용 */}
      <section className="py-20 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#001d4a] mb-6">
            충분히 듣고, 정확히 진단하고, 차분히 설명합니다
          </h2>
          <p className="text-[17px] md:text-[18px] text-gray-500 leading-relaxed mb-16 break-keep">
            수원세브란스치과는 연세대학교 출신 의료진이 <br className="hidden md:block" />
            환자의 이야기를 먼저 듣고, 진단 결과와 치료 과정을 이해하기 쉽게 설명드립니다.
          </p>
        </div>
      </section>

      {/* 3. 병원 실내 자동 무한 슬라이드 */}
      <section className="py-20 bg-[#f8f9fa] overflow-hidden dark:bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <h2 className="text-[14px] font-black tracking-[0.3em] text-[#2f89fc] uppercase mb-2">Interior View</h2>
          <p className="text-2xl font-bold dark:text-[#001d4a]">편안하게 진료받는 공간</p>
        </div>

        {/* 슬라이드 컨테이너 */}
        <div className="relative flex">
          <div className="flex animate-infinite-scroll gap-6">
            {interiorPhotos.map((photo, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImg(photo)} // 이미지 클릭 시 팝업 열기
                className="relative w-[300px] md:w-[500px] aspect-[16/10] overflow-hidden rounded-2xl shrink-0 shadow-xl cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-[13px] text-white/80">
                  {photo.alt}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* --- 이미지 확대 팝업(모달) --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImg(null)} // 배경 클릭 시 닫기
        >
          {/* 우측 상단 X 버튼 */}
          <button 
            className="absolute top-6 right-6 text-white text-5xl font-light z-[110] hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          {/* 확대된 이미지 카드 */}
          <div className="relative w-full max-w-5xl aspect-[16/10] shadow-2xl overflow-hidden rounded-xl bg-black">
            <Image 
              src={selectedImg.src} 
              alt={selectedImg.alt} 
              fill 
              className="object-contain" 
              priority
            />
            {/* 이미지 하단 캡션 */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="bg-black/50 text-white/90 px-4 py-1.5 rounded-full text-base backdrop-blur-sm">
                {selectedImg.alt}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. 마무리 섹션 */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-[#001d4a] mb-4">
            눈에 보이지 않는 부분까지 꼼꼼히 확인합니다.
          </h3>
          <p className="text-gray-400 text-[16px] leading-loose">
            충분한 설명과 환자의 불편을 살피는 진료. <br />
            수원세브란스치과가 지키는 진료 원칙입니다.
          </p>
        </div>
      </section>
    </main>
  );
}