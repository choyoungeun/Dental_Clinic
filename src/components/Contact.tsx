'use client';

import dynamic from 'next/dynamic';

/* =========================================================
   NAVER MAP
========================================================= */

const NaverMap = dynamic(() => import('./NaverMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full animate-pulse items-center justify-center bg-gray-100 text-sm text-gray-400">
      지도를 불러오는 중입니다...
    </div>
  ),
});


/* =========================================================
   SIMPLE ICONS
========================================================= */

const PinIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a7 7 0 00-7 7c0 5.1 7 13 7 13s7-7.9 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
  </svg>
);

const CarIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M5 17h14l1-6-2-5H6l-2 5 1 6z" />
    <path d="M7 17v2M17 17v2M4 11h16" />
    <circle cx="7" cy="14" r="1" fill="currentColor" />
    <circle cx="17" cy="14" r="1" fill="currentColor" />
  </svg>
);

const BusIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <rect x="5" y="3" width="14" height="17" rx="3" />
    <path d="M7 7h10M7 13h10M8 20v2M16 20v2" />
    <circle cx="8" cy="16" r="1" fill="currentColor" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
  </svg>
);


/* =========================================================
   VISUAL WAYFINDING MAP
   사진 없이 코드로 구현한 직관적 약도
========================================================= */

const VisualGuideMap = () => {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#dfe7f0] bg-white shadow-[0_12px_40px_rgba(7,27,51,0.07)]">

      {/* HEADER */}
      <div className="border-b border-gray-100 px-5 py-5 md:px-8">
        <div className="flex items-start gap-3">

          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#176fc2]">
            <PinIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#2f89fc]">
              EASY LOCATION GUIDE
            </p>

            <h3 className="mt-1 text-xl font-bold tracking-[-0.03em] text-[#071b33] md:text-2xl">
              처음 오셔도 찾기 쉽습니다
            </h3>

            <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
              경수대로 969 · 한국메디컬빌딩 2층
            </p>
          </div>

        </div>
      </div>


      {/* =====================================================
          MOBILE-FIRST SCHEMATIC MAP
      ====================================================== */}
      <div className="relative h-[430px] overflow-hidden bg-[#f7f9fc] md:h-[500px]">

        {/* -------------------------------------------------
            BACKGROUND GRID / SMALL STREETS
        -------------------------------------------------- */}

        <div className="absolute left-[7%] top-0 h-full w-[1px] bg-gray-200" />
        <div className="absolute left-[29%] top-0 h-full w-[1px] bg-gray-200" />
        <div className="absolute left-[72%] top-0 h-full w-[1px] bg-gray-200" />
        <div className="absolute right-[7%] top-0 h-full w-[1px] bg-gray-200" />

        <div className="absolute left-0 top-[22%] h-[1px] w-full bg-gray-200" />
        <div className="absolute left-0 top-[73%] h-[1px] w-full bg-gray-200" />


        {/* -------------------------------------------------
            MAIN ROAD : 경수대로
        -------------------------------------------------- */}

        <div
          className="
            absolute
            left-[-5%]
            top-[52%]
            h-[74px]
            w-[110%]
            bg-[#d9dee6]
            shadow-inner
          "
        >
          {/* 중앙선 */}
          <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t-2 border-dashed border-white" />

          {/* ROAD LABEL */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#546578]
              px-5
              py-1.5
              text-[14px]
              font-bold
              tracking-[0.05em]
              text-white
              shadow
            "
          >
            경수대로
          </div>
        </div>


        {/* -------------------------------------------------
            MAJOR CROSS ROAD
        -------------------------------------------------- */}

        <div
          className="
            absolute
            right-[19%]
            top-[-5%]
            h-[110%]
            w-[54px]
            bg-[#e0e4e9]
          "
        >
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-2 border-dashed border-white" />
        </div>


        {/* -------------------------------------------------
            CLINIC BUILDING
        -------------------------------------------------- */}

        <div
          className="
            absolute
            left-[34%]
            top-[25%]
            z-20
            flex
            -translate-x-1/2
            flex-col
            items-center
          "
        >
          {/* Bubble */}
          <div
            className="
              relative
              rounded-2xl
              bg-[#082847]
              px-5
              py-3.5
              text-center
              text-white
              shadow-[0_10px_30px_rgba(8,40,71,0.25)]
            "
          >
            <p className="text-[15px] font-bold md:text-[17px]">
              수원세브란스치과
            </p>

            <p className="mt-1 text-[11px] font-medium text-[#9dccff]">
              한국메디컬빌딩 2층
            </p>

            {/* bubble arrow */}
            <div
              className="
                absolute
                -bottom-2
                left-1/2
                h-4
                w-4
                -translate-x-1/2
                rotate-45
                bg-[#082847]
              "
            />
          </div>

          {/* PIN */}
          <div className="relative mt-5">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#2f89fc]/25" />

            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                bg-[#2f89fc]
                text-white
                shadow-xl
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
              >
                <path d="M8 3c-3 1-4 4-3 8 1 4 2 8 4 10 1-3 1-6 3-6s2 3 3 6c2-2 3-6 4-10 1-4 0-7-3-8-2-1-3 1-4 1s-2-2-4-1z" />
              </svg>
            </div>
          </div>

          {/* Building */}
          <div
            className="
              -mt-1
              flex
              h-[74px]
              w-[92px]
              flex-col
              justify-end
              rounded-t-xl
              border-2
              border-[#aac5e7]
              bg-[#eaf3ff]
              p-2
              shadow-md
            "
          >
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 rounded-[1px] bg-[#86add7]"
                />
              ))}
            </div>

            <div className="mx-auto mt-2 h-5 w-7 bg-[#52789e]" />
          </div>
        </div>


        {/* -------------------------------------------------
            LANDMARK : 한일타운
        -------------------------------------------------- */}

        <div
          className="
            absolute
            bottom-[9%]
            left-[8%]
            rounded-xl
            border
            border-green-100
            bg-green-50
            px-4
            py-3
            text-center
          "
        >
          <p className="text-[11px] font-bold text-green-700">
            수원 한일타운
          </p>

          <p className="mt-1 text-[9px] text-green-600">
            대단지 아파트
          </p>
        </div>


        {/* -------------------------------------------------
            LANDMARK : 장안구청
        -------------------------------------------------- */}

        <div
          className="
            absolute
            right-[5%]
            top-[11%]
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-center
            shadow-sm
          "
        >
          <p className="text-[11px] font-bold text-gray-800">
            장안구청
          </p>
        </div>


        {/* -------------------------------------------------
            LANDMARK : 수원종합운동장
        -------------------------------------------------- */}

        <div
          className="
            absolute
            left-[51%]
            top-[6%]
            rounded-2xl
            border
            border-green-100
            bg-[#edf5df]
            px-4
            py-3
            text-center
          "
        >
          <div className="mx-auto mb-1 h-5 w-9 rounded-[50%] border-2 border-green-400" />

          <p className="text-[10px] font-bold leading-tight text-green-800">
            수원종합
            <br />
            운동장
          </p>
        </div>


        {/* -------------------------------------------------
            BUS STOP
        -------------------------------------------------- */}

        <div
          className="
            absolute
            bottom-[22%]
            left-[48%]
            z-20
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#3978c5]
              text-white
              shadow
            "
          >
            <BusIcon className="h-4 w-4" />
          </div>

          <div className="rounded-lg bg-white/95 px-3 py-2 shadow-sm">
            <p className="text-[9px] font-bold text-[#071b33]">
              수원한일타운
            </p>

            <p className="text-[8px] text-gray-500">
              버스정류장
            </p>
          </div>
        </div>


        {/* -------------------------------------------------
            WALKING ROUTE
        -------------------------------------------------- */}

        <div
          className="
            absolute
            bottom-[34%]
            left-[40%]
            h-[1px]
            w-[18%]
            rotate-[-35deg]
            border-t-2
            border-dashed
            border-[#2f89fc]
          "
        />

        <div
          className="
            absolute
            bottom-[37%]
            left-[49%]
            rounded-full
            bg-[#e8f3ff]
            px-2
            py-1
            text-[8px]
            font-bold
            text-[#176fc2]
          "
        >
          도보 접근
        </div>


        {/* -------------------------------------------------
            EASY FIND LABEL
        -------------------------------------------------- */}

        <div
          className="
            absolute
            bottom-4
            right-4
            rounded-xl
            border
            border-blue-100
            bg-white/95
            px-3
            py-2
            text-right
            shadow-sm
          "
        >
          <p className="text-[9px] font-semibold text-[#2f89fc]">
            POINT
          </p>

          <p className="mt-0.5 text-[10px] font-bold text-[#071b33]">
            경수대로 대로변
          </p>

          <p className="text-[9px] text-gray-500">
            한국메디컬빌딩 2층
          </p>
        </div>

      </div>


      {/* =====================================================
          SUMMARY
      ====================================================== */}

      <div className="grid divide-y divide-gray-100 md:grid-cols-3 md:divide-x md:divide-y-0">

        {/* Parking */}
        <div className="flex gap-4 p-5 md:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#176fc2]">
            <CarIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#071b33]">
              자가용
            </p>

            <p className="mt-1 text-[11px] leading-[1.7] text-gray-500">
              경수대로 969 검색
              <br />
              <strong className="font-semibold text-[#176fc2]">
                한국메디컬빌딩 2층
              </strong>
            </p>
          </div>
        </div>


        {/* Bus */}
        <div className="flex gap-4 p-5 md:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#176fc2]">
            <BusIcon className="h-6 w-6" />
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#071b33]">
              버스
            </p>

            <p className="mt-1 text-[11px] leading-[1.7] text-gray-500">
              <strong className="font-semibold text-[#071b33]">
                수원한일타운 정류장
              </strong>
              <br />
              하차 후 도보 이동
            </p>
          </div>
        </div>


        {/* Landmark */}
        <div className="flex gap-4 p-5 md:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#082847] text-white">
            <PinIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#071b33]">
              쉽게 찾는 포인트
            </p>

            <p className="mt-1 text-[11px] leading-[1.7] text-gray-500">
              장안구청 · 수원종합운동장 인근
              <br />
              <strong className="font-semibold text-[#176fc2]">
                경수대로 대로변
              </strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};


/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  return (
    <section
      id="location"
      className="bg-[#f7f8fa] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* ===================================================
            TITLE
        ==================================================== */}

        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[11px]">
            LOCATION
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#071b33] md:text-5xl">
            오시는 길
          </h2>

          <p className="mt-4 text-[14px] leading-[1.8] text-gray-500 md:text-[15px]">
            수원시 장안구 경수대로 969
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            한국메디컬빌딩 2층
          </p>
        </div>


        {/* ===================================================
            EASY VISUAL GUIDE
        ==================================================== */}

        <VisualGuideMap />


        {/* ===================================================
            REAL NAVER MAP
        ==================================================== */}

        <div className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#2f89fc]">
                NAVER MAP
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#071b33]">
                실제 지도에서 위치 확인
              </h3>
            </div>

            <a
              href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969"
              target="_blank"
              rel="noreferrer"
              className="hidden text-[12px] font-bold text-[#176fc2] md:inline-flex"
            >
              네이버 길찾기 →
            </a>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[330px] w-full bg-gray-50 md:h-[520px]">
              <NaverMap />

              <div className="pointer-events-none absolute inset-0 z-10 border-[6px] border-white/10" />
            </div>
          </div>

          <a
            href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969"
            target="_blank"
            rel="noreferrer"
            className="
              mt-3
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              rounded-xl
              bg-[#03C75A]
              text-[13px]
              font-bold
              text-white
              md:hidden
            "
          >
            네이버 지도에서 길찾기
          </a>
        </div>


        {/* ===================================================
            INFO GRID
        ==================================================== */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Transportation */}
          <div className="rounded-[22px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">

            <h3 className="text-xl font-bold text-[#071b33]">
              교통 및 주차 안내
            </h3>

            <div className="mt-7 grid gap-8 md:grid-cols-2">

              {/* PARKING */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf3ff] text-[#176fc2]">
                    <CarIcon className="h-5 w-5" />
                  </div>

                  <h4 className="font-bold text-[#071b33]">
                    자가용 · 주차
                  </h4>
                </div>

                <p className="mt-4 text-[13px] leading-[1.85] text-gray-500">
                  내비게이션에
                  <strong className="mx-1 font-semibold text-[#071b33]">
                    경수대로 969
                  </strong>
                  검색
                </p>

                <p className="mt-2 text-[13px] leading-[1.85] text-gray-500">
                  건물 내 주차장 이용 가능
                </p>
              </div>


              {/* BUS */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf3ff] text-[#176fc2]">
                    <BusIcon className="h-5 w-5" />
                  </div>

                  <h4 className="font-bold text-[#071b33]">
                    버스
                  </h4>
                </div>

                <p className="mt-4 text-[13px] font-semibold text-[#071b33]">
                  수원한일타운 정류장 하차
                </p>

                <div className="mt-4 space-y-3">

                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600">
                      시내
                    </span>

                    <p className="pt-0.5 text-[11px] leading-relaxed text-gray-500">
                      300, 300-1, 777, 900, 62-1, 65, 25
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded bg-red-50 px-2 py-1 text-[9px] font-bold text-red-500">
                      직행
                    </span>

                    <p className="pt-0.5 text-[11px] leading-relaxed text-gray-500">
                      7770, 3000, 2007
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>


          {/* CONTACT */}
          <div className="rounded-[22px] bg-[#071b33] p-7 text-white shadow-lg">

            <p className="text-[10px] font-bold tracking-[0.25em] text-[#79b6ff]">
              RESERVATION
            </p>

            <p className="mt-4 text-sm text-white/60">
              예약 및 문의
            </p>

            <a
              href="tel:031-123-4567"
              className="mt-1 block text-3xl font-bold tracking-[-0.03em]"
            >
              031-123-4567
            </a>

            <div className="my-7 h-px bg-white/10" />

            <p className="text-[10px] font-bold tracking-[0.25em] text-[#79b6ff]">
              ADDRESS
            </p>

            <p className="mt-3 text-[13px] leading-[1.8] text-white/75">
              경기 수원시 장안구 경수대로 969
              <br />
              <strong className="font-semibold text-white">
                한국메디컬빌딩 2층
              </strong>
            </p>

            <a
              href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EA%B2%BD%EC%88%98%EB%8C%80%EB%A1%9C%20969"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                flex
                h-[48px]
                items-center
                justify-center
                rounded-lg
                bg-white
                text-[12px]
                font-bold
                text-[#071b33]
                transition
                hover:bg-[#edf5ff]
              "
            >
              네이버 지도로 길찾기 →
            </a>

          </div>
        </div>


        {/* ===================================================
            HOURS
        ==================================================== */}

        <div className="mt-6 rounded-[22px] border border-gray-100 bg-white p-6 shadow-sm md:p-8">

          <h3 className="text-xl font-bold text-[#071b33]">
            진료 시간
          </h3>

          <div className="mt-6 grid gap-x-12 gap-y-4 md:grid-cols-2">

            {[
              {
                day: '월 · 수 · 금',
                time: '09:30 - 18:30',
              },
              {
                day: '화 · 목 야간진료',
                time: '09:30 - 20:30',
                highlight: true,
              },
              {
                day: '토요일',
                time: '09:30 - 14:00',
              },
              {
                day: '일요일 · 공휴일',
                time: '휴진',
                red: true,
              },
            ].map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between border-b border-gray-100 pb-3"
              >
                <span
                  className={`text-[13px] font-medium ${
                    item.highlight
                      ? 'text-[#176fc2]'
                      : item.red
                        ? 'text-red-500'
                        : 'text-gray-500'
                  }`}
                >
                  {item.day}
                </span>

                <span
                  className={`text-[14px] font-bold ${
                    item.highlight
                      ? 'text-[#176fc2]'
                      : item.red
                        ? 'text-red-500'
                        : 'text-[#071b33]'
                  }`}
                >
                  {item.time}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-6 rounded-xl bg-[#f7f9fc] px-4 py-3 text-[11px] leading-[1.8] text-gray-500">
            <strong className="text-[#071b33]">
              점심시간
            </strong>
            {' '}13:00 - 14:00
            <span className="mx-2 text-gray-300">|</span>
            토요일은 점심시간 없이 진료합니다.
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;