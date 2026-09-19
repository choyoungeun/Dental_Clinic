'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import AuthModal from './AuthModal';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

/* =========================================================
   임상증례
   - 대표원장이 개원 전 근무한 종합병원에서 진료하고, 환자 동의를 받은 사례
   - 구성 원칙: 전·후 파노라마가 모두 있으면 파노라마, 없으면 입안 사진 전·후
   - 사진은 public/images/cases/ 의 4:3 캔버스 (환자 식별 정보 제거)
   - 출혈이 보이는 사진은 흑백으로 변환했습니다.
   - marks 의 x, y, w, h 는 사진 크기에 대한 % (원의 중심 · 크기)
   - ★ 표시 위치와 설명 문구는 게시 전에 원장님이 직접 확인해 주세요.
   - 사진을 바꿀 때는 파일 이름을 바꿔 주세요. (브라우저·이미지 캐시 방지)
========================================================= */

type Mark = { n: number; x: number; y: number; w: number; h: number };

type Point = { n: number; text: string };

type CategoryKey = 'implant' | 'prosth' | 'trauma';

type Photo = { src: string; label: string; marks: Mark[] };

type CaseItem = {
  id: string;
  category: CategoryKey;
  title: string;
  before: Photo;
  after: Photo;
  points: Point[];
  /** 실제 값이 확인되면 입력하세요. 예: '약 6개월' */
  period?: string;
  sessions?: string;
};

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'implant', label: '임플란트' },
  { key: 'prosth', label: '보철' },
  { key: 'trauma', label: '외상치료' },
];

const P = '/images/cases';

const clinicalCases: CaseItem[] = [
  {
    id: 'implant-upper-molar',
    category: 'implant',
    title: '상악 큰어금니 발치 즉시 임플란트',
    before: {
      src: `/api/cases/implant-before-v3.jpg`,
      label: '치료 전 파노라마',
      marks: [{ n: 1, x: 30, y: 43, w: 14, h: 17 }],
    },
    after: {
      src: `${P}/implant-after-v3.jpg`,
      label: '치료 후 파노라마',
      marks: [{ n: 1, x: 33.5, y: 39, w: 9, h: 15 }],
    },
    points: [{ n: 1, text: '임플란트 식립 부위' }],
  },
  {
    id: 'prosth-anterior',
    category: 'prosth',
    title: '앞니 보철 재제작',
    before: {
      src: `/api/cases/prosth-before-v2.jpg`,
      label: '치료 전',
      marks: [
        { n: 1, x: 47.5, y: 41, w: 90, h: 30 },
        { n: 2, x: 13, y: 31, w: 16, h: 10 },
        { n: 2, x: 83, y: 32, w: 14, h: 10 },
      ],
    },
    after: {
      src: `${P}/prosth-after-v2.jpg`,
      label: '치료 후',
      marks: [
        { n: 1, x: 49, y: 30, w: 94, h: 32 },
        { n: 2, x: 49, y: 14, w: 90, h: 12 },
      ],
    },
    points: [
      { n: 1, text: '보철물 재제작' },
      { n: 2, text: '잇몸선 경계' },
    ],
  },
  {
    id: 'trauma-1',
    category: 'trauma',
    title: '외상으로 손상된 앞니 봉합 · 고정',
    before: {
      src: `/api/cases/trauma-1-before-v2.jpg`,
      label: '내원 당시 (흑백)',
      marks: [
        { n: 1, x: 55, y: 62, w: 46, h: 42 },
        { n: 2, x: 55, y: 27, w: 52, h: 28 },
      ],
    },
    after: {
      src: `${P}/trauma-1-after-v2.jpg`,
      label: '치료 후 (흑백)',
      marks: [
        { n: 1, x: 48, y: 49, w: 90, h: 26 },
        { n: 2, x: 22, y: 17, w: 40, h: 26 },
      ],
    },
    points: [
      { n: 1, text: '앞니 고정' },
      { n: 2, text: '잇몸 봉합' },
    ],
  },
  {
    id: 'trauma-2',
    category: 'trauma',
    title: '외상 후 흔들리는 앞니 고정',
    before: {
      src: `/api/cases/trauma-2-before-v2.jpg`,
      label: '내원 당시 (흑백)',
      marks: [
        { n: 1, x: 49, y: 47, w: 74, h: 56 },
        { n: 2, x: 45, y: 10, w: 30, h: 18 },
      ],
    },
    after: {
      src: `${P}/trauma-2-after-v2.jpg`,
      label: '치료 후 (흑백)',
      marks: [
        { n: 1, x: 50, y: 36, w: 100, h: 18 },
        { n: 2, x: 50, y: 15, w: 26, h: 18 },
      ],
    },
    points: [
      { n: 1, text: '앞니 고정' },
      { n: 2, text: '상처 부위' },
    ],
  },
];

