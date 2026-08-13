'use client';

import React, { useState, useEffect } from 'react';

export const MainPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 24시간 동안 보지 않기 체크
    const hidePopup = localStorage.getItem('hideGrandOpenPopup');
    if (!hidePopup || new Date().getTime() > parseInt(hidePopup, 10)) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const closeForToday = () => {
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem('hideGrandOpenPopup', expiry.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
      
      {/* 🌟 딥네이비 & 아이스블루 듀얼 톤 프리미엄 카드 */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#001538] via-[#f0f5ff] to-[#e1edff] shadow-2xl border-2 border-blue-400/30">
        
        {/* 1. 딥네이비 그라데이션 상단 헤더 */}
        <div className="relative px-6 pt-8 pb-6 text-center text-white overflow-hidden bg-gradient-to-br from-[#001845] via-[#002b66] to-[#004bbf]">
          {/* 빛 효과 배경 블러 */}
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#00a3e0] opacity-30 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-[#3b82f6] opacity-25 blur-2xl pointer-events-none" />

          {/* 11.11 GRAND OPENING 시선강탈 뱃지 */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-[11px] font-black tracking-widest uppercase shadow-lg shadow-blue-500/30 mb-3 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            11.11 GRAND OPENING
          </div>

          {/* 메인 개원 메세지 */}
          <h2 className="relative z-10 text-3xl md:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            수원세브란스치과<br />
            <span className="text-[#60a5fa]">11월 11일</span> 개원
          </h2>
          
          <p className="relative z-10 mt-2 text-xs md:text-sm text-blue-100/90 font-medium">
            대학병원급 첨단 진단과 정직한 1:1 맞춤 진료
          </p>
        </div>

        {/* 2. 하단 입체 콘텐츠 영역 (밋밋한 흰색 ❌ -> 소프트 아이스 블루 그라데이션 ⭕) */}
        <div className="p-6 md:p-7 relative z-10 space-y-4">
          
          {/* 🏛️ 치과 핵심 강점 포인트 2가지 */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 shadow-sm border border-blue-100/80 backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#004bbf] text-white text-xs font-black shadow-sm">
                01
              </span>
              <div>
                <p className="text-xs font-extrabold text-[#002b66]">대학병원급 3D CT 입체 정밀 진단</p>
                <p className="text-[11px] text-gray-600 leading-snug mt-0.5">
                  0.1mm 단위 정밀 분석으로 과잉 진료 없이 꼭 필요한 치료만 진단합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 shadow-sm border border-blue-100/80 backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#004bbf] text-white text-xs font-black shadow-sm">
                02
              </span>
              <div>
                <p className="text-xs font-extrabold text-[#002b66]"> 의료진 1:1 책임 진료</p>
                <p className="text-[11px] text-gray-600 leading-snug mt-0.5">
                  세브란스 출신 의료진이 상담부터 수술, 사후 케어까지 직접 전담합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 🎁 3. [눈에 띄는 선명한 하이라이트] 개원 선물 하이라이트 카드 */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#002b66] to-[#004bbf] text-white shadow-xl relative overflow-hidden border border-blue-300/30">
            {/* 은은한 대각선 빛 반사 효과 */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between mb-1.5">
              <span className="inline-block px-2.5 py-0.5 bg-[#00c6ff] text-[#001845] text-[10px] font-black rounded-md tracking-wider uppercase shadow-sm">
                SPECIAL GIFT
              </span>
              <span className="text-[11px] font-bold text-blue-200">선착순 100명</span>
            </div>

            <p className="text-sm font-black text-white tracking-tight">
              첫 내원 고객 개원 기념 선물 증정
            </p>
            <p className="text-xs text-blue-100/90 mt-1 leading-snug font-light">
              치과에 방문해 주시는 모든 분께 <strong className="text-white font-bold underline underline-offset-2">프리미엄 구강 케어 세트</strong>를 증정드립니다.
            </p>
          </div>

          {/* 4. 네이버 예약 버튼 */}
          <a
            href="https://booking.naver.com" // 👈 네이버 예약 주소
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1c2b48] hover:bg-[#a5bcd6] py-3.5 text-xs md:text-sm font-extrabold text-white shadow-lg transition-all duration-300 transform active:scale-95"
          >
            <span className="text-sm font-black">N</span>
            <span>네이버 예약 상담하기 ➔</span>
          </a>

        </div>

        {/* 5. 하단 닫기 컨트롤 바 */}
        <div className="flex items-center justify-between bg-[#d7e5ff]/80 px-6 py-3 text-[11px] text-gray-500 border-t border-blue-200/50">
          <button
            onClick={closeForToday}
            className="hover:text-gray-900 transition-colors underline underline-offset-2 font-medium"
          >
            오늘 하루 보지 않기
          </button>
          <button
            onClick={closePopup}
            className="font-bold text-gray-700 hover:text-black transition-colors"
          >
            닫기 ✕
          </button>
        </div>

      </div>
    </div>
  );
};