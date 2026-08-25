import Image from 'next/image';

const cards = [
  {
    number: '01',
    label: 'MEDICAL STAFF',
    title: '대학병원과 종합병원에서 쌓은 임상 경험',
    image: '/images/dentist.png',
    main: '연세대 치대 · 신촌세브란스',
    lines: [
      '연세대학교 치과대학 우등졸업',
      '신촌세브란스 치과대학병원 임상 경험',
      '前 2차 종합병원 치과 진료과장',
    ],
    badge: '대표원장 직접 진료',
  },
  {
    number: '02',
    label: 'SPACE',
    title: '공간부터 여유롭게 준비했습니다.',
    image: '/images/clinic_room.jpg',
    main: '약 100평 · 체어 10대 이상',
    lines: [
      '넓고 쾌적한 진료 공간',
      '상담과 진료 동선을 고려한 공간 구성',
      '여유 있는 다수의 진료 체어',
    ],
    badge: '100 PYEONG · 10+ CHAIRS',
  },
  {
    number: '03',
    label: 'DIAGNOSTIC SYSTEM',
    title: '진단의 정확도를 높이기 위한 디지털 환경',
    image: '/images/digital_implant.jpg',
    main: '정밀 진단 시스템',
    lines: [
      '3D CT 기반 진단',
      '디지털 스캔 및 치료계획',
      '세브란스 치과병원 동일 모델 장비 포함',
    ],
    badge: 'DIGITAL DIAGNOSTIC',
  },
];

const SpecialCareEnvironment = () => {
  return (
    <section
      id="special-care"
      className="scroll-mt-24 bg-[#f6f8fb] py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-7 md:mb-9">
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
            SPECIAL CARE ENVIRONMENT
          </p>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold leading-[1.35] tracking-[-0.045em] text-[#071b33] md:text-4xl">
              치료를 위한 환경도
              <br />
              기준 있게 준비했습니다.
            </h2>

            <p className="max-w-md text-[13px] leading-[1.75] text-gray-500 md:text-right md:text-[14px]">
              의료진의 경험, 충분한 공간, 대학병원 급의 정밀 진단 장비까지
              <br className="hidden md:block" />
              진료의 기본이 되는 환경부터 꼼꼼하게 준비합니다.
            </p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.number}
              className="overflow-hidden rounded-[18px] border border-[#dfe5ec] bg-white shadow-[0_8px_28px_rgba(7,27,51,0.05)]"
            >
              <div className="relative h-[190px] overflow-hidden md:h-[220px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/70 via-[#071b33]/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[8px] font-bold tracking-[0.18em] text-[#8ec5ff]">
                      {card.label}
                    </p>
                    <p className="mt-1 text-[18px] font-bold tracking-[-0.03em] text-white">
                      {card.main}
                    </p>
                  </div>

                  <span className="text-[26px] font-light text-white/35">
                    {card.number}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-[17px] font-bold leading-[1.5] tracking-[-0.025em] text-[#071b33] md:text-[19px]">
                  {card.title}
                </h3>

                <div className="mt-4 space-y-2.5">
                  {card.lines.map((line) => (
                    <div key={line} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f89fc]" />
                      <p className="text-[13px] leading-[1.65] text-gray-500 md:text-[14px]">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <span className="inline-flex rounded-full bg-[#eef5fd] px-3 py-1.5 text-[9px] font-bold tracking-[0.1em] text-[#176fc2]">
                    {card.badge}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SpecialCareEnvironment;