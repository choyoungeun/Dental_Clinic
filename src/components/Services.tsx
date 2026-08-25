'use client';

import Image from 'next/image';

const services = [
  {
    title: '임플란트',
    eng: 'IMPLANT',
    hook: '뼈가 부족하거나 재수술이 필요한 경우도 먼저 정밀하게 확인합니다.',
    desc: '3D CT로 잇몸뼈와 신경 위치를 확인하고, 뼈이식이 필요한지부터 치료 순서까지 이해하기 쉽게 설명드립니다.',
    image: '/images/digital_implant.jpg',
    icon: 'implant',
    tags: ['3D CT 진단', '뼈이식 상담', '재수술 상담'],
    consultationValue: '임플란트',
  },
  {
    title: '자연치아 보존',
    eng: 'TOOTH PRESERVATION',
    hook: '뽑기 전에, 살릴 수 있는 가능성부터 확인합니다.',
    desc: '신경치료와 재신경치료 등 자연치아를 유지할 방법이 있는지 먼저 살펴본 뒤 치료 방향을 함께 결정합니다.',
    image: '/images/micro_scope.jpg',
    icon: 'tooth',
    tags: ['신경치료', '재신경치료', '보존 가능성 확인'],
    consultationValue: '자연치아 보존',
  },
  {
    title: '사랑니 · 구강외과',
    eng: 'ORAL SURGERY',
    hook: '매복 사랑니는 신경과의 위치관계부터 확인하는 것이 중요합니다.',
    desc: 'CT를 통해 사랑니의 방향과 신경관 위치를 확인하고, 발치 난이도와 치료 과정을 설명드립니다.',
    image: '/images/love_teeth.jpg',
    icon: 'surgery',
    tags: ['매복 사랑니', 'CT 신경 위치 확인', '구강외과 진료'],
    consultationValue: '사랑니 · 구강외과',
  },
  {
    title: '충치치료',
    eng: 'RESTORATIVE CARE',
    hook: '충치의 크기와 남은 치아 상태를 보고 필요한 치료를 선택합니다.',
    desc: '레진이나 인레이 같은 치료가 왜 필요한지, 어느 범위까지 치료하는지 환자분이 이해할 수 있게 설명드립니다.',
    image: '/images/esthetic_dental.png',
    icon: 'cavity',
    tags: ['레진', '인레이', '충치 범위 확인'],
    consultationValue: '충치 · 보철',
  },
  {
    title: '보철치료',
    eng: 'PROSTHODONTIC CARE',
    hook: '단순히 씌우는 치료가 아니라 오래 씹을 수 있는 기능을 함께 봅니다.',
    desc: '크라운과 브릿지 등 보철치료 시 남은 치아의 상태와 씹는 기능을 함께 고려해 치료 계획을 세웁니다.',
    image: '/images/dentistry.jpg',
    icon: 'crown',
    tags: ['크라운', '브릿지', '씹는 기능 고려'],
    consultationValue: '충치 · 보철',
  },
  {
    title: '잇몸치료',
    eng: 'PERIODONTAL CARE',
    hook: '붓고 피나는 잇몸, 증상만이 아니라 잇몸 상태와 원인을 확인합니다.',
    desc: '스케일링부터 단계별 치주치료까지 잇몸과 치조골 상태를 확인한 후 필요한 관리 방법을 안내드립니다.',
    image: '/images/clinic_room.jpg',
    icon: 'gum',
    tags: ['스케일링', '치주치료', '잇몸 상태 확인'],
    consultationValue: '잇몸치료',
  },
];

const ServiceIcon = ({ type }: { type: string }) => {
  const common = 'h-5 w-5 md:h-6 md:w-6';

  if (type === 'implant') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <path d="M8 3h8l-1 5H9L8 3Z" />
        <path d="M10 8v4m4-4v4M9 12h6M10 15h4M11 18h2M12 12v9" />
      </svg>
    );
  }

  if (type === 'surgery') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <path d="M7 4c2 2 3 3 5 3s3-1 5-3c2 4 1 8 0 11-1 3-2 6-4 6-1 0-1-4-1-6 0 2 0 6-1 6-2 0-3-3-4-6-1-3-2-7 0-11Z" />
        <path d="m17.5 6.5 3 3m-1.5-4.5 1.5 1.5M18 9l-2 2" />
      </svg>
    );
  }

  if (type === 'crown') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <path d="m5 8 3 3 4-6 4 6 3-3-1 9H6L5 8Z" />
        <path d="M7 20h10" />
      </svg>
    );
  }

  if (type === 'gum') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
        <path d="M7 4c2 2 3 3 5 3s3-1 5-3c2 4 1 8 0 11-1 3-2 6-4 6-1 0-1-4-1-6 0 2 0 6-1 6-2 0-3-3-4-6-1-3-2-7 0-11Z" />
        <path d="M5 14c4-2 10-2 14 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
      <path d="M7 4c2 2 3 3 5 3s3-1 5-3c2 4 1 8 0 11-1 3-2 6-4 6-1 0-1-4-1-6 0 2 0 6-1 6-2 0-3-3-4-6-1-3-2-7 0-11Z" />
      {type === 'cavity' && <circle cx="12" cy="10" r="1.5" />}
    </svg>
  );
};

