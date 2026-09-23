'use client';

import { useState } from 'react';

import { KAKAO_OPENCHAT_URL, NAVER_BLOG_URL } from './clinicLinks';

const PHONE = '031-000-0000'; // TODO: 실제 대표번호로 교체
const NAVER_RESERVATION_URL = 'https://booking.naver.com/'; // TODO: 실제 네이버 예약 URL로 교체

/* 네 칸 공통 스타일 */
const ITEM = 'flex flex-col items-center justify-center gap-1 px-1';
const ICON = 'h-5 w-5 md:h-6 md:w-6';
const LABEL =
  'break-keep text-center text-[14px] font-semibold leading-tight tracking-[-0.02em] md:text-[15px]';

const FloatingBar = () => {
  /* 열기/닫기 : 닫으면 아래로 내려가고 탭만 남음 */
  const [open, setOpen] = useState(true);

  return (
    <div
      className={[
        'fixed bottom-0 left-0 right-0 z-[90]',
        'md:bottom-5 md:left-1/2 md:right-auto md:w-[720px] md:-translate-x-1/2',
        'transition-transform duration-300 ease-out motion-reduce:transition-none',
        open ? 'translate-y-0' : 'translate-y-full md:translate-y-[calc(100%+1.25rem)]',
      ].join(' ')}
    >
      {/* 숨김 / 열기 탭 */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="floating-bar-menu"
        className="absolute bottom-full right-4 flex h-9 items-center gap-1.5 rounded-t-card border border-b-0 border-line bg-white px-3.5 text-[14px] font-semibold text-ink shadow-float transition-colors duration-200 hover:text-navy md:right-0"
      >
        {open ? '숨김' : '상담 메뉴'}
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={[
            'h-4 w-4 transition-transform duration-300 motion-reduce:transition-none',
            open ? '' : 'rotate-180',
          ].join(' ')}
          aria-hidden="true"
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
      </button>

      <div
        id="floating-bar-menu"
        inert={!open}
        className="grid h-[68px] grid-cols-4 overflow-hidden border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-float md:h-[72px] md:rounded-card md:border md:pb-0"
      >
        <a
          href={`tel:${PHONE.replaceAll('-', '')}`}
          className={`${ITEM} text-ink transition-colors duration-200 hover:bg-fog`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className={`${ICON} text-navy`}
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className={LABEL}>
            전화상담
          </span>
        </a>

        <a
          href={NAVER_RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ITEM} bg-[#03C75A] text-white transition hover:brightness-95`}
        >
          <span
            aria-hidden="true"
            className={`${ICON} flex items-center justify-center rounded-[3px] bg-white text-[12px] font-black leading-none text-[#03C75A] md:text-[14px]`}
          >
            N
          </span>
          <span className={LABEL}>
            네이버 예약하기
          </span>
        </a>

        <a
          href={KAKAO_OPENCHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ITEM} bg-[#FEE500] text-[#191919] transition hover:brightness-95`}
        >
          {/* 카카오톡 말풍선 아이콘 */}
          <svg
            viewBox="0 0 24 24"
            className={ICON}
            aria-hidden="true"
          >
            <path
              fill="#191919"
              d="M12 3C6.48 3 2 6.54 2 10.9c0 2.8 1.86 5.27 4.66 6.67l-.95 3.5c-.08.3.26.54.52.37l4.17-2.77c.52.07 1.05.11 1.6.11 5.52 0 10-3.54 10-7.88S17.52 3 12 3Z"
            />
          </svg>
          <span className={LABEL}>
            카카오톡상담
          </span>
        </a>

        <a
          href={NAVER_BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ITEM} border-l border-line text-ink transition-colors duration-200 hover:bg-fog`}
        >
          {/* 네이버 블로그 아이콘 : 초록 말풍선 + blog */}
          <svg
            viewBox="0 0 24 24"
            className={ICON}
            aria-hidden="true"
          >
            <path
              fill="#03C75A"
              d="M4 2h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.2L12 21.5 9.2 18H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"
            />
            <text
              x="12"
              y="12.6"
              textAnchor="middle"
              fill="#fff"
              fontSize="7.2"
              fontWeight="800"
              fontFamily="Arial, Helvetica, sans-serif"
              letterSpacing="-0.2"
            >
              blog
            </text>
          </svg>
          <span className={LABEL}>
            원장 블로그
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingBar;
