import Image from "next/image";
import Reveal from "@/components/Reveal";

const equipmentItems = [
  {
    eng: "DIGITAL INTRAORAL SCANNER",
    name: "Primescan",
    sub: "디지털 구강스캐너",
    desc: "불편한 인상재 대신 구강을 디지털로 스캔합니다. 치아와 잇몸을 3D 데이터로 정밀하게 기록하여 보철 및 임플란트 진료 계획에 활용합니다.",
    image: "/images/equipment/primescan.png",
  },
  {
    eng: "3D DENTAL CT",
    name: "HDX WILL eco-x",
    sub: "치과용 3D CT",
    desc: "필요한 부위를 3차원 영상으로 확인합니다. 잇몸뼈와 신경관, 상악동 등 해부학적 구조를 입체적으로 파악해 진단과 치료계획 수립에 도움을 줍니다.",
    image: "/images/equipment/hdx-ct.png",
  },
  {
    eng: "NEEDLE-FREE INJECTION SYSTEM",
    name: "Comfort-in",
    sub: "바늘 없는 분사식 주입 시스템",
    desc: "주삿바늘 대신 미세한 약액을 빠르게 분사하는 방식입니다. 주사에 대한 부담이 큰 환자에게 진료 상황에 따라 선택적으로 활용합니다.",
    image: "/images/equipment/comfort-in.png",
  },
  {
    eng: "OPTICAL CARIES DETECTION",
    name: "Qraypen C",
    sub: "광학식 치아우식 진단장치",
    desc: "특정 파장의 빛과 형광 반응을 이용하여 치아 상태를 영상으로 확인하는 진단장비입니다. 육안으로 확인하기 어려운 부분을 한 번 더 살펴보는 데 활용합니다.",
    image: "/images/equipment/qraypen.png",
  },
  {
    eng: "LED SURGICAL LIGHT",
    name: "LUVIS S300",
    sub: "LED 수술등",
    desc: "정밀한 진료를 위한 밝고 안정적인 시야를 확보합니다. 그림자를 줄이고 수술 부위를 선명하게 확인할 수 있도록 도와 세밀한 진료에 활용합니다.",
    image: "/images/equipment/luvis-s300.png",
  },
];

export default function EquipmentSection() {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#17365D]">
              Equipment
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              진단과 치료를 위한 장비도
              <span className="text-[#2f89fc]">
                <br className="hidden sm:block" />
                필요한 기준에 맞춰 준비합니다.
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 md:text-base">
              장비는 많아 보이는 것보다,
              어떤 상황에서 어떻게 활용되는지가 더 중요하다고 생각합니다.
              수원세브란스치과는 진단과 설명, 치료계획 수립에 도움이 되는 장비를
              실제 진료 흐름에 맞춰 사용합니다.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {equipmentItems.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
              <Reveal key={item.name} delay={index * 70}>
                <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#f8fafc] shadow-sm">
                  <div
                    className={[
                      "grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-10",
                      reversed ? "lg:grid-cols-[1.05fr_0.95fr]" : "",
                    ].join(" ")}
                  >
                    {/* 이미지 */}
                    <div className={reversed ? "lg:order-2" : ""}>
                      <div className="rounded-[28px] bg-white px-6 py-8 shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
                        <div className="relative mx-auto h-[280px] w-full max-w-[360px] md:h-[360px] md:max-w-[420px]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain drop-shadow-[0_18px_30px_rgba(15,23,42,0.12)]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 텍스트 */}
                    <div className={reversed ? "lg:order-1" : ""}>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2f89fc]">
                        {item.eng}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-[#17365D] md:text-xl">
                        {item.sub}
                      </p>

                      <p className="mt-5 text-[15px] leading-8 text-slate-600 md:text-[16px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}