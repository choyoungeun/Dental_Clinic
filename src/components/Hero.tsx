'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import RevealImage from './RevealImage';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

/*
  HERO CONTENT DIRECTION

  1. 자연치아 보존을 먼저 생각하는 진료
  2. 필요한 경우 임플란트 · 구강외과까지 이어지는 진료 범위
  3. 검사 결과와 치료계획을 설명하고 결정하는 진료
  4. 위 내용을 대표원장의 실제 학력 · 임상경력으로 뒷받침
*/

const credentials = [
  {
    label: 'YONSEI',
    text: '연세대학교 치과대학 우등졸업',
  },
  {
    label: 'SEVERANCE',
    text: '신촌 세브란스 연세대학교 치과대학병원',
  },
  {
    label: 'CLINICAL EXPERIENCE',
    text: '前 수원덕산병원 치과 진료과장',
  },
];

const Hero = () => {
  const goServices = () => {
    document
      .getElementById('services')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  const goDoctors = () => {
    document
      .getElementById('doctors')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#06182e] text-white">
      {/* Background */}
      <RevealImage
        noZoom
        parallax={20}
        delay={0}
        className="absolute inset-0 z-0"
      >
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

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#06182e]/60" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#06182e] via-[#06182e]/80 to-[#06182e]/25" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#06182e] via-transparent to-[#06182e]/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[790px] max-w-7xl flex-col justify-end px-5 pb-10 pt-36 md:min-h-[840px] md:px-8 md:pb-14 lg:pt-32">
        {/* Eyebrow */}
        <Reveal variant="fade" delay={100}>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#8ec5ff]/70" />

            <p className="text-[11px] font-bold tracking-[0.25em] text-[#8ec5ff] md:text-[12px]">
              TOOTH PRESERVATION · IMPLANT · ORAL SURGERY
            </p>
          </div>
        </Reveal>

        {/* Main message */}
        <TextReveal
          as="h1"
          delay={220}
          stagger={150}
          duration={1000}
          className="mt-6 max-w-[980px] break-keep text-[39px] font-semibold leading-[1.25] tracking-[-0.05em] md:text-[58px] lg:text-[70px]"
          lines={[
            '치아를 살릴 수 있는지',
            <span key="line-2" className="text-[#8ec5ff]">
              먼저 봅니다.
            </span>,
            '필요한 치료는,',
            <span key="line-4" className="text-white">
              근거를 확인하고 계획합니다.
            </span>,
          ]}
        />

        {/* Supporting copy */}
        <Reveal
          variant="soft"
          delay={780}
          className="mt-7 max-w-[720px]"
        >
          <p className="break-keep text-[16px] leading-[1.9] text-white/78 md:text-[18px] md:leading-[1.9]">
            자연치아 보존과 재신경치료부터
            <br className="hidden md:block" />
            임플란트 · 매복 사랑니 · 구강외과 진료까지.
          </p>

          <p className="mt-2 break-keep text-[15px] leading-[1.85] text-white/60 md:text-[16px]">
            검사 결과를 함께 확인하고,
            치료가 필요한 이유와 선택지를 설명한 뒤
            진료계획을 세웁니다.
          </p>
        </Reveal>

        {/* Doctor */}
        <Reveal
          variant="soft"
          delay={900}
          className="mt-6"
        >
          <p className="text-[14px] font-medium tracking-[-0.015em] text-white/75 md:text-[15px]">
            수원세브란스치과
            <span className="mx-2 text-white/25">|</span>
            <strong className="font-semibold text-white">
              이현민 대표원장
            </strong>
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal
          variant="soft"
          delay={980}
          className="mt-8"
        >
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={goServices}
              className="group flex h-12 min-w-[156px] items-center justify-center gap-3 rounded-md bg-white px-6 text-[14px] font-bold text-[#071b33] transition-colors duration-300 hover:bg-[#eaf3ff]"
            >
              주요 진료 보기

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <button
              type="button"
              onClick={goDoctors}
              className="flex h-12 min-w-[156px] items-center justify-center rounded-md border border-white/30 px-6 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-white/10"
            >
              대표원장 소개
            </button>
          </div>
        </Reveal>

        {/* Credentials */}
        <dl className="mt-12 grid border-t border-white/20 md:mt-14 md:grid-cols-3">
          {credentials.map((item, index) => (
            <Reveal
              key={item.label}
              variant="soft"
              delay={1080 + stagger(index, 100)}
              className={[
                'py-5 md:py-6',
                index > 0
                  ? 'border-t border-white/15 md:border-l md:border-t-0 md:pl-7'
                  : '',
                index < credentials.length - 1
                  ? 'md:pr-7'
                  : '',
              ].join(' ')}
            >
              <dt className="text-[10px] font-bold tracking-[0.22em] text-[#8ec5ff]">
                {item.label}
              </dt>

              <dd className="mt-2 break-keep text-[14px] font-medium leading-[1.55] text-white/90 md:text-[15px]">
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