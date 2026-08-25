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
      String(tomorrow),
    );

    closePopup();
  };

  const goToSection = (id: string) => {
    closePopup();

    window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="팝업 닫기"
        onClick={closePopup}
        className="fixed inset-0 z-[9998] bg-black/55 backdrop-blur-[2px]"
      />

      {/* POPUP */}
      <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div
          className="
            pointer-events-auto
            relative
            w-full
            max-w-[390px]
            overflow-hidden
            rounded-[20px]
            bg-white
            shadow-[0_28px_90px_rgba(0,0,0,0.35)]
          "
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="닫기"
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#071b33]/5
              text-[22px]
              font-light
              text-[#071b33]
              transition
              hover:bg-[#071b33]
              hover:text-white
            "
          >
            ×
          </button>

          {/* CONTENT */}
          <div className="px-6 pb-6 pt-7 md:px-7">
            <p className="pr-10 text-[9px] font-bold tracking-[0.28em] text-[#2f89fc]">
              SUWON SEVERANCE DENTAL
            </p>

            <div className="mt-4 inline-flex rounded-full bg-[#eef6ff] px-3 py-1.5">
              <span className="text-[10px] font-bold text-[#176fc2]">
                2026. 11. 11 OPEN
              </span>
            </div>

            <h2 className="mt-4 text-[27px] font-bold leading-[1.28] tracking-[-0.045em] text-[#071b33]">
              수원세브란스치과
              <br />
              새롭게 시작합니다.
            </h2>

            <p className="mt-3 text-[13px] font-semibold leading-[1.7] text-[#34506d]">
              연세대학교 치과대학 출신
              <br />
              대표원장이 직접 진료합니다.
            </p>

            {/* LOCATION */}
            <div className="mt-5 border-y border-gray-100 py-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f6fc] text-[#176fc2]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#071b33]">
                    경기도 수원시 장안구 경수대로 969
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-400">
                    한국메디컬빌딩 2층
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => goToSection('consultation')}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#071b33]
                  text-[11px]
                  font-bold
                  text-white
                  transition
                  hover:bg-[#12365d]
                "
              >
                간편 상담신청
              </button>

              <button
                type="button"
                onClick={() => goToSection('location')}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#dfe5ec]
                  bg-white
                  text-[11px]
                  font-bold
                  text-[#071b33]
                  transition
                  hover:border-[#2f89fc]
                  hover:text-[#176fc2]
                "
              >
                오시는 길
              </button>
            </div>
          </div>

          {/* FOOTER */}
          <div className="grid grid-cols-2 border-t border-gray-100 bg-[#fafbfd]">
            <button
              type="button"
              onClick={closeToday}
              className="h-11 text-[10px] font-medium text-gray-400 transition hover:text-[#071b33]"
            >
              오늘 하루 보지 않기
            </button>

            <button
              type="button"
              onClick={closePopup}
              className="border-l border-gray-100 h-11 text-[10px] font-semibold text-[#071b33]"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};