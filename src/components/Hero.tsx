'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/loby.jpg',
    label: 'SPACE',
    caption: '약 100평 규모의 여유로운 진료 환경',
  },
  {
    image: '/images/clinic_room.jpg',
    label: 'CARE',
    caption: '체어 10대 이상의 진료 공간',
  },
  {
    image: '/images/digital_implant.jpg',
    label: 'DIAGNOSTIC',
    caption: '정밀 진단을 위한 디지털 시스템',
  },
];

const usp = [
  {
    eyebrow: 'MEDICAL STAFF',
    title: '연세대 치대 · 세브란스',
    detail: '연세대 치대 우등졸업 · 신촌세브란스 임상경험 · 前 2차 종합병원 치과과장',
  },
  {
    eyebrow: 'SPACE',
    title: '약 100평 · 체어 10대+',
    detail: '여유로운 진료공간과 상담공간을 갖춘 쾌적한 진료 환경',
  },
  {
    eyebrow: 'DIAGNOSTIC',
    title: '정밀 진단 시스템',
    detail: '세브란스 치과병원 동일 모델 장비를 포함한 디지털 진단 환경',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const goConsultation = () => {
    document
      .getElementById('consultation')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goDoctors = () => {
    document
      .getElementById('doctors')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-[#06182e] text-white">
      <div className="grid min-h-[760px] lg:min-h-[690px] lg:grid-cols-[1.02fr_0.98fr]">
        {/* LEFT */}
        <div className="relative z-20 flex items-center overflow-hidden px-5 pb-12 pt-28 md:px-10 lg:px-12 xl:px-20">
          {/* 세브란스병원 배경 - 왼쪽 텍스트 영역에만 적용 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Sev2018.jpg"
              alt=""
              fill
              priority
              aria-hidden="true"
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center opacity-55"
            />

            {/* 텍스트 가독성을 위한 딥 네이비 오버레이 */}
            <div className="absolute inset-0 bg-[#06182e]/38" />

            {/* 오른쪽 슬라이더 방향으로 자연스럽게 이어지는 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182e]/18 via-[#06182e]/24 to-[#06182e]/62" />

            {/* 하단 가독성 보강 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182e]/22 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[720px] lg:mx-0">
            <p className="text-[9px] font-bold tracking-[0.28em] text-[#7db9ff] md:text-[10px]">
              YONSEI · SEVERANCE · GENERAL HOSPITAL EXPERIENCE
            </p>

            <h1 className="mt-5 text-[38px] font-semibold leading-[1.18] tracking-[-0.055em] md:text-[54px] lg:text-[58px]">
              세브란스에서의
              <br />
              진료 기준,
              <br />
              <span className="text-[#8ec5ff]">
                종합병원에서 쌓은 경험.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-white/68 md:text-[17px]">
              연세대학교 치과대학을 졸업하고 신촌세브란스 치과대학병원과
              2차 종합병원에서 임상 경험을 쌓은 대표원장이
              직접 진료합니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={goConsultation}
                className="flex h-12 min-w-[150px] items-center justify-center rounded-xl bg-white px-5 text-[12px] font-bold text-[#071b33] transition hover:bg-[#eaf3ff]"
              >
                진료 상담하기
              </button>

              <button
                type="button"
                onClick={goDoctors}
                className="flex h-12 min-w-[150px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-5 text-[12px] font-bold text-white transition hover:bg-white/10"
              >
                의료진 자세히 보기
              </button>
            </div>

            {/* USP */}
            <div className="mt-9 grid gap-2.5 md:grid-cols-3">
              {usp.map((item) => (
                <div
                  key={item.eyebrow}
                  className="rounded-[14px] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md"
                >
                  <p className="text-[8px] font-bold tracking-[0.16em] text-[#7db9ff]">
                    {item.eyebrow}
                  </p>

                  <p className="mt-1.5 text-[13px] font-bold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-[10px] leading-[1.6] text-white/48">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative min-h-[360px] lg:min-h-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={[
                'absolute inset-0 transition-opacity duration-1000',
                current === index ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#06182e] via-[#06182e]/25 to-transparent lg:from-[#06182e]/65 lg:via-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182e]/65 via-transparent to-transparent" />
            </div>
          ))}

          {/* visual caption */}
          <div className="absolute bottom-6 left-5 right-5 z-10 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
            <div className="rounded-xl border border-white/15 bg-[#06182e]/55 px-4 py-3 backdrop-blur-md">
              <p className="text-[8px] font-bold tracking-[0.2em] text-[#8ec5ff]">
                {slides[current].label}
              </p>
              <p className="mt-1 text-[12px] font-semibold text-white md:text-[13px]">
                {slides[current].caption}
              </p>
            </div>

            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`${index + 1}번째 슬라이드`}
                  className={[
                    'h-[3px] rounded-full transition-all',
                    current === index
                      ? 'w-8 bg-white'
                      : 'w-3 bg-white/30',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;