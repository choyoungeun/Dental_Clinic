"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const equipmentItems = [
  {
    category: "디지털 구강스캐너",
    eng: "DIGITAL INTRAORAL SCANNER",

    headline:
      "불편한 본뜨기 대신, 치아와 잇몸을 3D 데이터로 정밀하게 기록합니다.",

    desc:
      "치아와 잇몸의 형태를 3D 데이터로 기록하는 디지털 구강스캐너입니다. 인상재를 이용한 기존 본뜨기의 불편함을 줄이면서, 보철·임플란트 치료 계획에 필요한 형태 정보를 확인합니다. 스캔한 3D 영상을 함께 보면서 현재 상태와 치료 계획을 설명해 드립니다.",

    image: "/images/equipment/primescan.png",

    blend: true,
  },

  {
    category: "치과용 3D CT",
    eng: "3D DENTAL CT",

    headline:
      "평면 영상으로는 확인하기 어려운 부위를, 3차원 영상으로 살펴봅니다.",

    desc:
      "잇몸뼈의 폭과 높이, 신경관과 상악동 등 임플란트·사랑니 진단에 필요한 주변 구조를 3차원 영상으로 확인합니다. 필요한 부위와 상황에 따라 저선량 촬영 모드를 선택적으로 활용합니다. 촬영한 3차원 영상을 함께 보면서 현재 상태와 예상되는 치료 순서를 설명해 드립니다.",

    image: "/images/equipment/hdxCTecoX.png",

    blend: false,
  },

  {
    category: "바늘 없는 분사식 주입 시스템",
    eng: "NEEDLE-FREE INJECTION SYSTEM",

    headline:
      "주사에 대한 부담이 큰 분을 위한 또 하나의 선택입니다.",

    desc:
      "주삿바늘 대신 약액을 빠르게 분사해 마취하는 장치입니다. 주사에 대한 두려움이 큰 환자를 위한 선택지 중 하나로, 진료 부위와 필요한 마취 범위를 확인한 뒤 사용 가능 여부를 안내해 드립니다.",

    image: "/images/equipment/comportin.png",

    blend: true,
  },

  {
    category: "광학식 치아우식 진단장치",
    eng: "OPTICAL CARIES DETECTION",

    headline:
      "눈으로만 확인하기 어려운 부분을 빛을 이용해 한 번 더 살펴봅니다.",

    desc:
      "특정 파장의 빛에 대한 치아의 형광 반응을 영상으로 확인하는 장비입니다. 육안 검사만으로 판단하기 어려운 초기 우식 의심 부위를 함께 확인하는 보조 진단에 활용하며, 촬영한 영상을 보여드리며 의심 부위와 치료 필요성을 설명해 드립니다.",

    image: "/images/equipment/qraypen.png",

    blend: true,
  },

  {
    category: "LED 수술등",
    eng: "LED SURGICAL LIGHT",

    headline:
      "세밀한 치료가 필요한 순간, 진료 부위를 더 선명하게 확인합니다.",

    desc:
      "여러 LED 광원으로 진료 중 발생하는 그림자를 줄여, 임플란트·구강외과 등 정밀한 시야가 필요한 진료에서 수술 부위를 선명하게 확인하는 데 도움을 주는 수술등입니다.",

    image: "/images/equipment/luvisS300.jpg",

    blend: true,
  },
];

function EquipmentImage({
  src,
  alt,
  blend,
}: {
  src: string;
  alt: string;
  blend: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#c9d4de] bg-[#f2f6fa] px-4 text-center text-[13px] font-medium text-[#8996a4]"
      >
        이미지를 불러오지 못했습니다
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 1024px) 90vw, 50vw"
      onError={() => setFailed(true)}
      className={[
        "object-contain",
        "drop-shadow-[0_20px_35px_rgba(7,27,51,0.13)]",
        blend ? "mix-blend-multiply" : "",
      ].join(" ")}
    />
  );
}

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
              더 세밀하게 보고, 
              <br />

              <span className="text-[#2f89fc]">
                더 신중하게 치료합니다.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl break-keep text-[16px] leading-[1.9] text-[#68798a] md:text-[17px]">
              정밀한 진단을 돕는 디지털 장비와
              환자의 진료 부담까지 고려한 장비를 진료 상황에 맞게 활용합니다.

              필요한 정보를 더 세밀하게 확인하고,
              그 근거를 바탕으로 치료계획을 설명합니다.
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
                key={item.category}
                className="
                  relative
                  border-t
                  border-[#e1e7ed]
                  py-16
                  md:py-20
                  lg:py-24
                "
              >
                <div
                  className="
                    grid
                    items-center
                    gap-10
                    lg:grid-cols-2
                    lg:gap-20
                  "
                >

                  {/* =====================================================
                      IMAGE
                  ===================================================== */}
                  <div className={reversed ? "lg:order-2" : ""}>

                    <Reveal
                      variant={reversed ? "fade" : "soft"}
                      duration={950}
                    >

                      <div
                        className="
                          relative
                          flex
                          min-h-[320px]
                          items-center
                          justify-center
                          md:min-h-[420px]
                          lg:min-h-[500px]
                        "
                      >

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


                        {/* 실제 장비 이미지 */}
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

                          <EquipmentImage
                            src={item.image}
                            alt={item.category}
                            blend={item.blend}
                          />

                        </div>
                      </div>

                    </Reveal>
                  </div>


                  {/* =====================================================
                      TEXT
                  ===================================================== */}
                  <div className={reversed ? "lg:order-1" : ""}>

                    <Reveal
                      variant="soft"
                      delay={120}
                    >

                      <div className="max-w-xl">

                        {/* 번호 */}
                        <div className="flex items-center gap-4">

                          <span className="text-[13px] font-bold tracking-[0.18em] text-[#2f89fc]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px w-10 bg-[#2f89fc]/40" />

                          <p className="text-[11px] font-bold tracking-[0.16em] text-[#8996a4] md:text-[12px]">
                            {item.eng}
                          </p>

                        </div>


                        {/* 장비 종류 - 가장 크게 */}
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


                        {/* 핵심 효용 */}
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


                        {/* 설명 */}
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


                        {/* 장식선 */}
                        <div className="mt-8 flex items-center gap-3">

                          <span className="h-px w-14 bg-[#17365D]/25" />

                          <span className="h-[5px] w-[5px] rounded-full bg-[#2f89fc]" />

                        </div>

                      </div>

                    </Reveal>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}