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
    text: '연세대학교 치과대학 출신 의료진',
  },
  {
    label: 'SEVERANCE',
    text: '신촌 세브란스 연세대학교 치과대학병원',
  },
  {
    label: 'CLINICAL EXPERIENCE',
    text: '前 수원덕산 종합병원 치과과장 출신',
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
    <section className="relative isolate overflow-hidden bg-ink text-white">
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
      <div className="pointer-events-none absolute inset-0 z-[1] bg-ink/55" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink via-ink/75 to-ink/10" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/90 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 md:min-h-[min(88svh,820px)] md:px-8 md:pb-14 lg:px-12">
        {/* Eyebrow */}
        <Reveal variant="fade" delay={100}>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-sky/70" />

            <p className="text-[13px] font-medium tracking-[0.06em] text-sky md:text-[14px]">
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
          className="mt-6 max-w-[980px] break-keep text-[36px] font-bold leading-[1.22] tracking-[-0.03em] md:text-[52px] lg:text-[64px]"
          lines={[
            <span key="line-4" className="text-white">대학병원과 종합병원에서 이어온, </span>,
            
            <span key="line-2" className="text-sky">진료의 기준을 수원에서
            </span>,

          ]}
        />

        {/* Supporting copy */}
        <Reveal
          variant="soft"
          delay={780}
          className="mt-7 max-w-[720px]"
        >
          <p className="break-keep text-[17px] font-medium leading-[1.6] text-white/85 md:text-[20px]">
            대학병원과 종합병원에서의 임상 경험을 바탕으로

            <br className="hidden md:block" />
            자연치아의 가능성을 먼저 살피고, 필요한 치료를 신중하게 계획합니다.
          </p>

          <p className="mt-3 break-keep text-[16px] leading-[1.7] text-white/65 md:text-[17px]">
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
          <p className="text-[15px] font-medium tracking-[-0.01em] text-white/75 md:text-[16px]">
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
              className="flex h-12 min-w-[156px] items-center justify-center rounded-btn bg-white px-6 text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-fog"
            >
              주요 진료 보기
            </button>

            <button
              type="button"
              onClick={goDoctors}
              className="flex h-12 min-w-[156px] items-center justify-center rounded-btn border border-white/40 px-6 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
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
              <dt className="text-[12px] font-semibold tracking-[0.08em] text-sky">
                {item.label}
              </dt>

              <dd className="mt-2 break-keep text-[15px] font-medium leading-[1.55] text-white/90 md:text-[16px]">
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