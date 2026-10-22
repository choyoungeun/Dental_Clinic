
import Image from 'next/image';

const stories = [
  {
    number: '01',
    eyebrow: 'DIAGNOSIS FIRST',
    title: [
      '치료보다 먼저,',
      '정확한 진단.',
    ],
    description:
      '치료가 필요한 이유와 선택지를 충분히 설명합니다.',
  },
  {
    number: '02',
    eyebrow: 'COMPREHENSIVE CARE',
    title: [
      '자연치아 보존부터',
      '임플란트·구강외과까지.',
    ],
    description:
      '치아 상태에 맞는 치료 방법을 신중하게 검토합니다.',
  },
  {
    number: '03',
    eyebrow: 'DOCTOR-LED CARE',
    title: [
      '진단부터 치료계획까지,',
      '대표원장이 직접.',
    ],
    description:
      '대학병원과 종합병원에서 쌓은 임상 경험을 바탕으로 진료합니다.',
  },
];

export default function MobileScrollStory() {
  return (
    <section
      aria-label="수원세브란스치과 진료 철학"
      className="relative isolate overflow-hidden bg-[#202830] text-white md:hidden"
    >
      {/* 배경 이미지: 고정 효과 없이 일반 배치 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/images/test04.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-[#19232d]/85" />
      </div>

      {/* 한 번에 한 메시지만 집중해서 볼 수 있도록 구성 */}
      <div className="relative mx-auto max-w-3xl">
        {stories.map((story, index) => (
          <article
            key={story.number}
            className={[
              'relative flex min-h-[65svh]',
              'flex-col items-center justify-center',
              'px-7 py-20 text-center',
              index > 0
                ? 'border-t border-white/10'
                : '',
            ].join(' ')}
          >
            <div className="w-full max-w-[480px]">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#a9c8ed]">
                {story.eyebrow}
              </p>

              <h2 className="mt-6 break-keep text-[29px] font-bold leading-[1.42] tracking-[-0.04em]">
                {story.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <div className="mx-auto mt-6 h-px w-10 bg-white/40" />

              <p className="mx-auto mt-6 max-w-[340px] break-keep text-[15px] leading-[1.8] text-white/75">
                {story.description}
              </p>
            </div>

            {/* 진행 표시 */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-0 right-0 flex justify-center gap-2"
            >
              {stories.map((item, dotIndex) => (
                <span
                  key={item.number}
                  className={[
                    'h-[3px] rounded-full',
                    dotIndex === index
                      ? 'w-7 bg-white'
                      : 'w-2 bg-white/30',
                  ].join(' ')}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
