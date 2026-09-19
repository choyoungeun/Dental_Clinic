import Reveal from './Reveal';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

const principles = [
  {
    number: '01',
    eng: 'STANDARD',
    title: '정확한 진단에서 시작합니다.',
    desc: '충분히 살펴보고 판단한 뒤, 치료가 필요한 이유부터 설명합니다.',
  },
  {
    number: '02',
    eng: 'PRESERVATION',
    title: '치료보다 먼저 치아를 생각합니다.',
    desc: '할 수 있는 치료보다 지금 이 치아에 필요한 치료가 무엇인지 고민합니다.',
  },
  {
    number: '03',
    eng: 'RESPONSIBILITY',
    title: '오늘의 치료보다 그 이후를 생각합니다.',
    desc: '치료가 끝나는 순간보다 오랫동안 사용할 수 있는 결과를 목표로 합니다.',
  },
];

const BrandPrinciples = () => {
  return (
    <section className="relative overflow-hidden bg-[#071b33] px-6 py-16 text-white md:py-20">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#2f89fc]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div>
          <Reveal variant="fade">
            <p className="text-[12px] font-semibold tracking-[0.32em] text-[#79b6ff] md:text-[13px]">
              OUR STANDARD
            </p>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-5 text-3xl font-semibold leading-[1.45] tracking-[-0.03em] md:text-5xl"
            lines={['진료의 기준을', '먼저 세웁니다.']}
          />

          <Reveal variant="soft" delay={380}>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.9] text-white/50 md:text-[19px]">
              의료진이 달라져도,
              수원세브란스치과가 지키는 진료의 기준은 같아야 한다고 생각합니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-0 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              delay={stagger(index, 150)}
              className="group border-t border-white/15 py-7 md:border-l md:border-t-0 md:px-10 md:py-4 md:first:border-l-0"
            >
              <span className="text-[12px] tracking-[0.28em] text-white/30">
                {item.number} / {item.eng}
              </span>

              <h3 className="mt-5 text-xl font-semibold leading-[1.5] text-white md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-sm text-[16px] leading-[1.9] text-white/50 md:text-[17px]">
                {item.desc}
              </p>

              <div className="mt-5 h-px w-8 bg-[#79b6ff]/60 transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPrinciples;