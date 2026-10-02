"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type WorkflowId =
  | "scan"
  | "diagnose"
  | "make";

type EquipmentImageProps = {
  src: string;
  alt: string;
  blend?: boolean;
  sizes: string;
};

const AUTO_INTERVAL = 4500;

const workflowItems = [
  {
    id: "scan" as const,
    step: "01",
    eng: "SCAN",
    category: "디지털 구강스캐너",
    headline:
      "치아와 잇몸의 형태를 3D 데이터로 기록합니다.",
    desc:
      "인상재를 이용한 기존 본뜨기의 불편함을 줄이고, 치아와 잇몸의 형태를 디지털 데이터로 기록합니다. 스캔한 3D 영상을 함께 보면서 현재 상태와 치료에 필요한 부분을 설명하는 데 활용합니다.",
    points: [
      "치아와 잇몸 형태를 3D 데이터로 기록",
      "보철·임플란트 치료계획에 활용",
      "스캔 영상을 함께 보며 현재 상태 확인",
    ],
    image:
      "/images/equipment/primescan.png",
    blend: true,
  },
  {
    id: "diagnose" as const,
    step: "02",
    eng: "DIAGNOSE",
    category: "치과용 3D CT",
    headline:
      "평면 사진으로 보기 어려운 구조를 3차원 영상으로 확인합니다.",
    desc:
      "잇몸뼈의 폭과 높이, 신경관과 상악동 등 임플란트와 사랑니 치료에 필요한 주변 구조를 3차원 영상으로 확인합니다. 촬영한 영상을 바탕으로 현재 상태와 치료계획을 설명합니다.",
    points: [
      "잇몸뼈의 폭과 높이 확인",
      "신경관·상악동 등 주변 구조 확인",
      "임플란트·사랑니 진단에 활용",
    ],
    image:
      "/images/equipment/hdxCTecoX.png",
    blend: false,
  },
  {
    id: "make" as const,
    step: "03",
    eng: "MAKE",
    category:
      "치과용 3D 프린팅 시스템",
    headline:
      "디지털 데이터를 바탕으로 필요한 치과 장치를 원내에서 제작합니다.",
    desc:
      "구강스캐너와 진단 과정에서 얻은 디지털 데이터를 바탕으로 임시치아와 임플란트 수술 가이드 등 치료에 필요한 장치를 치과 내 디지털 기공공간에서 제작하는 데 활용합니다.",
    points: [
      "임시치아 제작에 활용",
      "임플란트 수술 가이드 제작",
      "디지털 데이터 기반 원내 제작",
    ],
    image:
      "/images/equipment/print.jpg",
    blend: true,
  },
];

const supportItems = [
  {
    eng:
      "OPTICAL CARIES DETECTION",
    category:
      "광학식 치아우식 진단장치",
    short:
      "충치가 의심되는 부위를 빛으로 한 번 더 확인할 때 사용하는 보조 진단 장비입니다.",
    image:
      "/images/equipment/qraypen.png",
    blend: true,
  },
  {
    eng:
      "NEEDLE-FREE INJECTION",
    category:
      "바늘 없는 분사식 주입 시스템",
    short:
      "주삿바늘에 대한 부담이 큰 경우, 진료 부위와 상황에 따라 선택적으로 사용합니다.",
    image:
      "/images/equipment/comportin.png",
    blend: true,
  },
  {
    eng:
      "LED SURGICAL LIGHT",
    category: "LED 수술등",
    short:
      "임플란트와 구강외과 진료처럼 세밀한 시야가 필요한 치료에 사용합니다.",
    image:
      "/images/equipment/luvisS300.jpg",
    blend: true,
  },
  {
    eng:
      "DISTILLED WATER SYSTEM",
    category: "증류수 시스템",
    short:
      "진료와 장비 관리에 필요한 증류수를 공급하고 관리하는 시스템입니다.",
    image:
      "/images/equipment/novacare.jpg",
    blend: true,
  },
];

function EquipmentImage({
  src,
  alt,
  blend = false,
  sizes,
}: EquipmentImageProps) {
  const [failed, setFailed] =
    useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-[18px]
          border
          border-dashed
          border-line
          bg-fog
          px-6
          text-center
          text-[14px]
          font-medium
          text-muted
        "
      >
        장비 이미지 준비 중
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() =>
        setFailed(true)
      }
      className={[
        "object-contain",
        blend
          ? "mix-blend-multiply"
          : "",
      ].join(" ")}
    />
  );
}

function ScanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" />
      <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M7 12h10" />
    </svg>
  );
}

function DiagnoseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6"
      />

      <path d="m16 16 4 4" />
      <path d="M8.5 11h5" />
      <path d="M11 8.5v5" />
    </svg>
  );
}

function MakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 4h12v5H6z" />
      <path d="M8 9v4h8V9" />
      <path d="M7 17h10" />
      <path d="M9 13v4" />
      <path d="M15 13v4" />
      <path d="M6 20h12" />
    </svg>
  );
}

function WorkflowIcon({
  id,
}: {
  id: WorkflowId;
}) {
  if (id === "scan") {
    return <ScanIcon />;
  }

  if (id === "diagnose") {
    return (
      <DiagnoseIcon />
    );
  }

  return <MakeIcon />;
}

export default function EquipmentSection() {
  const [
    activeId,
    setActiveId,
  ] =
    useState<WorkflowId>(
      "scan",
    );

  const [
    paused,
    setPaused,
  ] = useState(false);

  const supportSliderRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const activeIndex =
    workflowItems.findIndex(
      (item) =>
        item.id ===
        activeId,
    );

  const safeIndex =
    activeIndex >= 0
      ? activeIndex
      : 0;

  const activeItem =
    workflowItems[
      safeIndex
    ];

  useEffect(() => {
    const mobile =
      window.matchMedia(
        "(max-width: 767px)",
      );  

    /*
      모바일에서는 자동 탭 전환을 사용하지 않음.
      사용자가 직접 눌렀을 때만 변경.
    */
    if (
      mobile.matches ||
      paused
    ) {
      return;
    } 

    const timer =
      window.setInterval(
        () => {
          setActiveId(
            (current) => {
              const index =
                workflowItems.findIndex(
                  (item) =>
                    item.id ===
                    current,
                );  

              const nextIndex =
                (index + 1) %
                workflowItems.length; 

              return workflowItems[
                nextIndex
              ].id;
            },
          );
        },
        AUTO_INTERVAL,
      );

  return () => {
    window.clearInterval(
      timer,
    );
  };
}, [paused]);

  const scrollSupport = (
    direction:
      | "prev"
      | "next",
  ) => {
    const slider =
      supportSliderRef.current;

    if (!slider) {
      return;
    }

    const card =
      slider.querySelector<HTMLElement>(
        "[data-equipment-card]",
      );

    const distance =
      (card?.offsetWidth ??
        slider.clientWidth *
          0.8) +
      20;
    const isMobile =
    window.matchMedia(
     "(max-width: 767px)",
    ).matches;

    slider.scrollBy({
      left:
        direction === "next"
          ? distance
          : -distance,
      behavior:
          isMobile
          ? "auto"
          : "smooth",

      
    });
  };

  return (
    <section
      id="equipment"
      className="
        scroll-mt-24
        overflow-hidden
        bg-white
        py-20
        md:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
          lg:px-12
        "
      >
        {/* HEADER */}

        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <p
            className="
              text-[13px]
              font-semibold
              tracking-[0.08em]
              text-mist
              md:text-[14px]
            "
          >
            DIGITAL EQUIPMENT
          </p>

          <h2
            className="
              mt-4
              break-keep
              text-[30px]
              font-bold
              leading-[1.3]
              tracking-[-0.035em]
              text-navy
              md:text-[42px]
              lg:text-[48px]
            "
          >
            진단에서 제작까지,
            <br />

            <span className="text-ink">
              디지털로 이어집니다.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]
              break-keep
              text-[16px]
              leading-[1.75]
              text-body
              md:text-[18px]
            "
          >
            구강스캔과
            3차원 영상을 통해
            필요한 정보를 확인하고,
            치료에 필요한 장치를
            디지털 시스템으로
            제작합니다.
          </p>
        </div>

        {/* AUTO TABS */}

        <div
          className="
            mx-auto
            mt-12
            max-w-5xl
            md:mt-16
          "
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
        >
          <div
            className="
              grid
              grid-cols-3
              overflow-hidden
              rounded-[20px]
              border
              border-line
              bg-white
            "
          >
            {workflowItems.map(
              (
                item,
                index,
              ) => {
                const active =
                  item.id ===
                  activeId;

                return (
                  <button
                    key={
                      item.id
                    }
                    type="button"
                    onClick={() =>
                      setActiveId(
                        item.id,
                      )
                    }
                    onFocus={() =>
                      setPaused(true)
                    }
                    onBlur={() =>
                      setPaused(false)
                    }
                    aria-pressed={
                      active
                    }
                    className={[
                      "relative flex min-h-[150px] flex-col items-center justify-center px-3 py-6 text-center transition-colors duration-300 md:min-h-[180px] md:px-6 md:py-8",

                      index > 0
                        ? "border-l border-line"
                        : "",

                      active
                        ? "bg-[#f3f7fb]"
                        : "bg-white hover:bg-[#fafbfd]",
                    ].join(
                      " ",
                    )}
                  >
                    <span
                      className={[
                        "text-[12px] font-bold tracking-[0.1em] md:text-[13px]",

                        active
                          ? "text-navy"
                          : "text-muted/60",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        item.step
                      }
                    </span>

                    <span
                      className={[
                        "mt-3 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 md:h-12 md:w-12",

                        active
                          ? "border-navy bg-navy text-white"
                          : "border-line bg-white text-muted",
                      ].join(
                        " ",
                      )}
                    >
                      <WorkflowIcon
                        id={
                          item.id
                        }
                      />
                    </span>

                    <span
                      className={[
                        "mt-4 text-[16px] font-black tracking-[0.06em] md:text-[19px] lg:text-[20px]",

                        active
                          ? "text-navy"
                          : "text-ink",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        item.eng
                      }
                    </span>

                    <span
                      className={[
                        "mt-2 break-keep text-[14px] font-semibold leading-[1.4] sm:text-[15px] md:text-[16px] lg:text-[17px]",

                        active
                          ? "text-navy"
                          : "text-body",
                      ].join(
                        " ",
                      )}
                    >
                      {
                        item.category
                      }
                    </span>

                    <span
                      className={[
                        "absolute bottom-0 left-0 h-[4px] bg-navy transition-[width] duration-300",

                        active
                          ? "w-full"
                          : "w-0",
                      ].join(
                        " ",
                      )}
                    />
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* MAIN SHOWROOM */}

        <div
          className="
            mt-8
            overflow-hidden
            rounded-[24px]
            border
            border-line
            bg-[#f7f8fa]
            md:mt-10
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1.08fr_0.92fr]
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                min-h-[330px]
                overflow-hidden
                border-b
                border-line
                bg-white
                md:min-h-[430px]
                lg:min-h-[520px]
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-6
                  rounded-full
                  bg-[radial-gradient(circle,rgba(0,56,118,0.06)_0%,rgba(0,56,118,0)_68%)]
                "
              />

              <div
                key={
                  activeItem.id
                }
                className="
                  absolute
                  inset-6
                  md:inset-10
                  lg:inset-12
                "
              >
                <EquipmentImage
                  src={
                    activeItem.image
                  }
                  alt={
                    activeItem.category
                  }
                  blend={
                    activeItem.blend
                  }
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-2
                  md:left-7
                  md:top-7
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-navy
                    text-[11px]
                    font-bold
                    text-white
                  "
                >
                  {
                    activeItem.step
                  }
                </span>

                <span
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.08em]
                    text-mist
                  "
                >
                  {
                    activeItem.eng
                  }
                </span>
              </div>
            </div>

            {/* TEXT */}

            <div
              key={`${activeItem.id}-text`}
              className="
                flex
                items-center
                px-6
                py-8
                md:px-10
                md:py-12
                lg:px-12
              "
            >
              <div className="max-w-[520px]">
                <p
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.07em]
                    text-mist
                    md:text-[13px]
                  "
                >
                  {
                    activeItem.eng
                  }
                </p>

                <h3
                  className="
                    mt-3
                    break-keep
                    text-[28px]
                    font-bold
                    leading-[1.3]
                    tracking-[-0.035em]
                    text-ink
                    md:text-[35px]
                  "
                >
                  {
                    activeItem.category
                  }
                </h3>

                <p
                  className="
                    mt-5
                    break-keep
                    text-[18px]
                    font-semibold
                    leading-[1.55]
                    tracking-[-0.02em]
                    text-navy
                    md:text-[21px]
                  "
                >
                  {
                    activeItem.headline
                  }
                </p>

                <p
                  className="
                    mt-5
                    break-keep
                    text-[15px]
                    leading-[1.75]
                    text-body
                    md:text-[17px]
                  "
                >
                  {
                    activeItem.desc
                  }
                </p>

                <ul
                  className="
                    mt-7
                    grid
                    gap-3
                    border-t
                    border-line
                    pt-6
                  "
                >
                  {activeItem.points.map(
                    (
                      point,
                    ) => (
                      <li
                        key={
                          point
                        }
                        className="
                          flex
                          items-start
                          gap-3
                          text-[14px]
                          leading-[1.55]
                          text-body
                          md:text-[15px]
                        "
                      >
                        <span
                          className="
                            mt-[7px]
                            h-[5px]
                            w-[5px]
                            shrink-0
                            rounded-full
                            bg-navy
                          "
                        />

                        <span>
                          {
                            point
                          }
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER EQUIPMENT */}

        <div
          className="
            mt-16
            md:mt-20
          "
        >
          <div
            className="
              mb-7
              flex
              items-end
              justify-between
              gap-5
              md:mb-9
            "
          >
            <div>
              <p
                className="
                  text-[12px]
                  font-semibold
                  tracking-[0.08em]
                  text-mist
                "
              >
                EQUIPMENT
              </p>

              <h3
                className="
                  mt-2
                  text-[26px]
                  font-bold
                  tracking-[-0.03em]
                  text-ink
                  md:text-[32px]
                "
              >
                진료 장비
              </h3>

            </div>

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-2
                sm:flex
              "
            >
              <button
                type="button"
                onClick={() =>
                  scrollSupport(
                    "prev",
                  )
                }
                aria-label="이전 장비 보기"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line
                  bg-white
                  text-ink
                  transition
                  hover:border-navy
                  hover:text-navy
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollSupport(
                    "next",
                  )
                }
                aria-label="다음 장비 보기"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line
                  bg-white
                  text-ink
                  transition
                  hover:border-navy
                  hover:text-navy
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={
              supportSliderRef
            }
            className="
              -mx-5
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-5
              pb-4
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              md:-mx-8
              md:gap-5
              md:px-8
              lg:-mx-12
              lg:px-12
              [&::-webkit-scrollbar]:hidden
            "
          >
            {supportItems.map(
              (
                item,
                index,
              ) => (
                <article
                  key={
                    item.category
                  }
                  data-equipment-card
                  className="
                    group
                    min-w-[84%]
                    snap-start
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-line
                    bg-white
                    sm:min-w-[58%]
                    lg:min-w-[42%]
                    xl:min-w-[38%]
                  "
                >
                  <div
                    className="
                      relative
                      h-[280px]
                      overflow-hidden
                      bg-[#f6f7f8]
                      sm:h-[310px]
                      md:h-[350px]
                      lg:h-[380px]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-7
                        transition-transform
                        duration-500
                        group-hover:scale-[1.025]
                        md:inset-9
                      "
                    >
                      <EquipmentImage
                        src={
                          item.image
                        }
                        alt={
                          item.category
                        }
                        blend={
                          item.blend
                        }
                        sizes="(max-width: 640px) 84vw, (max-width: 1024px) 58vw, 42vw"
                      />
                    </div>

                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        text-[11px]
                        font-semibold
                        tracking-[0.08em]
                        text-muted
                      "
                    >
                      {String(
                        index +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  <div
                    className="
                      px-5
                      pb-6
                      pt-5
                      md:px-7
                      md:pb-7
                      md:pt-6
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        tracking-[0.07em]
                        text-mist
                      "
                    >
                      {
                        item.eng
                      }
                    </p>

                    <h4
                      className="
                        mt-2
                        break-keep
                        text-[21px]
                        font-bold
                        leading-[1.4]
                        tracking-[-0.03em]
                        text-ink
                        md:text-[24px]
                      "
                    >
                      {
                        item.category
                      }
                    </h4>

                    <p
                      className="
                        mt-3
                        break-keep
                        text-[15px]
                        leading-[1.7]
                        text-body
                        md:text-[16px]
                      "
                    >
                      {
                        item.short
                      }
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              text-[12px]
              font-medium
              text-muted
              sm:hidden
            "
          >
            <span>
              좌우로 넘겨서 확인하세요
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m15 8 4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}