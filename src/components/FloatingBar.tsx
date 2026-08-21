'use client';

import Link from 'next/link';

const FloatingBar = () => {
  return (
    <>
      {/* =========================================================
          DESKTOP FLOATING BAR
          - 태블릿/PC에서만 표시
          - 팝업보다 낮은 z-index(z-40)
      ========================================================= */}
      <aside
        className="
          fixed
          right-5
          top-1/2
          z-40
          hidden
          -translate-y-1/2
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-gray-200/80
          bg-white/95
          shadow-[0_12px_40px_rgba(7,27,51,0.15)]
          backdrop-blur-md
          md:flex
        "
        aria-label="빠른 메뉴"
      >
        {/* 전화 문의 */}
        <a
          href="tel:0310000000"
          className="
            group
            flex
            h-[82px]
            w-[82px]
            flex-col
            items-center
            justify-center
            gap-2
            border-b
            border-gray-100
            text-[#071b33]
            transition-all
            duration-300
            hover:bg-[#071b33]
            hover:text-white
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <span className="text-[11px] font-semibold">
            전화문의
          </span>
        </a>

        {/* 네이버 예약 */}
        <Link
          href="https://booking.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            h-[82px]
            w-[82px]
            flex-col
            items-center
            justify-center
            gap-2
            border-b
            border-gray-100
            text-[#071b33]
            transition-all
            duration-300
            hover:bg-[#03C75A]
            hover:text-white
          "
        >
          <div
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-md
              bg-[#03C75A]
              text-[12px]
              font-black
              text-white
              transition-all
              group-hover:bg-white
              group-hover:text-[#03C75A]
            "
          >
            N
          </div>

          <span className="text-[11px] font-semibold">
            네이버예약
          </span>
        </Link>

        {/* 카카오 상담 */}
        <Link
          href="#"
          className="
            group
            flex
            h-[82px]
            w-[82px]
            flex-col
            items-center
            justify-center
            gap-2
            text-[#071b33]
            transition-all
            duration-300
            hover:bg-[#FEE500]
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M12 3C6.477 3 2 6.582 2 11c0 2.835 1.847 5.326 4.63 6.75L5.45 22l4.842-2.9c.556.067 1.126.1 1.708.1 5.523 0 10-3.582 10-8.2S17.523 3 12 3z" />
          </svg>

          <span className="text-[11px] font-semibold">
            카카오상담
          </span>
        </Link>
      </aside>

      {/* =========================================================
          MOBILE BOTTOM BAR
          - 모바일에서만 표시
          - 우측 Floating Bar는 모바일에서 완전히 제거
          - MainPopup(z-[9999])보다 낮은 z-40
      ========================================================= */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-40
          grid
          grid-cols-2
          border-t
          border-gray-200
          bg-white/95
          shadow-[0_-6px_25px_rgba(7,27,51,0.08)]
          backdrop-blur-xl
          md:hidden
        "
        aria-label="모바일 빠른 메뉴"
      >
        {/* 전화 */}
        <a
          href="tel:0310000000"
          className="
            flex
            h-[62px]
            items-center
            justify-center
            gap-2.5
            text-[13px]
            font-semibold
            text-[#071b33]
            transition
            active:bg-gray-100
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-[18px] w-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          전화 문의
        </a>

        {/* 네이버 예약 */}
        <Link
          href="https://booking.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-[62px]
            items-center
            justify-center
            gap-2.5
            bg-[#071b33]
            text-[13px]
            font-semibold
            text-white
            transition
            active:bg-[#0c2b50]
          "
        >
          <span
            className="
              flex
              h-[20px]
              w-[20px]
              items-center
              justify-center
              rounded
              bg-[#03C75A]
              text-[10px]
              font-black
              text-white
            "
          >
            N
          </span>

          네이버 예약
        </Link>
      </nav>

      {/*
        모바일 하단 고정바가 본문 마지막 내용을 가리는 것을 방지.
        필요 없다면 삭제해도 됨.
      */}
      <div className="h-[62px] md:hidden" />
    </>
  );
};

export default FloatingBar;