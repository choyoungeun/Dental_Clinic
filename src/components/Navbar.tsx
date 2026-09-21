'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Language = 'ko' | 'en' | 'zh';

const CLINIC_PHONE = '031-000-0000'; // TODO: 실제 대표번호로 교체

const languages: {
  code: Language;
  googleCode: string;
  short: string;
  label: string;
}[] = [
  {
    code: 'ko',
    googleCode: 'ko',
    short: 'KO',
    label: '한국어',
  },
  {
    code: 'en',
    googleCode: 'en',
    short: 'EN',
    label: 'English',
  },
  {
    code: 'zh',
    googleCode: 'zh-CN',
    short: '中文',
    label: '中文',
  },
];

const menuItems = [
  { name: '병원소개', href: '/#brand-story' },
  { name: '의료진소개', href: '/#doctors' },
  { name: '진료과목', href: '/#services' },
  { name: '치과 둘러보기', href: '/#interior' },
  { name: '오시는 길', href: '/#location' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

/* =========================================================
   GOOGLE TRANSLATE HELPERS
   Next.js에서 select 강제 조작보다 안정적인 쿠키 방식
========================================================= */

const getGoogleTranslateValue = (language: Language) => {
  if (language === 'en') return '/ko/en';
  if (language === 'zh') return '/ko/zh-CN';
  return '';
};

const setGoogleTranslateCookie = (language: Language) => {
  const value = getGoogleTranslateValue(language);

  /*
    한국어로 돌아갈 때는 기존 Google Translate 쿠키 삭제
  */
  if (language === 'ko') {
    document.cookie =
      'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax';

    /*
      브라우저에 따라 Google 번역 쿠키가 서브도메인 기준으로
      생성되는 경우까지 정리
    */
    if (
      window.location.hostname &&
      window.location.hostname !== 'localhost'
    ) {
      document.cookie =
        `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
    }

    return;
  }

  const maxAge = 60 * 60 * 24 * 365;

  document.cookie =
    `googtrans=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;

  if (
    window.location.hostname &&
    window.location.hostname !== 'localhost'
  ) {
    document.cookie =
      `googtrans=${value}; path=/; domain=${window.location.hostname}; max-age=${maxAge}; SameSite=Lax`;
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [language, setLanguage] =
    useState<Language>('ko');

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const languageRef =
    useRef<HTMLDivElement>(null);

  /* =========================================================
     GOOGLE TRANSLATE INITIALIZATION
  ========================================================= */

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem(
        'site-language',
      ) as Language | null) ?? 'ko';

    if (
      savedLanguage === 'ko' ||
      savedLanguage === 'en' ||
      savedLanguage === 'zh'
    ) {
      setLanguage(savedLanguage);
    }

    window.googleTranslateElementInit = () => {
      const googleWindow = window as typeof window & {
        google?: {
          translate?: {
            TranslateElement?: new (
              options: {
                pageLanguage: string;
                includedLanguages: string;
                autoDisplay: boolean;
              },
              elementId: string,
            ) => unknown;
          };
        };
      };

      const TranslateElement =
        googleWindow.google?.translate?.TranslateElement;

      const holder =
        document.getElementById(
          'google_translate_element',
        );

      if (
        TranslateElement &&
        holder &&
        holder.childNodes.length === 0
      ) {
        new TranslateElement(
          {
            pageLanguage: 'ko',
            includedLanguages:
              'ko,en,zh-CN',
            autoDisplay: false,
          },
          'google_translate_element',
        );
      }
    };

    /*
      이미 로드된 경우 중복 삽입하지 않음
    */
    if (
      !document.getElementById(
        'google-translate-script',
      )
    ) {
      const script =
        document.createElement('script');

      script.id =
        'google-translate-script';

      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

      script.async = true;

      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }
  }, []);

  /* =========================================================
     OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent,
    ) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(
          event.target as Node,
        )
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      );
    };
  }, []);

  /* =========================================================
     LANGUAGE CHANGE
  ========================================================= */

  const changeLanguage = (
    nextLanguage: Language,
  ) => {
    setLanguage(nextLanguage);
    setLanguageOpen(false);
    setIsOpen(false);

    localStorage.setItem(
      'site-language',
      nextLanguage,
    );

    document.documentElement.lang =
      nextLanguage === 'zh'
        ? 'zh-CN'
        : nextLanguage;

    /*
      Google Translate는 쿠키를 읽고 페이지 로드 시 번역합니다.
      select를 억지로 조작하지 않고 쿠키 설정 후 새로고침하는
      방식이 Next.js에서 훨씬 안정적입니다.
    */
    setGoogleTranslateCookie(
      nextLanguage,
    );

    window.location.reload();
  };

  const currentLanguage =
    languages.find(
      (item) =>
        item.code === language,
    ) ?? languages[0];

  return (
    <>
      {/* =====================================================
          GOOGLE TRANSLATE
          화면에는 노출하지 않고 번역 엔진으로만 사용
      ====================================================== */}
      <div
        id="google_translate_element"
        className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      />

      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#001d4a] px-4 py-3 shadow-lg md:px-6 md:py-4">

        <div className="mx-auto flex max-w-[1500px] items-center">

          {/* =================================================
              1. 로고 영역
              기존 디자인 그대로 유지
          ================================================== */}
          <Link
            href="/"
            translate="no"
            className="group mr-4 flex shrink-0 items-center gap-3"
          >
            <div className="relative h-10 w-10 opacity-90 brightness-0 invert md:h-11 md:w-11">
              <Image
                src="/images/yonsei.png"
                alt="연세대학교 마크"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="mb-1 whitespace-nowrap text-[1.15rem] font-black leading-none tracking-tight text-white md:text-[1.4rem]">
                수원
                <span className="text-[#4da3ff]">
                  세브란스
                </span>
                치과의원
              </span>

              <span className="text-[9px] font-bold uppercase leading-none tracking-[0.12em] text-[#ffffffaa] md:text-[10px]">
                Suwon Severance Dental Clinic
              </span>
            </div>
          </Link>

          {/* =================================================
              2. 중앙 메뉴
              치과 둘러보기 추가
          ================================================== */}
          <div className="hidden flex-1 items-center justify-center xl:flex">
            <div className="flex space-x-4 xl:space-x-8 2xl:space-x-11">

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative whitespace-nowrap text-[15px] font-bold tracking-tight text-[#ffffffcc] transition-colors hover:text-white xl:text-[16px] 2xl:text-[17px]"
                >
                  {item.name}

                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#4da3ff] transition-all group-hover:w-full" />
                </Link>
              ))}

            </div>
          </div>

          {/* =================================================
              3. 우측 기능
              전화 + 언어 + 기존 예약 버튼
          ================================================== */}
          <div className="ml-4 hidden shrink-0 items-center gap-2.5 xl:flex">

            {/* PHONE */}
            <a
              translate="no"
              href={`tel:${CLINIC_PHONE.replaceAll(
                '-',
                '',
              )}`}
              className="group flex items-center gap-2 border-l border-white/10 pl-3 xl:pl-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#4da3ff] transition group-hover:bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.14em] text-white/50">
                  TEL
                </p>

                <p className="mt-[1px] whitespace-nowrap text-[19px] font-black leading-none tracking-[0.01em] text-white">
                  {CLINIC_PHONE}
                </p>
              </div>
            </a>

            {/* LANGUAGE */}
            <div
              ref={languageRef}
              translate="no"
              className="relative"
            >
              <button
                type="button"
                onClick={() =>
                  setLanguageOpen(
                    (prev) => !prev,
                  )
                }
                aria-label="언어 선택"
                aria-expanded={
                  languageOpen
                }
                className="flex h-[42px] min-w-[72px] items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-[11px] font-black text-white transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 text-[#4da3ff]"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                  <path d="M3 12h18" />
                  <path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21" />
                  <path d="M12 3C9 6 7.5 9 7.5 12S9 18 12 21" />
                </svg>

                <span>
                  {currentLanguage.short}
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={[
                    'h-3 w-3 text-white/60 transition-transform',
                    languageOpen
                      ? 'rotate-180'
                      : '',
                  ].join(' ')}
                >
                  <path d="m5 7 5 5 5-5H5Z" />
                </svg>
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] w-[150px] overflow-hidden rounded-xl border border-[#dfe5ec] bg-white py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">

                  {languages.map(
                    (item) => {
                      const active =
                        language ===
                        item.code;

                      return (
                        <button
                          key={
                            item.code
                          }
                          type="button"
                          onClick={() =>
                            changeLanguage(
                              item.code,
                            )
                          }
                          className={[
                            'flex h-10 w-full items-center justify-between px-4 text-left text-[11px] font-bold transition',
                            active
                              ? 'bg-[#eef5ff] text-[#176fc2]'
                              : 'text-[#32465a] hover:bg-[#f7f9fc]',
                          ].join(' ')}
                        >
                          <span>
                            {item.label}
                          </span>

                          <span className="text-[9px] opacity-50">
                            {
                              item.short
                            }
                          </span>
                        </button>
                      );
                    },
                  )}

                </div>
              )}
            </div>

            {/* 기존 예약 버튼 */}
            <Link
              translate="no"
              href="https://booking.naver.com/your-clinic-link"
              className="whitespace-nowrap rounded-full bg-[#2f89fc] px-5 py-2.5 text-[14px] font-black text-white shadow-md transition-all hover:bg-blue-600 active:scale-95 xl:px-6 xl:text-[15px]"
            >
              예약하기
            </Link>

          </div>

          {/* =================================================
              MOBILE
          ================================================== */}
          <div className="ml-auto flex items-center gap-2 xl:hidden">

            <a
              translate="no"
              href={`tel:${CLINIC_PHONE.replaceAll('-', '')}`}
              aria-label="전화 연결"
              className="flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-white sm:px-4"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 shrink-0 text-[#4da3ff]"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>

              {/* 아주 좁은 화면은 아래 전화 띠에서 크게 보여주므로 여기서는 아이콘만 */}
              <span className="hidden whitespace-nowrap text-[18px] font-black leading-none sm:inline">
                {CLINIC_PHONE}
              </span>
            </a>

            <button
              type="button"
              className="p-1 text-white"
              onClick={() =>
                setIsOpen(!isOpen)
              }
              aria-label="메뉴 열기"
              aria-expanded={isOpen}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* 아주 좁은 화면: 전화번호를 크게 */}
        <a
          translate="no"
          href={`tel:${CLINIC_PHONE.replaceAll('-', '')}`}
          className="mt-3 flex h-11 items-center justify-center gap-2 rounded-full bg-white/10 text-[20px] font-black text-white sm:hidden"
        >
          <span className="text-[13px] font-bold tracking-[0.12em] text-[#4da3ff]">TEL</span>
          {CLINIC_PHONE}
        </a>

        {/* =================================================
            MOBILE MENU
        ================================================== */}
        {isOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 absolute left-0 top-full flex w-full flex-col border-t border-white/10 bg-[#001d4a] pb-7 text-center shadow-2xl duration-200 xl:hidden">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-white/5 py-4 text-[17px] font-bold text-white"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                {item.name}
              </Link>
            ))}

            {/* LANGUAGE */}
            <div
              translate="no"
              className="px-6 pt-5"
            >
              <p className="mb-2 text-left text-[9px] font-bold tracking-[0.18em] text-[#4da3ff]">
                LANGUAGE
              </p>

              <div className="grid grid-cols-3 gap-2">

                {languages.map(
                  (item) => {
                    const active =
                      language ===
                      item.code;

                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() =>
                          changeLanguage(
                            item.code,
                          )
                        }
                        className={[
                          'h-11 rounded-lg border text-[11px] font-black transition',
                          active
                            ? 'border-white bg-white text-[#001d4a]'
                            : 'border-white/10 bg-white/5 text-white/75',
                        ].join(' ')}
                      >
                        {item.label}
                      </button>
                    );
                  },
                )}

              </div>
            </div>

            {/* PHONE */}
            <div
              translate="no"
              className="px-6 pt-4"
            >
              <a
                href={`tel:${CLINIC_PHONE.replaceAll(
                  '-',
                  '',
                )}`}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-[19px] font-black text-white"
              >
                <span className="text-[#4da3ff]">
                  TEL
                </span>

                {CLINIC_PHONE}
              </a>
            </div>

            {/* NAVER RESERVATION */}
            <div
              translate="no"
              className="px-6 pt-3"
            >
              <Link
                href="https://booking.naver.com"
                className="block w-full rounded-full bg-[#2f89fc] py-3.5 text-[16px] font-black text-white shadow-lg"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                네이버 예약하기
              </Link>
            </div>

          </div>
        )}
      </nav>

      {/* =====================================================
          GOOGLE TRANSLATE UI 숨기기
      ====================================================== */}
      <style>{`
        #google_translate_element {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .goog-te-banner-frame,
        .goog-te-banner-frame.skiptranslate,
        iframe.goog-te-banner-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        .goog-tooltip,
        .goog-tooltip:hover {
          display: none !important;
        }

        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }

        .VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }

        html {
          top: 0 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;