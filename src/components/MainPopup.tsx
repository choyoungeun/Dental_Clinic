'use client';

import { useEffect, useState } from 'react';

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
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-[3px]"
        onClick={closePopup}
      />

      {/* Popup Wrapper */}
      <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center px-3 py-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            pointer-events-auto
            relative
            w-full
            max-w-[420px]
            max-h-[calc(100dvh-24px)]
            overflow-y-auto
            bg-white
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          "
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="팝업 닫기"
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#082847]
              text-[26px]
              font-light
              text-white
              shadow-lg
              transition
              active:scale-95
            "
          >
            ×
          </button>

          {/* =========================================
              HERO
          ========================================== */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7f4ef] to-[#ebe6de] px-7 pb-8 pt-10">
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#173b61]">
              SUWON SEVERANCE DENTAL CLINIC
            </p>

            <h2 className="mt-5 text-[30px] font-bold leading-[1.25] tracking-[-0.04em] text-[#111]">
              수원세브란스치과
            </h2>

            <p className="mt-2 text-[38px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#0a2c50]">
              새롭게
              <br />
              개원합니다
            </p>

            <p className="mt-6 max-w-[300px] text-[14px] leading-[1.75] text-gray-700">
              세브란스 치과대학병원 출신 대표원장의
              풍부한 임상경험과 대학병원 수준의 진료로
              보답하겠습니다.
            </p>

            {/* Decorative Clinic Illustration */}
            <div className="mt-7 overflow-hidden rounded-xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
              <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
                <div className="flex min-h-[125px] flex-col justify-end rounded-lg bg-[#f1ede6] p-4">
                  <div className="h-2 w-12 rounded-full bg-white" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-white" />
                  <div className="mt-4 h-12 rounded-md bg-white shadow-sm" />
                </div>

                <div className="relative rounded-lg bg-[#e6e0d7]">
                  <div className="absolute bottom-4 left-4 right-4 h-9 rounded bg-white/90" />
                  <div className="absolute right-4 top-4 h-10 w-10 rounded-full border-4 border-[#173b61]/70" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              4 KEY POINTS
          ========================================== */}
          <div className="bg-[#082847] px-4 py-6">
            <div className="grid grid-cols-4 divide-x divide-white/15 text-center">
              {/* 1 */}
              <div className="px-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/70">
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

                <p className="mt-3 text-[10px] font-medium leading-[1.5] text-white">
                  세브란스
                  <br />
                  치과대학병원
                  <br />
                  출신 대표원장
                </p>
              </div>

              {/* 2 */}
              <div className="px-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M8 3c-3 1-4 4-3 8 1 4 2 8 4 10 1-3 1-6 3-6s2 3 3 6c2-2 3-6 4-10 1-4 0-7-3-8-2-1-3 1-4 1s-2-2-4-1z" />
                  </svg>
                </div>

                <p className="mt-3 text-[10px] font-medium leading-[1.5] text-white">
                  자연치아
                  <br />
                  보존을 우선하는
                  <br />
                  정밀 진료
                </p>
              </div>

              {/* 3 */}
              <div className="px-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M8 3h8l1 4-2 2 2 2-2 2 1 8H8l1-8-2-2 2-2-2-2 1-4z" />
                  </svg>
                </div>

                <p className="mt-3 text-[10px] font-medium leading-[1.5] text-white">
                  임플란트·보철
                  <br />
                  사랑니 등
                  <br />
                  다양한 진료
                </p>
              </div>

              {/* 4 */}
              <div className="px-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-8 w-8 text-white"
                  >
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M9 10h6" />
                    <path d="M12 7v6" />
                  </svg>
                </div>

                <p className="mt-3 text-[10px] font-medium leading-[1.5] text-white">
                  대학병원
                  <br />
                  수준의
                  <br />
                  정밀 진단
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              OPENING INFO
          ========================================== */}
          <div className="bg-[#f9fafb] px-6 py-7">
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173b61] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-7 w-7"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                    <path d="M9 15l2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-[#1b4776]">
                    정성을 다하는 진료로 여러분의 평생 주치의가 되겠습니다.
                  </p>

                  <p className="mt-2 text-[24px] font-extrabold tracking-[-0.04em] text-[#111]">
                    2026년 11월 11일(수)
                    <span className="ml-1 text-[#1d4d83]">
                      개원
                    </span>
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-gray-200" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Address */}
                <div className="flex gap-3 sm:block">
                  <div className="shrink-0 text-[#1d4d83]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                    </svg>
                  </div>

                  <div className="sm:mt-2">
                    <p className="text-[12px] font-bold text-[#111]">
                      오시는 길
                    </p>

                    <p className="mt-1 text-[12px] leading-[1.6] text-gray-600">
                      경기도 수원시 권선구
                      <br />
                      경수대로 969
                      <br />
                      <span className="font-semibold text-[#1d4d83]">
                        메디컬빌딩 2층
                      </span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 sm:block">
                  <div className="shrink-0 text-[#1d4d83]">
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

                  <div className="sm:mt-2">
                    <p className="text-[12px] font-bold text-[#111]">
                      전화 문의
                    </p>

                    <p className="mt-1 text-[12px] text-gray-600">
                      031.123.4567
                    </p>
                  </div>
                </div>

                {/* Naver */}
                <div className="flex gap-3 sm:block">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#03C75A] text-[10px] font-black text-white">
                    N
                  </div>

                  <div className="sm:mt-2">
                    <p className="text-[12px] font-bold text-[#111]">
                      네이버 예약
                    </p>

                    <p className="mt-1 text-[12px] leading-[1.6] text-gray-600">
                      편리한 네이버 예약으로
                      진료 예약을 도와드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              FOOTER
          ========================================== */}
          <div className="grid grid-cols-2 border-t border-white/10 bg-[#082847]">
            <button
              type="button"
              onClick={closeToday}
              className="flex h-[58px] items-center justify-center gap-2 text-[12px] font-medium text-white/80"
            >
              <span className="h-4 w-4 border border-white/70" />
              오늘 하루 보지 않기
            </button>

            <button
              type="button"
              onClick={closePopup}
              className="h-[58px] border-l border-white/15 text-[13px] font-semibold text-white"
            >
              닫기 ×
            </button>
          </div>
        </div>
      </div>
    </>
  );
};