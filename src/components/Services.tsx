import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: '임플란트',
    subtitle: '정밀 진단부터 고난도 케이스까지',
    eng: 'IMPLANT',
    desc: 'CT 기반 3D 분석을 통해 잇몸뼈와 신경 위치를 확인하고, 상태에 맞는 임플란트 치료 계획을 세웁니다.',
    image: '/images/digital_implant.jpg',
    points: [
      '고난도 임플란트',
      '골이식',
      '상악동 거상술',
      '재수술 상담',
    ],
    emphasis: true,
  },
  {
    title: '자연치아 보존',
    subtitle: '가능하다면 내 치아를 먼저',
    eng: 'PRESERVATION',
    desc: '발치를 결정하기 전에 자연치아를 유지할 수 있는 가능성을 먼저 살펴보고 신경치료와 보존치료를 계획합니다.',
    image: '/images/micro_scope.jpg',
    points: [
      '신경치료',
      '재신경치료',
      '치근단 수술',
      '자연치아 보존',
    ],
  },
  {
    title: '사랑니 · 구강외과',
    subtitle: '복잡한 매복 사랑니까지 신중하게',
    eng: 'ORAL SURGERY',
    desc: 'CT로 치아와 신경관의 위치관계를 확인하고, 매복 상태와 난이도에 맞춰 치료 방향을 결정합니다.',
    image: '/images/love_teeth.jpg',
    points: [
      '매복 사랑니',
      '수평 매복',
      '구강외과',
      '수술 후 관리',
    ],
  },
  {
    title: '보철 · 충치 · 잇몸',
    subtitle: '가족이 오래 다닐 수 있는 기본진료',
    eng: 'GENERAL DENTISTRY',
    desc: '충치, 크라운, 잇몸치료, 스케일링 등 일상적인 치과진료부터 복합 보철까지 폭넓게 진료합니다.',
    image: '/images/esthetic_dental.png',
    points: [
      '충치치료',
      '크라운·보철',
      '잇몸치료',
      '스케일링',
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        {/* =====================================
            HEADER
        ====================================== */}
        <div className="mb-14 md:mb-18">
          <p className="text-[10px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[11px]">
            DENTAL CARE
          </p>

          <div className="mt-5 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold leading-[1.4] tracking-[-0.035em] text-[#071b33] md:text-5xl">
                필요한 진료를
                <br />
                제대로 받을 수 있도록.
              </h2>
            </div>

            <p className="max-w-md text-[14px] leading-[1.9] text-gray-500 md:text-[15px]">
              임플란트와 고난도 치료부터
              자연치아 보존, 사랑니, 충치·보철·잇몸진료까지
              한 곳에서 체계적으로 진료합니다.
            </p>
          </div>
        </div>

        {/* =====================================
            SERVICE GRID
        ====================================== */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((item, index) => (
            <article
              key={item.title}
              className={`
                group
                relative
                overflow-hidden
                border
                transition-all
                duration-300
                ${
                  item.emphasis
                    ? 'border-[#2f89fc]/30 bg-[#f8fbff]'
                    : 'border-gray-200 bg-white'
                }
              `}
            >
              <div className="grid md:grid-cols-[42%_58%]">
                {/* IMAGE */}
                <div className="relative min-h-[230px] overflow-hidden md:min-h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/55 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-white/70">
                      0{index + 1} / {item.eng}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-7 md:p-9">
                  {item.emphasis && (
                    <span className="mb-4 inline-flex w-fit border border-[#2f89fc]/20 bg-[#2f89fc]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#2f89fc]">
                      CORE TREATMENT
                    </span>
                  )}

                  <p className="text-[12px] font-semibold text-[#2f89fc]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#071b33] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[14px] leading-[1.9] text-gray-500">
                    {item.desc}
                  </p>

                  <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-100 pt-6">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-[12px] font-medium text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f89fc]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 text-[12px] font-semibold text-[#071b33]"
                    >
                      자세히 보기
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================
            COMMERCIAL CTA
        ====================================== */}
        <div className="mt-10 bg-[#071b33] px-6 py-8 text-white md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#79b6ff]">
              NEED A CONSULTATION?
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-[1.45] md:text-3xl">
              어떤 치료가 필요한지
              <br className="md:hidden" />
              먼저 상담해보세요.
            </h3>

            <p className="mt-3 text-[13px] leading-[1.8] text-white/55">
              현재 상태를 확인한 뒤 치료가 필요한 이유와 가능한 방법을 설명드립니다.
            </p>
          </div>

          <div className="mt-6 flex gap-3 md:mt-0">
            <Link
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 py-4 text-[12px] font-semibold text-[#071b33] transition hover:bg-gray-100"
            >
              네이버 예약
            </Link>

            <a
              href="tel:0311234567"
              className="border border-white/25 px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-white hover:text-[#071b33]"
            >
              전화 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;