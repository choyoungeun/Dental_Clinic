'use client';

import dynamic from 'next/dynamic';

import LocationGuideMap from './LocationGuideMap';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

/* =========================================================
   NAVER MAP
========================================================= */

const NaverMap = dynamic(() => import('./NaverMap'), {
  ssr: false,

  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#eef2f6] text-[13px] text-gray-400">
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
    strokeWidth="1.7"
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
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    <path d="M5 17h14l1-6-2-5H6l-2 5 1 6Z" />
    <path d="M7 17v2m10-2v2M4 11h16" />
  </svg>
);

const BusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    <rect x="5" y="3" width="14" height="17" rx="3" />
    <path d="M7 7h10M7 13h10M8 20v2m8-2v2" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
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
      className="scroll-mt-24 bg-[#f4f7fa] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                LOCATION & HOURS
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={['치과 오시는 길']}
            />
          </div>

        </div>

        {/* =====================================================
            GUIDE MAP
        ===================================================== */}

        <Reveal
          variant="soft"
          className="mt-10 md:mt-14"
        >
          <LocationGuideMap />
        </Reveal>

        {/* =====================================================
            MAP + INFORMATION
        ===================================================== */}

        <div className="mt-5 overflow-hidden bg-white lg:grid lg:h-[520px] lg:grid-cols-[1.5fr_0.68fr]">
          {/* =================================================
              MAP
          ================================================= */}

          <Reveal
            variant="fade"
            duration={1100}
            className="relative h-[340px] bg-[#eef2f6] md:h-[400px] lg:h-full"
          >
            <NaverMap />

            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 z-20 inline-flex h-11 items-center gap-3 bg-[#03C75A] px-5 text-[13px] font-bold text-white shadow-lg transition hover:brightness-95"
            >
              네이버 길찾기
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          {/* =================================================
              INFORMATION
          ================================================= */}

          <Reveal
            variant="right"
            delay={150}
            className="flex h-full flex-col bg-[#071b33] px-6 py-6 text-white md:px-7 md:py-7"
          >
            {/* Address */}

            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                ADDRESS
              </p>

              <h3 className="mt-2 text-[30px] font-semibold tracking-[-0.03em]">
                수원세브란스치과
              </h3>

              <p className="mt-2 text-[22px] leading-[1.65] text-white/55">
                경기 수원시 장안구 경수대로 969
              </p>

              <p className="mt-0.5 text-[18px] font-semibold text-white">
                한국메디컬빌딩 2층
              </p>
            </div>

            {/* Hours */}

            <div className="mt-5 border-t border-white/15 pt-5">
              <div className="flex items-center gap-2 text-[#8ec5ff]">
                <ClockIcon />

                <p className="text-[9px] font-bold tracking-[0.2em]">
                  OPENING HOURS
                </p>
              </div>

              <div className="mt-3 space-y-2.5 text-[19px]">
                {/* 월 · 수 야간진료 */}

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#8ec5ff]">
                      월 · 수
                    </span>

                    <span className="bg-[#176fc2] px-2 py-0.5 text-[12px] font-bold text-white">
                      야간진료
                    </span>
                  </div>

                  <strong className="font-semibold text-[#8ec5ff]">
                    09:30 - 20:30
                  </strong>
                </div>

                {/* 화 · 목 · 금 */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">
                    화 · 목 · 금
                  </span>

                  <strong className="font-semibold">
                    09:30 - 18:30
                  </strong>
                </div>

                {/* 토요일 */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">
                    토요일
                  </span>

                  <strong className="font-semibold">
                    09:30 - 14:00
                  </strong>
                </div>

                {/* 점심 */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">
                    점심시간
                  </span>

                  <strong className="font-semibold">
                    13:00 - 14:00
                  </strong>
                </div>

              </div>

              <p className="mt-2.5 text-[15px] text-white/35">
                * 토요일은 점심시간 없이 진료합니다.
              </p>
            </div>

            {/* CTA */}

            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex h-8 w-full items-center justify-center border border-white/20 text-[12px] font-bold text-white transition hover:bg-white hover:text-[#071b33]"
            >
              네이버 지도로 확인하기 →
            </a>
          </Reveal>
        </div>

        {/* =====================================================
            QUICK INFORMATION
        ===================================================== */}

        <div className="mt-4 grid border-y border-[#071b33]/15 md:grid-cols-3">
          <Reveal
            variant="soft"
            className="flex gap-4 py-5 md:px-5"
          >
            <div className="text-[#176fc2]">
              <BusIcon />
            </div>

            <div>
              <p className="text-[20px] font-semibold text-[#071b33]">
                가까운 버스정류장
              </p>

              <p className="mt-1 text-[18px] text-gray-400">
                경기일보 · 한일타운
              </p>
            </div>
          </Reveal>

          <Reveal
            variant="soft"
            delay={100}
            className="flex gap-4 border-t border-[#071b33]/10 py-5 md:border-l md:border-t-0 md:px-5"
          >
            <div className="text-[#176fc2]">
              <PinIcon />
            </div>

            <div>
              <p className="text-[20px] font-semibold text-[#071b33]">
                주변 위치
              </p>

              <p className="mt-1 text-[18px] text-gray-400">
                한일타운 · 홈플러스 북수원점 인근
              </p>
            </div>
          </Reveal>

          <Reveal
            variant="soft"
            delay={200}
            className="flex gap-4 border-t border-[#071b33]/10 py-5 md:border-l md:border-t-0 md:px-5"
          >
            <div className="text-[#176fc2]">
              <CarIcon />
            </div>

            <div>
              <p className="text-[20px] font-semibold text-[#071b33]">
                주차
              </p>

              <p className="mt-1 text-[18px] text-gray-400">
                한국메디컬빌딩 지하주차장 (무료지원)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;