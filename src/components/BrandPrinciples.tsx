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
    <section className="relative overflow-hidden bg-[#071b33] px-6 py-28 text-white md:py-36">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#2f89fc]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.32em] text-[#79b6ff] md:text-[11px]">
            OUR STANDARD
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.45] tracking-[-0.03em] md:text-5xl">
            진료의 기준을
            <br />
            먼저 세웁니다.
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-white/50 md:text-[17px]">
            의료진이 달라져도,
            수원세브란스치과가 지키는 진료의 기준은 같아야 한다고 생각합니다.
          </p>
        </div>

        <div className="mt-20 grid gap-0 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.number}
              className="group border-t border-white/15 py-10 md:border-l md:border-t-0 md:px-10 md:py-4 md:first:border-l-0"
            >
              <span className="text-[10px] tracking-[0.28em] text-white/30">
                {item.number} / {item.eng}
              </span>

              <h3 className="mt-8 text-xl font-semibold leading-[1.5] text-white md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-sm text-[14px] leading-[1.9] text-white/50 md:text-[15px]">
                {item.desc}
              </p>

              <div className="mt-8 h-px w-8 bg-[#79b6ff]/60 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPrinciples;