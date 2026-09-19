import Reveal from './Reveal';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

/* 짧은 진료 철학. Hero 메시지를 반복하지 않고 "기준" 세 가지만 남깁니다. */
const principles = [
  { number: '01', title: '정확한 진단에서 시작합니다.' },
  { number: '02', title: '치료보다 먼저 치아를 생각합니다.' },
  { number: '03', title: '오늘의 치료보다 그 이후를 생각합니다.' },
];

const ClinicalPhilosophy = () => {
  return (
    <section
      id="brand-story"
      className="scroll-mt-24 bg-white py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal variant="fade">
          <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
            CLINICAL PHILOSOPHY
          </p>
        </Reveal>

        <TextReveal
          delay={120}
          className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
          lines={['진료의 기준을', '먼저 세웁니다.']}
        />

        <ol className="mt-12 grid md:mt-16 md:grid-cols-3 md:gap-10">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              as="li"
              variant="soft"
              delay={300 + stagger(index, 140)}
              className="list-none border-t border-[#071b33]/20 py-5 md:py-6"
            >
              <span className="text-[12px] font-semibold tracking-[0.24em] text-[#2f89fc]">
                {item.number}
              </span>
              <p className="mt-3 break-keep text-[20px] font-medium leading-[1.5] tracking-[-0.02em] text-[#071b33] md:text-[22px]">
                {item.title}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ClinicalPhilosophy;
