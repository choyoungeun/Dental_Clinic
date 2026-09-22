import Image from "next/image";
import Reveal from "@/components/Reveal";

const infectionCareItems = [
  {
    number: "01",
    title: "진료기구 개별 포장·멸균",
    desc: "세척과 멸균을 마친 기구를 개별 포장하여 보관하고, 진료 시 사용할 기구를 개봉합니다.",
  },
  {
    number: "03",
    title: "일회용품 원칙적 1회 사용",
    desc: "석션팁·컵 등 일회용으로 지정된 소모품은 환자별로 교체하여 사용합니다.",
  },
  {
    number: "04",
    title: "대학병원·종합병원 임상 경험을 반영한 감염관리",
    desc: "대표원장이 대학병원 및 종합병원에서 진료하며 경험한 감염관리 원칙을 바탕으로 진료 환경을 관리합니다.",
  },
];

const comfortCareItems = [
  {
    title: "가글마취",
    desc: "스케일링 등 비교적 간단한 처치 전, 구강 점막의 예민함을 줄이기 위해 적용합니다.",
  },
  {
    title: "도포마취",
    desc: "주사 전 점막 표면에 먼저 적용하여 바늘이 들어갈 때의 부담을 줄이는 데 도움을 줍니다.",
  },
  {
    title: "무통마취기",
    desc: "마취액을 천천히 주입하여 압력으로 인한 불편감을 줄이는 방식입니다. 주사바늘에 대한 느낌은 있을 수 있습니다.",
  },
  {
    title: "무침마취기",
    desc: "바늘 없이 약액을 분사하는 방식으로, 주사에 대한 두려움이 큰 환자에게 진료 상황에 따라 활용합니다.",
  },
];

export default function CleanSafetySystem() {
  return (
    <section
      id="safety"
      className="scroll-mt-24 bg-[#f8f6f2] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* 헤더 */}
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#17365D]">
              Clean & Safety System
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              진료의 기본은
              <span className="text-[#2f89fc]">
                <br className="hidden sm:block" />
                보이지 않는 곳
              </span>
              에서부터 시작됩니다.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 md:text-base">
              수원세브란스치과는 진료의 결과뿐 아니라,
              환자분이 머무는 과정까지 중요하게 생각합니다.
              감염관리와 진료 환경, 그리고 통증을 줄이기 위한 방식을
              세심하게 살피며 보다 편안한 진료를 위해 노력합니다.
            </p>
          </div>
        </Reveal>

        {/* 감염관리 섹션 */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 좌측 큰 이미지 + 설명 */}
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/equipment/sterilizaition.png"
                    alt="개별 포장 멸균 시스템"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="border-t border-slate-100 px-6 py-6 md:px-8">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#17365D]">
                    Infection Control
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    감염관리와 멸균·소독의 기본을 지킵니다
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    치과 진료에서 환자의 입안에 직접 닿는 기구와 물,
                    그리고 진료실의 작은 운영 원칙까지 모두 중요합니다.
                    보이지 않는 과정까지 진료의 일부라고 생각하며,
                    기구 관리와 진료수 관리, 일회용품 사용 원칙을 세심하게 운영합니다.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm md:px-8">
                <p className="text-lg font-medium leading-8 text-slate-800">
                  <span className="font-semibold text-slate-900">
                    환자 한 분을 위한 기구는, 한 분씩 준비합니다.
                  </span>
                  <br />
                  진료에 사용하는 기구는 세척 및 멸균 과정을 거친 후
                  개별 포장 상태로 보관하고, 진료 시 사용할 기구를 개봉하는 것을 원칙으로 합니다.
                </p>

                <p className="mt-4 text-[14px] leading-6 text-slate-600">
                  대표원장이 대학병원 및 종합병원 근무 과정에서 경험한 감염관리 원칙을 바탕으로,
                  보이지 않는 부분까지 세심하게 관리합니다.
                </p>
              </div>
            </Reveal>
          </div>

          {/* 우측 카드들 */}
          <div className="grid gap-4">
            <Reveal>
              <NovacareCard />
            </Reveal>

            {infectionCareItems.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17365D] text-sm font-semibold text-white">
                      {item.number}
                    </span>

                    <h4 className="text-lg font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 통증완화 섹션 */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#17365D]">
                Comfort Care
              </p>

              <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                <span className="text-[#2f89fc]">
                  치과가 무서운 분들을 위한 배려
                </span>
                도
                <br className="hidden sm:block" />
                진료의 한 부분이라고 생각합니다.
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-slate-600 md:text-base">
                치과 치료를 망설이게 되는 이유 중 하나는 통증에 대한 두려움입니다.
                수원세브란스치과는 진료 상황에 따라 다양한 방식의 마취 및 통증 완화 방법을 적용하여
                환자분의 부담을 줄이는 데 도움을 드리고자 합니다.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {comfortCareItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-[#17365D] px-4 py-1.5 text-[16px] font-bold tracking-tight text-white">
                    {item.title}
                  </div>

                  <p className="text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 하단 정리 문구 */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-10">
            <p className="text-lg leading-8 text-slate-700">
              좋은 장비와 시스템은 눈에 띄는 결과만을 위한 것이 아니라,
              <span className="font-semibold text-[#17365D]">
                {" "}환자분이 보다 안심하고 치료받을 수 있는 환경
              </span>
              을 만들기 위한 기본이라고 생각합니다.
              수원세브란스치과는 진료의 전 과정에서 기본을 지키는 치과가 되겠습니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NovacareCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid items-center gap-6 p-6 md:p-7 lg:grid-cols-[0.95fr_1.05fr]">
        {/* 이미지 */}
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto h-[320px] w-full max-w-[280px] md:h-[380px] md:max-w-[320px]">
            <Image
              src="/images/equipment/novacare.png"
              alt="NOVACARE 진료수 관리 시스템"
              fill
              className="object-contain drop-shadow-[0_18px_32px_rgba(15,23,42,0.10)]"
            />
          </div>
        </div>

        {/* 텍스트 */}
        <div className="order-1 lg:order-2">
          <div className="mb-4 flex items-center gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17365D] text-sm font-semibold text-white">
              02
            </span>

            <h4 className="text-lg font-semibold tracking-tight text-slate-900">
              진료수 관리
            </h4>
          </div>

          <p className="mb-3 text-[22px] font-semibold leading-[1.5] tracking-tight text-[#17365D]">
            보이지 않는 물 한 방울까지 관리합니다.
          </p>

          <p className="text-[15px] leading-7 text-slate-600">
            치료 과정에서 입안에 직접 닿는 진료수와 치과 수관을
            체계적으로 관리하여, 진료실의 위생 환경을 세심하게 유지합니다.
          </p>
        </div>
      </div>
    </div>
  );
}