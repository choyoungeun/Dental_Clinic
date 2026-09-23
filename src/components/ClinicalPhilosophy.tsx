import Image from 'next/image';

import Reveal from './Reveal';
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
      className="scroll-mt-24 bg-white py-22 md:py-30 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
                TREATMENT PROCESS
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]"
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
            <p className="break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
              현재 상태가 어떤지,
              어떤 치료 방법을 고려할 수 있는지,
              그리고 어떤 순서로 진행되는지 확인한 뒤
              치료계획을 세웁니다.
            </p>
          </Reveal>
        </div>

        {/* Photo : 진료철학을 보여주는 실제 진료 장면
            - 원본 4:3 → 모바일은 원본 비율(크롭 없음), 태블릿 16:10, 데스크톱 2:1
            - 크롭 시 상단 빈 벽을 덜어내고 원장 얼굴 · 모니터 영상 · 치아 모형이 함께 남도록 세로 위치 조정 */}
        <Reveal
          as="figure"
          variant="fade"
          duration={1000}
          className="mt-12 md:mt-16"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fog md:aspect-[16/10] lg:aspect-[2/1]">
            <Image
              src="/images/test03.png"
              alt="수원세브란스치과 이현민 대표원장이 환자에게 검사 결과와 치료 계획을 설명하는 모습"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center md:object-[center_75%] lg:object-[center_55%]"
            />
          </div>

          <figcaption className="mt-4 break-keep text-[14px] leading-[1.6] text-muted md:text-[15px]">
            검사 결과를 함께 확인하고,
            <br className="hidden md:block" />
            {' '}치료가 필요한 이유와 과정을 충분히 설명합니다.
          </figcaption>
        </Reveal>

        {/* Principles */}
        <ol className="mt-10 grid gap-x-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <Reveal
              key={item.number}
              as="li"
              variant="fade"
              className="list-none border-t-2 border-navy py-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold tracking-[0.04em] text-navy">
                  {item.number}
                </span>

                              </div>

              <h3 className="mt-4 break-keep text-[21px] font-bold leading-[1.4] tracking-[-0.03em] text-ink md:text-[22px]">
                {item.title}
              </h3>

              <p className="mt-3 break-keep text-[16px] leading-[1.7] text-body">
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
          <div className="border-l-2 border-navy pl-5 md:pl-6">
            <p className="max-w-4xl break-keep text-[18px] font-semibold leading-[1.6] tracking-[-0.02em] text-ink md:text-[20px]">
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