"use client";

import {
  useState,
} from "react";

import dynamic from "next/dynamic";

import LocationGuideMap from "./LocationGuideMap";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

/* =========================================================
   NAVER MAP
========================================================= */

const NaverMap = dynamic(
  () => import("./NaverMap"),
  {
    ssr: false,

    loading: () => (
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-fog
          text-[14px]
          text-muted
        "
      >
        지도를 불러오는 중입니다...
      </div>
    ),
  },
);

/* =========================================================
   TYPES
========================================================= */

type DirectionTab =
  | "bus"
  | "car";

/* =========================================================
   BUS DATA
========================================================= */

const busRouteGroups = [
  {
    label: "일반버스",

    tone:
      "bg-[#eaf6e7] text-[#33812c] border-[#cae7c5]",

    routes:
      "7-2 · 25 · 27 · 62-1 · 64 · 99 · 99-2 · 300-1 · 310 · 777",
  },

  {
    label: "좌석버스",

    tone:
      "bg-[#edf3ff] text-[#245ebc] border-[#ccdafa]",

    routes:
      "300 · 900",
  },

  {
    label: "직행버스",

    tone:
      "bg-[#fff0ef] text-[#cf443b] border-[#f4ceca]",

    routes:
      "2007 · 3000 · 7770 · 8401 · 8409 · 9100",
  },

  {
    label: "공항버스",

    tone:
      "bg-[#eaf7fc] text-[#1681ad] border-[#c8e7f2]",

    routes:
      "4000 · N4000 · 4300",
  },
];

/* =========================================================
   ICONS
========================================================= */

const ClockIcon = () => (
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
    <circle
      cx="12"
      cy="12"
      r="9"
    />

    <path d="M12 7v5l3 2" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.55"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="
      h-9
      w-9
      md:h-10
      md:w-10
    "
    aria-hidden="true"
  >
    <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />

    <path d="M15.5 4.5v3" />

    <path d="M14 6h3" />
  </svg>
);

const BusIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="5"
      y="3"
      width="14"
      height="17"
      rx="3"
    />

    <path d="M7 7h10M7 13h10M8 20v2m8-2v2" />

    <circle
      cx="8.5"
      cy="16.5"
      r="0.7"
      fill="currentColor"
    />

    <circle
      cx="15.5"
      cy="16.5"
      r="0.7"
      fill="currentColor"
    />
  </svg>
);

const CarIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 17h14l1-6-2-5H6l-2 5 1 6Z" />

    <path d="M7 17v2m10-2v2M4 11h16" />

    <circle
      cx="8"
      cy="14"
      r="1"
    />

    <circle
      cx="16"
      cy="14"
      r="1"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

    <circle
      cx="12"
      cy="10"
      r="2.5"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle
      cx="11"
      cy="11"
      r="6"
    />

    <path d="m16 16 4 4" />
  </svg>
);

/* =========================================================
   COMPONENT
========================================================= */

