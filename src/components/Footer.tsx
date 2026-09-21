import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#001d4a] py-10 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          
          {/* 1. 병원 브랜드 섹션 (조정됨) */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-white block">
              수원<span className="text-[#4da3ff]">세브란스</span><span className="text-xl md:text-2xl font-bold ml-1 text-white/90">치과의원</span>
            </Link>
            {/* 폰트 크기를 text-base로 낮추고 자간/행간을 정돈하여 신뢰감 부여 */}
            <p className="text-base md:text-[17px] leading-relaxed text-gray-400 break-keep">
              연세대학교 치과대학 출신 대표원장이 직접 진료합니다. <br />
              충분히 진단하고 설명한 뒤, <br />
              꼭 필요한 치료를 신중하게 결정합니다.
            </p>
          </div>

          {/* 2. 주요 메뉴 링크 */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-base font-bold text-white border-b border-[#4da3ff]/50 inline-block pb-1">Menu</h4>
            <ul className="space-y-2.5 text-[17px]">
              <li>
                <Link href="/#brand-story" className="hover:text-white transition-colors">
                  병원 소개
                </Link>
              </li>
              
              <li>
                <Link href="/#doctors" className="hover:text-white transition-colors">
                  의료진 소개
                </Link>
              </li>

              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  진료 과목
                </Link>
              </li>

              <li>
                <Link href="/#interior" className="hover:text-white transition-colors">
                  치과둘러보기
                </Link>
              </li>

              <li>
                <Link href="/#location" className="hover:text-white transition-colors">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. 진료 안내 */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-base font-bold text-white border-b border-[#4da3ff]/50 inline-block pb-1">Service Hours</h4>
            <ul className="space-y-2.5 text-[16px]">
              <li className="flex justify-between border-b border-white/5 pb-1.5 text-[#4da3ff] font-semibold">
                <span>월 · 수 (야간)</span>
                <span>09:30 - 20:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>화 · 목 · 금</span>
                <span className="text-white">09:30 - 18:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="opacity-80">토요일</span>
                <span className="text-white">09:30 - 14:00</span>
              </li>
            </ul>
          </div>

          {/* 4. 문의 및 위치 (조정됨: 폰트 부담 완화) */}
          <div className="lg:col-span-3 space-y-4">
            {/* 역세권 정보 - 톤다운된 박스 디자인 */}
            <div className="bg-white/5 border border-white/10 rounded-md p-3">
              <p className="text-white font-semibold text-base flex items-center gap-2">
                수원시 장안구 경수대로 969 2층
                
              </p>
            </div>

            <div className="text-[16px] text-gray-300 leading-snug">
              <p className="flex items-start gap-2">
                장안구청 사거리·수원KT위즈파크 인근 
              </p>
            </div>

            {/* 전화번호 크기를 적당한 강조 수준(text-xl)으로 하향 */}
            <p className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-base font-normal text-[#4da3ff]">TEL</span> 
              031-123-4567
            </p>
            
            <Link 
              href="https://booking.naver.com/"
              className="block w-full rounded-md bg-[#2f89fc] py-3 text-center text-[16px] font-bold text-white hover:bg-blue-600 transition-all shadow-md"
            >
              네이버 예약 바로가기
            </Link>
          </div>
        </div>

        {/* 하단 저작권 정보 */}
        <div className="mt-12 border-t border-white/5 pt-6 text-[14px] opacity-60">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left space-y-1">
              <p>© 2026 수원세브란스치과의원. All Rights Reserved.</p>
              <p>상호명: 수원세브란스치과의원 | 대표: 이현민 | 사업자등록번호: 612-47-01321</p>
            </div>
            <div className="flex gap-5">
              <Link href="/policy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;