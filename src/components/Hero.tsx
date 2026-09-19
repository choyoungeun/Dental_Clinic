'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import RevealImage from './RevealImage';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

/* 1순위 메시지 : 세브란스 임상 경험 + 종합병원 치과과장 경험
   공간 · 장비 같은 3순위 정보는 Hero 에서 다루지 않습니다. */
const credentials = [
  { label: 'EDUCATION', text: '연세대학교 치과대학 우등졸업' },
  { label: 'SEVERANCE', text: '신촌세브란스 치과대학병원 임상 경험' },
  { label: 'GENERAL HOSPITAL', text: '前 종합병원 치과 진료과장' },
];

const Hero = () => {
  const goConsultation = () => {
    document
      .getElementById('consultation')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goDoctors = () => {
    document
      .getElementById('doctors')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <Reveal variant="fade" delay={100}>
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#8ec5ff] md:text-[12px]">
            YONSEI · SEVERANCE · GENERAL HOSPITAL
          </p>
        </Reveal>

        <TextReveal
          as="h1"
          delay={250}
          stagger={140}
          duration={1000}
          className="mt-6 max-w-4xl break-keep text-[40px] font-semibold leading-[1.22] tracking-[-0.05em] md:text-[60px] lg:text-[72px]"
          lines={[
            '세브란스에서 배운',
            <span key="a" className="text-[#8ec5ff]">진단의 기준,</span>,
            '종합병원 치과과장으로 쌓은',
            <span key="b" className="text-[#8ec5ff]">판단의 경험.</span>,
          ]}
        />

        <Reveal variant="soft" delay={800} className="mt-8 max-w-xl">
          <p className="break-keep text-[16px] leading-[1.85] text-white/75 md:text-[19px]">
            자연치아 보존부터 임플란트·구강외과까지
            <br className="hidden md:block" />{' '}
            치료가 복잡할수록 진단과 치료계획을 중요하게 생각합니다.
          </p>
        </Reveal>

        <Reveal variant="soft" delay={950} className="mt-8">
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={goConsultation}
              className="flex h-12 min-w-[150px] items-center justify-center rounded-md bg-white px-6 text-[14px] font-bold text-[#071b33] transition hover:bg-[#eaf3ff]"
            >
              진료 상담하기
            </button>

            <button
              type="button"
              onClick={goDoctors}
              className="flex h-12 min-w-[150px] items-center justify-center rounded-md border border-white/30 px-6 text-[14px] font-bold text-white transition hover:bg-white/10"
            >
              대표원장 소개
            </button>
          </div>
        </Reveal>

        {/* 경력 3줄 : 카드가 아니라 얇은 선으로만 구분 */}
        <dl className="mt-12 grid gap-x-8 gap-y-4 border-t border-white/20 pt-6 md:mt-16 md:grid-cols-3">
          {credentials.map((item, index) => (
            <Reveal
              key={item.label}
              variant="soft"
              delay={1100 + stagger(index, 120)}
            >
              <dt className="text-[10px] font-bold tracking-[0.22em] text-[#8ec5ff]">
                {item.label}
              </dt>
              <dd className="mt-1.5 break-keep text-[15px] font-medium text-white md:text-[16px]">
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
