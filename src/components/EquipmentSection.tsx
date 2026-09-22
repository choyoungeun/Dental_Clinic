import Image from "next/image";
import Reveal from "@/components/Reveal";

const equipmentItems = [
  {
    category: "디지털 구강스캐너",
    eng: "DIGITAL INTRAORAL SCANNER",

    name: "Primescan",

    headline:
      "불편한 본뜨기 대신, 구강을 디지털로 스캔합니다.",

    desc:
      "치아와 잇몸의 형태를 3D 데이터로 기록하는 디지털 구강스캐너입니다. 인상재를 이용한 기존 본뜨기의 불편함을 줄이고, 보철 및 임플란트 진료에 활용합니다.",

    image: "/images/equipment/primescan.PNG",

    blend: true,
  },

  {
    category: "치과용 3D CT",
    eng: "3D DENTAL CT",

    name: "HDX WILL eco-x",

    headline:
      "치아와 잇몸뼈, 주변 구조를 3차원으로 확인합니다.",

    desc:
      "평면 영상만으로 확인하기 어려운 잇몸뼈의 폭과 높이, 신경관과 상악동 등 주변 구조를 3차원 영상으로 확인합니다. 임플란트와 사랑니 등 진단과 치료계획 수립에 활용합니다.",

    image: "/images/equipment/hdxCTecoX.png",

    blend: false,
  },

  {
    category: "바늘 없는 분사식 주입 시스템",
    eng: "NEEDLE-FREE INJECTION SYSTEM",

    name: "Comfort-in",

    headline:
      "주사에 대한 부담이 큰 분을 위한 또 하나의 선택입니다.",

    desc:
      "주삿바늘 대신 약액을 빠르게 분사하는 방식의 장치입니다. 주사에 대한 두려움이 큰 환자에게 진료 부위와 상황에 따라 선택적으로 활용합니다.",

    image: "/images/equipment/comportin.png",

    blend: true,
  },

  {
    category: "광학식 치아우식 진단장치",
    eng: "OPTICAL CARIES DETECTION",

    name: "Qraypen C",

    headline:
      "눈으로만 확인하기 어려운 부분을 빛을 이용해 한 번 더 살펴봅니다.",

    desc:
      "특정 파장의 빛과 형광 반응을 이용하여 치아 상태를 영상으로 확인하는 장비입니다. 육안검사와 함께 우식이 의심되는 부위를 확인하고 환자에게 설명하는 데 활용합니다.",

    image: "/images/equipment/qraypen.png",

    blend: true,
  },

  {
    category: "LED 수술등",
    eng: "LED SURGICAL LIGHT",

    name: "LUVIS S300",

    headline:
      "세밀한 치료가 필요한 순간, 진료 부위를 더 선명하게 확인합니다.",

    desc:
      "여러 LED 광원을 이용해 진료 중 발생하는 그림자를 줄이고 수술 부위를 확인하는 데 도움을 주는 수술등입니다. 임플란트 및 구강외과 등 세밀한 시야가 필요한 진료에 활용합니다.",

    image: "/images/equipment/luvisS300.jpg",

    blend: true,
  },
];

