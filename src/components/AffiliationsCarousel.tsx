'use client';

import Image from 'next/image';

const affiliations = [
  {
    image: '/images/affiliations/yonsei.jpg',
    category: 'EDUCATION',
    detail: '연세대학교 치과대학 우등졸업',
    alt: '연세대학교 로고',
    logoScale: 1,
  },
  {
    image: '/images/affiliations/sev.jpg',
    category: 'CLINICAL EXPERIENCE',
    detail: '신촌 세브란스 치과대학병원 임상 경험',
    alt: '세브란스병원 로고',
    logoScale: 1.02,
  },
  {
    image: '/images/affiliations/kap.png',
    category: 'ACADEMIC',
    detail: '대한치주과학회 정회원',
    alt: '대한치주과학회 로고',
    logoScale: 1.75,
  },
  {
    image: '/images/affiliations/kaomi.jpg',
    category: 'ACADEMIC',
    detail: '대한구강악안면임플란트학회 정회원',
    alt: '대한구강악안면임플란트학회 로고',
    logoScale: 1.45,
  },
  {
    image: '/images/affiliations/hwell.jpg',
    category: 'CERTIFICATION',
    detail: '국가건강보험공단 인증 구강검진의',
    alt: '국민건강보험공단 로고',
    logoScale: 1.05,
  },
];

const loopItems = [...affiliations, ...affiliations];

const AffiliationsCarousel = () => {
  return (
    <section
      aria-label="교육 및 임상경험, 학술활동"
      className="overflow-hidden border-y border-white/10 bg-[#fffff] py-5 md:py-6"
    >
      <div className="mx-auto mb-4 flex max-w-7xl items-end justify-between gap-5 px-4 md:mb-5 md:px-6">
        <div>
          <p className="text-[12px] font-bold tracking-[0.28em] text-[#79b6ff] md:text-[10px]">
            EDUCATION · CLINICAL EXPERIENCE · ACADEMIC
          </p>

          <h2 className="mt-1.5 text-[18px] font-semibold tracking-[-0.03em] text-white md:text-[22px]">
            배움과 경험으로 진료의 기준을 만듭니다.
          </h2>
        </div>

       
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#cedef2] to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#cedef2] to-transparent md:w-20" />

        <div className="credential-marquee flex w-max gap-3 px-3 md:gap-4 md:px-4">
          {loopItems.map((item, index) => (
            <article
              key={`${item.image}-${index}`}
              className="group flex h-[122px] w-[265px] shrink-0 flex-col overflow-hidden rounded-[16px] border border-white/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] md:h-[138px] md:w-[320px]"
            >
              <div className="relative flex-1 overflow-hidden bg-white px-4 pt-3 md:px-5 md:pt-4">
                <div className="relative h-[62px] w-full overflow-hidden md:h-[72px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 240px, 290px"
                    className="object-contain object-center transition-transform duration-300"
                    style={{
                      transform: `scale(${item.logoScale})`,
                    }}
                  />
                </div>
              </div>

              <div className="border-t border-gray-100 px-4 py-2.5 md:px-5 md:py-3">
                <div className="flex items-center gap-2">
                  
                </div>

                <p className="mt-1 truncate text-[10px] font-semibold tracking-[-0.015em] text-[#071b33] md:text-[11px]">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsCarousel;