'use client';

import dynamic from 'next/dynamic';
import LocationGuideMap from './LocationGuideMap';

/* =========================================================
   NAVER MAP
========================================================= */

const NaverMap = dynamic(() => import('./NaverMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
      지도를 불러오는 중입니다...
    </div>
  ),
});


/* =========================================================
   ICONS
========================================================= */

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path d="M5 17h14l1-6-2-5H6l-2 5 1 6Z" />
    <path d="M7 17v2m10-2v2M4 11h16" />
    <circle cx="7" cy="14" r="1" fill="currentColor" />
    <circle cx="17" cy="14" r="1" fill="currentColor" />
  </svg>
);

const BusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <rect x="5" y="3" width="14" height="17" rx="3" />
    <path d="M7 7h10M7 13h10M8 20v2m8-2v2" />
    <circle cx="8" cy="16" r="1" fill="currentColor" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);


/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  const naverMapUrl =
    'https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969';

  return (
    <section
      id="location"
      className="scroll-mt-24 bg-[#f7f9fc] py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* =================================================
            HEADER
        ================================================= */}
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#2f89fc]">
              LOCATION
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#071b33] md:text-4xl">
              오시는 길
            </h2>
          </div>

          <div className="md:text-right">
            <p className="text-[13px] font-semibold text-[#071b33] md:text-[14px]">
              경기 수원시 장안구 경수대로 969
            </p>

            <p className="mt-0.5 text-[11px] text-gray-400 md:text-[12px]">
              한국메디컬빌딩 2층
            </p>
          </div>
        </div>


        {/* =================================================
            EASY GUIDE MAP
        ================================================= */}
        <div className="mb-4 md:mb-5">
          <LocationGuideMap />
        </div>


        {/* =================================================
            NAVER MAP + INFORMATION
        ================================================= */}
        <div
          className="
            overflow-hidden
            rounded-[18px]
            border
            border-[#dfe5ec]
            bg-white
            shadow-[0_10px_30px_rgba(7,27,51,0.06)]
            lg:grid
            lg:grid-cols-[1.45fr_0.75fr]
          "
        >

          {/* =========================
              REAL MAP
          ========================= */}
          <div className="relative h-[300px] bg-gray-100 md:h-[390px] lg:h-[470px]">
            <NaverMap />

            {/* NAVER BUTTON */}
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute
                bottom-3
                left-3
                z-20
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#03C75A]
                px-4
                py-3
                text-[11px]
                font-bold
                text-white
                shadow-lg
                transition
                hover:brightness-95
                md:bottom-4
                md:left-4
                md:text-[12px]
              "
            >
              네이버 길찾기
              <span>→</span>
            </a>
          </div>


          {/* =========================
              INFORMATION
          ========================= */}
          <div className="bg-[#071b33] p-5 text-white md:p-7">

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[#79b6ff]
                "
              >
                <PinIcon />
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#79b6ff]">
                  SUWON SEVERANCE DENTAL
                </p>

                <h3 className="mt-1 text-[20px] font-bold tracking-[-0.03em] md:text-[23px]">
                  수원세브란스치과
                </h3>

                <p className="mt-2 text-[12px] leading-[1.7] text-white/60">
                  경기도 수원시 장안구
                  <br />
                  경수대로 969
                </p>

                <p className="mt-0.5 text-[13px] font-semibold text-white">
                  한국메디컬빌딩 2층
                </p>
              </div>
            </div>


            <div className="my-5 h-px bg-white/10" />


            {/* HOURS */}
            <div>
              <div className="flex items-center gap-2 text-[#79b6ff]">
                <ClockIcon />

                <p className="text-[10px] font-bold tracking-[0.18em]">
                  진료시간
                </p>
              </div>

              <div className="mt-3 space-y-2 text-[11px] md:text-[12px]">

                <div className="flex justify-between gap-4">
                  <span className="text-white/55">
                    월 · 수 · 금
                  </span>

                  <strong className="font-semibold">
                    09:30 - 18:30
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-semibold text-[#79b6ff]">
                    화 · 목
                  </span>

                  <strong className="font-semibold text-[#79b6ff]">
                    09:30 - 20:30
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/55">
                    토요일
                  </span>

                  <strong className="font-semibold">
                    09:30 - 14:00
                  </strong>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/55">
                    점심시간
                  </span>

                  <strong className="font-semibold">
                    13:00 - 14:00
                  </strong>
                </div>

              </div>
            </div>


            <div className="my-5 h-px bg-white/10" />


            {/* PARKING + BUS */}
            <div className="grid grid-cols-2 gap-2">

              {/* PARKING */}
              <div className="rounded-xl bg-white/[0.07] p-3.5">
                <div className="flex items-center gap-2 text-[#79b6ff]">
                  <CarIcon />

                  <span className="text-[10px] font-bold">
                    주차 안내
                  </span>
                </div>

                <p className="mt-2 text-[10px] leading-[1.6] text-white/60 md:text-[11px]">
                  건물 내 주차장
                  <br />
                  이용 가능합니다.
                </p>
              </div>


              {/* BUS */}
              <div className="rounded-xl bg-white/[0.07] p-3.5">
                <div className="flex items-center gap-2 text-[#79b6ff]">
                  <BusIcon />

                  <span className="text-[10px] font-bold">
                    대중교통
                  </span>
                </div>

                <p className="mt-2 text-[10px] leading-[1.6] text-white/60 md:text-[11px]">
                  한일타운 인근
                  <br />
                  경수대로 버스 이용
                </p>
              </div>

            </div>


            {/* BUTTON */}
            <div className="mt-4 grid grid-cols-2 gap-2">

              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/20
                  text-[11px]
                  font-bold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                지도 크게보기
              </a>

              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-[11px]
                  font-bold
                  text-[#071b33]
                  transition
                  hover:bg-[#edf5ff]
                "
              >
                길찾기 →
              </a>

            </div>

          </div>
        </div>


        {/* =================================================
            BOTTOM QUICK INFO
        ================================================= */}
        <div className="mt-3 grid gap-2 md:grid-cols-3">

          {/* CAR */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
            <div className="text-[#176fc2]">
              <CarIcon />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#071b33]">
                자가용 이용 시
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                내비게이션에 ‘경수대로 969’ 검색
              </p>
            </div>
          </div>


          {/* LANDMARK */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
            <div className="text-[#176fc2]">
              <PinIcon />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#071b33]">
                주변 랜드마크
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                한일타운 · 홈플러스 북수원점 인근
              </p>
            </div>
          </div>


          {/* BUS */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
            <div className="text-[#176fc2]">
              <BusIcon />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#071b33]">
                대중교통
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                경수대로 한일타운 일대 정류장 이용
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;