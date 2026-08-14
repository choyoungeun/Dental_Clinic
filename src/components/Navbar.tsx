'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 데이터 (홈 삭제됨)
  const menuItems = [
    { name: '병원소개', href: '/about' },
    { name: '의료진소개', href: '/doctors' },
    { name: '진료과목', href: '/services' },
    { name: '오시는 길', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#001d4a] px-6 py-3 md:py-4 shadow-lg border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center">
        
        {/* 1. 로고 영역 (왼쪽 고정) */}
        <Link href="/" className="flex shrink-0 items-center gap-3 group mr-4">
          <div className="relative h-10 w-10 md:h-11 md:w-11 brightness-0 invert opacity-90">
            <Image 
              src="/images/yonsei.png" 
              alt="연세대학교 마크" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-[1.15rem] md:text-[1.4rem] font-black tracking-tight text-white leading-none mb-1">
              수원<span className="text-[#4da3ff]">세브란스</span>치과의원
            </span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffffffaa] leading-none">
              Suwon Severance Dental Clinic
            </span>
          </div>
        </Link>

        {/* 2. 중앙 메뉴 영역 (중앙 정렬 및 가독성 최적화) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="flex space-x-10 xl:space-x-16"> {/* 간격을 넓혀 중앙 배치 강조 */}
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-[17px] xl:text-[18px] font-bold text-[#ffffffcc] hover:text-white transition-colors relative group whitespace-nowrap tracking-tight"
              >
                {item.name}
                {/* 호버 시 선명한 하단 라인 */}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#4da3ff] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. 예약 버튼 영역 (오른쪽 고정) */}
        <div className="hidden lg:flex items-center ml-4">
          <Link 
            href="https://booking.naver.com/your-clinic-link" 
            className="rounded-full bg-[#2f89fc] px-7 py-2.5 text-[16px] font-black text-white hover:bg-blue-600 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            예약하기
          </Link>
        </div>

        {/* 모바일 햄버거 버튼 (오른쪽 정렬을 위해 ml-auto 사용) */}
        <div className="flex items-center lg:hidden ml-auto">
          <button 
            className="text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 (동일) */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#001d4a] border-t border-white/10 flex flex-col pb-8 lg:hidden text-center shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="py-5 text-xl font-bold text-white border-b border-white/5" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-10 pt-6">
            <Link 
              href="https://booking.naver.com" 
              className="block w-full rounded-full bg-[#2f89fc] py-4 text-white font-black text-lg shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              네이버 예약하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;