'use client';

import dynamic from 'next/dynamic';

// NaverMap을 클라이언트 사이드에서만 로드하도록 설정 (SSR 방지)
const NaverMap = dynamic(() => import('./NaverMap'), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400 text-sm">
      지도를 불러오는 중입니다...
    </div>
  )
});

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 제목 섹션 */}
        <div className="mb-14 text-center">
          <h2 className="text-[12px] font-bold tracking-[0.3em] text-[#2f89fc] uppercase mb-3">Location</h2>
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">오시는 길</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* 왼쪽: 지도 및 교통수단 안내 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="h-[350px] md:h-[600px] w-full relative bg-gray-50">
                <NaverMap />
                {/* 지도 테두리 장식 */}
                <div className="absolute inset-0 pointer-events-none border-[10px] border-white/10 z-10"></div>
              </div>
            </div>

            {/* 교통 안내 카드 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* 주차 안내 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#2f89fc] text-white px-2 py-0.5 rounded text-[10px] font-black">주차안내</span>
                    <h4 className="text-base font-bold text-gray-900">자가용 이용 시</h4>
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed break-keep">
                    <span className="font-bold text-[#2f89fc]">병원 건물 내 지하 주차장 </span>이용 가능<br />
                    만차 시 <span className="font-bold text-gray-900">인근 공영주차장</span> 주차비 지원
                  </p>
                </div>

                {/* 버스 */}
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-4">버스 이용 시 (수원한일타운 하차)</h4>
                  <div className="space-y-2.5">
                    {[
                      { label: '시내', color: 'bg-green-50 text-green-600 border-green-200', lines: '300, 300-1, 777, 900, 62-1, 65, 25' },
                      { label: '직행', color: 'bg-red-50 text-red-600 border-red-200', lines: '7770, 3000, 2007' }
                    ].map((bus, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span className={`shrink-0 w-8 text-[9px] py-0.5 font-bold text-center rounded border ${bus.color}`}>{bus.label}</span>
                        <p className="text-[12px] text-gray-600 leading-tight pt-0.5">{bus.lines}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 진료 시간 및 연락처 */}
          <div className="flex flex-col space-y-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm border border-gray-100 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-5 bg-[#2f89fc] rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900">진료 시간</h4>
              </div>

              <ul className="space-y-4">
                {[
                  { day: '평 일', time: '09:30 - 18:30' },
                  { day: '화요일 · 목요일 (야간)', time: '09:30 - 20:30', highlight: true, blue: true },
                  { day: '토요일', time: '09:30 - 14:00' },
                  { day: '일요일 / 공휴일', time: '휴진', red: true }
                ].map((item, i) => (
                  <li key={i} className={`flex justify-between items-center pb-2 border-b border-gray-50 ${item.highlight ? 'text-[#2f89fc]' : ''}`}>
                    <span className={`text-[14px] ${item.red ? 'text-red-500 font-semibold' : 'text-gray-600'} font-medium`}>{item.day}</span>
                    <span className={`text-[15px] font-bold ${item.red ? 'text-red-500' : 'text-gray-900'}`}>{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-[12px] text-gray-500 bg-gray-50 p-3.5 rounded-xl leading-relaxed space-y-1">
                <p>● <strong>점심시간:</strong> 13:00 - 14:00</p>
                <p>● 토요일은 점심시간 없이 연속 진료합니다.</p>
              </div>
            </div>

            {/* 연락처 카드 */}
            <div className="rounded-2xl bg-[#222] p-7 text-white shadow-lg">
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] font-bold text-[#4da3ff] tracking-widest block mb-1">ADDRESS</label>
                  <p className="text-[13px] leading-relaxed opacity-90">
                    경기 수원시 장안구 경수대로 969 <br />
                    한국메디컬빌딩 2층
                  </p>
                  {/* 네이버 지도 바로가기 버튼 */}
                  <a 
                    href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-2 text-[11px] font-semibold text-[#4da3ff] underline underline-offset-4 hover:text-white transition-colors"
                  >
                    네이버 지도로 길찾기 ➔
                  </a>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[#4da3ff] tracking-widest block mb-1">RESERVATION</label>
                  <a href="tel:031-123-4567" className="text-2xl font-black tracking-tight hover:text-[#4da3ff] transition-colors">
                    031-123-4567
                  </a>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    건물 내 지하 주차장 이용 가능 <br />
                    <span className="text-[11px] opacity-60">(만차 시 인근 공영주차장 지원)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;