import Reveal from './Reveal';
import { stagger } from './stagger';
import TextReveal from './TextReveal';

const principles = [
  {
    number: '01',
    title: '검사 결과를 먼저 확인합니다.',
    body:
      '구강검사와 방사선 영상을 바탕으로 현재 치아와 잇몸 상태를 확인합니다. 필요한 경우 CT 등 추가 검사를 통해 치료에 영향을 줄 수 있는 구조를 함께 살펴봅니다.',
  },
  {
    number: '02',
    title: '가능한 치료 방법을 설명합니다.',
    body:
      '한 가지 방법만 제시하기보다 현재 상태에서 고려할 수 있는 치료 방법과 각각의 범위를 설명합니다. 자연치아를 유지할 수 있는 경우에는 보존 가능성도 함께 검토합니다.',
  },
  {
    number: '03',
    title: '치료 순서를 정리합니다.',
    body:
      '여러 부위의 치료가 필요한 경우 우선순위를 나눠 설명합니다. 먼저 해야 할 치료와 이후 진행할 치료를 구분해 전체 진료 흐름을 이해할 수 있도록 안내합니다.',
  },
  {
    number: '04',
    title: '치료 후 상태를 다시 확인합니다.',
    body:
      '치료가 끝난 뒤에는 교합, 잇몸 상태, 보철물과 임플란트 주변 상태 등을 확인합니다. 필요한 경우 정기검진을 통해 변화가 있는지 살펴봅니다.',
  },
];

const ClinicalPhilosophy = () => {
  return (
    <section
      id="brand-story"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                TREATMENT PROCESS
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={[
                '치료를 시작하기 전에,',
                '먼저 설명합니다.',
              ]}
            />
          </div>

          <Reveal
            variant="soft"
            delay={220}
            className="lg:pb-2"
          >
            <p className="break-keep text-[16px] leading-[1.85] text-[#5c6d7f] md:text-[17px]">
              현재 상태가 어떤지,
              어떤 치료 방법을 고려할 수 있는지,
              그리고 어떤 순서로 진행되는지 확인한 뒤
              치료계획을 세웁니다.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <ol className="mt-12 grid gap-x-8 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              as="li"
              variant="soft"
              delay={280 + stagger(index, 110)}
              className="list-none border-t border-[#071b33]/20 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#2f89fc]">
                  {item.number}
                </span>

                <span className="h-px w-10 bg-[#071b33]/15" />
              </div>

              <h3 className="mt-5 break-keep text-[22px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#071b33] md:text-[24px]">
                {item.title}
              </h3>

              <p className="mt-4 break-keep text-[14px] leading-[1.8] text-[#667686] md:text-[15px]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Bottom statement */}
        <Reveal
          variant="soft"
          delay={650}
          className="mt-8 md:mt-12"
        >
          <div className="border-l-2 border-[#2f89fc] pl-5 md:pl-6">
            <p className="max-w-4xl break-keep text-[18px] font-medium leading-[1.75] tracking-[-0.02em] text-[#263b50] md:text-[21px]">
              검사 결과와 치료 과정을 환자가 이해한 뒤
              진료를 시작하는 것을 중요하게 생각합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ClinicalPhilosophy;