/* 투명 워터마크 (캡처 억제용) — 사진 전체에 반복 */
const WATERMARK = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='170'><text x='150' y='88' text-anchor='middle' transform='rotate(-24 150 88)' font-family='Malgun Gothic, Apple SD Gothic Neo, Noto Sans KR, sans-serif' font-size='26' font-weight='700' fill='white' fill-opacity='0.34' stroke='black' stroke-opacity='0.2' stroke-width='0.9' paint-order='stroke'>수원세브란스치과</text></svg>`,
)}")`;

/* 사진 + 표시(원·번호) + 워터마크 */
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
}) => (
  <figure
    className="relative aspect-[4/3] select-none overflow-hidden bg-[#0b1220]"
    onContextMenu={(event) => event.preventDefault()}
  >
    {locked ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0b1220] px-6 text-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8ec5ff" strokeWidth="1.8" className="h-10 w-10">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
        </svg>
        <p className="text-[15px] font-semibold leading-[1.6] text-white/85 md:text-[16px]">
          치료 전 사진은
          <br />
          로그인 후 확인할 수 있습니다
        </p>
        <button
          type="button"
          onClick={onUnlock}
          className="mt-1 rounded-lg bg-[#2f89fc] px-5 py-2.5 text-[15px] font-extrabold text-white transition hover:bg-[#176fc2]"
        >
          치료 전 사진 확인하기
        </button>
      </div>
    ) : (
      <>
        {photo.src.startsWith('/api/') ? (
          // 로그인한 회원에게만 내려주는 사진이라 next/image 최적화를 거치지 않습니다.
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
            sizes="(max-width: 768px) 100vw, 480px"
            className="pointer-events-none object-cover"
          />
        )}

        {/* 워터마크 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{ backgroundImage: WATERMARK, backgroundSize: '300px 170px' }}
        />

        {photo.marks.map((mark, index) => (
          <span
            key={`${mark.n}-${index}`}
            aria-hidden="true"
            className="pointer-events-none absolute z-10 rounded-full border-[3px] border-[#ff5a4e] shadow-[0_0_0_2px_rgba(0,0,0,0.35)]"
            style={{
              left: `${mark.x - mark.w / 2}%`,
              top: `${mark.y - mark.h / 2}%`,
              width: `${mark.w}%`,
              height: `${mark.h}%`,
            }}
          >
            <span className="absolute -left-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5a4e] text-[12px] font-extrabold text-white shadow">
              {mark.n}
            </span>
          </span>
        ))}
      </>
    )}

    <span
      className={`absolute left-3 top-3 z-20 rounded px-2.5 py-1 text-[13px] font-bold text-white ${
        tone === 'before' ? 'bg-[#071b33]/90' : 'bg-[#2f89fc]'
      }`}
    >
      {photo.label}
    </span>
  </figure>
);

export const ClinicalCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [gateOpen, setGateOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = clinicalCases.length;
  const currentCase = clinicalCases[currentIndex];
  const currentCategory = categories.find((item) => item.key === currentCase.category)!;

  const goTo = (index: number) => setCurrentIndex((index + total) % total);

  // 로그인 상태 확인
  useEffect(() => {
    let cancelled = false;

    fetch('/api/auth/me', { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((result) => {
        if (!cancelled && result?.user) setUser(result.user);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isHovered || gateOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 12000);

    return () => clearInterval(interval);
  }, [isHovered, gateOpen, total]);

  const handleAuthSuccess = (loggedIn: { name: string }) => {
    setUser(loggedIn);
    setGateOpen(false);
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => undefined);
    setUser(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) goTo(currentIndex + 1);
    if (distance < -50) goTo(currentIndex - 1);

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const selectCategory = (key: CategoryKey) => {
    const index = clinicalCases.findIndex((item) => item.category === key);
    if (index >= 0) goTo(index);
  };

  return (
    <section id="clinical-cases" className="scroll-mt-24 overflow-hidden bg-[#f5f7fa] py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-7 text-center md:mb-10">
          <Reveal variant="fade">
            <span className="block text-[14px] font-bold tracking-[0.3em] text-[#2f89fc]">
              CLINICAL CASES
            </span>
          </Reveal>

          <TextReveal
            delay={120}
            className="mt-3 text-[40px] font-extrabold leading-[1.25] tracking-[-0.04em] text-[#071b33] md:text-[56px]"
            lines={['임상증례']}
          />

          <Reveal variant="soft" delay={350}>
            <p className="mt-4 text-[17px] font-medium text-gray-500 md:text-[20px]">
              치료 전 · 후 사진으로 확인하세요
            </p>
          </Reveal>
        </div>

        {/* Category tabs */}
        <Reveal variant="soft" delay={150}>
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = category.key === currentCase.category;

              return (
                <button
                  type="button"
                  key={category.key}
                  onClick={() => selectCategory(category.key)}
                  aria-pressed={active}
                  className={[
                    'rounded-full border-2 px-6 py-2.5 text-[16px] font-bold transition',
                    active
                      ? 'border-[#071b33] bg-[#071b33] text-white'
                      : 'border-[#d5dde7] bg-white text-[#344a61] hover:border-[#2f89fc] hover:text-[#176fc2]',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {user && (
          <div className="mb-3 flex items-center justify-end gap-3 text-[14px] text-gray-500">
            <span>
              <strong className="text-[#071b33]">{user.name}</strong>님으로 로그인 중
            </span>
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-[#d5dde7] bg-white px-3 py-1 text-[13px] font-semibold text-[#344a61] transition hover:border-[#2f89fc] hover:text-[#2f89fc]"
            >
              로그아웃
            </button>
          </div>
        )}

        {/* Card */}
        <Reveal variant="soft" delay={250}>
          <div
            className="relative overflow-hidden rounded-2xl border border-[#e3e9f0] bg-white shadow-[0_10px_30px_rgba(7,27,51,0.06)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Title */}
            <div className="flex items-start justify-between gap-4 px-5 pb-4 pt-5 md:px-8 md:pt-6">
              <div>
                <p className="text-[14px] font-extrabold tracking-[0.08em] text-[#2f89fc]">
                  CASE {String(currentIndex + 1).padStart(2, '0')} · {currentCategory.label}
                </p>
                <h3 className="mt-1.5 text-[24px] font-extrabold leading-[1.35] tracking-[-0.03em] text-[#071b33] md:text-[30px]">
                  {currentCase.title}
                </h3>
              </div>

              <div className="shrink-0 pt-1 text-[14px] font-semibold tracking-[0.1em] text-gray-400">
                {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-1 gap-px bg-gray-200 md:grid-cols-2">
              <AnnotatedPhoto
                key={`${currentCase.id}-b-${user ? 'in' : 'out'}`}
                photo={currentCase.before}
                tone="before"
                locked={!user}
                onUnlock={() => setGateOpen(true)}
              />
              <AnnotatedPhoto
                key={`${currentCase.id}-a`}
                photo={currentCase.after}
                tone="after"
                locked={false}
                onUnlock={() => setGateOpen(true)}
              />
            </div>

            {/* 표시 설명 */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 px-5 py-4 md:px-8">
              {currentCase.points.map((point) => (
                <span
                  key={point.n}
                  className="flex items-center gap-2 text-[15px] font-bold text-[#1c2f45] md:text-[17px]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff5a4e] text-[13px] font-extrabold text-white">
                    {point.n}
                  </span>
                  {point.text}
                </span>
              ))}

              {(currentCase.period || currentCase.sessions) && (
                <span className="text-[13px] text-gray-500">
                  {currentCase.period && <>치료 기간 {currentCase.period}</>}
                  {currentCase.period && currentCase.sessions && ' · '}
                  {currentCase.sessions && <>내원 {currentCase.sessions}</>}
                </span>
              )}
            </div>

            {/* 이전 / 다음 */}
            <div className="flex items-center justify-end gap-2 border-t border-gray-100 px-5 py-3 md:px-8">
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                aria-label="이전 증례"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d5dde7] text-xl text-[#344a61] transition hover:border-[#2f89fc] hover:text-[#2f89fc]"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                aria-label="다음 증례"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d5dde7] text-xl text-[#344a61] transition hover:border-[#2f89fc] hover:text-[#2f89fc]"
              >
                ›
              </button>
            </div>
          </div>
        </Reveal>

        {/* 안내 문구 : 사진 아래 */}
        <Reveal variant="soft" delay={100}>
          <div className="mt-5 space-y-2 rounded-xl border border-[#e3e9f0] bg-white px-5 py-4 text-[12px] leading-[1.75] text-gray-500 md:px-6 md:text-[13px]">
            <p>
              본 페이지에 소개된 증례는 환자의 개인정보 보호를 위해 개인을 식별할 수 있는 정보를 제외하였으며,
              환자의 사전 동의를 받아 치료 과정의 일부를 소개하고 있습니다.
            </p>
            <p>
              치료 방법과 치료 기간은 환자의 구강 상태, 치아 및 치조골 상태, 전신질환 등 개인별 조건에 따라 달라질 수 있으며,
              동일한 치료를 시행하더라도 치료 결과에는 차이가 있을 수 있습니다.
            </p>
            <p>
              모든 치료에는 통증, 부종, 출혈, 감염 및 기타 예측하기 어려운 부작용이 발생할 가능성이 있으며,
              실제 치료 여부와 방법은 충분한 검사와 의료진의 진단 후 결정됩니다.
            </p>
            <p>
              본 증례는 특정 치료 결과를 보장하거나 모든 환자에게 동일한 치료 결과가 나타남을 의미하지 않습니다.
            </p>
          </div>
        </Reveal>
      </div>

      {gateOpen && <AuthModal onSuccess={handleAuthSuccess} onClose={() => setGateOpen(false)} />}
    </section>
  );
};
