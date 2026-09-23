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
    title: "감염관리 원칙",
    desc: "대표원장이 대학병원 및 종합병원에서 진료하며 경험한 감염관리 원칙을 바탕으로 진료 환경을 관리합니다.",
  },
];

const comfortCareItems = [
  {
    title: "가글마취",
    desc: "스케일링 등 비교적 간단한 처치 전, 구강 점막의 예민함을 줄이기 위해 적용합니다.",
    image: "/images/gaggle.png",
  },
  {
    title: "도포마취",
    desc: "주사 전 점막 표면에 먼저 적용하여 바늘이 들어갈 때의 부담을 줄이는 데 도움을 줍니다.",
    image: "/images/dopopng.png",
  },
  {
    title: "무통마취기",
    desc: "마취액을 천천히 주입하여 압력으로 인한 불편감을 줄이는 방식입니다. 주사바늘에 대한 느낌은 있을 수 있습니다.",
    image: "/images/nopain.png",
  },
  {
    title: "무침마취기",
    desc: "바늘 없이 약액을 분사하는 방식으로, 주사에 대한 두려움이 큰 환자에게 진료 상황에 따라 활용합니다.",
    image: "/images/noneedle.png",
  },
];

export default function CleanSafetySystem() {
  return (
    <section
      id="safety"
      className="scroll-mt-24 overflow-hidden bg-fog py-22 md:py-30 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
            <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
              CLEAN & SAFETY SYSTEM
            </p>

            <h2 className="mt-4 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]">
              진료의 기본은
              <br />
              <span>
                보이지 않는 곳에서부터
              </span>{" "}
              시작됩니다.
            </h2>

            <p className="mx-auto mt-6 max-w-[680px] break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
              환자분의 눈에 잘 보이지 않는 기구 관리와 진료수,
              일회용품의 사용까지 진료의 한 과정이라고 생각합니다.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            STERILIZATION
        ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <Reveal variant="soft">
            <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_15px_45px_rgba(7,27,51,0.06)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#edf1f4]">
                <Image
                  src="/images/equipment/sterilizaition.png"
                  alt="수원세브란스치과 멸균 및 감염관리"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17365D] text-[14px] font-bold text-white">
                    01
                  </span>

                  <h3 className="text-[22px] font-bold tracking-[-0.025em] text-[#071b33]">
                    진료기구 개별 포장·멸균
                  </h3>
                </div>

                <p className="mt-6 break-keep text-[20px] font-semibold leading-[1.65] text-[#17365D] md:text-[22px]">
                  환자 한 분을 위한 기구는,
                  <br />
                  한 분씩 준비합니다.
                </p>

                <p className="mt-4 break-keep text-[15px] leading-[1.9] text-[#657587] md:text-[16px]">
                  진료에 사용하는 기구는 세척 및 멸균 과정을 거친 후
                  개별 포장 상태로 보관하고, 진료 시 사용할 기구를 개봉하는
                  것을 원칙으로 합니다.
                </p>
              </div>
            </article>
          </Reveal>

          {/* =====================================================
              NOVACARE
          ===================================================== */}
          <Reveal variant="soft" delay={100}>
            <NovacareCard />
          </Reveal>
        </div>

        {/* =====================================================
            OTHER INFECTION ITEMS
        ===================================================== */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {infectionCareItems
            .filter((item) => item.number !== "01")
            .map((item, index) => (
              <Reveal key={item.number} delay={index * 90}>
                <article className="h-full rounded-[24px] border border-[#dde5ec] bg-white px-6 py-7 md:px-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17365D] text-[13px] font-bold text-white">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="break-keep text-[19px] font-bold tracking-[-0.025em] text-[#071b33]">
                        {item.title}
                      </h3>

                      <p className="mt-3 break-keep text-[15px] leading-[1.8] text-[#657587]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>

        {/* =====================================================
            COMFORT CARE
        ===================================================== */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
                COMFORT CARE
              </p>

              <h2 className="mt-4 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]">
                 <span>치과가 무서운 분들을 위한 배려</span>도
                <br className="hidden md:block" />
                진료의 한 부분이라고 생각합니다.
              </h2>

              <p className="mt-6 max-w-[680px] break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
                통증과 주사에 대한 부담을 줄이기 위해 진료 상황에 따라
                여러 방식의 마취 방법을 선택적으로 활용합니다.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comfortCareItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full overflow-hidden rounded-[24px] border border-[#dde5ec] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(7,27,51,0.07)]">
                  <div className="relative aspect-square w-full overflow-hidden bg-[#f2f6fa]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                      className="object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#17365D] px-4 py-2 text-[15px] font-bold text-white">
                      {item.title}
                    </span>

                    <p className="mt-5 break-keep text-[15px] leading-[1.85] text-[#657587]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NovacareCard() {
  return (
    <article className="h-full overflow-hidden rounded-[28px] bg-white shadow-[0_15px_45px_rgba(7,27,51,0.06)]">
      <div className="grid h-full items-center md:grid-cols-[0.9fr_1.1fr]">
        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#fafafa] px-5 py-8 md:min-h-[100%] md:px-7">
          <div className="relative h-[310px] w-full max-w-[290px] md:h-[390px] md:max-w-[330px]">
            <Image
              src="/images/equipment/novacare.jpg"
              alt="NOVACARE 치과 진료수 관리 시스템"
              fill
              sizes="(max-width: 768px) 90vw, 330px"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* =====================================================
            TEXT
        ===================================================== */}
        <div className="px-7 pb-9 pt-2 md:px-9 md:py-10">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17365D] text-[14px] font-bold text-white">
              02
            </span>

            <p className="text-[18px] font-bold text-[#071b33]">
              진료수 관리
            </p>
          </div>

          <p className="mt-7 break-keep text-[23px] font-semibold leading-[1.55] tracking-[-0.03em] text-[#17365D] md:text-[27px]">
            보이지 않는 물 한 방울까지 관리합니다.
          </p>

          <p className="mt-5 break-keep text-[15px] leading-[1.9] text-[#657587] md:text-[16px]">
            치료 과정에서 입안에 직접 닿는 진료수와 치과 수관을
            체계적으로 관리하여 진료실의 위생 환경을 세심하게
            유지합니다.
          </p>

          <div className="mt-7 h-px w-full bg-[#e0e6ec]" />

          <p className="mt-5 text-[12px] font-semibold tracking-[0.06em] text-mist">
            NOVACARE WATER MANAGEMENT SYSTEM
          </p>
        </div>
      </div>
    </article>
  );
}