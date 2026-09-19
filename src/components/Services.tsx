import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import RevealImage from './RevealImage';
import { services } from './serviceData';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

/* 진료과목 6개를 하나의 섹션에서 같은 형식으로 보여줍니다.
   순서만 대표 진료(자연치아 보존 → 임플란트 → 매복 사랑니 · 구강외과)를 앞에 둡니다. */
const items = [
  ...services
    .filter((item) => item.signature)
    .sort((a, b) => a.signature!.order - b.signature!.order),
  ...services.filter((item) => !item.signature),
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f5f7fa] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* HEADER */}
        <div className="mb-10 md:mb-14">
          <Reveal variant="fade">
            <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
              DENTAL CARE
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
            lines={[
              '복잡한 진료일수록',
              <span key="j">
                <span className="text-[#176fc2]">판단</span>이 먼저입니다.
              </span>,
            ]}
          />
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((item, index) => {
            const delay = stagger(index % 3, 120);
            const eng = item.signature?.eng ?? item.eng;
            const title = item.signature?.title ?? item.title;
            const line = item.signature?.line ?? item.hook;

            return (
              <Reveal key={item.slug} delay={delay}>
                <Link
                  href={`/services/${item.slug}`}
                  aria-label={`${title} 자세히 보기`}
                  className="group relative block aspect-[4/5] min-h-[360px] w-full overflow-hidden rounded-md bg-[#0b2340] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f89fc] focus-visible:ring-offset-2"
                >
                  <RevealImage noZoom className="absolute inset-0" delay={delay + 150}>
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </RevealImage>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041426]/90 from-0% via-[#041426]/45 via-35% to-transparent to-70%" />

                  <div className="absolute inset-x-0 bottom-0 p-6 pr-20 md:p-7 md:pr-20">
                    <p className="text-[12px] font-bold tracking-[0.18em] text-[#8ec5ff]">
                      {String(index + 1).padStart(2, '0')} · {eng}
                    </p>

                    <h3 className="mt-2 break-keep text-[28px] font-semibold leading-[1.2] tracking-[-0.035em] text-white md:text-[32px]">
                      {title}
                    </h3>

                    <p className="mt-3 line-clamp-3 break-keep text-[15px] leading-[1.65] text-white/85 md:text-[16px]">
                      {line}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-[18px] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#071b33] md:bottom-7 md:right-7"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
