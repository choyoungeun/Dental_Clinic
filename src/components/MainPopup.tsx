'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export const MainPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hiddenUntil = localStorage.getItem('hideMainPopupUntil');

    if (hiddenUntil && Number(hiddenUntil) > Date.now()) {
      return;
    }

    setOpen(true);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const closePopup = () => {
    setOpen(false);
    document.body.style.overflow = '';
  };

  const closeToday = () => {
    const tomorrow = Date.now() + 24 * 60 * 60 * 1000;

    localStorage.setItem(
      'hideMainPopupUntil',
      String(tomorrow)
    );

    closePopup();
  };

  if (!open) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        className="
          fixed
          inset-0
          z-[9998]
          bg-black/65
          backdrop-blur-[3px]
        "
        onClick={closePopup}
      />

      {/* Popup Wrapper */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          px-3
          py-3
        "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            pointer-events-auto
            relative
            w-full
            max-w-[410px]
            max-h-[calc(100dvh-20px)]
            overflow-y-auto
            overscroll-contain
            bg-white
            shadow-[0_30px_100px_rgba(0,0,0,0.50)]
          "
        >
          {/* Close */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="팝업 닫기"
            className="
              absolute
              right-4
              top-4
              z-40
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#082847]
              text-[25px]
              font-light
              text-white
              shadow-lg
              transition
              active:scale-95
            "
          >
            ×
          </button>

          {/* ========================================
              HERO
          ========================================= */}
          <div
            className="
              relative
              overflow-hidden
              bg-gradient-to-br
              from-white
              via-[#faf8f3]
              to-[#eee9df]
              px-6
              pb-6
              pt-8
            "
          >
            <p
              className="
                pr-14
                text-[9px]
                font-bold
                tracking-[0.28em]
                text-[#173b61]
                sm:text-[10px]
              "
            >
              SUWON SEVERANCE DENTAL CLINIC
            </p>

            <h2
              className="
                mt-5
                text-[27px]
                font-bold
                leading-[1.25]
                tracking-[-0.045em]
                text-[#111]
                sm:text-[30px]
              "
            >
              수원세브란스치과
            </h2>

            <p
              className="
                mt-1
                text-[36px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.055em]
                text-[#082847]
                sm:text-[40px]
              "
            >
              새롭게
              <br />
              개원합니다
            </p>

            <p
              className="
                mt-5
                max-w-[330px]
                text-[13px]
                leading-[1.85]
                text-gray-700
                sm:text-[14px]
              "
            >
              세브란스 치과대학병원에서 배운 진료의 기준과
              종합병원에서 쌓은 풍부한 임상 경험을 바탕으로
              신중하고 책임 있는 진료를 약속드립니다.
            </p>

            {/* 실제 병원 이미지 */}
            <div
              className="
                relative
                mt-6
                h-[170px]
                w-full
                overflow-hidden
                rounded-xl
                shadow-sm
                sm:h-[195px]
              "
            >
              <Image
                src="/images/Sev2018.jpg"
                alt="수원세브란스치과 진료 환경"
                fill
                priority
                className="object-cover object-center"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#082847]/55
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-4 left-4">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  SEVERANCE STANDARD
                </p>

                
              </div>
            </div>
          </div>

          {/* ========================================
              KEY POINTS
          ========================================= */}
          <div className="bg-[#082847] px-3 py-5">
            <div className="grid grid-cols-4 divide-x divide-white/15 text-center">
              {/* 1 */}
              <div className="px-1.5">
                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/60
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                <p className="mt-2.5 text-[9px] font-medium leading-[1.45] text-white">
                  세브란스
                  <br />
                  치과대학병원
                  <br />
                  출신 대표원장
                </p>
              </div>

              {/* 2 */}
              <div className="px-1.5">
                <div className="mx-auto flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-white"
                  >
                    <path d="M8 3c-3 1-4 4-3 8 1 4 2 8 4 10 1-3 1-6 3-6s2 3 3 6c2-2 3-6 4-10 1-4 0-7-3-8-2-1-3 1-4 1s-2-2-4-1z" />
                  </svg>
                </div>

                <p className="mt-2.5 text-[9px] font-medium leading-[1.45] text-white">
                  자연치아
                  <br />
                  보존을 우선하는
                  <br />
                  정밀 진료
                </p>
              </div>

              {/* 3 */}
              <div className="px-1.5">
                <div className="mx-auto flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-white"
                  >
                    <path d="M8 3h8l1 4-2 2 2 2-2 2 1 8H8l1-8-2-2 2-2-2-2 1-4z" />
                  </svg>
                </div>

                <p className="mt-2.5 text-[9px] font-medium leading-[1.45] text-white">
                  임플란트·보철
                  <br />
                  사랑니 등
                  <br />
                  다양한 진료
                </p>
              </div>

              {/* 4 */}
              <div className="px-1.5">
                <div className="mx-auto flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-white"
                  >
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M9 10h6" />
                    <path d="M12 7v6" />
                  </svg>
                </div>

                <p className="mt-2.5 text-[9px] font-medium leading-[1.45] text-white">
                  대학병원
                  <br />
                  수준의
                  <br />
                  정밀 진단
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              OPENING INFO
          ========================================= */}
          <div className="bg-[#f8f9fa] px-5 py-5">
            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-5
                py-5
                shadow-sm
              "
            >
              {/* Date */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#173b61]
                    text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                    <path d="M9 15l2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#1b4776]">
                    정성을 다하는 진료로 평생 주치의가 되겠습니다.
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[21px]
                      font-extrabold
                      tracking-[-0.04em]
                      text-[#111]
                    "
                  >
                    2026년 11월 11일(수)
                    <span className="ml-1 text-[#1d4d83]">
                      OPEN
                    </span>
                  </p>
                </div>
              </div>

              <div className="my-4 h-px bg-gray-200" />

              {/* Details */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <div className="mt-0.5 shrink-0 text-[#1d4d83]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-[#111]">
                      오시는 길
                    </p>

                    <p className="mt-1 text-[11px] leading-[1.6] text-gray-600">
                      경기도 수원시 장안구 경수대로 969
                      <br />
                      <span className="font-semibold text-[#1d4d83]">
                        한국메디컬빌딩 2층
                      </span>
                    </p>
                  </div>
                </div>

                {/* Phone + Naver */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-2.5">
                    <div className="mt-0.5 shrink-0 text-[#1d4d83]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <path d="M4 4l4 4-2 3c2 4 4 6 8 8l3-2 4 4c-1 2-3 3-5 3C9 24 0 15 0 8c0-2 1-4 4-4z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[#111]">
                        전화 문의
                      </p>

                      <p className="mt-1 text-[11px] text-gray-600">
                        031.123.4567
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded
                        bg-[#03C75A]
                        text-[9px]
                        font-black
                        text-white
                      "
                    >
                      N
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[#111]">
                        네이버 예약
                      </p>

                      <p className="mt-1 text-[10px] leading-[1.5] text-gray-600">
                        편리하게
                        <br />
                        진료 예약
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              FOOTER
          ========================================= */}
          <div className="grid grid-cols-2 border-t border-white/10 bg-[#082847]">
            <button
              type="button"
              onClick={closeToday}
              className="
                flex
                h-[56px]
                items-center
                justify-center
                gap-2
                text-[11px]
                font-medium
                text-white/80
              "
            >
              <span className="h-4 w-4 border border-white/70" />
              오늘 하루 보지 않기
            </button>

            <button
              type="button"
              onClick={closePopup}
              className="
                h-[56px]
                border-l
                border-white/15
                text-[12px]
                font-semibold
                text-white
              "
            >
              닫기 ×
            </button>
          </div>
        </div>
      </div>
    </>
  );
};