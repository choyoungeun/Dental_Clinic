'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        h-[680px]
        w-full
        overflow-hidden
        md:h-[820px]
      "
    >
      {/* ======================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0">
        <Image
          src="/images/Sev2018.jpg"
          alt="수원세브란스치과 진료 환경"
          fill
          priority
          className="
            scale-[1.02]
            object-cover
            object-center
          "
        />

        {/* 전체 Navy Tone */}
        <div className="absolute inset-0 bg-[#031325]/45" />

        {/* 왼쪽 텍스트 가독성을 위한 Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#031325]/95
            via-[#031325]/65
            to-[#031325]/10
          "
        />

        {/* 아래쪽 깊이감 */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#031325]/50
            via-transparent
            to-[#031325]/10
          "
        />
      </div>

      {/* ======================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-6
          md:px-8
        "
      >
        <div className="max-w-4xl text-white">

          {/* --------------------------------------------------
              01. BRAND EYEBROW
          -------------------------------------------------- */}
          <p
            className={`
              mb-6

              text-[10px]
              font-semibold
              tracking-[0.30em]
              text-[#87bbf5]

              transition-all
              duration-1000
              ease-out

              md:text-[12px]

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }
            `}
          >
            SEVERANCE STANDARD · CLINICAL EXPERIENCE
          </p>

          {/* --------------------------------------------------
              02. MAIN BRAND MESSAGE
          -------------------------------------------------- */}
          <h1
            className={`
              text-[36px]
              font-semibold
              leading-[1.35]
              tracking-[-0.04em]

              transition-all
              delay-150
              duration-1000
              ease-out

              md:text-[58px]
              lg:text-[64px]

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            세브란스에서 배운 기준,
            <br />

            <span className="text-white">
              종합병원에서 쌓은 경험.
            </span>
          </h1>

          {/* --------------------------------------------------
              03. BRAND SLOGAN
          -------------------------------------------------- */}
          <p
            className={`
              mt-7

              text-[18px]
              font-medium
              leading-[1.7]
              tracking-[-0.02em]
              text-white/90

              transition-all
              delay-300
              duration-1000
              ease-out

              md:text-[23px]

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            오늘보다 10년 뒤의 치아를 생각합니다.
          </p>

          {/* --------------------------------------------------
              04. CAREER / TRUST POINT
          -------------------------------------------------- */}
          <div
            className={`
              mt-9

              flex
              max-w-3xl
              flex-col
              gap-y-2

              text-[12px]
              font-medium
              leading-relaxed
              text-white/60

              transition-all
              delay-500
              duration-1000
              ease-out

              sm:flex-row
              sm:flex-wrap
              sm:gap-x-3

              md:text-[14px]

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            <span>
              연세대학교 치과대학 우등졸업
            </span>

            <span className="hidden text-white/25 sm:inline">
              ·
            </span>

            <span>
              신촌 세브란스 치과대학병원
            </span>

            <span className="hidden text-white/25 sm:inline">
              ·
            </span>

            <span>
              前 종합병원 치과 과장
            </span>
          </div>

          {/* --------------------------------------------------
              05. UNIVERSITY HOSPITAL EQUIPMENT MESSAGE
          -------------------------------------------------- */}
          <div
            className={`
              mt-7

              border-l
              border-[#79b6ff]/60

              pl-4

              transition-all
              delay-[600ms]
              duration-1000
              ease-out

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            <p
              className="
                text-[12px]
                font-medium
                leading-[1.8]
                text-white/70

                md:text-[14px]
              "
            >
              대학병원에서 익숙하게 경험한
              <br className="sm:hidden" />
              {' '}
              정밀 진단 환경까지.
            </p>
          </div>

          {/* --------------------------------------------------
              06. CTA
          -------------------------------------------------- */}
          <div
            className={`
              mt-10

              flex
              flex-wrap
              gap-3

              transition-all
              delay-700
              duration-1000
              ease-out

              ${
                loaded
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >
            {/* Philosophy */}
            <Link
              href="#brand-story"
              className="
                group

                flex
                items-center
                justify-center
                gap-3

                bg-white

                px-6
                py-4

                text-[12px]
                font-semibold
                text-[#071b33]

                transition-all
                duration-300

                hover:bg-[#eef5fc]

                md:px-7
                md:text-[13px]
              "
            >
              진료 철학 알아보기

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            {/* Booking */}
            <Link
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                flex
                items-center
                justify-center
                gap-3

                border
                border-white/30

                bg-white/5

                px-6
                py-4

                text-[12px]
                font-semibold
                text-white

                backdrop-blur-sm

                transition-all
                duration-300

                hover:border-white
                hover:bg-white
                hover:text-[#071b33]

                md:px-7
                md:text-[13px]
              "
            >
              진료 예약하기

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================
          SCROLL INDICATOR
      ====================================================== */}
      <div
        className={`
          absolute
          bottom-8
          left-1/2
          z-10

          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3

          transition-all
          delay-1000
          duration-1000

          md:flex

          ${
            loaded
              ? 'opacity-100'
              : 'opacity-0'
          }
        `}
      >
        <span
          className="
            text-[8px]
            font-medium
            tracking-[0.32em]
            text-white/35
          "
        >
          SCROLL
        </span>

        <div className="relative h-12 w-px overflow-hidden bg-white/15">
          <div
            className="
              absolute
              left-0
              top-0

              h-5
              w-px

              animate-[scrollLine_2s_ease-in-out_infinite]

              bg-white/70
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;