import Image from 'next/image';
import Link from 'next/link';

import Reveal from './Reveal';
import RevealImage from './RevealImage';
import TextReveal from './TextReveal';
import { services } from './serviceData';
import { stagger } from './stagger';

/*
  MAIN CARE
  자연치아 보존 → 임플란트 → 구강외과

  GENERAL CARE
  충치 → 보철 → 턱관절 · 외상

  모든 진료를 같은 비중으로 나열하지 않고,
  수원세브란스치과가 가장 먼저 보여주고 싶은 진료와
  일반 진료를 시각적으로 구분합니다.
*/

const signatureItems = services
  .filter((item) => item.signature)
  .sort(
    (a, b) =>
      (a.signature?.order ?? 99) -
      (b.signature?.order ?? 99),
  );

const generalItems = services.filter(
  (item) => !item.signature,
);

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-24 overflow-hidden bg-[#f5f7fa] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                MAIN DENTAL CARE
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={[
                '치아를 지키는 치료부터,',
                '수술이 필요한 치료까지.',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={220}
            className="lg:pb-2"
          >
            <p className="break-keep text-[16px] leading-[1.85] text-[#536577] md:text-[17px]">
              한 가지 치료 방법을 먼저 정하지 않습니다.
              현재 치아를 유지할 수 있는지 확인하고,
              필요한 경우 임플란트와 구강외과 치료까지
              순서에 맞게 계획합니다.
            </p>
          </Reveal>
        </div>

        {/* =====================================================
            SIGNATURE CARE
        ===================================================== */}

        <div className="mt-12 md:mt-16">
          <Reveal variant="fade">
            <div className="flex items-center gap-4 border-b border-[#071b33]/15 pb-4">
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#2f89fc]">
                SIGNATURE CARE
              </span>

              <span className="h-px flex-1 bg-[#071b33]/10" />

              <span className="hidden text-[12px] text-gray-400 md:block">
                수원세브란스치과 주요 진료
              </span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {signatureItems.map((item, index) => {
              const signature = item.signature!;
              const delay = stagger(index, 120);

              return (
                <Reveal
                  key={item.slug}
                  delay={delay}
                  className="h-full"
                >
                  <Link
                    href={`/services/${item.slug}`}
                    aria-label={`${signature.title} 자세히 보기`}
                    className="group relative block min-h-[520px] overflow-hidden rounded-md bg-[#071b33] md:min-h-[590px]"
                  >
                    {/* Image */}
                    <RevealImage
                      noZoom
                      delay={delay + 120}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={signature.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.035]"
                      />
                    </RevealImage>

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031225] from-0% via-[#071b33]/72 via-45% to-[#071b33]/5 to-78%" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 md:left-7 md:top-7">
                      <p className="text-[12px] font-bold tracking-[0.2em] text-white/70">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <p className="text-[11px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                        {signature.eng}
                      </p>

                      <h3 className="mt-3 break-keep text-[30px] font-semibold leading-[1.2] tracking-[-0.04em] text-white md:text-[35px]">
                        {signature.title}
                      </h3>

                      <p className="mt-4 break-keep text-[17px] font-medium leading-[1.65] text-white/90">
                        {signature.line}
                      </p>

                      <p className="mt-3 line-clamp-3 break-keep text-[14px] leading-[1.75] text-white/65 md:text-[15px]">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <li
                            key={tag}
                            className="text-[12px] font-medium text-white/65"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                        <span className="text-[13px] font-semibold text-white">
                          자세히 보기
                        </span>

                        <span
                          aria-hidden="true"
                          className="text-xl text-[#8ec5ff] transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BRIDGE MESSAGE
        ===================================================== */}

        <Reveal
          variant="soft"
          className="mt-16 md:mt-24"
        >
          <div className="border-y border-[#071b33]/15 py-8 md:flex md:items-center md:justify-between md:gap-12 md:py-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.24em] text-[#2f89fc]">
                HOW WE PLAN
              </p>

              <p className="mt-3 max-w-2xl break-keep text-[24px] font-semibold leading-[1.5] tracking-[-0.035em] text-[#071b33] md:text-[30px]">
                먼저 현재 상태를 확인하고,
                치료 범위와 순서를 설명합니다.
              </p>
            </div>

            <p className="mt-5 max-w-md break-keep text-[15px] leading-[1.8] text-[#627284] md:mt-0 md:text-[16px]">
              검사 결과와 치료 선택지를 함께 확인한 뒤
              필요한 진료를 결정합니다.
              여러 치료가 필요한 경우에는
              우선순위와 치료 순서를 먼저 안내합니다.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            GENERAL CARE
        ===================================================== */}

        <div className="mt-16 md:mt-20">
          <Reveal variant="fade">
            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#2f89fc]">
                  GENERAL CARE
                </p>

                <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.035em] text-[#071b33] md:text-[38px]">
                  일반 진료
                </h2>
              </div>

              <p className="hidden text-[13px] text-gray-400 md:block">
                충치 · 보철 · 턱관절 및 외상
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {generalItems.map((item, index) => (
              <Reveal
                key={item.slug}
                delay={stagger(index, 100)}
              >
                <Link
                  href={`/services/${item.slug}`}
                  aria-label={`${item.title} 자세히 보기`}
                  className="group grid min-h-[180px] grid-cols-[120px_1fr] overflow-hidden rounded-md border border-[#dde4eb] bg-white transition-colors duration-300 hover:border-[#a9bfd7] sm:grid-cols-[150px_1fr] md:min-h-[250px] md:grid-cols-1"
                >
                  {/* image */}
                  <div className="relative min-h-full overflow-hidden md:h-[145px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 150px, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-[#071b33]/5" />
                  </div>

                  {/* text */}
                  <div className="flex flex-col justify-between p-5 md:p-6">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] text-[#2f89fc]">
                        {item.eng}
                      </p>

                      <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#071b33] md:text-[24px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 break-keep text-[14px] leading-[1.7] text-[#647383]">
                        {item.hook}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#071b33]/10 pt-4">
                      <span className="text-[12px] font-semibold text-[#536577]">
                        진료 안내
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-[#176fc2] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;