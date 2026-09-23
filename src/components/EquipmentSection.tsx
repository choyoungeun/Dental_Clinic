"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const equipmentItems = [
  {
    group: 1 as const,

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
    group: 1 as const,

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
    group: 1 as const,

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
    group: 2 as const,

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
    group: 2 as const,

    category: "LED 수술등",
    eng: "LED SURGICAL LIGHT",

    headline:
      "세밀한 치료가 필요한 순간, 진료 부위를 더 선명하게 확인합니다.",

    desc:
      "여러 LED 광원으로 진료 중 발생하는 그림자를 줄여, 임플란트·구강외과 등 정밀한 시야가 필요한 진료에서 수술 부위를 선명하게 확인하는 데 도움을 주는 수술등입니다.",

    image: "/images/equipment/luvisS300.jpg",

    blend: true,
  },

  {
    group: 2 as const,

    category: "증류수 시스템",
    eng: "DISTILLED WATER SYSTEM",

    headline:
      "진료와 장비 관리에 사용하는 증류수를 안정적으로 공급·관리합니다.",

    desc:
      "진료와 장비 관리에 필요한 증류수를 안정적으로 공급·관리하여 깨끗한 진료 환경을 유지하는 데 활용합니다.",

    image: "/images/equipment/novacare.jpg",

    blend: true,
  },
];

const groupLabels: Record<1 | 2, string> = {
  1: "정확한 진단을 위한 장비",
  2: "진료를 돕는 장비",
};

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
        className="flex h-full w-full items-center justify-center rounded-panel border border-dashed border-line bg-fog px-4 text-center text-[14px] font-medium text-muted"
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
        blend ? "mix-blend-multiply" : "",
      ].join(" ")}
    />
  );
}

export default function EquipmentSection() {
  return (
    <section
      id="equipment"
      className="scroll-mt-24 overflow-hidden bg-white py-22 md:py-30 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-18">

            <p className="text-[14px] font-semibold tracking-[0.04em] text-mist md:text-[15px]">
              EQUIPMENT SYSTEM
            </p>

            <h2 className="mt-4 break-keep text-[28px] font-bold leading-[1.3] tracking-[-0.03em] text-navy md:text-[40px] lg:text-[48px]">
              더 세밀하게 보고, 
              <br />

              <span>
                더 신중하게 치료합니다.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[680px] break-keep text-[17px] leading-[1.7] text-body md:text-[18px]">
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
            const showGroupHeader =
              index === 0 || item.group !== equipmentItems[index - 1].group;

            return (
              <Fragment key={item.category}>
                {showGroupHeader && (
                  <Reveal variant="fade">
                    <p
                      className={[
                        index === 0 ? "" : "pt-12 md:pt-16",
                        "pb-3 text-[15px] font-semibold text-mist md:text-[16px]",
                      ].join(" ")}
                    >
                      {groupLabels[item.group]}
                    </p>
                  </Reveal>
                )}

                <article
                  className="
                    relative
                    border-t
                    border-line
                    py-14
                    md:py-18
                    lg:py-20
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

                    <Reveal variant="fade">

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
                            inset-0
                            rounded-panel
                            bg-fog
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

                        {/* 영문 분류 */}
                        <p className="text-[12px] font-semibold tracking-[0.06em] text-mist md:text-[13px]">
                          {item.eng}
                        </p>


                        {/* 장비 종류 - 가장 크게 */}
                        <h3
                          className="
                            mt-3
                            break-keep
                            text-[26px]
                            font-bold
                            leading-[1.3]
                            tracking-[-0.03em]
                            text-ink
                            md:text-[32px]
                          "
                        >
                          {item.category}
                        </h3>


                        {/* 핵심 효용 */}
                        <p
                          className="
                            mt-5
                            break-keep
                            text-[18px]
                            font-semibold
                            leading-[1.6]
                            tracking-[-0.02em]
                            text-navy
                            md:text-[20px]
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
                            leading-[1.7]
                            text-body
                            md:text-[17px]
                          "
                        >
                          {item.desc}
                        </p>


                      </div>

                    </Reveal>
                  </div>

                </div>
                </article>
              </Fragment>
            );
          })}

          <Reveal variant="soft">
            <p className="mx-auto mt-16 max-w-2xl break-keep border-t border-line pt-10 text-center text-[16px] leading-[1.7] text-body md:mt-20 md:pt-12 md:text-[17px]">
              장비는 진단과 치료계획에 필요한 정보를 확인하고,
              환자의 부담을 줄이는 데 도움을 주기 위한 도구입니다.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}