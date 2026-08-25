import Image from 'next/image';

const services = [
  {
    title: '임플란트',
    eng: 'IMPLANT',
    desc: '정밀 진단부터 골이식·상악동·재수술 상담까지',
    image: '/images/digital_implant.jpg',
    icon: 'implant',
  },
  {
    title: '자연치아 보존',
    eng: 'TOOTH PRESERVATION',
    desc: '신경치료·재신경치료·자연치아 보존 치료',
    image: '/images/micro_scope.jpg',
    icon: 'tooth',
  },
  {
    title: '사랑니 · 구강외과',
    eng: 'ORAL SURGERY',
    desc: '매복 사랑니와 구강외과 진료',
    image: '/images/love_teeth.jpg',
    icon: 'surgery',
  },
  {
    title: '충치치료',
    eng: 'RESTORATIVE CARE',
    desc: '레진·인레이 등 필요한 범위만 치료',
    image: '/images/esthetic_dental.png',
    icon: 'cavity',
  },
  {
    title: '보철치료',
    eng: 'PROSTHODONTIC CARE',
    desc: '크라운·브릿지 등 기능을 고려한 보철치료',
    image: '/images/dentistry.jpg',
    icon: 'crown',
  },
  {
    title: '잇몸치료',
    eng: 'PERIODONTAL CARE',
    desc: '스케일링부터 단계별 치주치료와 관리',
    image: '/images/clinic_room.jpg',
    icon: 'gum',
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
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#f5f7fa] py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-7 flex items-end justify-between gap-5 md:mb-9">
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
              DENTAL CARE
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#071b33] md:text-4xl">
              주요 진료과목
            </h2>
          </div>

          
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[16px] border border-[#dfe5ec] bg-white shadow-[0_8px_28px_rgba(7,27,51,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,27,51,0.12)]"
            >
              <div className="relative h-[108px] overflow-hidden md:h-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/60 via-[#071b33]/10 to-transparent" />

                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/95 text-[#176fc2] shadow-md md:bottom-4 md:left-4 md:h-11 md:w-11">
                  <ServiceIcon type={item.icon} />
                </div>
              </div>

              <div className="p-3.5 md:p-5">
                <h3 className="text-[16px] font-bold tracking-[-0.025em] text-[#071b33] md:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-[10.5px] leading-[1.6] text-gray-500 md:mt-2 md:text-[13px]">
                  {item.desc}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#2f89fc]" />
                  <span className="text-[9px] font-bold tracking-[0.12em] text-[#2f89fc] md:text-[10px]">
                    {item.eng}
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

export default Services;