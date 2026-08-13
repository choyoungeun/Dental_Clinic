import Link from 'next/link';
import Image from 'next/image';

const services = [
  { 
    title: '디지털 임플란트', 
    eng: 'Digital Implant',
    desc: '3D 정밀 분석을 통한 오차 없는 식립과 맞춤형 보철로 자연스러운 저작력을 회복합니다.', 
    image: '/images/digital_implant.jpg', // 임의 경로
    tags: ['고난도 식립', '맞춤형 지주대']
  },
  { 
    title: '보존 및 신경치료', 
    eng: 'Endodontics',
    desc: '발치보다는 보존을 우선으로, 미세 현미경 진단을 통해 자연 치아의 수명을 연장합니다.', 
    image: '/images/micro_scope.jpg', 
    tags: ['미세현미경', '치근단절제술']
  },
  { 
    title: '사랑니·구강외과', 
    eng: 'Oral Surgery',
    desc: '대학병원급 장비를 활용해 신경 손상 걱정 없는 안전하고 신속한 매복 사랑니 발치를 제공합니다.', 
    image: '/images/love_teeth.jpg', 
    tags: ['매복사랑니', '안전 발치']
  },
  { 
    title: '심미·보철 진료', 
    eng: 'Esthetic & Clinic',
    desc: '기능 회복은 물론, 얼굴 전체의 조화를 고려한 정교한 심미 치료로 자신감 있는 미소를 완성합니다.', 
    image: '/images/esthetic_dental.png', 
    tags: ['라미네이트', '충치치료', '치아미백']
  },
];

const Services = () => {
  return (
    <section className="bg-[#f8f9fa] py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 상단 헤더: 디자인적 비대칭 레이아웃 */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end gap-8">
          <div className="flex-1">
            <h2 className="text-[14px] font-black tracking-[0.3em] text-[#2f89fc] uppercase mb-4">
              Our Medical Philosophy
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-[#001d4a] leading-tight tracking-tight">
              완성도 높은 진료를 위한 <br />
              <span className="text-[#2f89fc]">전문화된 진료과목</span>
            </p>
          </div>
          <div className="flex-1 md:max-w-sm border-l border-gray-300 pl-8 py-2">
            <p className="text-gray-500 leading-relaxed text-[16px]">
              수원세브란스치과는 각 분야의 전문성을 바탕으로 <br />
              환자에게 가장 맞는 이상적인 치료 계획을 설계합니다.
            </p>
          </div>
        </div>
        
        {/* 진료 과목 그리드: 이미지 중심 디자인 */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* 이미지 요소: 디자인적 '프레임' 처리 */}
              <div className="relative w-full md:w-48 h-64 md:h-64 shrink-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 z-10 bg-[#001d4a]/10 group-hover:bg-transparent transition-colors duration-500" />
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* 이미지 위 순번 표시 (디자인 포인트) */}
                <span className="absolute top-4 left-4 z-20 text-white/50 font-black text-2xl tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col h-full py-2">
                <div className="mb-4">
                  <span className="text-[11px] font-bold tracking-widest text-[#2f89fc] uppercase">
                    {item.eng}
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-[#001d4a]">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-[15px] leading-relaxed text-gray-500 mb-6 break-keep">
                  {item.desc}
                </p>

                <div className="mt-auto flex gap-3">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[12px] px-3 py-1 bg-gray-100 text-gray-400 font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA: 여백을 활용한 미니멀 디자인 */}
        <div className="mt-20 flex justify-center">
          <Link 
            href="/services" 
            className="group relative flex items-center gap-4 text-[16px] font-black text-[#001d4a] tracking-widest uppercase"
          >
            {/* <span>View All Subjects</span> */}
            <div className="w-12 h-[1px] bg-[#001d4a] group-hover:w-20 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;