const Contact = () => {
  const [
    directionTab,
    setDirectionTab,
  ] =
    useState<DirectionTab>(
      "bus",
    );

  const naverMapUrl =
    "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969";

  const kakaoMapUrl =
    "https://map.kakao.com/?q=%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969";

  return (
    <section
      id="location"
      className="
        scroll-mt-24
        overflow-hidden
        bg-fog
        pb-24
        pt-22
        md:pb-30
        md:pt-30
        lg:pb-36
        lg:pt-36
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
          lg:px-12
        "
      >
        <Reveal variant="fade">
          <p
            className="
              text-[14px]
              font-semibold
              tracking-[0.06em]
              text-mist
              md:text-[15px]
            "
          >
            LOCATION & HOURS
          </p>
        </Reveal>

        <TextReveal
          delay={120}
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
          lines={[
            "치과 오시는 길",
          ]}
        />

        <p
          className="
            mt-5
            break-keep
            text-[16px]
            leading-[1.7]
            text-muted
            md:text-[18px]
          "
        >
          경기 수원시 장안구 경수대로 969

          <span className="mx-2 text-line">
            ·
          </span>

          한국메디컬빌딩 2층
        </p>
      </div>

      {/* =====================================================
          EVENING CLINIC
      ===================================================== */}

      <div
        className="
          mt-12
          w-full
          bg-[#001d4a]
          md:mt-16
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            px-5
            py-8
            md:px-8
            md:py-10
            lg:flex-row
            lg:items-center
            lg:gap-12
            lg:px-12
            lg:py-11
          "
        >
          <div
            className="
              flex
              shrink-0
              items-center
              gap-5
              lg:min-w-[455px]
            "
          >
            <div
              className="
                flex
                h-[70px]
                w-[70px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/10
                text-white
                md:h-[78px]
                md:w-[78px]
              "
            >
              <MoonIcon />
            </div>

            <div>
              <p
                className="
                  text-[14px]
                  font-semibold
                  tracking-[0.12em]
                  text-white/55
                  md:text-[15px]
                "
              >
                EVENING CLINIC
              </p>

              <h3
                className="
                  mt-1.5
                  break-keep
                  text-[28px]
                  font-bold
                  leading-[1.25]
                  tracking-[-0.04em]
                  text-[#ffd84a]
                  md:text-[34px]
                  lg:text-[36px]
                "
              >
                월 · 수요일 야간진료
              </h3>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="
              my-7
              h-px
              w-full
              bg-white/15
              lg:my-0
              lg:h-[82px]
              lg:w-px
              lg:shrink-0
            "
          />

          <div className="flex-1">
            <p
              className="
                break-keep
                text-[20px]
                font-medium
                leading-[1.65]
                tracking-[-0.03em]
                text-white/90
                md:text-[23px]
                lg:text-[25px]
              "
            >
              바쁘신 직장인과 학생분들도
              여유 있게 내원하실 수 있도록
              <br className="hidden xl:block" />

              <strong
                className="
                  ml-1
                  font-bold
                  text-[#ffd84a]
                "
              >
                월요일과 수요일은 오후 8시 30분까지
              </strong>

              {" "}진료합니다.
            </p>

            <p
              className="
                mt-2
                break-keep
                text-[15px]
                leading-[1.7]
                text-white/55
                md:text-[16px]
              "
            >
              평일 낮 시간 방문이 어려우신 분들은
              야간진료 시간을 이용해 주세요.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          GUIDE IMAGE
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          pt-10
          md:px-8
          md:pt-12
          lg:px-12
        "
      >
        <Reveal variant="soft">
          <LocationGuideMap />
        </Reveal>
      </div>

      {/* =====================================================
          NAVER MAP + HOURS
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-8
          max-w-7xl
          px-5
          md:px-8
          lg:px-12
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[20px]
            bg-white
            shadow-[0_14px_40px_rgba(11,31,58,0.07)]
            lg:grid
            lg:h-[540px]
            lg:grid-cols-[1.5fr_0.7fr]
          "
        >
          {/* MAP */}

          <Reveal
            variant="fade"
            className="
              relative
              h-[360px]
              bg-fog
              md:h-[430px]
              lg:h-full
            "
          >
            <NaverMap />

            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute
                bottom-5
                left-5
                z-20
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-[#03C75A]
                px-6
                text-[15px]
                font-bold
                text-white
                shadow-float
                transition
                hover:brightness-95
              "
            >
              네이버 길찾기
            </a>
          </Reveal>

          {/* HOURS */}

          <Reveal
            variant="fade"
            className="
              flex
              h-full
              flex-col
              bg-[#0b1f3a]
              px-6
              py-7
              text-white
              md:px-8
              md:py-8
            "
          >
            <div>
              <p
                className="
                  text-[12px]
                  font-semibold
                  tracking-[0.08em]
                  text-sky
                "
              >
                ADDRESS
              </p>

              <h3
                className="
                  mt-2
                  text-[28px]
                  font-bold
                  tracking-[-0.035em]
                  md:text-[30px]
                "
              >
                수원세브란스치과
              </h3>

              <p
                className="
                  mt-3
                  text-[18px]
                  leading-[1.6]
                  text-white/70
                  md:text-[19px]
                "
              >
                경기 수원시 장안구
                <br />
                경수대로 969
              </p>

              <p
                className="
                  mt-1
                  text-[17px]
                  font-semibold
                  text-white
                  md:text-[18px]
                "
              >
                한국메디컬빌딩 2층
              </p>
            </div>

            <div
              className="
                mt-6
                border-t
                border-white/15
                pt-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sky
                "
              >
                <ClockIcon />

                <p
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.08em]
                  "
                >
                  OPENING HOURS
                </p>
              </div>

              <div
                className="
                  mt-4
                  space-y-3
                  text-[17px]
                  md:text-[18px]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="font-semibold text-sky">
                      월 · 수
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#176fc2]
                        px-2.5
                        py-1
                        text-[11px]
                        font-bold
                      "
                    >
                      야간진료
                    </span>
                  </div>

                  <strong className="text-sky">
                    09:30 - 20:30
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/70">
                    화 · 목 · 금
                  </span>

                  <strong>
                    09:30 - 18:30
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/70">
                    토요일
                  </span>

                  <strong>
                    09:30 - 14:00
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/70">
                    점심시간
                  </span>

                  <strong>
                    13:00 - 14:00
                  </strong>
                </div>
              </div>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-[1.7]
                  text-white/50
                "
              >
                * 토요일은 점심시간 없이 진료합니다.
                <br />
                * 일요일 · 공휴일 휴진
              </p>
            </div>

            
          </Reveal>
        </div>

        {/* =====================================================
            TRANSPORT TABS
        ===================================================== */}

        <div
          className="
            mt-8
            overflow-hidden
            rounded-[24px]
            border
            border-line
            bg-white
            shadow-[0_12px_36px_rgba(11,31,58,0.05)]
          "
        >
          {/* TAB BUTTONS */}

          <div
            className="
              grid
              grid-cols-2
              border-b
              border-line
            "
          >
            <button
              type="button"
              onClick={() =>
                setDirectionTab(
                  "bus",
                )
              }
              className={[
                "flex min-h-[92px] items-center justify-center gap-3 px-4 transition-colors md:min-h-[105px]",

                directionTab ===
                "bus"
                  ? "bg-[#001d4a] text-white"
                  : "bg-white text-ink hover:bg-fog",
              ].join(" ")}
            >
              <BusIcon />

              <div className="text-left">
                <p
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.08em]
                    opacity-55
                  "
                >
                  PUBLIC TRANSPORT
                </p>

                <p
                  className="
                    mt-1
                    text-[19px]
                    font-bold
                    md:text-[22px]
                  "
                >
                  버스 이용 시
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                setDirectionTab(
                  "car",
                )
              }
              className={[
                "flex min-h-[92px] items-center justify-center gap-3 border-l border-line px-4 transition-colors md:min-h-[105px]",

                directionTab ===
                "car"
                  ? "bg-[#001d4a] text-white"
                  : "bg-white text-ink hover:bg-fog",
              ].join(" ")}
            >
              <CarIcon />

              <div className="text-left">
                <p
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.08em]
                    opacity-55
                  "
                >
                  BY CAR
                </p>

                <p
                  className="
                    mt-1
                    text-[19px]
                    font-bold
                    md:text-[22px]
                  "
                >
                  자가용 이용 시
                </p>
              </div>
            </button>
          </div>

          {/* =================================================
              BUS TAB
          ================================================= */}

          {directionTab ===
            "bus" && (
            <div
              className="
                grid
                gap-0
                lg:grid-cols-[330px_minmax(0,1fr)]
              "
            >
              {/* LEFT */}

              <div
                className="
                  border-b
                  border-line
                  px-6
                  py-8
                  md:px-8
                  md:py-10
                  lg:border-b-0
                  lg:border-r
                  lg:px-9
                "
              >
                <p
                  className="
                    font-serif
                    text-[54px]
                    leading-none
                    text-[#001d4a]
                    md:text-[64px]
                  "
                  aria-hidden="true"
                >
                  Bus
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div className="text-navy">
                    <PinIcon />
                  </div>

                  <h3
                    className="
                      text-[24px]
                      font-bold
                      tracking-[-0.035em]
                      text-ink
                      md:text-[27px]
                    "
                  >
                    버스로 오시는 경우
                  </h3>
                </div>

               
                {/* MAP BUTTONS */}

                <div
                  className="
                    mt-8
                    grid
                    gap-3
                  "
                >
                  <a
                    href={naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[54px]
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-[#d5d9df]
                      bg-white
                      px-6
                      text-[15px]
                      font-semibold
                      text-ink
                      transition
                      hover:border-[#03C75A]
                    "
                  >
                    <span>
                      네이버 지도에서 검색
                    </span>

                    <SearchIcon />
                  </a>

                  <a
                    href={kakaoMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[54px]
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-[#d5d9df]
                      bg-white
                      px-6
                      text-[15px]
                      font-semibold
                      text-ink
                      transition
                      hover:border-[#fee500]
                    "
                  >
                    <span>
                      카카오 지도에서 검색
                    </span>

                    <SearchIcon />
                  </a>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  px-6
                  py-8
                  md:px-9
                  md:py-10
                  lg:px-11
                "
              >
                {/* STOPS */}

                <div>
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      tracking-[0.09em]
                      text-mist
                    "
                  >
                    NEAREST BUS STOP
                  </p>

                  <h4
                    className="
                      mt-2
                      text-[22px]
                      font-bold
                      tracking-[-0.03em]
                      text-ink
                      md:text-[25px]
                    "
                  >
                    가까운 버스정류장
                  </h4>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        bg-[#f1f5f9]
                        px-4
                        py-2
                        text-[16px]
                        font-semibold
                        text-ink
                      "
                    >
                      경기일보 · 한일타운
                      <span className="ml-2 font-normal text-muted">
                        01-123
                      </span>
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#f1f5f9]
                        px-4
                        py-2
                        text-[16px]
                        font-semibold
                        text-ink
                      "
                    >
                      한일타운 · 경기일보 · 홈플러스
                      <span className="ml-2 font-normal text-muted">
                        01-125
                      </span>
                    </span>
                  </div>
                </div>

                {/* ROUTES */}

                <div
                  className="
                    mt-8
                    divide-y
                    divide-line
                    border-y
                    border-line
                  "
                >
                  {busRouteGroups.map(
                    (
                      group,
                    ) => (
                      <div
                        key={
                          group.label
                        }
                        className="
                          grid
                          gap-3
                          py-5
                          sm:grid-cols-[130px_minmax(0,1fr)]
                          sm:items-start
                          md:grid-cols-[145px_minmax(0,1fr)]
                        "
                      >
                        <div>
                          <span
                            className={[
                              "inline-flex min-w-[105px] items-center justify-center rounded-[5px] border px-3 py-2 text-[20px] font-bold",
                              group.tone,
                            ].join(
                              " ",
                            )}
                          >
                            {
                              group.label
                            }
                          </span>
                        </div>

                        <p
                          className="
                            break-keep
                            pt-1
                            text-[20px]
                            font-medium
                            leading-[1.8]
                            tracking-[-0.015em]
                            text-[#505965]
                            md:text-[20px]
                          "
                        >
                          {
                            group.routes
                          }
                        </p>
                      </div>
                    ),
                  )}
                </div>

                {/* DESTINATION */}

                
              </div>
            </div>
          )}

          {/* =================================================
              CAR TAB
          ================================================= */}

          {directionTab ===
            "car" && (
            <div
              className="
                grid
                lg:grid-cols-[330px_minmax(0,1fr)]
              "
            >
              {/* LEFT */}

              <div
                className="
                  border-b
                  border-line
                  px-6
                  py-8
                  md:px-8
                  md:py-10
                  lg:border-b-0
                  lg:border-r
                  lg:px-9
                "
              >
                <p
                  className="
                    font-serif
                    text-[54px]
                    leading-none
                    text-[#001d4a]
                    md:text-[64px]
                  "
                  aria-hidden="true"
                >
                  Car
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div className="text-navy">
                    <CarIcon />
                  </div>

                  <h3
                    className="
                      text-[24px]
                      font-bold
                      tracking-[-0.035em]
                      text-ink
                      md:text-[27px]
                    "
                  >
                    자가용으로 오시는 경우
                  </h3>
                </div>

             

                <div
                  className="
                    mt-8
                    grid
                    gap-3
                  "
                >
                  <a
                    href={naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[54px]
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-[#d5d9df]
                      px-6
                      text-[15px]
                      font-semibold
                      text-ink
                    "
                  >
                    <span>
                      네이버 지도에서 검색
                    </span>

                    <SearchIcon />
                  </a>

                  <a
                    href={kakaoMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[54px]
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-[#d5d9df]
                      px-6
                      text-[15px]
                      font-semibold
                      text-ink
                    "
                  >
                    <span>
                      카카오 지도에서 검색
                    </span>

                    <SearchIcon />
                  </a>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  px-6
                  py-8
                  md:px-9
                  md:py-10
                  lg:px-11
                "
              >
                <p
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.09em]
                    text-mist
                  "
                >
                  DRIVING & PARKING
                </p>

                <h4
                  className="
                    mt-2
                    text-[22px]
                    font-bold
                    tracking-[-0.03em]
                    text-ink
                    md:text-[25px]
                  "
                >
                  내비게이션 · 주차 안내
                </h4>

                <div
                  className="
                    mt-7
                    divide-y
                    divide-line
                    border-y
                    border-line
                  "
                >
                  <div
                    className="
                      grid
                      gap-2
                      py-5
                      sm:grid-cols-[145px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-[20px]
                        font-bold
                        text-navy
                      "
                    >
                      주소 검색
                    </p>

                    <p
                      className="
                        text-[20px]
                        font-semibold
                        text-ink
                      "
                    >
                      경기 수원시 장안구 경수대로 969
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      py-5
                      sm:grid-cols-[145px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-[20px]
                        font-bold
                        text-navy
                      "
                    >
                      건물
                    </p>

                    <p
                      className="
                        text-[20px]
                        font-semibold
                        text-ink
                      "
                    >
                      한국메디컬빌딩 2층
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      py-5
                      sm:grid-cols-[145px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-[20px]
                        font-bold
                        text-navy
                      "
                    >
                      주차
                    </p>

                    <p
                      className="
                        break-keep
                        text-[20px]
                        leading-[1.75]
                        text-body
                        md:text-[16px]
                      "
                    >
                      건물 지하주차장에 주차하신 뒤
                      2층으로 올라오시면 됩니다.
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      gap-2
                      py-5
                      sm:grid-cols-[145px_minmax(0,1fr)]
                    "
                  >
                    <p
                      className="
                        text-[20px]
                        font-bold
                        text-navy
                      "
                    >
                      주차 지원
                    </p>

                    <p
                      className="
                        break-keep
                        text-[20px]
                        leading-[1.75]
                        text-body
                        md:text-[16px]
                      "
                    >
                      진료 종료 후 데스크에 말씀해 주시면
                      무료주차 지원해드립니다.
                    </p>
                  </div>
                </div>

               
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;