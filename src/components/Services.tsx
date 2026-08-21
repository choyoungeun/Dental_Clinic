import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: '임플란트',
    eng: 'Implant Dentistry',
    desc: 'CT와 구강 상태를 충분히 분석하여 뼈와 잇몸, 최종 보철까지 고려한 치료 계획을 세웁니다.',
    image: '/images/digital_implant.jpg',
    tags: ['고난도 임플란트', '골이식'],
  },
  {
    title: '자연치아 보존',
    eng: 'Preservation',
    desc: '발치를 결정하기 전에 자연치아를 유지할 수 있는 가능성을 먼저 살펴보고 필요한 치료 방법을 고민합니다.',
    image: '/images/micro_scope.jpg',
    tags: ['신경치료', '치근단 수술'],
  },
  {
    title: '사랑니 · 구강외과',
    eng: 'Oral Surgery',
    desc: 'CT를 통해 치아와 신경관의 위치관계를 확인하고 현재 상태와 난이도에 맞춰 치료 계획을 세웁니다.',
    image: '/images/love_teeth.jpg',
    tags: ['매복 사랑니', '구강외과'],
  },
  {
    title: '보철 · 충치 · 잇몸진료',
    eng: 'General Dentistry',
    desc: '고난도 치료뿐 아니라 가족이 오랫동안 믿고 다닐 수 있는 일상적인 치과진료까지 함께합니다.',
    image: '/images/esthetic_dental.png',
    tags: ['보철', '충치치료', '치주치료'],
  },
];

const Services = () => {
  return (
    <section className="bg-[#f8f9fa] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-5 text-[10px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[11px]">
              DENTAL CARE
            </h2>

            <p className="text-4xl font-semibold leading-[1.35] tracking-[-0.035em] text-[#071b33] md:text-5xl">
              어려운 치료부터
              <br />
              가족의 일상적인 치과진료까지.
            </p>
          </div>

          <div className="max-w-sm border-l border-gray-300 pl-7">
            <p className="text-[14px] leading-[1.9] text-gray-500 md:text-[15px]">
              치료의 난이도와 관계없이
              충분히 진단하고 설명한 뒤
              필요한 치료를 함께 결정합니다.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden bg-white md:flex-row"
            >
              <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-[42%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-[#071b33]/10 transition-colors duration-500 group-hover:bg-transparent" />

                <span className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.2em] text-white/70">
                  0{index + 1}
                </span>
              </div>

              <div className="flex min-h-[320px] flex-1 flex-col p-8 md:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2f89fc]">
                  {item.eng}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#071b33]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[14px] leading-[1.9] text-gray-500 md:text-[15px]">
                  {item.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-200 px-3 py-1.5 text-[11px] font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="group flex items-center gap-4 text-[13px] font-semibold tracking-[0.12em] text-[#071b33]"
          >
            진료과목 자세히 보기

            <div className="h-px w-10 bg-[#071b33] transition-all duration-300 group-hover:w-16" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;