import Hero from '@/components/Hero';
import FloatingBar from '@/components/FloatingBar';
import AffiliationsCarousel from '@/components/AffiliationsCarousel';
import BrandStorySection from '@/components/BrandStorySection';
import BrandPrinciples from '@/components/BrandPrinciples';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Contact from '@/components/Contact';

import { ClinicalCasesSection } from '@/components/ClinicalCasesSection';
import { MainPopup } from '@/components/MainPopup';
import { EquipmentSection } from '@/components/EquipmentSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainPopup />

      <FloatingBar />

      {/* 01. BRAND PROMISE */}
      <Hero />

      {/* 02. 교육 · 임상경험 · 학술활동 자동 슬라이드 */}
      <AffiliationsCarousel />

      {/* 03. 진료 영역 */}
      <Services />

      {/* 04. 진료 기준 */}
      <BrandStorySection />

      {/* 05. 병원이 지키는 세 가지 원칙 */}
      <BrandPrinciples />

      {/* 06. 임상 경험 */}
      <ClinicalCasesSection />

      {/* 07. 진료 장비 */}
      <EquipmentSection />

      {/* 08. 의료진 */}
      <Doctors />

      {/* 09. 오시는 길 */}
      <Contact />

      {/* 10. FINAL BRAND MESSAGE - YONSEI LAUREL */}
<section className="relative overflow-hidden bg-white px-5 py-14 text-center md:py-20">


  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f89fc]/[0.025] blur-3xl" />

  <div className="relative z-10 mx-auto max-w-5xl">


    {/* LAUREL AREA */}
    <div className="mx-auto mt-7 flex items-center justify-center">

      {/* LEFT LAUREL */}
      <svg
        viewBox="0 0 120 220"
        className="h-[150px] w-[72px] shrink-0 text-[#0b3b72] md:h-[210px] md:w-[105px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M96 205C47 174 24 127 28 72C30 47 40 26 55 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.32"
        />

        <g fill="currentColor">
          <ellipse cx="55" cy="24" rx="8" ry="18" transform="rotate(34 55 24)" />
          <ellipse cx="43" cy="43" rx="8" ry="18" transform="rotate(48 43 43)" />
          <ellipse cx="35" cy="65" rx="8" ry="18" transform="rotate(60 35 65)" />
          <ellipse cx="31" cy="89" rx="8" ry="18" transform="rotate(72 31 89)" />
          <ellipse cx="32" cy="114" rx="8" ry="18" transform="rotate(85 32 114)" />
          <ellipse cx="38" cy="139" rx="8" ry="18" transform="rotate(102 38 139)" />
          <ellipse cx="49" cy="162" rx="8" ry="18" transform="rotate(116 49 162)" />
          <ellipse cx="65" cy="182" rx="8" ry="18" transform="rotate(130 65 182)" />
          <ellipse cx="83" cy="198" rx="8" ry="18" transform="rotate(142 83 198)" />
        </g>
      </svg>


      {/* CENTER */}
      <div className="mx-1 flex min-w-0 flex-col items-center md:mx-6">

        {/* Yonsei Mark */}
        <div
          className="
            relative
            flex
            h-[90px]
            w-[90px]
            items-center
            justify-center
            rounded-full
            border
            border-[#0b3b72]/10
            bg-white
            shadow-[0_8px_30px_rgba(7,27,51,0.08)]

            md:h-[96px]
            md:w-[96px]
          "
        >
          <img
            src="/images/yonsei.png"
            alt="연세대학교"
            className="h-[80px] w-[80px] object-contain md:h-[90px] md:w-[90px]"
          />
        </div>

        {/* 작은 강조 */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-6 bg-[#2f89fc]/50 md:w-10" />

          <span className="text-[9px] font-bold tracking-[0.22em] text-[#2f89fc] md:text-[10px]">
            YONSEI TRAINED
          </span>

          <span className="h-px w-6 bg-[#2f89fc]/50 md:w-10" />
        </div>

        {/* MAIN */}
        <h2
          className="
            mt-4
            text-[27px]
            font-semibold
            leading-[1.35]
            tracking-[-0.045em]
            text-[#071b33]

            md:text-[44px]
          "
        >
          연세대학교 치과대학 출신
          <br />

          <span className="font-bold">
            대표원장이 직접 진료합니다.
          </span>
        </h2>

        

      </div>


      {/* RIGHT LAUREL */}
      <svg
        viewBox="0 0 120 220"
        className="h-[150px] w-[72px] shrink-0 -scale-x-100 text-[#0b3b72] md:h-[210px] md:w-[105px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M96 205C47 174 24 127 28 72C30 47 40 26 55 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.32"
        />

        <g fill="currentColor">
          <ellipse cx="55" cy="24" rx="8" ry="18" transform="rotate(34 55 24)" />
          <ellipse cx="43" cy="43" rx="8" ry="18" transform="rotate(48 43 43)" />
          <ellipse cx="35" cy="65" rx="8" ry="18" transform="rotate(60 35 65)" />
          <ellipse cx="31" cy="89" rx="8" ry="18" transform="rotate(72 31 89)" />
          <ellipse cx="32" cy="114" rx="8" ry="18" transform="rotate(85 32 114)" />
          <ellipse cx="38" cy="139" rx="8" ry="18" transform="rotate(102 38 139)" />
          <ellipse cx="49" cy="162" rx="8" ry="18" transform="rotate(116 49 162)" />
          <ellipse cx="65" cy="182" rx="8" ry="18" transform="rotate(130 65 182)" />
          <ellipse cx="83" cy="198" rx="8" ry="18" transform="rotate(142 83 198)" />
        </g>
      </svg>

    </div>


    {/* BOTTOM MESSAGE */}
    <div className="mx-auto mt-4 max-w-2xl border-t border-[#071b33]/10 pt-6">
      <p className="text-[13px] leading-[1.8] text-gray-500 md:text-[15px]">
        대학병원에서 배운 진료의 기준을 바탕으로
        <br className="hidden md:block" />
        한 분 한 분의 치료 계획을 신중하게 세웁니다.
      </p>

      <p className="mt-4 text-[10px] font-bold tracking-[0.28em] text-[#071b33]/40">
        SUWON SEVERANCE DENTAL CLINIC
      </p>
    </div>

  </div>
</section>
    </main>
  );
}