const Services = () => {
  const requestConsultation = (treatment: string) => {
    window.dispatchEvent(
      new CustomEvent('select-consultation-treatment', {
        detail: treatment,
      }),
    );

    document
      .getElementById('consultation')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#f5f7fa] py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-6 md:mb-8">
          <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
            DENTAL CARE
          </p>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#071b33] md:text-4xl">
                필요한 치료보다
                <br className="md:hidden" />
                <span className="text-[#176fc2]"> 필요한 이유부터</span> 설명합니다.
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-[1.7] text-gray-500 md:text-right md:text-[14px]">
              치료 이름보다 환자분이 궁금해하는
              <br className="hidden md:block" />
              “왜 해야 하는지, 다른 방법은 없는지”부터 살펴봅니다.
            </p>
          </div>
        </div>

        {/* COMPACT TRUST STRIP */}
        <div className="mb-4 grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#dfe5ec] bg-white">
          <div className="px-2 py-3 text-center md:px-4">
            <p className="text-[9px] font-bold text-[#2f89fc] md:text-[10px]">01</p>
            <p className="mt-1 text-[10px] font-semibold leading-[1.45] text-[#071b33] md:text-[12px]">
              자연치아 보존
              <br />
              가능성 먼저 확인
            </p>
          </div>

          <div className="border-x border-[#e7ebf0] px-2 py-3 text-center md:px-4">
            <p className="text-[9px] font-bold text-[#2f89fc] md:text-[10px]">02</p>
            <p className="mt-1 text-[10px] font-semibold leading-[1.45] text-[#071b33] md:text-[12px]">
              CT 기반
              <br />
              정밀 진단
            </p>
          </div>

          <div className="px-2 py-3 text-center md:px-4">
            <p className="text-[9px] font-bold text-[#2f89fc] md:text-[10px]">03</p>
            <p className="mt-1 text-[10px] font-semibold leading-[1.45] text-[#071b33] md:text-[12px]">
              치료과정을
              <br />
              이해하기 쉽게 설명
            </p>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-[17px] border border-[#dfe5ec] bg-white shadow-[0_8px_28px_rgba(7,27,51,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,27,51,0.11)]"
            >
              {/* IMAGE */}
              <div className="relative h-[138px] overflow-hidden md:h-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/65 via-[#071b33]/10 to-transparent" />

                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#176fc2] shadow-md md:bottom-4 md:left-4 md:h-11 md:w-11">
                  <ServiceIcon type={item.icon} />
                </div>

                <p className="absolute bottom-4 right-4 text-[9px] font-bold tracking-[0.14em] text-white/75">
                  {item.eng}
                </p>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <h3 className="text-[20px] font-bold tracking-[-0.035em] text-[#071b33] md:text-[22px]">
                  {item.title}
                </h3>

                {/* 1-second message */}
                <p className="mt-2 text-[14px] font-bold leading-[1.55] tracking-[-0.025em] text-[#176fc2] md:text-[15px]">
                  {item.hook}
                </p>

                {/* easy explanation */}
                <p className="mt-2.5 text-[12px] leading-[1.75] text-gray-500 md:text-[13px]">
                  {item.desc}
                </p>

                {/* easy scan tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f2f6fa] px-2.5 py-1.5 text-[9px] font-semibold text-[#4f6277] md:text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => requestConsultation(item.consultationValue)}
                  className="mt-auto flex h-11 w-full items-center justify-between rounded-xl bg-[#071b33] px-4 text-[11px] font-bold text-white transition hover:bg-[#12365d]"
                >
                  <span>{item.title} 상담하기</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Services;