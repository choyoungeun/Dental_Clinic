
import Image from 'next/image';

const stories = [
  {
    eyebrow: '01 · BEFORE THE VISIT',
    heading: [
      '“치과 치료, 가격만 비교하고 계신가요?”',
      '임플란트는 어디에서나 같은 치료가 되는 것은 아닙니다.',
    ],
    body: [
      '검사를 어떻게 하는지,',
      '어떤 기준으로 치료를 결정하는지,',
      '치료 후에는 어떻게 경과를 확인하고 관리하는지.',
    ],
    note: [
      '가격에는 보이지 않는 과정이 있습니다.',
    ],
  },
  {
    eyebrow: '02 · DIAGNOSIS',
    heading: [
      '중요한 것은',
      '“왜 하는가”입니다.',
    ],
    body: [
      '치아를 살릴 수 있는지,',
      '정말 발치가 필요한지,',
      '지금 치료해야 하는지.',
    ],
    note: [
      '수원세브란스치과는 치료를 시작하기 전에 먼저 묻습니다.',
      '“이 치료가 지금 이 환자에게 필요한가?”',
    ],
  },
  {
    eyebrow: '03 · TREATMENT OPTIONS',
    heading: [
      '한 가지 치료를',
      '먼저 정해두지 않습니다.',
    ],
    body: [
      '자연치아를 유지할 수 있는지 살펴보고,',
      '신경치료·재신경치료부터 임플란트,',
      '구강외과적 치료까지 필요한 범위를 검토합니다.',
    ],
    note: [
      '현재 치아 상태에 따라',
      '가능한 방법과 치료 순서를 설명합니다.',
    ],
  },
  {
    eyebrow: '04 · SYSTEMIC CARE',
    heading: [
      '치아만이 아니라,',
      '치료에 영향을 주는 전신 상태까지 확인합니다.',
    ],
    body: [
      '당뇨·고혈압·심혈관질환이나 복용 중인 약물이 있다면',
      '치과 치료에 영향을 줄 수 있는 부분을 함께 확인합니다.',
    ],
    note: [
      '필요한 경우 같은 건물 내 내과 진료와 연계해',
      '치료 전 확인이 필요한 사항을 점검합니다.',
    ],
  },
  {
    eyebrow: '05 · OUR STANDARD',
    heading: [
      '진단부터 치료계획까지,',
      '대표원장이 직접 봅니다.',
    ],
    body: [
      '자연치아 보존, 재신경치료, 임플란트, 구강외과까지',
      '현재 상태에 필요한 치료 범위를 직접 확인하고 계획합니다.',
    ],
    note: [
      '진단부터 치료 후 관리까지 이어지는 과정을 중요하게 생각합니다.',
    ],
  },
];

export default function MobileScrollStory() {
  return (
    <section
      aria-label="수원세브란스치과 진료 철학"
      className="relative isolate overflow-hidden bg-[#2a2e33] text-white md:hidden"
    >
      {/* 배경은 고정하지 않고 섹션과 함께 스크롤 */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/test04.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[#1c1f23]/85" />
      </div>

      <div className="mx-auto max-w-xl px-6 py-12">
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
            OUR PHILOSOPHY
          </p>
          <p className="mt-2 text-lg font-semibold">
            진료의 기준을 이야기합니다.
          </p>
        </div>

        <div className="divide-y divide-white/20">
          {stories.map((story, index) => (
            <article
              key={story.eyebrow}
              className="py-10"
              aria-labelledby={`mobile-story-${index}`}
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-white/60">
                {story.eyebrow}
              </p>

              <h3
                id={`mobile-story-${index}`}
                className="mt-4 break-keep text-[25px] font-bold leading-[1.4] tracking-tight"
              >
                {story.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <div className="mt-6 space-y-1 break-keep text-[15px] leading-[1.8] text-white/90">
                {story.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-7 border-t border-white/20 pt-5">
                {story.note.map((line) => (
                  <p
                    key={line}
                    className="break-keep text-[14px] leading-[1.8] text-white/70"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
