'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import RevealImage from './RevealImage';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

/* 첫 화면의 읽는 순서
   브랜드 메시지(자연치아 우선 · 계획 기반 진료)
   → 그 판단을 뒷받침하는 대표원장 경력
   → 실제 진료영역
   공간 · 장비 같은 3순위 정보는 Hero 에서 다루지 않습니다. */

/* 진료영역 : 카드 없이 얇은 선 + 타이포로만 구분 */
const treatments = [
  { label: 'TOOTH PRESERVATION', main: '자연치아 보존', sub: '재신경치료' },
  { label: 'IMPLANT', main: '임플란트', sub: '뼈이식' },
  { label: 'ORAL SURGERY', main: '매복 사랑니', sub: '구강외과' },
];

/* 경력 근거 : 실제 경력 그대로 표기 (대학병원 진료과장 X) */
const credentials = [
  { label: 'EDUCATION', text: '연세대학교 치과대학 우등졸업' },
  { label: 'CLINICAL EXPERIENCE', text: '신촌 세브란스 연세대학교 치과대학병원' },
  { label: 'PREVIOUS POSITION', text: '前 수원덕산병원 치과 진료과장' },
];

const scrollToSection = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#06182e] text-white">
      {/* 배경 : 세브란스병원 사진을 어둡게 깔고 아주 약한 parallax */}
      <RevealImage noZoom parallax={28} delay={0} className="absolute inset-0 z-0">
        <Image
          src="/images/Sev2018.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
      </RevealImage>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#06182e]/55" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#06182e] via-[#06182e]/70 to-[#06182e]/10" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#06182e] via-transparent to-[#06182e]/40" />

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-end px-5 pb-10 pt-36 md:min-h-[820px] md:px-8 md:pb-14 lg:pt-32">
        <div>
          {/* brand copy → 경력 근거 → 진료영역 → CTA */}
          <div className="max-w-3xl">
            <Reveal variant="fade" delay={80}>
              <p className="flex items-center gap-4 text-[12px] font-bold leading-[1.7] tracking-[0.2em] text-[#8ec5ff] md:text-[13px]">
                <span className="hidden h-px w-10 shrink-0 bg-[#8ec5ff]/60 sm:block" />
                <span>
                  YONSEI · SEVERANCE
                  <span className="hidden sm:inline"> · </span>
                  <br className="sm:hidden" />
                  CLINICAL EXPERIENCE
                </span>
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              delay={200}
              stagger={120}
              duration={900}
              className="mt-6 break-keep text-[38px] font-semibold leading-[1.25] tracking-[-0.055em] min-[390px]:text-[40px] md:text-[58px] xl:text-[68px]"
              lines={[
                <span key="a" className="text-[#8ec5ff]">자연치아를 먼저 보고,</span>,
                '필요한 치료는',
                '제대로 계획합니다.',
              ]}
            />

            <Reveal variant="soft" delay={650} className="mt-8 max-w-xl">
              <p className="break-keep text-[16px] leading-[1.85] text-white/70 md:text-[17px] lg:text-[18px] xl:text-[19px]">
                연세대학교 치과대학을 졸업하고
                <br className="hidden md:block" />{' '}
                신촌 세브란스 치과대학병원과
                <br className="hidden md:block" />{' '}
                종합병원 치과 진료과장으로 임상 경험을 쌓은
                <br className="hidden md:block" />{' '}
                <strong className="font-semibold text-white">
                  이현민 대표원장이 직접 진료합니다.
                </strong>
              </p>
            </Reveal>

            {/* 진료영역 : 얇은 선과 타이포만 사용 */}
            <Reveal variant="soft" delay={800} className="mt-10">
              <dl className="grid grid-cols-1 divide-y divide-white/15 border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
                {treatments.map((item) => (
                  <div key={item.label} className="py-4 md:px-5 md:py-5 md:first:pl-0 md:last:pr-0">
                    <dt className="text-[10.5px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 break-keep text-[15px] leading-[1.55] md:text-[16px]">
                      <span className="font-medium text-white md:block">{item.main}</span>
                      <span className="text-white/35 md:hidden"> · </span>
                      <span className="text-white/60 md:block">{item.sub}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal variant="soft" delay={950} className="mt-8">
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="flex h-12 min-w-[150px] items-center justify-center rounded-md bg-white px-6 text-[14px] font-bold text-[#071b33] transition hover:bg-[#eaf3ff]"
                >
                  주요 진료 보기 →
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('doctors')}
                  className="flex h-12 min-w-[150px] items-center justify-center rounded-md border border-white/30 px-6 text-[14px] font-bold text-white transition hover:bg-white/10"
                >
                  대표원장 소개
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 경력 근거 : 카드 없이 얇은 선 + 작은 글씨 */}
        <dl className="mt-12 grid gap-x-8 gap-y-5 border-t border-white/20 pt-6 md:mt-16 md:grid-cols-3">
          {credentials.map((item, index) => (
            <Reveal
              key={item.label}
              variant="soft"
              delay={1150 + stagger(index, 100)}
            >
              <dt className="text-[10.5px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                {item.label}
              </dt>
              <dd className="mt-1.5 break-keep text-[14px] font-medium text-white/85 md:text-[15px]">
                {item.text}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
