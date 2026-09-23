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

  SIGNATURE CARE는
  메인 화면에서는 핵심 메시지만 간결하게 보여주고,
  상세 내용은 클릭 후 상세 페이지에서 안내합니다.
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
      className="scroll-mt-24 overflow-hidden bg-fog py-22 md:py-30 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
                MAIN DENTAL CARE
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]"
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
            <p className="break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
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

        <div className="mt-14 md:mt-18">
          <Reveal variant="fade">
            <div className="flex items-center gap-4 border-b border-line pb-4">
              <span className="text-[13px] font-semibold tracking-[0.04em] text-mist">
                SIGNATURE CARE
              </span>

              <span className="h-px flex-1 bg-line" />

              <span className="hidden text-[13px] text-muted md:block">
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
                  variant="fade"
                  className="h-full"
                >
                  <Link
                    href={`/services/${item.slug}`}
                    aria-label={`${signature.title} 자세히 보기`}
                    className="
                      group relative block
                      min-h-[410px]
                      overflow-hidden
                      rounded-card
                      bg-ink
                      md:min-h-[460px]
                    "
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
                        className="object-cover"
                      />
                    </RevealImage>

                    {/* Overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-t
                        from-ink
                        from-0%
                        via-ink/60
                        via-38%
                        to-transparent
                        to-72%
                      "
                    />

                    {/* Number */}
                    <div className="absolute left-6 top-6 md:left-7 md:top-7">
                      <p className="text-[13px] font-semibold tracking-[0.08em] text-white/70">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

                      {/* English Category */}
                      <p className="text-[12px] font-semibold tracking-[0.08em] text-sky">
                        {signature.eng}
                      </p>

                      {/* Title */}
                      <h3
                        className="
                          mt-3
                          break-keep
                          text-[26px]
                          font-bold
                          leading-[1.25]
                          tracking-[-0.03em]
                          text-white
                          md:text-[28px]
                        "
                      >
                        {signature.title}
                      </h3>

                      {/* Short Hook Only */}
                      <p
                        className="
                          mt-3
                          break-keep
                          text-[16px]
                          font-medium
                          leading-[1.6]
                          text-white/85
                          md:text-[17px]
                        "
                      >
                        {signature.line}
                      </p>

                      {/* Detail Link */}
                      <div className="mt-6 border-t border-white/20 pt-4">
                        <span className="link-underline pb-0.5 text-[14px] font-semibold text-white">
                          자세히 보기
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
          className="mt-18 md:mt-24"
        >
          <div className="border-y border-line py-8 md:flex md:items-center md:justify-between md:gap-12 md:py-10">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.04em] text-mist">
                HOW WE PLAN
              </p>

              <p className="mt-3 max-w-2xl break-keep text-[22px] font-bold leading-[1.4] tracking-[-0.03em] text-ink md:text-[28px]">
                먼저 현재 상태를 확인하고,
                치료 범위와 순서를 설명합니다.
              </p>
            </div>

            <p className="mt-5 max-w-md break-keep text-[16px] leading-[1.7] text-body md:mt-0 md:text-[17px]">
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
                <p className="text-[13px] font-semibold tracking-[0.04em] text-mist">
                  GENERAL CARE
                </p>

                <h2 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-ink md:text-[28px]">
                  일반 진료
                </h2>
              </div>

              <p className="hidden text-[14px] text-muted md:block">
                충치 · 보철 · 턱관절 및 외상
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {generalItems.map((item) => (
              <Reveal
                key={item.slug}
                variant="fade"
              >
                <Link
                  href={`/services/${item.slug}`}
                  aria-label={`${item.title} 자세히 보기`}
                  className="
                    group grid
                    min-h-[180px]
                    grid-cols-[120px_1fr]
                    overflow-hidden
                    rounded-card
                    border border-line
                    bg-white
                    transition-colors
                    duration-200
                    hover:border-navy/40
                    sm:grid-cols-[150px_1fr]
                    md:min-h-[250px]
                    md:grid-cols-1
                  "
                >
                  {/* Image */}
                  <div className="relative min-h-full overflow-hidden md:h-[145px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 150px, 33vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-navy/15 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between p-5 md:p-6">
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.06em] text-mist">
                        {item.eng}
                      </p>

                      <h3 className="mt-2 text-[21px] font-bold tracking-[-0.03em] text-ink md:text-[22px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 break-keep text-[15px] leading-[1.65] text-muted">
                        {item.hook}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-line pt-4">
                      <span className="link-underline pb-0.5 text-[14px] font-semibold text-body group-hover:text-navy">
                        진료 안내
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