'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import AuthModal from './AuthModal';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

/* =========================================================
   TYPES
========================================================= */

type Mark = {
  n: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Point = {
  n: number;
  text: string;
};

type CategoryKey = 'implant' | 'prosth' | 'trauma';

type Photo = {
  src: string;
  label: string;
  marks: Mark[];
};

type CaseItem = {
  id: string;
  category: CategoryKey;
  title: string;
  treatment: string;
  before: Photo;
  after: Photo;
  points: Point[];
  period?: string;
  sessions?: string;
};

/* =========================================================
   CATEGORY
========================================================= */

const categories: {
  key: CategoryKey;
  label: string;
  eng: string;
}[] = [
  {
    key: 'implant',
    label: '임플란트',
    eng: 'IMPLANT',
  },
  {
    key: 'prosth',
    label: '보철치료',
    eng: 'PROSTHODONTICS',
  },
  {
    key: 'trauma',
    label: '외상치료',
    eng: 'TRAUMA',
  },
];

/* =========================================================
   CASE DATA
========================================================= */

const P = '/images/cases';

const clinicalCases: CaseItem[] = [
  {
    id: 'implant-upper-molar',
    category: 'implant',
    title: '상악 큰어금니 발치 즉시 임플란트',
    treatment: '발치와 같은 시기에 임플란트를 식립한 증례입니다.',

    before: {
      src: '/api/cases/implant-before-v3.jpg',
      label: '치료 전 파노라마',
      marks: [
        {
          n: 1,
          x: 30,
          y: 43,
          w: 14,
          h: 17,
        },
      ],
    },

    after: {
      src: `${P}/implant-after-v3.jpg`,
      label: '치료 후 파노라마',
      marks: [
        {
          n: 1,
          x: 33.5,
          y: 39,
          w: 9,
          h: 15,
        },
      ],
    },

    points: [
      {
        n: 1,
        text: '임플란트 식립 부위',
      },
    ],
  },

  {
    id: 'prosth-anterior',
    category: 'prosth',
    title: '앞니 보철 재제작',
    treatment: '기존 앞니 보철물을 다시 제작한 증례입니다.',

    before: {
      src: '/api/cases/prosth-before-v2.jpg',
      label: '치료 전',
      marks: [
        {
          n: 1,
          x: 47.5,
          y: 41,
          w: 90,
          h: 30,
        },
        {
          n: 2,
          x: 13,
          y: 31,
          w: 16,
          h: 10,
        },
        {
          n: 2,
          x: 83,
          y: 32,
          w: 14,
          h: 10,
        },
      ],
    },

    after: {
      src: `${P}/prosth-after-v2.jpg`,
      label: '치료 후',
      marks: [
        {
          n: 1,
          x: 49,
          y: 30,
          w: 94,
          h: 32,
        },
        {
          n: 2,
          x: 49,
          y: 14,
          w: 90,
          h: 12,
        },
      ],
    },

    points: [
      {
        n: 1,
        text: '보철물 재제작',
      },
      {
        n: 2,
        text: '잇몸선 경계',
      },
    ],
  },

  {
    id: 'trauma-1',
    category: 'trauma',
    title: '외상으로 손상된 앞니 봉합 · 고정',
    treatment: '외상으로 손상된 앞니를 고정하고 잇몸을 봉합한 증례입니다.',

    before: {
      src: '/api/cases/trauma-1-before-v2.jpg',
      label: '내원 당시 · 흑백',
      marks: [
        {
          n: 1,
          x: 55,
          y: 62,
          w: 46,
          h: 42,
        },
        {
          n: 2,
          x: 55,
          y: 27,
          w: 52,
          h: 28,
        },
      ],
    },

    after: {
      src: `${P}/trauma-1-after-v2.jpg`,
      label: '치료 후 · 흑백',
      marks: [
        {
          n: 1,
          x: 48,
          y: 49,
          w: 90,
          h: 26,
        },
        {
          n: 2,
          x: 22,
          y: 17,
          w: 40,
          h: 26,
        },
      ],
    },

    points: [
      {
        n: 1,
        text: '앞니 고정',
      },
      {
        n: 2,
        text: '잇몸 봉합',
      },
    ],
  },

  {
    id: 'trauma-2',
    category: 'trauma',
    title: '외상 후 흔들리는 앞니 고정',
    treatment: '외상 이후 흔들림이 있었던 앞니를 고정한 증례입니다.',

    before: {
      src: '/api/cases/trauma-2-before-v2.jpg',
      label: '내원 당시 · 흑백',
      marks: [
        {
          n: 1,
          x: 49,
          y: 47,
          w: 74,
          h: 56,
        },
        {
          n: 2,
          x: 45,
          y: 10,
          w: 30,
          h: 18,
        },
      ],
    },

    after: {
      src: `${P}/trauma-2-after-v2.jpg`,
      label: '치료 후 · 흑백',
      marks: [
        {
          n: 1,
          x: 50,
          y: 36,
          w: 100,
          h: 18,
        },
        {
          n: 2,
          x: 50,
          y: 15,
          w: 26,
          h: 18,
        },
      ],
    },

    points: [
      {
        n: 1,
        text: '앞니 고정',
      },
      {
        n: 2,
        text: '상처 부위',
      },
    ],
  },
];

/* =========================================================
   WATERMARK
========================================================= */

const WATERMARK = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='170'>
    <text
      x='150'
      y='88'
      text-anchor='middle'
      transform='rotate(-24 150 88)'
      font-family='Malgun Gothic, Apple SD Gothic Neo, Noto Sans KR, sans-serif'
      font-size='26'
      font-weight='700'
      fill='white'
      fill-opacity='0.34'
      stroke='black'
      stroke-opacity='0.2'
      stroke-width='0.9'
      paint-order='stroke'
    >
      수원세브란스치과
    </text>
  </svg>`,
)}")`;

/* =========================================================
   PHOTO COMPONENT
========================================================= */

const AnnotatedPhoto = ({
  photo,
  tone,
  locked,
  onUnlock,
}: {
  photo: Photo;
  tone: 'before' | 'after';
  locked: boolean;
  onUnlock: () => void;
}) => {
  return (
    <figure
      className="relative aspect-[4/3] select-none overflow-hidden bg-[#071321]"
      onContextMenu={(event) => event.preventDefault()}
    >
      {locked ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#071321] px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5 text-[#8ec5ff]"
            >
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
            </svg>
          </div>

          <p className="mt-4 text-[15px] font-semibold leading-[1.65] text-white/90">
            치료 전 사진은
            <br />
            로그인 후 확인할 수 있습니다.
          </p>

          <button
            type="button"
            onClick={onUnlock}
            className="mt-5 border-b border-[#8ec5ff] pb-1 text-[13px] font-semibold text-[#8ec5ff]"
          >
            사진 확인하기 →
          </button>
        </div>
      ) : (
        <>
          {photo.src.startsWith('/api/') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo.src}
              alt={`${photo.label} 사진`}
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={photo.src}
              alt={`${photo.label} 사진`}
              fill
              draggable={false}
              sizes="(max-width: 768px) 100vw, 600px"
              className="pointer-events-none object-cover"
            />
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{
              backgroundImage: WATERMARK,
              backgroundSize: '300px 170px',
            }}
          />

          {photo.marks.map((mark, index) => (
            <span
              key={`${mark.n}-${index}`}
              aria-hidden="true"
              className="pointer-events-none absolute z-10 rounded-full border-2 border-[#ff5a4e] shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
              style={{
                left: `${mark.x - mark.w / 2}%`,
                top: `${mark.y - mark.h / 2}%`,
                width: `${mark.w}%`,
                height: `${mark.h}%`,
              }}
            >
              <span className="absolute -left-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5a4e] text-[11px] font-bold text-white">
                {mark.n}
              </span>
            </span>
          ))}
        </>
      )}

      <span
        className={[
          'absolute left-4 top-4 z-20 px-3 py-1.5 text-[11px] font-bold tracking-[0.06em] text-white',
          tone === 'before' ? 'bg-[#071b33]/90' : 'bg-[#176fc2]/95',
        ].join(' ')}
      >
        {photo.label}
      </span>
    </figure>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export const ClinicalCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [gateOpen, setGateOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = clinicalCases.length;
  const currentCase = clinicalCases[currentIndex];

  const currentCategory = categories.find(
    (item) => item.key === currentCase.category,
  );

  const goTo = (index: number) => {
    setCurrentIndex((index + total) % total);
  };

  /* =========================================================
     LOGIN STATUS
  ========================================================= */

  useEffect(() => {
    let cancelled = false;

    fetch('/api/auth/me', {
      cache: 'no-store',
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((result) => {
        if (!cancelled && result?.user) {
          setUser(result.user);
        }
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isHovered || gateOpen) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 12000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isHovered, gateOpen, total]);

  /* =========================================================
     AUTH
  ========================================================= */

  const handleAuthSuccess = (loggedIn: { name: string }) => {
    setUser(loggedIn);
    setGateOpen(false);
  };

  const logout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    }).catch(() => undefined);

    setUser(null);
  };

  /* =========================================================
     MOBILE SWIPE
  ========================================================= */

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      goTo(currentIndex + 1);
    }

    if (distance < -50) {
      goTo(currentIndex - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* =========================================================
     CATEGORY
  ========================================================= */

  const selectCategory = (key: CategoryKey) => {
    const index = clinicalCases.findIndex((item) => item.category === key);

    if (index >= 0) {
      goTo(index);
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      id="clinical-cases"
      className="scroll-mt-24 overflow-hidden bg-[#f4f7fa] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Reveal variant="fade">
              <p className="text-[12px] font-bold tracking-[0.28em] text-[#2f89fc]">
                CLINICAL CASES
              </p>
            </Reveal>

            <TextReveal
              delay={120}
              className="mt-4 break-keep text-4xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#071b33] md:text-5xl lg:text-6xl"
              lines={['실제 진료 과정을', '증례로 확인합니다.']}
            />
          </div>

          <Reveal variant="soft" delay={220} className="lg:pb-2">
            <p className="break-keep text-[16px] leading-[1.85] text-[#5f7080] md:text-[17px]">
              대표원장이 개원 전 진료한 증례 중
              환자의 동의를 받은 사례를 비식별 처리해 소개합니다.
            </p>
          </Reveal>
        </div>

        {/* Category */}
        <Reveal variant="soft" delay={250} className="mt-10">
          <div className="flex flex-wrap border-y border-[#071b33]/15">
            {categories.map((category) => {
              const active = category.key === currentCase.category;

              return (
                <button
                  type="button"
                  key={category.key}
                  onClick={() => selectCategory(category.key)}
                  aria-pressed={active}
                  className={[
                    'relative min-w-[120px] flex-1 border-r border-[#071b33]/10 px-4 py-4 text-left transition-colors last:border-r-0 md:px-6',
                    active
                      ? 'bg-[#071b33] text-white'
                      : 'bg-transparent text-[#071b33] hover:bg-white',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'block text-[9px] font-bold tracking-[0.18em]',
                      active ? 'text-[#8ec5ff]' : 'text-[#2f89fc]',
                    ].join(' ')}
                  >
                    {category.eng}
                  </span>

                  <span className="mt-1 block text-[14px] font-semibold md:text-[15px]">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Login state */}
        {user && (
          <div className="mt-4 flex items-center justify-end gap-3 text-[12px] text-gray-500">
            <span>
              <strong className="font-semibold text-[#071b33]">
                {user.name}
              </strong>
              님 로그인
            </span>

            <button
              type="button"
              onClick={logout}
              className="border-b border-gray-400 text-[11px]"
            >
              로그아웃
            </button>
          </div>
        )}

        {/* Case */}
        <Reveal variant="soft" delay={300} className="mt-6">
          <article
            className="overflow-hidden bg-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Case information */}
            <div className="grid border-b border-[#071b33]/10 lg:grid-cols-[360px_1fr]">
              <div className="bg-[#071b33] px-6 py-7 text-white md:px-8 md:py-8">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                    CASE {String(currentIndex + 1).padStart(2, '0')}
                  </p>

                  <p className="text-[11px] text-white/40">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(total).padStart(2, '0')}
                  </p>
                </div>

                <p className="mt-10 text-[11px] font-semibold text-[#8ec5ff]">
                  {currentCategory?.label}
                </p>

                <h3 className="mt-2 break-keep text-[27px] font-semibold leading-[1.4] tracking-[-0.035em] md:text-[31px]">
                  {currentCase.title}
                </h3>
              </div>

              <div className="px-6 py-7 md:px-9 md:py-8">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#2f89fc]">
                  TREATMENT
                </p>

                <p className="mt-3 max-w-2xl break-keep text-[18px] font-medium leading-[1.75] tracking-[-0.02em] text-[#263b50] md:text-[20px]">
                  {currentCase.treatment}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#071b33]/10 pt-5">
                  {currentCase.points.map((point) => (
                    <div
                      key={point.n}
                      className="flex items-center gap-2"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5a4e] text-[10px] font-bold text-white">
                        {point.n}
                      </span>

                      <span className="text-[13px] font-medium text-[#536577] md:text-[14px]">
                        {point.text}
                      </span>
                    </div>
                  ))}

                  {(currentCase.period || currentCase.sessions) && (
                    <div className="text-[12px] text-gray-400">
                      {currentCase.period && (
                        <span>치료기간 {currentCase.period}</span>
                      )}

                      {currentCase.period && currentCase.sessions && (
                        <span> · </span>
                      )}

                      {currentCase.sessions && (
                        <span>내원 {currentCase.sessions}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="grid gap-px bg-[#dfe5ec] md:grid-cols-2">
              <AnnotatedPhoto
                key={`${currentCase.id}-before-${user ? 'logged' : 'locked'}`}
                photo={currentCase.before}
                tone="before"
                locked={!user}
                onUnlock={() => setGateOpen(true)}
              />

              <AnnotatedPhoto
                key={`${currentCase.id}-after`}
                photo={currentCase.after}
                tone="after"
                locked={false}
                onUnlock={() => setGateOpen(true)}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between border-t border-[#071b33]/10 px-5 py-4 md:px-8">
              <p className="hidden text-[11px] leading-[1.5] text-gray-400 sm:block">
                치료 결과는 환자의 상태에 따라 다를 수 있습니다.
              </p>

              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(currentIndex - 1)}
                  aria-label="이전 증례"
                  className="flex h-10 w-10 items-center justify-center border border-[#ccd5df] text-lg text-[#344a61] transition hover:border-[#071b33] hover:bg-[#071b33] hover:text-white"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => goTo(currentIndex + 1)}
                  aria-label="다음 증례"
                  className="flex h-10 w-10 items-center justify-center border border-[#ccd5df] text-lg text-[#344a61] transition hover:border-[#071b33] hover:bg-[#071b33] hover:text-white"
                >
                  →
                </button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Notice */}
        <Reveal variant="soft" delay={100}>
          <div className="mt-6 border-t border-[#071b33]/15 pt-5 text-[11px] leading-[1.8] text-[#7b8793] md:text-[12px]">
            <p>
              본 페이지에 소개된 증례는 환자의 사전 동의를 받아 개인을
              식별할 수 있는 정보를 제외한 후 소개하고 있습니다.
            </p>

            <p className="mt-1.5">
              치료 방법과 기간, 치료 결과는 구강 상태, 치아·치조골 상태,
              전신질환 등 개인별 조건에 따라 달라질 수 있습니다.
            </p>

            <p className="mt-1.5">
              모든 치료에는 통증, 부종, 출혈, 감염 및 기타 예측하기 어려운
              부작용이 발생할 가능성이 있으며, 본 증례는 동일한 결과를
              보장하지 않습니다.
            </p>
          </div>
        </Reveal>
      </div>

      {gateOpen && (
        <AuthModal
          onSuccess={handleAuthSuccess}
          onClose={() => setGateOpen(false)}
        />
      )}
    </section>
  );
};