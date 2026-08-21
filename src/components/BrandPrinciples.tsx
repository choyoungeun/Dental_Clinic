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
    <section className="bg-[#071b33] px-6 py-28 text-white md:py-36">
      <div className="mx-auto max-w-7xl">

        <p className="text-[11px] font-semibold tracking-[0.3em] text-[#79b6ff]">
          OUR STANDARD
        </p>

        <h2 className="mt-5 text-3xl font-semibold leading-[1.45] md:text-5xl">
          진료의 기준을
          <br />
          먼저 세웁니다.
        </h2>

        <div className="mt-20 grid gap-0 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.number}
              className="border-t border-white/15 py-10 md:border-l md:border-t-0 md:px-10 md:first:border-l-0"
            >
              <span className="text-[11px] tracking-[0.25em] text-white/35">
                {item.number} / {item.eng}
              </span>

              <h3 className="mt-8 text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-5 leading-[1.8] text-white/55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPrinciples;