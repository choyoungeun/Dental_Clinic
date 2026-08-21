'use client';

import { useEffect, useRef, useState } from 'react';

const BrandStorySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="brand-story"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-28 md:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#2f89fc]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            visible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm'
          }`}
        >
          <p className="mb-8 text-[10px] font-bold tracking-[0.32em] text-[#2f89fc] md:text-[11px]">
            CLINICAL EXPERIENCE
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.35] tracking-[-0.04em] text-[#071b33] md:text-6xl">
            경험이 많아질수록
            <br />
            치료는 더 신중해졌습니다.
          </h2>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-24">
          {/* Left */}
          <div
            className={`space-y-10 text-[16px] leading-[1.95] text-gray-500 transition-all delay-200 duration-1000 md:text-[18px] ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p>
              세브란스 치과대학병원에서
              <br className="hidden md:block" />
              진단과 치료계획의 기본을 배웠습니다.
            </p>

            <p>
              이후 종합병원 치과 과장으로 근무하며
              <br className="hidden md:block" />
              다양한 환자와 복잡한 치료 상황을 경험했습니다.
            </p>

            <p>
              단순히 많은 치료를 경험하는 것보다,
              <br className="hidden md:block" />
              어떤 치료가 필요한지를 판단하는 과정이
              더 중요하다는 것을 배웠습니다.
            </p>
          </div>

          {/* Right */}
          <div
            className={`transition-all delay-500 duration-1000 ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-2xl font-medium leading-[1.7] tracking-[-0.02em] text-[#071b33] md:text-3xl">
              수많은 케이스가 남긴 것은
              <br />
              자신감보다
              <span className="text-[#2f89fc]">
                {' '}
                판단의 기준
              </span>
              이었습니다.
            </p>

            <div className="mt-10 h-px w-16 bg-[#2f89fc]" />

            <p className="mt-10 text-[15px] leading-[1.95] text-gray-500 md:text-[17px]">
              치료해야 할 때와 조금 더 지켜봐도 될 때,
              살릴 수 있는 치아와 다른 치료가 필요한 치아를
              신중하게 구분하는 것.
            </p>

            <p className="mt-7 text-[17px] font-semibold leading-relaxed text-[#071b33] md:text-[19px]">
              그것이 경험의 차이라고 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;