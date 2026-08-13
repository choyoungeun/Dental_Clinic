'use client';

import Image from 'next/image';

const equipmentList = [
  {
    id: 1,
    tag: '3D PRECISION CT',
    name: '3D 구강 CT & 3D 구강스캐너',
    desc: '기존 X-ray로 확인 불가능한 미세 신경관 위치와 골밀도를 0.1mm 단위까지 입체적으로 정밀 분석합니다.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    points: ['0.1mm 초정밀 3D 입체 분석', '방사선 노출량 최소화 저선량 시스템']
  },
  {
    id: 2,
    tag: 'DIGITAL GUIDE',
    name: '원데이 네비게이션 가이드',
    tagColor: 'bg-[#2f89fc]',
    desc: '3D 모의 수술을 거쳐 최적의 식립 경로를 확보하여 절개를 최소화하고 출혈과 통증을 줄여줍니다.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    points: ['최소 절개로 부종 및 통증 최소화', '오차 없는 정밀 컴퓨터 가이드 식립']
  },
  {
    id: 3,
    tag: 'CAD / CAM SYSTEM',
    name: 'CAD/CAM 원내 자체 기공 시스템',
    desc: '원내 첨단 CAD/CAM 시스템으로 맞춤 보철물 제작 기간을 극적으로 단축시켜 빠르게 치아 기능을 회복시킵니다.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    points: ['원내 기공소 보유로 당일/급속 보철 가능', '개인 맞춤형 보철물 지대주 제작']
  }
];

export const EquipmentSection = () => {
  return (
    <section className="bg-gray-50/70 py-20 md:py-28 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* 헤더 섹션 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-[#2f89fc]/10 text-[#2f89fc] text-[11px] font-extrabold tracking-[0.25em] rounded-full uppercase mb-3">
            UNIVERSITY HOSPITAL GRADE EQUIPMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            대학병원급 3D 디지털 첨단 장비
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
            육안으로 보기 힘든 미세 영역까지 정밀 진단하여 오차를 줄이고 안전한 맞춤 치료를 약속합니다.
          </p>
        </div>

        {/* 장비 3종 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* 장비 이미지 영역 */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#001d4a] text-white text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* 콘텐츠 영역 */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2f89fc] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* 핵심 체크포인트 */}
                  <ul className="space-y-2 border-t border-gray-100 pt-4">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2f89fc] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 하단 배지 */}
              <div className="px-7 pb-6 pt-0">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100/80 text-[11px] text-gray-500 text-center font-medium">
                  수원세브란스치과의원 정밀 진단 시스템
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};