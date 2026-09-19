'use client';

import Image from 'next/image';
import Services from '@/components/Services';

// 디지털 진단·보철 장비 데이터
const equipmentList = [
  {
    id: 1,
    name: '3D 구강 CT & 3D 구강스캐너',
    tag: '3D 입체 진단',
    desc: '일반 X-ray로 확인하기 어려운 신경관 위치와 골밀도를 3차원 영상으로 확인하고 분석합니다.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '원데이 네비게이션 가이드',
    tag: '가이드 기반 식립',
    desc: '모의 수술로 식립 위치와 방향을 미리 계획해, 수술 중 절개 범위를 줄이는 데 활용합니다.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'CAD/CAM 자체 기공 시스템',
    tag: '원내 보철 제작',
    desc: '원내 CAD/CAM 시스템으로 보철물을 직접 제작해, 제작에 걸리는 시간을 줄이고 환자별로 세밀하게 맞춥니다.',
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
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2f89fc] px-3.5 py-1.5 rounded-full text-sm font-black tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#2f89fc] animate-ping" />
                  ONE-DAY IMPLANT SYSTEM
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  내원 횟수를 줄이는 <br />
                  <span className="text-[#2f89fc]">당일 발치 임플란트</span>
                </h2>

                <p className="text-gray-600 text-base md:text-base leading-relaxed break-keep">
                  잇몸뼈와 치아 상태가 적합하면 발치, 임플란트 식립, 임시 보철물 연결을 <strong className="text-gray-900">하루에 진행할 수 있습니다.</strong>{' '}
                  내원 횟수가 줄어 직장 일정이 바쁘시거나 멀리서 오시는 분의 부담을 덜 수 있으며, 적용 가능 여부는 정밀 진단 후 안내드립니다.
                </p>

                {/* 특장점 4개 그리드 */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { title: '당일 식립 · 임시치아', desc: '발치 당일 식립과 임시치아 연결' },
                    { title: '절개 범위 최소화', desc: '가이드를 활용해 수술 범위를 줄입니다' },
                    { title: '잇몸뼈 보존', desc: '발치 후 잇몸뼈 흡수를 고려한 식립' },
                    { title: '원내 CAD/CAM', desc: '원내 기공으로 환자별 보철 제작' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 text-base md:text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
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
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    * 당일 발치 즉시 식립은 잇몸뼈 상태와 골밀도를 정밀 진단한 뒤 가능 여부를 결정합니다.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🔬 3. [신규 섹션] 3D 디지털 진단 장비 라인업 */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold text-[#2f89fc] tracking-[0.2em] uppercase block mb-2">
              ADVANCED MEDICAL EQUIPMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              디지털 진단 장비
            </h2>
            <p className="mt-3 text-base md:text-base text-gray-500">
              눈으로 확인하기 어려운 구조까지 영상으로 살펴, 치료 계획을 세우는 데 활용합니다.
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
                  <span className="absolute top-3 left-3 bg-[#001d4a] text-white text-[12px] font-bold px-2.5 py-1 rounded">
                    {eq.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{eq.name}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{eq.desc}</p>
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
              <span className="text-sm font-bold text-[#4da3ff] tracking-[0.2em] uppercase block mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                임플란트, <br />
                왜 <span className="text-[#4da3ff]">수원세브란스</span>인가요?
              </h2>
              <ul className="space-y-6 text-base md:text-lg">
                {[
                  { num: '01', title: '정품 임플란트 사용', desc: '오스템, 스트라우만 등 정품 임플란트를 사용하며 보증서를 발급합니다' },
                  { num: '02', title: '디지털 가이드 활용', desc: '3D 모의 수술로 식립 위치와 방향을 미리 계획합니다' },
                  { num: '03', title: '수술 후 정기 관리', desc: '식립 후에도 정기 검진으로 상태를 확인합니다' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#4da3ff] font-extrabold text-xl">{item.num}</span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm md:text-base text-gray-300 mt-0.5">{item.desc}</p>
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
                <p className="text-base font-bold text-white">수원세브란스치과의원 정밀 수술실</p>
                <p className="text-sm text-gray-300">위생 관리와 정밀 진단 시스템을 갖춘 수술 공간</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}