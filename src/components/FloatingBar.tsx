'use client';

import React, { useState, useEffect } from 'react';

export const FloatingBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // 스크롤 시 Top 버튼 노출 제어
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. 상단 이동(TOP) 버튼 */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="맨 위로"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* 2. 플로팅 퀵 메뉴 모음 */}
      <div className={`flex flex-col gap-2.5 transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* 🔥 네이버 예약 버튼 */}
        <a
          href="https://booking.naver.com" // 👈 실 주소로 교체
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 bg-[#03C75A] text-white px-4 py-3 rounded-2xl shadow-xl hover:bg-[#02b351] transition-all duration-300 hover:-translate-x-1"
        >
          <span className="font-extrabold text-xs tracking-wider">N</span>
          <span className="text-xs font-bold whitespace-nowrap">네이버 예약</span>
        </a>

        {/* 💬 카카오톡 상담 버튼 */}
        <a
          href="https://pf.kakao.com" // 👈 실 주소로 교체
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 bg-[#FEE500] text-[#191919] px-4 py-3 rounded-2xl shadow-xl hover:bg-[#fada00] transition-all duration-300 hover:-translate-x-1"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.122.493.182.487.382.354.158-.105 2.518-1.71 3.535-2.403.524.077 1.062.118 1.593.118 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/>
          </svg>
          <span className="text-xs font-bold whitespace-nowrap">카톡 상담하기</span>
        </a>

        {/* 📝 원장 블로그 버튼 */}
        <a
          href="https://blog.naver.com/teeth_master" // 👈 실 주소로 교체
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 bg-[#001d4a] text-white px-4 py-3 rounded-2xl shadow-xl hover:bg-[#2f89fc] transition-all duration-300 hover:-translate-x-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-xs font-bold whitespace-nowrap">원장 블로그</span>
        </a>

      </div>

      {/* 3. 접기/펴기 메인 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-13 h-13 p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gray-900 text-white rotate-45' : 'bg-[#2f89fc] text-white hover:scale-105'}`}
        aria-label="퀵메뉴 토글"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};