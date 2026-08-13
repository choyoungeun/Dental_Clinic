import Image from 'next/image';

const Doctors = () => {
  return (
    <section className="dark:bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold tracking-widest text-[#2f89fc] uppercase">Medical Staff</h2>
          <p className="mt-4 text-4xl font-bold text-gray-900">의료진 소개</p>
        </div>

        {/* 원장님 단독 소개 레이아웃 */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          
          {/* 왼쪽: 원장님 사진 영역 */}
          <div className="relative h-[600px] md:h-[700px] w-full max-w-[450px] overflow-hidden rounded-3xl shadow-2xl lg:sticky lg:top-24 bg-gray-50">
            <Image
              src="/images/hm_Lee.jpg" // 파일명을 hm_Lee로 변경
              alt="이현민 대표원장"
              fill
              className="object-cover object-top" // 인물 사진은 머리 부분이 잘리지 않게 상단 기준 정렬
              priority
            />
          </div>

          {/* 오른쪽: 약력 및 인사말 */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">종합병원 과장 출신</span>
                
              </div>
              <h3 className="text-4xl font-bold text-gray-900">
                이현민 <span className="text-xl font-medium text-gray-500">| 대표원장</span>
              </h3>
              <p className="mt-6 text-[#2f89fc] font-semibold text-xl leading-relaxed">
                "세브란스의 진료 철학 그대로, <br className="hidden md:block" />
                정직하고 섬세한 손길을 약속드립니다."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 주요 약력 (핵심 경력) */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold border-l-4 border-[#2f89fc] pl-3 text-gray-900">Education & Career</h4>
                <ul className="space-y-2.5 text-[15px] text-gray-700">
                  <li className="font-bold text-gray-900">• 연세대학교 치과대학 우등졸업</li>
                  <li>• 신촌세브란스 연세대 치과대학병원</li>
                  <li>• (前) 목포시 보건소 공중보건의사 역임</li>
                  <li>• (前) 바른공감치과 본원 원장</li>
                  <li>• (前) 미금세브란스치과 수술 전담 원장</li>
                  <li>• (前) 수원덕산병원 치과 진료 과장</li>
                  <li>• 대한치주과학회 정회원</li>
                  <li>• 대한구강악안면임플란트학회 정회원</li>
                </ul>
              </div>

              {/* 전문 과정 및 인증 */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold border-l-4 border-gray-400 pl-3 text-gray-900">Specialized Training</h4>
                <ul className="space-y-2.5 text-[15px] text-gray-600">
                  <li>• UCLA 치과대학 (UCLA School of Dentistry) 고급 임상 연수 수료 </li>
                  <li>• 시드니 치과대학 (The University of Sydney) 임상 externship 수료 </li>
                  <li>• OSSTEM Implant Master Course 전 과정 이수</li>
                  <li>• 턱관절장애 교육연구회 TMD 전문과정 수료</li>
                  <li>• JPDA 소아치과 임상 세미나 수료</li>
                  <li>• 국가건강보험공단 인증 공식 구강검진의</li>
                </ul>
              </div>
            </div>

            {/* 진료 철학 섹션 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="mb-4 text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2f89fc]" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                진료 철학
              </h4>
              <p className="text-gray-600 leading-relaxed">
                종합병원 과장으로서 마주했던 수많은 고난도 케이스들을 통해 얻은 교훈은 결코 '기술'만이 전부가 아니라는 것입니다. 
                정확한 진단은 기본이며, 환자가 느끼는 두려움까지 공감할 수 있어야 진정한 치료가 시작됩니다. 
                과잉 진료 없이, 꼭 필요한 치료만을 정직하게 제안하겠습니다.
              </p>
            </div>

            {/* 네이버 예약 버튼 */}
            <div className="pt-2">
              <a 
                href="https://booking.naver.com/your-clinic-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003876] px-10 py-5 text-base font-bold text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>예약하기</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;