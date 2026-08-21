'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export const MainPopup = () => {
  const [open, setOpen] = useState(true);

  // 팝업이 열려 있을 때 모바일 화면 스크롤 방지
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* 전체 Overlay
          floating bar보다 무조건 위 */}
      <div
        className="
          fixed inset-0
          z-[9998]
          bg-black/55
          backdrop-blur-[2px]
        "
        onClick={() => setOpen(false)}
      />

      {/* Popup Wrapper */}
      <div
        className="
          fixed inset-0
          z-[9999]
          flex
          items-center
          justify-center
          px-4
          py-6
          pointer-events-none
        "
      >
        <div
          className="
            pointer-events-auto
            relative

            w-full
            max-w-[420px]

            max-h-[calc(100dvh-48px)]

            overflow-y-auto
            overscroll-contain

            bg-white
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]

            animate-popup-enter
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼
              모바일 우측 Floating Bar와 겹치지 않도록
              바깥으로 빼지 않고 내부 inset 처리 */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="팝업 닫기"
            className="
              absolute
              right-3
              top-3
              z-[10001]

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full
              bg-[#071b33]/90

              text-xl
              font-light
              text-white

              shadow-lg
              backdrop-blur-md

              transition
              hover:bg-[#071b33]

              active:scale-95
            "
          >
            ×
          </button>

          {/* Popup Image */}
          <div className="relative aspect-[4/5] w-full bg-gray-100">
            <Image
              src="/images/popup.jpg"
              alt="수원세브란스치과 안내"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Bottom Controls */}
          <div
            className="
              flex
              items-center
              justify-between

              border-t
              border-gray-100

              bg-white
              px-5
              py-4
            "
          >
            <button
              type="button"
              className="
                text-[12px]
                font-medium
                text-gray-400

                transition-colors
                hover:text-gray-700
              "
              onClick={() => setOpen(false)}
            >
              오늘 하루 보지 않기
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                text-[13px]
                font-semibold
                text-[#071b33]
              "
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};