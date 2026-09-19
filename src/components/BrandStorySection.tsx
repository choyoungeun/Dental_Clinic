import Image from 'next/image';
import Reveal from '@/components/Reveal';
import RevealImage from '@/components/RevealImage';
import TextReveal from '@/components/TextReveal';
import { stagger } from './stagger';

/* 병원 소개 + 진료 원칙을 하나의 비주얼 섹션으로 합쳤습니다.
   (이전 BrandStorySection 본문 3문단 + BrandPrinciples 설명문 → 제목 + 한 줄 요약 + 원칙 3줄) */
const principles = [
  { number: '01', title: '정확한 진단에서 시작합니다.' },
  { number: '02', title: '치료보다 먼저 치아를 생각합니다.' },
  { number: '03', title: '오늘의 치료보다 그 이후를 생각합니다.' },
];

const BrandStorySection = () => {
  return (
    <section
      id="brand-story"
      className="scroll-mt-24 bg-[#071b33] text-white"
    >
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.5fr_1fr]">
        {/* IMAGE 60% */}
        <RevealImage
          parallax={24}
          className="h-[360px] md:h-[520px] lg:h-auto lg:min-h-[680px]"
        >
          <Image
            src="/images/about.jpg"
            alt="수원세브란스치과 진료 체어"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#071b33]/10" />
        </RevealImage>

        {/* TEXT 40% */}
        <div className="flex flex-col justify-center px-5 py-14 md:px-10 md:py-20 lg:px-14 xl:px-20">
          <Reveal variant="fade">
            <p className="text-[12px] font-semibold tracking-[0.3em] text-[#79b6ff]">
              OUR STANDARD
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-5 break-keep text-4xl font-semibold leading-[1.35] tracking-[-0.04em] md:text-5xl"
            lines={['치료가 복잡할수록', '처음의 진단이 중요합니다.']}
          />

          <Reveal variant="soft" delay={350}>
            <p className="mt-6 break-keep text-[16px] leading-[1.8] text-white/70 md:text-[18px]">
              살릴 수 있는 치아는 먼저{' '}
              <br className="hidden md:block" />
              보존 가능성을 확인합니다.
            </p>
          </Reveal>

          <ul className="mt-10 border-t border-white/15">
            {principles.map((item, index) => (
              <Reveal
                key={item.number}
                as="li"
                variant="soft"
                delay={500 + stagger(index, 120)}
                className="flex items-baseline gap-5 border-b border-white/15 py-4 md:py-5"
              >
                <span className="text-[12px] tracking-[0.2em] text-[#79b6ff]">
                  {item.number}
                </span>
                <span className="break-keep text-[16px] font-medium leading-[1.5] text-white md:text-[18px]">
                  {item.title}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