export default function EquipmentSection() {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mx-auto mb-20 max-w-4xl text-center md:mb-28">
            <p className="text-[12px] font-bold tracking-[0.26em] text-[#2f89fc]">
              EQUIPMENT SYSTEM
            </p>

            <h2 className="mt-5 break-keep text-[31px] font-semibold leading-[1.4] tracking-[-0.045em] text-[#071b33] md:text-[45px]">
              진료에 필요한 순간,
              <br />
              <span className="text-[#2f89fc]">
                필요한 장비를 활용합니다.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl break-keep text-[16px] leading-[1.9] text-[#68798a] md:text-[17px]">
              장비의 이름보다 중요한 것은 환자분의 상태를 확인하고,
              치료계획을 세우며 이해하기 쉽게 설명하는 데
              어떻게 활용되는가라고 생각합니다.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            EQUIPMENT LIST
        ===================================================== */}
        <div>
          {equipmentItems.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={item.name}
                className="relative border-t border-[#e1e7ed] py-16 md:py-20 lg:py-24"
              >
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                  {/* =====================================================
                      IMAGE
                  ===================================================== */}
                  <div className={reversed ? "lg:order-2" : ""}>
                    <Reveal
                      variant={reversed ? "fade" : "soft"}
                      duration={950}
                    >
                      <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[420px] lg:min-h-[500px]">
                        {/* 배경 장식 */}
                        <div
                          aria-hidden="true"
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            h-[260px]
                            w-[260px]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-[#f2f6fa]
                            md:h-[350px]
                            md:w-[350px]
                            lg:h-[410px]
                            lg:w-[410px]
                          "
                        />

                        {/* 실제 장비 */}
                        <div
                          className="
                            relative
                            h-[300px]
                            w-full
                            max-w-[420px]
                            md:h-[400px]
                            md:max-w-[500px]
                            lg:h-[470px]
                            lg:max-w-[560px]
                          "
                        >
                          <Image
                            src={item.image}
                            alt={`${item.category} ${item.name}`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 50vw"
                            className={[
                              "object-contain",
                              "drop-shadow-[0_20px_35px_rgba(7,27,51,0.13)]",
                              item.blend ? "mix-blend-multiply" : "",
                            ].join(" ")}
                          />
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* =====================================================
                      TEXT
                  ===================================================== */}
                  <div className={reversed ? "lg:order-1" : ""}>
                    <Reveal variant="soft" delay={120}>
                      <div className="max-w-xl">
                        {/* 번호 + 영문 분류 */}
                        <div className="flex items-center gap-4">
                          <span className="text-[13px] font-bold tracking-[0.18em] text-[#2f89fc]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px w-10 bg-[#2f89fc]/40" />

                          <p className="text-[11px] font-bold tracking-[0.16em] text-[#8996a4] md:text-[12px]">
                            {item.eng}
                          </p>
                        </div>

                        {/* 가장 중요한 것: 장비의 종류 */}
                        <h3
                          className="
                            mt-5
                            break-keep
                            text-[31px]
                            font-bold
                            leading-[1.3]
                            tracking-[-0.045em]
                            text-[#071b33]
                            md:text-[40px]
                            lg:text-[44px]
                          "
                        >
                          {item.category}
                        </h3>

                        {/* 환자가 느끼는 의미 */}
                        <p
                          className="
                            mt-6
                            break-keep
                            text-[20px]
                            font-semibold
                            leading-[1.65]
                            tracking-[-0.025em]
                            text-[#2f89fc]
                            md:text-[23px]
                          "
                        >
                          {item.headline}
                        </p>

                        {/* 상세 설명 */}
                        <p
                          className="
                            mt-5
                            max-w-[560px]
                            break-keep
                            text-[16px]
                            leading-[1.9]
                            text-[#657587]
                            md:text-[17px]
                          "
                        >
                          {item.desc}
                        </p>

                        {/* 제품명은 마지막에 작게 */}
                        <div className="mt-7 flex items-center gap-3 border-t border-[#e1e7ed] pt-5">
                          <span className="text-[11px] font-bold tracking-[0.14em] text-[#9aa6b2]">
                            EQUIPMENT
                          </span>

                          <span className="h-3 w-px bg-[#d2d9e0]" />

                          <span className="text-[14px] font-semibold text-[#526475]">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}
        <Reveal>
          <div className="border-t border-[#e1e7ed] pt-12 text-center md:pt-16">
            <p className="mx-auto max-w-4xl break-keep text-[19px] font-medium leading-[1.9] tracking-[-0.02em] text-[#637486] md:text-[22px]">
              중요한 것은 장비의 이름이 아니라,
              <br className="hidden md:block" />
              <span className="font-semibold text-[#17365D]">
                환자의 상태를 확인하고 필요한 치료를 판단하는 과정에
                적절하게 활용하는 것
              </span>
              이라고 생각합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}