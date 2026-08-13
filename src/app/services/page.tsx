'use client';

import Image from 'next/image';
import Services from '@/components/Services';

// 대학병원급 첨단 장비 데이터
const equipmentList = [
  {
    id: 1,
    name: '3D 구강 CT & 3D 구강스캐너',
    tag: '초정밀 3D 입체 진단',
    desc: '기존 X-ray로 확인 불가능한 신경관 위치와 골밀도를 0.1mm 단위까지 입체적으로 정밀 분석합니다.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '원데이 네비게이션 가이드',
    tag: '무절개 · 오차 제로 식립',
    desc: '모의 수술을 통해 최적의 식립 경로를 미리 확보하여 절개를 최소화하고 출혈과 통증을 줄입니다.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'CAD/CAM 자체 기공 시스템',
    tag: '원데이 원스톱 보철 제작',
    desc: '원내 첨단 CAD/CAM 시스템으로 제작 기간을 극적으로 단축시켜 맞춤형 보철물을 빠르게 제공합니다.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50/50 min-h-screen">
      {/* 1. 메인 진료 과목 목록 */}
      <div className="py-12">
        <Services />
      </div>

      {/* ⚡ 2. [신규 섹션] 원데이 (당일 발치 + 당일 식립) 스피드 임플란트 */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-[2rem] border border-blue-100 shadow-xl p-8 md:p-14 overflow-hidden relative">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* 왼쪽 텍스트 정보 */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2f89fc] px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#2f89fc] animate-ping" />
                  ONE-DAY IMPLANT SYSTEM
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  바쁜 현대인을 위한 <br />
                  <span className="text-[#2f89fc]">원데이 당일 발치 임플란트</span>
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                  발치부터 임플란트 식립, 임시 보철물 연결까지 <strong className="text-gray-900">단 하루 만에 완료</strong>됩니다. 
                  내원 횟수를 혁신적으로 줄여 바쁜 직장인과 지방 거주 환자분들도 신속하고 안전하게 치아 기능을 회복하실 수 있습니다.
                </p>

                {/* 특장점 4개 그리드 */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { title: '당일 수술 & 보철', desc: '하루 만에 식립부터 임시치아까지' },
                    { title: '최소 절개 · 무통증', desc: '출혈과 붓기를 줄여 빠른 일상 복귀' },
                    { title: '잇몸뼈 보존', desc: '발치 즉시 식립으로 잇몸 수축 방지' },
                    { title: '원내 CAD/CAM', desc: '자체 기공 정밀 맞춤 보철 제작' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 오른쪽 이미지 및 타임라인 카드 */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group border border-gray-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
                    alt="당일 발치 임플란트"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    * 당일 발치 즉시 식립은 잇몸 뼈 상태 및 골밀도 정밀 진단 후 가능 여부가 결정됩니다.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🔬 3. [신규 섹션] 대학병원급 3D 디지털 첨단 장비 라인업 */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#2f89fc] tracking-[0.2em] uppercase block mb-2">
              ADVANCED MEDICAL EQUIPMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              대학병원급 디지털 진단 장비 보유
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-500">
              육안으로 확인 힘든 미세 영역까지 정밀 분석하여 치료의 안정성과 성공률을 극대화합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipmentList.map((eq) => (
              <div key={eq.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="relative h-52 w-full overflow-hidden bg-gray-200">
                  <Image 
                    src={eq.img}
                    alt={eq.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#001d4a] text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {eq.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{eq.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{eq.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 4. 기존 프리미엄 브랜드 강조 섹션 (디자인 세련화) */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl bg-[#001d4a] rounded-[2rem] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f89fc] opacity-15 blur-[120px] -mr-32 -mt-32 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-xs font-bold text-[#4da3ff] tracking-[0.2em] uppercase block mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                임플란트, <br />
                왜 <span className="text-[#4da3ff]">수원세브란스</span>인가요?
              </h2>
              <ul className="space-y-6 text-base md:text-lg">
                {[
                  { num: '01', title: '검증된 정품 재료만 고집', desc: '오스템, 스트라우만 등 정품 임플란트 및 보증서 발급' },
                  { num: '02', title: '디지털 가이드 오차 제로 식립', desc: '3D 컴퓨터 모의 수술을 통한 안전하고 정확한 식립' },
                  { num: '03', title: '철저한 사후 관리 보증제', desc: '수술 후 평생 치아 건강을 책임지는 사후 보증 케어 시스템' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#4da3ff] font-extrabold text-xl">{item.num}</span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-xs md:text-sm text-gray-300 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video md:aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image 
                src="/images/Sev2018.jpg" 
                alt="임플란트 정밀 진단 시스템"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001d4a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-bold text-white">수원세브란스치과의원 정밀 수술실</p>
                <p className="text-xs text-gray-300">대학병원급 위생 및 정밀 진단 시스템 구축</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}